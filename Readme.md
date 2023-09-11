<div align="center">

# Daintree E-Commerce Website

</div>

I have developed a simple e-commerce website using Django, which I would like to share on Git. This website is built with the aim of providing an easy-to-use platform for users to purchase items online.

## Table of Contents

    - [Features](#features)
    - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Authentication and Authorization](#authentication-and-authorization)
    - [Product Catalog](#product-catalog)
    - [Shopping Cart](#shopping-cart)
    - [Checkout and Payments](#checkout-and-payments)
    - [Deployment](#deployment)
    - [Contributing](#contributing)
    - [License](#license)

## Features

    - **User Authentication**: Daintree has a robust user authentication system. Users can register, log in, and manage their profiles.
    - **Product Catalog**: Browse through a wide range of products displayed on the store page.
    - **Product Details**: View detailed information about individual products.
    - **Shopping Cart**: Add products to your cart, update quantities, and proceed to checkout.
    - **Secure Checkout**: Integrated PayPal payment gateway for safe and convenient payment processing.
    - **Order Placement**: Users can place orders and track their order history.
    - **Admin Panel**: Easily manage products, orders, and user accounts via the Django admin interface.

## Getting Started

### Prerequisites

    Before running the project, make sure you have the following prerequisites installed:

    - Python (3.x recommended)
    - Django (3.x recommended)
    - Django Rest Framework (DRF)
    - PayPal Developer Account (for PayPal integration)
    - Git (for cloning the repository)

### Installation

1. **Clone the repository from GitHub:**

   ```
   git clone https://github.com/AAhadNur/e-commerce_website.git
   cd daintree
   ```

2. **Create a virtual environment (optional but recommended):**

   ```
   python -m venv venv
   source venv/bin/activate
   ```

3. **Install project dependencies:**

   ```
   pip install -r requirements.txt
   ```

4. **Database Setup:**

   - Configure your database settings in `settings.py`.
   - Apply database migrations:

   ```
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create a superuser for admin access:**

   ```
   python manage.py createsuperuser
   ```

6. **Start the development server:**

   ```
   python manage.py runserver
   ```

   Access the website locally at 'http://localhost:8000/' and the admin panel at 'http://localhost:8000/admin/'.

## Usage

### Authentication and Authorization

    - Users can register for an account or log in if they already have one.
    - The authentication system ensures that only authorized users can access certain features like the shopping cart and order placement.

### Product Catalog

    - Visit the store page to browse through a variety of products.
    - Click on a product to view detailed information.

### Shopping Cart

    - Add products to your cart from the product detail page or store page.
    - View and update the contents of your cart.
    - Proceed to checkout when ready to place an order.

### Checkout and Payments

    - During checkout, you'll be prompted to enter shipping details.
    - Complete the payment process securely using PayPal.
    - Once payment is confirmed, the order will be placed.

## Contributing

We welcome contributions to improve Daintree! If you'd like to contribute, please follow these steps:

    - Fork the repository on GitHub.
    - Clone your forked repository locally.
    - Create a new branch for your feature or bug fix.
    - Make your changes, test thoroughly, and commit them.
    - Push your changes to your fork on GitHub.
    - Create a pull request against the original repository.
