//Test formatting
const { format } = require("../src/index");
console.log("Format Null Passed: ", format());
console.log("Formatting Passed: ", format(10000.999, "USD"));

//Test converting
const { convert } = require("../src/index");
console.log("Convert Null Passed: ", convert());
convert(10000.999, "USD", "EUR")
  .then((convertedAmount) => {
    console.log("Converting Passed: ", convertedAmount);
  })
  .catch((error) => {
    console.error("Converting Failed: ", error);
  });

//Test converting and formatting
const { convertAndFormat } = require("../src/index");
console.log("Convert/Format Null Passed: ", convertAndFormat());
convertAndFormat(10000.999, "USD", "EUR")
  .then((convertedAmount) => {
    console.log("Convert/Format Passed: ", convertedAmount);
  })
  .catch((error) => {
    console.error("Convert/Format Failed: ", error);
  });
