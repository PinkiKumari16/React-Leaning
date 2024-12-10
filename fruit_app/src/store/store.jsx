import React from "react";
import {createStore} from 'redux';
import {allReducers} from '../reducers/index'

export const store = createStore(allReducers);

store.subscribe(()=>console.log(store.getState()));