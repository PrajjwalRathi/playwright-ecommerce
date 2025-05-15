# 🛒 Playwright E-commerce Automation Suite

## Overview

This project is an end-to-end test automation suite built using **Playwright** and **TypeScript**. It tests core functionalities of the [Sauce Demo](https://www.saucedemo.com) e-commerce application—designed specifically for web automation practice.

The test suite covers authentication, product listing and sorting, cart management, checkout flow, and also includes visual validation of product images.

---

## ✅ Features Tested

### 🔐 Authentication
- Successful login with valid credentials
- Handling of invalid credentials
- Locked user login scenario

### 🛍️ Product Catalog
- Sorting by name and price (A–Z, Z–A, low–high, high–low)
- Product detail consistency (list vs. detail page)
- Product image load validation (image visual completeness)

### 🛒 Cart Functionality
- Add/remove items from cart
- Cart quantity accuracy
- Persistence of cart data across navigation
- Checkout flow until completion

### ⚙️ Advanced Features
- Page Object Model (POM) for modularity
- Custom HTML test reporter
- Parallel and cross-browser execution (Chromium, Firefox, WebKit)

---

## 📁 Project Structure

```
playwright-ecommerce 
├── pages/               # Page Object classes (LoginPage, ProductPage, etc.)/n
├── tests/               # Test cases for each module
├── reporters/           # Custom reporter script
├── playwright.config.ts # Global configuration
├── package.json         # Dependencies and scripts
└── README.md            # Project documentation
```


## 🚀 Getting Started

### Prerequisites
- Node.js >= 14
- npm or yarn

### Installation

```bash
git clone https://github.com/PrajjwalRathi/playwright-ecommerce.git
cd playwright-ecommerce
npm install
````

### Run All Tests

```bash
npx playwright test
```

To run in **headed mode** with visible browser:

```bash
npx playwright test --headed
```

To run only a specific test file:

```bash
npx playwright test tests/login.spec.ts
```

---

## 📊 View HTML Test Report

After test run:

```bash
npx playwright show-report
```

Custom reporter output is also logged in terminal during execution.

---

## 🌐 Cross-Browser Support

The test suite runs on:

* Chromium (Chrome)
* Firefox
* WebKit (Safari)

Configured in `playwright.config.ts` using Playwright’s built-in `devices`.

---

## 🧪 Technologies Used

* [Playwright](https://playwright.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* HTML Reporter + Custom Console Reporter
* POM (Page Object Model) Architecture

---

## 📝 Notes

* The target website is a static mock site provided for testing; no data is saved.
* Image load validation relies on checking the `naturalWidth` of product `<img>` elements.
* Parallel execution is enabled by default for speed.

---

## 👨‍💻 Author

**Your Name**
GitHub: [@yourusername](https://github.com/yourusername)

---

