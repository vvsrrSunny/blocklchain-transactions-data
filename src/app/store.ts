import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import shareRelatedTransactionReducer from '../features/share-related-transaction/shareRelatedTransactionSlice';

export const store = configureStore({
  reducer: {
    shareRelatedTransaction: shareRelatedTransactionReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
