import { call, take, fork } from "redux-saga/effects";

export function* takeFirst(pattern, saga, ...args) {
  yield fork(function* takeFirstSagaGenerator() {
    while (true) {
      const action = yield take(pattern);
      yield call(saga, ...args.concat(action));
    }
  });
}

export default {
  takeFirst,
};
