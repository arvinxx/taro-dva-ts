import { action, delay } from '../utils';

export default {
  namespace: 'math',
  state: { count: 0 },
  reducers: {
    add(state) {
      return { ...state, count: state.count + 1 };
    },
    minus(state) {
      return { ...state, count: state.count - 1 };
    },
  },
  effects: {
    *asyncAdd(_, { put }) {
      yield delay(2000);
      yield put(action('add'));
    },
  },
};
