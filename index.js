const express = require("express");
const app = express();
const currenciesJson = require("./currencies.json");

app.get("/convert", (req, res) => {
  const { source, target } = req.query;
  const amount = parseFloat(req.query.amount.replace("$", "").replace(",", ""));

  if (
    !currenciesJson.currencies[source] ||
    !currenciesJson.currencies[target]
  ) {
    return res.status(400).json({ error: "Invalid source or target currency" });
  }

  const exchangeRate = currenciesJson.currencies[source][target];
  const convertedAmount = (amount * exchangeRate).toFixed(2);
  const formattedAmount = parseFloat(convertedAmount).toLocaleString("en-US", {
    maximumFractionDigits: 2,
  });

  return res.json({ msg: "success", amount: `$${formattedAmount}` });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = app;
