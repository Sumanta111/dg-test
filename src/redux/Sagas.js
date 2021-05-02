import { all } from "redux-saga/effects";
import ListingSaga from "../store/sagas/ListingSaga";

export default function* sagas() {
  yield all([...ListingSaga]);
}
