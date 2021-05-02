export const ListingActions = {
  LISTING_INIT: "LISTING_INIT",
  LISTING_SUCCESS: "LISTING_SUCCESS",

  SEARCH_INIT: "SEARCH_INIT",
  RESET_SEARCH: "RESET_SEARCH",
};

export const fetchListingInitialize = (payload) => ({
  type: ListingActions.LISTING_INIT,
  ...payload,
});

export const fetchListingSuccess = (payload) => ({
  type: ListingActions.LISTING_SUCCESS,
  ...payload,
});

export const initializeSearch = (payload) => ({
  type: ListingActions.SEARCH_INIT,
  ...payload,
});

export const resetSearch = () => ({
  type: ListingActions.RESET_SEARCH,
});
