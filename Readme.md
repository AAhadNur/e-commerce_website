    /$$$$$$$            /$$             /$$
    | $$__  $$          |__/            | $$
    | $$  \ $$  /$$$$$$  /$$ /$$$$$$$  /$$$$$$    /$$$$$$   /$$$$$$   /$$$$$$
    | $$  | $$ |____  $$| $$| $$__  $$|_  $$_/   /$$__  $$ /$$__  $$ /$$__  $$
    | $$  | $$  /$$$$$$$| $$| $$  \ $$  | $$    | $$  \__/| $$$$$$$$| $$$$$$$$
    | $$  | $$ /$$__  $$| $$| $$  | $$  | $$ /$$| $$      | $$_____/| $$_____/
    | $$$$$$$/|  $$$$$$$| $$| $$  | $$  |  $$$$/| $$      |  $$$$$$$|  $$$$$$$
    |_______/  \_______/|__/|__/  |__/   \___/  |__/       \_______/ \_______/

# Daintree ( e-commerce platform )

An e-commerce platform developed with Django and Django Rest Framework, providing a smooth shopping experience for users. Features include user registration and login, product browsing, cart management, secure checkout with PayPal integration and SSL, and order history tracking in customer profiles. Even guest users can shop hassle-free. Also, product lists and details can be fetched with REST APIs.

## Table of Contents

- [Overview](#overview)
- [Project Installation](#project-installation)
  - [Environment Variable](#configure-the-env-file)
  - [SSL Integration](#ssl-integration)
  - [Paypal Integration](#paypal-integration)
- [Expectation](#expectation)
- [Future Work](#future-works)

## Overview

Welcome to my E-Commerce Platform, a robust and user-friendly online shopping solution built with Django and Django Rest Framework. Our platform offers a rich set of features for both registered and guest users.

**Key Features :**

1. **User Authentication:** User registration and login for personalized shopping experiences. Guest users can explore and shop without signing in.

2. **Product Catalog:** Browse an extensive product catalog with detailed descriptions and images. Fetch product lists and details through APIs.

3. **Shopping Cart:** Add items to the cart and manage quantities. Easily review and modify your cart's contents.

4. **Secure Checkout:** Integration with PayPal and SSL for secure and trusted payment processing.

5. **Order History:** Completed orders are automatically logged in the user's profile. Easily track past orders and reorder favorite items.

6. **User Reviews:** Allow customers to leave reviews and ratings for products, enhancing trust and providing valuable feedback.

7. **APIs:** Utilize RESTful APIs to retrieve product lists and details programmatically.

## Project Installation

Follow these steps to set up and run this e-commerce platform on your local machine.

**Clone the Repository**

```bash
git clone https://github.com/AAhadNur/e-commerce_website.git
```

**Create a Virtual Environment and Activate**

```bash
python -m venv venv
source venv/bin/activate
```

**Install Dependencies**

```bash
pip install -r requirements.txt
```

### Configure the .env file

Create a `.env` file in the project root directory. Add the following environment variables to your `.env` file with your actual values:

```
# Django
SECRET_KEY = your-project-secret-key
DEBUG = True

# SSL Credentials
SSL_STORE_ID = your-store-id
SSL_STORE_PASSWOED = your-store-password
SSL_VERIFY_KEY = your-ssl-account-verify-key
SSL_VERIFY_SIGN = your-ssl-account-verify-sign

# Paypal Credentials
PAYPAL_CLIENT_ID = your-client-id
PAYPAL_SECRET_ID = your-secret-id
```

**Set Up the Database**

```bash
python manage.py makemigrations
python manage.py migrate
```

**Load Initial data**

```bash
python manage.py loaddata data.json
```

**Run the Development Server**

```bash
python manage.py runserver
```

### SSL Integration

General steps to integrate SSLcommerze payment system

1. **Register with the Payment Gateway:** Sign up [here](https://developer.sslcommerz.com/registration/) for an account with the chosen payment gateway. During registration, you will receive API credentials, such as API keys and other relevant information.

2. **Install Required Packages:** Required packages are already installed if you install the `requirements.txt` file. But you can install sslcommerze package manually by running the following command

```bash
pip install sslcommerz-lib
```

3. **Configure .env file as described before:**
   For more info [see this](https://github.com/sslcommerz/SSLCommerz-Python)

### Paypal Integration

Similar to SSL integration for you.

1. **Create a PayPal Business Account:** Create a PayPal Business Account from [here](https://www.sandbox.paypal.com/bizsignup/#/singlePageSignup)

2. **Obtain API Credentials:**

- Log in to your PayPal Business Account.
- Go to the Developer Dashboard.
- Create a sandbox (test) account to obtain the API credentials for testing.
- After testing, you'll obtain live API credentials for production.

3. **Configure .env file as described before:**
   For more info [see this](https://medium.com/@ahmedtouahria2001/paypal-payment-with-django-rest-framework-best-practices-dcac7430c0c)

## Expectation

The expectations for my e-commerce platform project built using Django and Django Rest Framework can be outlined as follows:

1. **User-Friendly Shopping Experience**

2. **Authentication and User Profiles**

3. **Product Catalog**

4. **Secure Payment Processing**

5. **Order History and Tracking**

6. **API Integration**

7. **Performance and Scalability**

8. **Maintenance and Updates**

## Future Works

Here are some potential future work areas to consider:

1. **Product Recommendations:** Implement recommendation algorithms to suggest products to users based on their browsing and purchase history.

2. **Advanced Search and Filtering:** Enhance the search functionality with filters, tags, and categories to make it easier for users to find products.

3. **Wishlist and Favorites:** Enable users to create wishlists or mark products as favorites for future reference.

4. **Marketing and Promotions:** Develop marketing features such as promotional codes, discounts, and targeted email campaigns to attract and retain customers.

5. **Multi-Vendor Support:** Transition this platform into a multi-vendor marketplace, enabling other sellers to list their products.

6. **Analytics and Reporting:** Add analytics tools to track customer behavior, sales data, and overall platform performance..
