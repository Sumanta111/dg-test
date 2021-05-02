export const ListingActions = {
  LISTING_INIT: "LISTING_INIT",
  LISTING_SUCCESS: "LISTING_SUCCESS",
};

export const fetchListingInitialize = (payload) => ({
  type: ListingActions.LISTING_INIT,
  ...payload,
});

export const fetchListingSuccess = (payload) => ({
  type: ListingActions.LISTING_SUCCESS,
  ...payload,
});
