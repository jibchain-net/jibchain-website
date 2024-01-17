// utils/helpers.ts
import { BigNumber } from '@ethersproject/bignumber';
import { formatEther } from '@ethersproject/units';
export const shortenEthAddress = (address: string | undefined): string => {
  if (!address || address.length !== 42) {
    return '0x0000...0000';
  }
  return `${address.substring(0, 6)}...${address.substring(
    address.length - 4
  )}`;
};

export function safelyFormatNumber(
  input: number | BigInt | string | undefined,
  locale: string = 'en-US'
): string {
  if (input === undefined) {
    return 'Data not available';
  }

  let num: number;

  if (typeof input === 'bigint') {
    // Check if the BigInt is within the safe integer range for Numbers
    if (
      input > BigInt(Number.MAX_SAFE_INTEGER) ||
      input < BigInt(Number.MIN_SAFE_INTEGER)
    ) {
      // Handle the case where BigInt is too large for Number
      return 'Number too large';
    }
    num = Number(input); // Safely convert BigInt to Number
  } else if (typeof input === 'string') {
    num = parseFloat(input); // Convert String to Number
    if (isNaN(num)) {
      return 'Invalid number';
    }
  } else {
    num = Number(input); // Input is already a Number
  }

  // Format the number using Intl.NumberFormat
  return new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(
    num
  );
}

type EtherToString = (inputEther?: BigNumber) => string;

export const etherToString: EtherToString = (inputEther) => {
  try {
    if (inputEther == null) return '';
    return formatEther(inputEther);
  } catch (error) {
    return '';
  }
};
