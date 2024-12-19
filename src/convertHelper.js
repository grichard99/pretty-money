exports.convertAmount = async (
  amount = 1,
  fromCurrency = "USD",
  toCurrency = "EUR",
  apiKey = "fca_live_Vok0xEK7DStWKSN4mHJxsUaINJMymritIequ9wKb"
) => {
  const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${apiKey}&base_currency=${fromCurrency}&currencies=${toCurrency}`;
  const response = await fetch(url);
  const data = await response.json();
  const convertedAmount = data.data[toCurrency] * amount;
  return convertedAmount;
};
