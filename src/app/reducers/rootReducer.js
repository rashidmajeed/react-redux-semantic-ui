import { combineReducers } from 'redux'
import productReducer from '../../features/product/productReducer';

const rootReducer = combineReducers({
    products: productReducer
})

export default rootReducer;
