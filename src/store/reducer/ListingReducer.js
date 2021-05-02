import { ListingActions } from "../actions/ListingActions";

const initialState = {
  contentList: [],
  currentPageIndex: 0,
  totalContentItems: 0,
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
    default:
      return state;
  }

  return {
    ...state,
    ...changes,
  };
};

export default ListingReducer;
