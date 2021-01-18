export enum CurrencyCodes {
  EUR = "€",
  USD = "$",
  GBP = "£",
  NGN = "₦",
}

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
    return isValid;
  };

  static normalizeCurrency = (currency: string) => {
    if (currency.includes(",")) {
      let [base, fraction] = currency.split(",");
      base = base.split(".").join("");
      let format = Number(`${base}.${fraction}`);
      format = Number(format.toFixed(4));
      return format;
    }
    let format = Number(currency.split(".").join(""));
    format = Number(format.toFixed(4));
    return format;
  };

  static stripCurrencySymbol = (
    amount: string,
    currencyCode: CurrencyCodes
  ) => {
    return amount.split(currencyCode).join("").trim();
  };
}

export default Helper;
