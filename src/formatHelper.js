//Adding commas to the amount
exports.formatAmount = (amount, decimalPlaces) => {
  // If amount is undefined, return 0 with appropriate decimal places
  if (!amount) {
    let nilPlaceHolder = 0;
    return nilPlaceHolder
      .toFixed(decimalPlaces)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    // If amount = 3250 and decimalPlaces = 2, this will return "3,250.00"
    return amount.toFixed(decimalPlaces).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
};
