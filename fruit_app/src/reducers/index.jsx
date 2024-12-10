import {combineReducers} from 'redux';
import {itemReducer} from './Items'
import {PriceRecuder} from './Price'

export const allReducers = combineReducers({
    itemReducer,
    PriceRecuder
});