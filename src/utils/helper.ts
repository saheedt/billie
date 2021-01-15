class Helper {
  static formatCurrency = (options: {
    amount: number;
    locale?: string;
    currency?: string;
  }) => {
    const formatted = new Intl.NumberFormat(options.locale || "de-DE", {
      style: "currency",
      currency: options.currency || "EUR",
      maximumFractionDigits: 2,
    }).format(options.amount);
    return formatted;
  };

  static isValidCurrencyInput = (currency: string) => {
    const pattern = /(?=.)^(([1-9][0-9]{0,2}(\.[0-9]{3})*)|[0-9]+)?(,[0-9]{1,2})?$/gm;
    const isValid = pattern.test(currency);
    console.log("isValid: ", isValid);
    return isValid;
  };
}

export default Helper;
