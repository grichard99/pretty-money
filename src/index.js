const { formatAmount } = require("./formatHelper");
const { convertAmount } = require("./convertHelper");

exports.format = (amount, currency) => {
  if (currency === "USD") {
    // United States Dollar
    return `$${formatAmount(amount, 2)}`;
  } else if (currency === "EUR") {
    // Euro
    return `€${formatAmount(amount, 2)}`;
  } else if (currency === "GBP") {
    // British Pound
    return `£${formatAmount(amount, 2)}`;
  } else if (currency === "JPY") {
    // Japanese Yen
    return `¥${formatAmount(amount, 0)}`;
  } else if (currency === "CHF") {
    // Swiss Franc
    return `₣${formatAmount(amount, 2)}`;
  } else if (currency === "INR") {
    // Indian Rupee
    return `₹${formatAmount(amount, 2)}`;
  } else if (currency === "KWD") {
    // Kuwaiti Dinar
    return `د.ك${formatAmount(amount, 3)}`;
  } else if (currency === "AED") {
    // UAE Dirham
    return `د.إ${formatAmount(amount, 2)}`;
  } else if (currency === "SAR") {
    // Saudi Riyal
    return `﷼‎${formatAmount(amount, 2)}`;
  } else if (currency === "BAM") {
    // Bosnia and Herzegovina Convertible Mark
    return `₻${formatAmount(amount, 2)}`;
  } else if (currency === "RUB") {
    // Russian Ruble
    return `₽${formatAmount(amount, 2)}`;
  } else if (currency === "GEL") {
    // Georgian Lari
    return `₾${formatAmount(amount, 2)}`;
  } else if (currency === "TRY") {
    // Turkish Lira
    return `₺${formatAmount(amount, 2)}`;
  } else if (currency === "AZN") {
    // Azerbaijani Manat
    return `₼${formatAmount(amount, 2)}`;
  } else if (currency === "KZT") {
    // Kazakhstani Tenge
    return `₸${formatAmount(amount, 2)}`;
  } else if (currency === "UAH") {
    // Ukrainian Hryvnia
    return `₴${formatAmount(amount, 2)}`;
  } else if (currency === "XSM") {
    // Spesmilo
    return `₷${formatAmount(amount, 2)}`;
  } else if (currency === "THB") {
    // Thai Baht
    return `฿${formatAmount(amount, 2)}`;
  } else if (currency === "KRW") {
    // South Korean Won
    return `원${formatAmount(amount, 0)}`;
  } else if (currency === "VND") {
    // Vietnamese Dong
    return `₫${formatAmount(amount, 0)}`;
  } else if (currency === "MNT") {
    // Mongolian Tugrik
    return `₮${formatAmount(amount, 2)}`;
  } else if (currency === "GRD") {
    // Greek Drachma
    return `₯${formatAmount(amount, 2)}`;
  } else if (currency === "PHP") {
    // Philippine Peso
    return `₱${formatAmount(amount, 2)}`;
  } else if (currency === "ARA") {
    // Argentine Austral
    return `₳${formatAmount(amount, 2)}`;
  } else if (currency === "GHS") {
    // Ghanaian Cedi
    return `₵${formatAmount(amount, 2)}`;
  } else if (currency === "PYG") {
    // Paraguayan Guarani
    return `₲${formatAmount(amount, 0)}`;
  } else if (currency === "ILS") {
    // Israeli Sheqel
    return `₪${formatAmount(amount, 2)}`;
  } else if (currency === "PEN") {
    // Peruvian Penny
    return `₰${formatAmount(amount, 2)}`;
  } else if (currency === "AUD") {
    // Australian Dollar
    return `A$${formatAmount(amount, 2)}`;
  } else if (currency === "CAD") {
    // Canadian Dollar
    return `C$${formatAmount(amount, 2)}`;
  } else if (currency === "CNY") {
    // Chinese Yuan
    return `¥${formatAmount(amount, 2)}`;
  } else if (currency === "BRL") {
    // Brazilian Real
    return `R$${formatAmount(amount, 2)}`;
  } else if (currency === "ZAR") {
    // South African Rand
    return `R${formatAmount(amount, 2)}`;
  } else {
    // Default to USD
    return `$${formatAmount(amount, 2)}`;
  }
};

exports.convert = async (amount, fromCurrency, toCurrency, apiKey) => {
  if (!amount) {
    return 0;
  }
  return await convertAmount(amount, fromCurrency, toCurrency, apiKey);
};

exports.convertAndFormat = async (amount, fromCurrency, toCurrency, apiKey) => {
  if (!amount) {
    return 0;
  }
  return this.format(
    await this.convert(amount, fromCurrency, toCurrency, apiKey),
    toCurrency
  );
};
