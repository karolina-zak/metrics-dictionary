/**
 * Ligature glyph names for Material Symbols Outlined (Google Fonts subset in index.html).
 * @see https://developers.google.com/fonts/docs/material_symbols
 */
export const CATEGORY_TAB_ICON = {
  all: "grid_view",
  business: "account_balance",
  engagement: "auto_graph",
  users: "groups",
  discovery: "explore",
  pdp: "shopping_bag",
  search: "search",
  cart: "shopping_cart",
  checkout: "shopping_cart_checkout",
};

/** @param {string} tabId */
export function categoryTabIconLigature(tabId) {
  return CATEGORY_TAB_ICON[tabId] ?? null;
}
