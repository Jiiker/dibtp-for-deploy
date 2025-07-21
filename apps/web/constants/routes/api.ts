const API_BASE = '/api';

export const API_ROUTES = {
  PRODUCTS: `${API_BASE}/products`,
  IMAGES: `${API_BASE}/images`,
  BIDS: `${API_BASE}/bids`,
  USER: `${API_BASE}/user`,
} as const;
