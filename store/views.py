from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib import messages
from django.db.models import Q
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.core.paginator import Paginator
from sslcommerz_lib import SSLCOMMERZ
import json
import datetime

from .models import *
from .utils import cartData, guestOrder
from daintree.settings import SSL_STORE_ID, SSL_STORE_PASSWOED, SSL_VERIFY_KEY, SSL_VERIFY_SIGN, SSL_VERIFY_SIGN_SHA, SSL_VAL_ID

# Create your views here.


def loginPage(request):
    page = 'login'

    if request.method == "POST":
        username = request.POST.get('username').lower()
        password = request.POST.get('password')

        try:
            user = User.objects.get(username=username)
        except:
            messages.error(request, 'User does not exist.')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('store')
        else:
            messages.error(request, 'Username or Password is incorrect.')

    context = {'page': page}
    return render(request, 'store/login.html', context)


def logoutUser(request):
    logout(request)
    return redirect('store')


def registerUser(request):
    form = UserCreationForm()

    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.username = user.username.lower()
            user.save()
            customer, created = Customer.objects.get_or_create(user=user)
            login(request, user)
            return redirect('store')
        else:
            messages.error(request, 'An error occured during registration.')

    context = {'form': form}
    return render(request, 'store/login_register.html', context)


def store(request):
    q = request.GET.get('q') if request.GET.get('q') != None else ''

    categories = Category.objects.all()

    data = cartData(request)

    cartItems = data['cartItems']

    p = Paginator(
        Product.objects.filter(
            Q(category__name__icontains=q) |
            Q(name__icontains=q) |
            Q(description__icontains=q)
        ), 6
    )
    page = request.GET.get('page')
    products = p.get_page(page)

    context = {'products': products,
               'cartItems': cartItems, 'categories': categories}
    return render(request, 'store/store.html', context)


def individualProduct(request, pk):
    categories = Category.objects.all()

    data = cartData(request)

    cartItems = data['cartItems']
    product = Product.objects.get(id=pk)
    reviews = product.review.all()

    if request.method == "POST":
        review = Review.objects.create(
            customer=request.user.customer,
            product=product,
            body=request.POST.get('body')
        )
        return redirect('product', pk=product.id)

    context = {'product': product, 'cartItems': cartItems,
               'categories': categories, 'reviews': reviews}
    return render(request, 'store/product.html', context)


@login_required(login_url='login')
def deleteReview(request, pk):
    review = Review.objects.get(id=pk)

    if request.user.customer != review.customer:
        return HttpResponse('Your are not allowed here!!')

    if request.method == 'POST':
        review.delete()
        return redirect('store')
    return render(request, 'store/delete.html', {'obj': review})


def cart(request):

    data = cartData(request)

    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items': items, 'order': order, 'cartItems': cartItems}
    return render(request, 'store/cart.html', context)


def checkout(request):

    data = cartData(request)

    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    context = {'items': items, 'order': order, 'cartItems': cartItems}

    return render(request, 'store/checkout.html', context)


def updateItem(request):
    data = json.loads(request.body)
    productID = data['productID']
    action = data['action']

    customer = request.user.customer
    product = Product.objects.get(id=productID)
    order, created = Order.objects.get_or_create(
        customer=customer, complete=False)
    orderItem, created = OrderItem.objects.get_or_create(
        order=order, product=product)

    if action == 'add':
        orderItem.quantity = (orderItem.quantity + 1)
    elif action == 'remove':
        orderItem.quantity = (orderItem.quantity - 1)

    orderItem.save()

    if orderItem.quantity <= 0:
        orderItem.delete()

    return JsonResponse('Item was added', safe=False)


def processOrder(request):
    transaction_id = datetime.datetime.now().timestamp()
    data = json.loads(request.body)

    if request.user.is_authenticated:
        customer = request.user.customer
        order, created = Order.objects.get_or_create(
            customer=customer, complete=False)

    else:
        customer, order = guestOrder(request, data)

    total = float(data['form']['total'])
    order.transaction_id = transaction_id

    if total == order.get_cart_total:
        order.complete = True
        if request.user.is_authenticated:
            OrderHistory.objects.create(
                customer=request.user.customer,
                order=order
            )
    order.save()

    if order.shipping == True:
        ShippingAddress.objects.create(
            customer=customer,
            order=order,
            address=data['shipping']['address'],
            city=data['shipping']['city'],
            state=data['shipping']['state'],
            zipcode=data['shipping']['zipcode'],
        )

    return JsonResponse('Payment complete!', safe=False)


def profile(request, pk):

    data = cartData(request)

    cartItems = data['cartItems']
    order = data['order']
    items = data['items']

    customer = Customer.objects.get(id=pk)
    history = customer.history.all()

    for h in history:
        print(h.order.get_cart_total)

    context = {
        'cartItems': cartItems,
        'order': order,
        'items': items,
        'history': history,
    }
    return render(request, 'store/profile.html', context)


def ssl_payment(request, pk):
    credentials = {'store_id': SSL_STORE_ID,
                   'store_pass': SSL_STORE_PASSWOED, 'issandbox': True}
    sslcz = SSLCOMMERZ(credentials)

    order = Order.objects.get(id=pk)

    post_body = {}

    post_body['verify_sign'] = SSL_VERIFY_SIGN
    post_body['verify_key'] = SSL_VERIFY_KEY
    post_body['verify_sign_sha2'] = SSL_VERIFY_SIGN_SHA
    post_body['val_id'] = SSL_VAL_ID
    post_body['total_amount'] = order.get_cart_total
    post_body['num_of_item'] = order.get_cart_items
    post_body['cus_name'] = order.customer.name
    post_body['cus_email'] = order.customer.email
    post_body['cus_phone'] = "01700000000"
    post_body['cus_add1'] = "Nabinbagh"
    post_body['cus_city'] = "Dhaka"
    post_body['cus_country'] = "Bangladesh"
    post_body['currency'] = "BDT"
    post_body['tran_id'] = "12345"
    post_body['success_url'] = "/profile/"
    post_body['fail_url'] = "/store/"
    post_body['cancel_url'] = "/cart/"
    post_body['emi_option'] = 0
    post_body['shipping_method'] = "NO"
    post_body['multi_card_name'] = ""
    post_body['product_name'] = "Test"
    post_body['product_category'] = "Test Category"
    post_body['product_profile'] = "general"

    # if sslcz.hash_validate_ipn(post_body):
    #     response = sslcz.validationTransactionOrder(post_body['val_id'])
    #     print(response)
    #     messages.success(request, "Thanks for shopping!!!")
    # else:
    #     messages.error(request, "An unexpected error occured.")
    response = sslcz.createSession(post_body)
    print(response)
    return redirect('store')
