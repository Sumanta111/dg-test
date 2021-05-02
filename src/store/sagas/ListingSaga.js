import { call, put } from "redux-saga/effects";
import { fetchContentListing } from "../../services/ListingService";
import { takeFirst } from "../../utilities/ReduxSagaUtil";
import { fetchListingSuccess, ListingActions } from "../actions/ListingActions";

function* onListingContentFetchInit(action) {
  const { pageNumber } = action;
  try {
    const response = yield call(fetchContentListing, {
      pageNumber,
    });
    const { page } = response;
    yield put(
      fetchListingSuccess({
        listData: page["content-items"].content,
        currentPageIndex: pageNumber,
        totalContentItems: parseInt(page["total-content-items"]),
      })
    );
  } catch (e) {
    console.error(e);
  }
}

export default [
  takeFirst(ListingActions.LISTING_INIT, onListingContentFetchInit),
];
