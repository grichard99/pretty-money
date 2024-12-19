# pretty-money

`pretty-money` is an NPM package designed for formatting and converting currency with ease. It provides a simple API to handle various currency formatting needs, making it ideal for applications that require currency display or conversion.

## Features

- Format numbers into currency strings
- Convert between different currencies
- Customize currency symbols and decimal places

## Installation

To install `pretty-money`, use npm:

```bash
npm install pretty-money-js
```

## Usage

Here's a quick example of how to use `pretty-money` in your project:

```javascript
const prettyMoney = require("pretty-money-js");

// Format a number into a currency string
const formatted = prettyMoney.format(1234.56);
console.log(formatted); // Output: $1,234.56

// Convert from one currency to another
const converted = prettyMoney.convert(100, "USD", "EUR");
console.log(converted); // Output: Converted amount in EUR -- not formatted

// Convert and format from one currency to another
const convertedAndFormatted = prettyMoney.convertAndFormat(100, "USD", "EUR");
console.log(convertedAndFormatted); // Output: €1,234.56
```

## API

For converting/Converting & Formatting, you can pass in an api key from freecurrencyapi.com. It defaults to the free tier api key, but if you would like to have more requests or premium features, you can pass your own api key as follows:

```javascript
const prettyMoney = require("pretty-money-js");

const convertedAndFormatted = prettyMoney.convertAndFormat(
  100,
  "USD",
  "EUR",
  "fca_live_abcdefghijklmnopqrstuvwxyz"
);
```

### `format(amount, options)`

Formats a given number into a currency string.

- **amount**: The number to format.
- **options**: An optional object to customize formatting (e.g., currency symbol, decimal places).

### `convert(amount, fromCurrency, toCurrency)`

Converts an amount from one currency to another.

- **amount**: The amount to convert.
- **fromCurrency**: The currency code of the original amount (e.g., 'USD').
- **toCurrency**: The currency code to convert to (e.g., 'EUR').

## Configuration

You can customize the behavior of `pretty-money` by passing configuration options to the functions. For example, you can specify a different currency symbol or change the number of decimal places.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

This README provides a clear overview of what `index.js` does, with examples to help users get started quickly. Adjust the examples and descriptions based on the actual functionality of your `index.js` file.

## Languages

`pretty-money` supports various language options for currency formatting. Below are the available options you can use with the `format` function:

- **USD**: United States Dollar
- **EUR**: Euro
- **GBP**: British Pound
- **JPY**: Japanese Yen
- **CHF**: Swiss Franc
- **INR**: Indian Rupee
- **KWD**: Kuwaiti Dinar
- **AED**: UAE Dirham
- **SAR**: Saudi Riyal
- **BAM**: Bosnia and Herzegovina Convertible Mark
- **RUB**: Russian Ruble
- **GEL**: Georgian Lari
- **TRY**: Turkish Lira
- **AZN**: Azerbaijani Manat
- **KZT**: Kazakhstani Tenge
- **UAH**: Ukrainian Hryvnia
- **XSM**: Spesmilo
- **THB**: Thai Baht
- **KRW**: South Korean Won
- **VND**: Vietnamese Dong
- **MNT**: Mongolian Tugrik
- **GRD**: Greek Drachma
- **PHP**: Philippine Peso
- **ARA**: Argentine Austral
- **GHS**: Ghanaian Cedi
- **PYG**: Paraguayan Guarani
- **ILS**: Israeli Sheqel
- **PEN**: Peruvian Penny
- **AUD**: Australian Dollar
- **CAD**: Canadian Dollar
- **CNY**: Chinese Yuan
- **BRL**: Brazilian Real
- **ZAR**: South African Rand

To format a currency string using a specific option, pass the currency code as part of the options:

```javascript
const options = { currency: "EUR" }; // Example for Euro
const formatted = prettyMoney.format(1234.56, options);
console.log(formatted); // Output: €1,234.56
```
