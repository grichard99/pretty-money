exports.format = (amount, currency) => {
  if (currency === "USD") {
    // United States Dollar
    return `$${formatAmount(parseFloat(amount.toFixed(2)))}`;
  } else if (currency === "EUR") {
    // Euro
    return `€${formatAmount(parseFloat(amount.toFixed(2)))}`;
  } else if (currency === "GBP") {
    // British Pound
    return `£${formatAmount(parseFloat(amount.toFixed(2)))}`;
  } else if (currency === "JPY") {
    // Japanese Yen
    return `¥${formatAmount(parseFloat(amount.toFixed(0)))}`;
  } else if (currency === "CHF") {
    // Swiss Franc
    return `₣${formatAmount(parseFloat(amount.toFixed(2)))}`;
  } else if (currency === "INR") {
    // Indian Rupee
    return `₹${formatAmount(parseFloat(amount.toFixed(2)))}`;
  } else if (currency === "KWD") {
    // Kuwaiti Dinar
    return `د.ك${formatAmount(parseFloat(amount.toFixed(3)))}`;
  } else if (currency === "AED") {
    // UAE Dirham
    return `د.إ${formatAmount(parseFloat(amount.toFixed(2)))}`;
  } else if (currency === "SAR") {
    // Saudi Riyal
    return `﷼‎${formatAmount(parseFloat(amount.toFixed(2)))}`;
  } else if (currency === "BAM") {
    // Bosnia and Herzegovina Convertible Mark
    return `₻${formatAmount(parseFloat(amount.toFixed(2)))}`;
  } else if (currency === "RUB") {
    // Russian Ruble
    return `₽${formatAmount(parseFloat(amount.toFixed(2)))}`;
  } else if (currency === "GEL") {
    // Georgian Lari
    return `₾${formatAmount(parseFloat(amount.toFixed(2)))}`;
  } else if (currency === "TRY") {
    // Turkish Lira
    return `₺${formatAmount(parseFloat(amount.toFixed(2)))}`;
  } else if (currency === "AZN") {
    // Azerbaijani Manat
    return `₼${formatAmount(parseFloat(amount.toFixed(2)))}`;
  } else if (currency === "KZT") {
    // Kazakhstani Tenge
    return `₸${formatAmount(parseFloat(amount.toFixed(2)))}`;
  } else if (currency === "UAH") {
    // Ukrainian Hryvnia
    return `₴${formatAmount(parseFloat(amount.toFixed(2)))}`;
  } else if (currency === "XSM") {
    // Spesmilo
    return `₷${formatAmount(parseFloat(amount.toFixed(2)))}`;
  } else if (currency === "THB") {
    // Thai Baht
    return `฿${formatAmount(parseFloat(amount.toFixed(2)))}`;
  } else if (currency === "KRW") {
    // South Korean Won
    return `원${formatAmount(parseFloat(amount.toFixed(0)))}`;
  } else if (currency === "VND") {
    // Vietnamese Dong
    return `₫${formatAmount(parseFloat(amount.toFixed(0)))}`;
  } else if (currency === "MNT") {
    // Mongolian Tugrik
    return `₮${formatAmount(parseFloat(amount.toFixed(2)))}`;
  } else if (currency === "GRD") {
    // Greek Drachma
    return `₯${formatAmount(parseFloat(amount.toFixed(2)))}`;
  } else if (currency === "PHP") {
    // Philippine Peso
    return `₱${formatAmount(parseFloat(amount.toFixed(2)))}`;
  } else if (currency === "ARA") {
    // Argentine Austral
    return `₳${formatAmount(parseFloat(amount.toFixed(2)))}`;
  } else if (currency === "GHS") {
    // Ghanaian Cedi
    return `₵${formatAmount(parseFloat(amount.toFixed(2)))}`;
  } else if (currency === "PYG") {
    // Paraguayan Guarani
    return `₲${formatAmount(parseFloat(amount.toFixed(0)))}`;
  } else if (currency === "ILS") {
    // Israeli Sheqel
    return `₪${formatAmount(parseFloat(amount.toFixed(2)))}`;
  } else if (currency === "PEN") {
    // Peruvian Penny
    return `₰${formatAmount(parseFloat(amount.toFixed(2)))}`;
  } else if (currency === "AUD") {
    // Australian Dollar
    return `A$${formatAmount(parseFloat(amount.toFixed(2)))}`;
  } else if (currency === "CAD") {
    // Canadian Dollar
    return `C$${formatAmount(parseFloat(amount.toFixed(2)))}`;
  } else if (currency === "CNY") {
    // Chinese Yuan
    return `¥${formatAmount(parseFloat(amount.toFixed(2)))}`;
  } else if (currency === "BRL") {
    // Brazilian Real
    return `R$${formatAmount(parseFloat(amount.toFixed(2)))}`;
  } else if (currency === "ZAR") {
    // South African Rand
    return `R${formatAmount(parseFloat(amount.toFixed(2)))}`;
  } else {
    // Default to USD
    return `$${formatAmount(parseFloat(amount.toFixed(2)))}`;
  }
};

//Adding commas to the amount
const formatAmount = (amount) => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
