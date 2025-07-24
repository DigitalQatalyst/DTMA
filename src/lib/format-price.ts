export function formatPrice(price: number, showDecimals = false) {
  return new Intl.NumberFormat("en-US", {
    // style: "currency", // Remove this line
    // currency: "USD",   // Remove this line
    minimumFractionDigits: 0, // Set to 0 to remove minimum decimals
    maximumFractionDigits: 0
    // minimumFractionDigits: showDecimals ? 2 : 0
  }).format(price);
}