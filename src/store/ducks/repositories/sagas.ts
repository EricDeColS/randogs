import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';

export function* load() {
  try {
    const response = yield call(api.get, '/v1/images/search');
    console.log('** sagas response', response.data)
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
