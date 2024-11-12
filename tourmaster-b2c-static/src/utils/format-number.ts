
export class FormatNumber {

    formatNumberWithLeadingZeros(number: number, length: number) {
        const formattedNumber = String(number);
        const zerosToAdd = length - formattedNumber.length;
        if (zerosToAdd > 0) {
            return '0'.repeat(zerosToAdd) + formattedNumber;
        }
        return formattedNumber;
    }
}

export const formatNumber = (amount: number | string | null,checkDot:boolean = false) => {
    if (amount === null) {
      return null; // or return a default value for null
    }
  
    const numericAmount = typeof amount === "string" ? parseFloat(amount) : amount;
  
    if (!isNaN(numericAmount)) {
      const formattedAmount = Intl.NumberFormat("th-TH", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(numericAmount);
  
      // ลบทศนิยม กรณีเลขเป็น .00
      return checkDot ? formattedAmount.slice(0, -3) : formattedAmount;
      // return formattedAmount;
    } else {
      return amount;
    }
}; 

  export const twoDecimalPlaces = (numeric: number) => {
    const numericFormat = Math.round(numeric * 100) / 100;
    return numericFormat;
  };