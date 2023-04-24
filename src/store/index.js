import {createStore, combineReducers} from 'redux'; 
import { blogsReducer } from './blogsReducer';

const rootReducer = combineReducers({
    blogs: blogsReducer,
})

export const store = createStore(rootReducer);