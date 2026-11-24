import type { Format } from "@number-flow/react";

export const EUR: Format = {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

export const SIGNED_EUR: Format = {
  ...EUR,
  signDisplay: "always",
};

export const PCT: Format = {
  style: "percent",
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
};

export const SIGNED_PCT: Format = {
  ...PCT,
  signDisplay: "always",
};

export function fmt(
  locale: string,
  value: number,
  options: Intl.NumberFormatOptions,
) {
  return new Intl.NumberFormat(locale, options).format(value);
}
