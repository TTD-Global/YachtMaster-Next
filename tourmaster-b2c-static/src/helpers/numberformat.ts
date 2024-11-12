export function formatCompactNumber(number:any = 0) {
    const formatter = Intl.NumberFormat("en", { notation: "compact" });
    return formatter.format(number);
}

export function formatLocaleString(number:any = 0) {
    return number.toLocaleString('en-US');
}

export function formatPriceCurrency(number: any = 0, currency: string = 'THB'): string {
    if (number === null || number === undefined) {
      number = 0;
    }
  
    let currencySymbol = '';
    
    switch (currency.toUpperCase()) {
      case 'THB':
        currencySymbol = '฿';
        break;
      case 'USD':
        currencySymbol = '$';
        break;
      case 'CNY':
        currencySymbol = '¥';
        break;
      default:
        currencySymbol = '';
        break;
    }
    
    const result = `${currencySymbol}${number.toLocaleString('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).replace(/^\D+/, '')}`;
  
    return result;
  }

  export function formatPrice(number: any = 0): string {
    if (number === null || number === undefined) {
      number = 0;
    }

    const result = number.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    return result;
}

  
  