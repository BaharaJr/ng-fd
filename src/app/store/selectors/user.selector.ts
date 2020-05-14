import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from 'src/app/interfaces/user.interface';

const getUserFeatureSelector = createFeatureSelector<UserState>('user')

export const getMaskUserName = createSelector(getUserFeatureSelector, state => state.maskUserName)
export const getPassword = createSelector(getUserFeatureSelector, state => state.password)
export const getUserName = createSelector(getUserFeatureSelector, state => state.username)


