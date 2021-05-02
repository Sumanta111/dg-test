import { ListingActions } from "../actions/ListingActions";

const initialState = {
  contentList: [],
  currentPageIndex: 0,
  totalContentItems: 0,
  searchResults: [],
};

const ListingReducer = (state = initialState, action = {}) => {
  let changes = {};
  switch (action.type) {
    case ListingActions.LISTING_SUCCESS:
      changes = {
        ...state,
        contentList: [...state.contentList, ...action.listData],
        currentPageIndex: action.currentPageIndex,
        totalContentItems: action.totalContentItems,
      };
      break;
    case ListingActions.SEARCH_INIT:
      changes = {
        ...state,
        searchResults: [...action.listData],
      };
      break;
    case ListingActions.RESET_SEARCH:
      changes = {
        ...state,
        searchResults: [],
      };
      break;
    default:
      return state;
  }

  return {
    ...state,
    ...changes,
  };
};

export default ListingReducer;
