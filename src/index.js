exports.format = (amount, currency) => {
  if (currency === "USD") {
    // United States Dollar
    return `$${amount.toFixed(2)}`;
  } else if (currency === "EUR") {
    // Euro
    return `€${amount.toFixed(2)}`;
  } else if (currency === "GBP") {
    // British Pound
    return `£${amount.toFixed(2)}`;
  } else if (currency === "JPY") {
    // Japanese Yen
    return `¥${amount.toFixed(0)}`;
  } else if (currency === "CHF") {
    // Swiss Franc
    return `₣${amount.toFixed(2)}`;
  } else if (currency === "INR") {
    // Indian Rupee
    return `₹${amount.toFixed(2)}`;
  } else if (currency === "KWD") {
    // Kuwaiti Dinar
    return `د.ك${amount.toFixed(3)}`;
  } else if (currency === "AED") {
    // UAE Dirham
    return `د.إ${amount.toFixed(2)}`;
  } else if (currency === "SAR") {
    // Saudi Riyal
    return `﷼‎${amount.toFixed(2)}`;
  } else if (currency === "BAM") {
    // Bosnia and Herzegovina Convertible Mark
    return `₻${amount.toFixed(2)}`;
  } else if (currency === "RUB") {
    // Russian Ruble
    return `₽${amount.toFixed(2)}`;
  } else if (currency === "GEL") {
    // Georgian Lari
    return `₾${amount.toFixed(2)}`;
  } else if (currency === "TRY") {
    // Turkish Lira
    return `₺${amount.toFixed(2)}`;
  } else if (currency === "AZN") {
    // Azerbaijani Manat
    return `₼${amount.toFixed(2)}`;
  } else if (currency === "KZT") {
    // Kazakhstani Tenge
    return `₸${amount.toFixed(2)}`;
  } else if (currency === "UAH") {
    // Ukrainian Hryvnia
    return `₴${amount.toFixed(2)}`;
  } else if (currency === "XSM") {
    // Spesmilo
    return `₷${amount.toFixed(2)}`;
  } else if (currency === "THB") {
    // Thai Baht
    return `฿${amount.toFixed(2)}`;
  } else if (currency === "KRW") {
    // South Korean Won
    return `원${amount.toFixed(0)}`;
  } else if (currency === "VND") {
    // Vietnamese Dong
    return `₫${amount.toFixed(0)}`;
  } else if (currency === "MNT") {
    // Mongolian Tugrik
    return `₮${amount.toFixed(2)}`;
  } else if (currency === "GRD") {
    // Greek Drachma
    return `₯${amount.toFixed(2)}`;
  } else if (currency === "PHP") {
    // Philippine Peso
    return `₱${amount.toFixed(2)}`;
  } else if (currency === "ARA") {
    // Argentine Austral
    return `₳${amount.toFixed(2)}`;
  } else if (currency === "GHS") {
    // Ghanaian Cedi
    return `₵${amount.toFixed(2)}`;
  } else if (currency === "PYG") {
    // Paraguayan Guarani
    return `₲${amount.toFixed(0)}`;
  } else if (currency === "ILS") {
    // Israeli Sheqel
    return `₪${amount.toFixed(2)}`;
  } else if (currency === "PEN") {
    // Peruvian Penny
    return `₰${amount.toFixed(2)}`;
  } else if (currency === "AUD") {
    // Australian Dollar
    return `A$${amount.toFixed(2)}`;
  } else if (currency === "CAD") {
    // Canadian Dollar
    return `C$${amount.toFixed(2)}`;
  } else if (currency === "CNY") {
    // Chinese Yuan
    return `¥${amount.toFixed(2)}`;
  } else if (currency === "BRL") {
    // Brazilian Real
    return `R$${amount.toFixed(2)}`;
  } else if (currency === "ZAR") {
    // South African Rand
    return `R${amount.toFixed(2)}`;
  } else {
    // Default to USD
    return `$${amount.toFixed(2)}`;
  }
};
