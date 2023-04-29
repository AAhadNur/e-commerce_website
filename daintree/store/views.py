from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib import messages
from django.db.models import Q
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
import json
import datetime

from .models import *
from .utils import cartData, guestOrder

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

    context = {'page':page}
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

    context = {'form':form}
    return render(request, 'store/login_register.html', context)



def store(request):
    q = request.GET.get('q') if request.GET.get('q') != None else ''

    categories = Category.objects.all()

    data = cartData(request)

    cartItems = data['cartItems']

    products = Product.objects.filter(
        Q(category__name__icontains=q) |
        Q(name__icontains=q) |
        Q(description__icontains=q)
        )

    context = {'products':products, 'cartItems':cartItems, 'categories':categories}
    return render(request, 'store/store.html', context)


def individualProduct(request, pk):
    categories = Category.objects.all()

    data = cartData(request)

    cartItems = data['cartItems']
    product = Product.objects.get(id=pk)
    reviews = product.review_set.all()

    if request.method == "POST":
        review = Review.objects.create(
            customer = request.user.customer, 
            product = product,
            body = request.POST.get('body')
        )
        return redirect('product', pk=product.id)
    

    context = {'product':product, 'cartItems':cartItems, 'categories':categories, 'reviews':reviews}
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
    
    context = {'items':items, 'order':order, 'cartItems':cartItems}
    return render(request, 'store/cart.html', context)



def checkout(request):

    data = cartData(request)

    cartItems = data['cartItems']
    order = data['order']
    items = data['items']
    
    context = {'items':items, 'order':order, 'cartItems':cartItems}

    return render(request, 'store/checkout.html', context)



def updateItem(request):
    data = json.loads(request.body)
    productID = data['productID']
    action = data['action']
    print('ProductID :', productID)
    print('Action :', action)

    customer = request.user.customer
    product = Product.objects.get(id=productID)
    order, created = Order.objects.get_or_create(customer=customer, complete=False)
    orderItem, created = OrderItem.objects.get_or_create(order=order, product=product)

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
        order, created = Order.objects.get_or_create(customer=customer, complete=False)

    else:
        customer, order = guestOrder(request, data)

    total = float(data['form']['total'])
    order.transaction_id = transaction_id

    if total == order.get_cart_total:
        order.complete = True
    order.save()

    if order.shipping == True:
        ShippingAddress.objects.create(
            customer = customer,
            order = order,
            address = data['shipping']['address'],
            city = data['shipping']['city'],
            state = data['shipping']['state'],
            zipcode = data['shipping']['zipcode'],
        )

    return JsonResponse('Payment complete!', safe=False)
