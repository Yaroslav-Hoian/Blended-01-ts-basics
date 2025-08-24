interface ConCurr {
  amount: number;
  currency: "USD" | "EUR" | "UAH";
}

function convertCurrency({ amount, currency }: ConCurr): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 10, currency: "EUR" });
