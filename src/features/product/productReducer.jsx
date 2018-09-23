import { createReducer } from '../../app/common/Utils/reducerUtils';
import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from './productConstants';

const initialState = [
    {
        id: '1',
        name: 'SKATE BANANA BTX SNOWBOARD',
        price: '300',
	date: '2018-03-27',
    	category: 'Electronics',
        description: 'When you are dropping in on the Lib Tech Skate Banana BTX Snowboard, there is no time for selfies - just face shots and 		perfectly greased rails. The BTX rocker makes for a playful yet predictable ride on any terrain but truly excels as a jibbing machine.',
        owner: 'Bob',
	image: 'http://images.evo.com/imgp/700/101705/438222/lib-tech-skate-banana-btx-snowboard-blem-2016-blue.jpg'
    },
    {
        id: '2',
        name: 'JOY DRIVER SNOWBOARD 2017',
        price: '600',
	date: '2018-03-27',
    	category: 'Computer Parts',
        description: 'Whether you are heading out to a new zone of pillow stacks, hill-banging resort laps on beautiful windpack, or sessioning that big booter you built just out the gates, you need a hard-charging, versatile board that can handle it all. Enter the K2 Joy Driver Snowboard.',
        owner: 'Brad Hussy',
        image: 'http://images.evo.com/imgp/700/102748/443496/clone.jpg'
    },
    {
        id: '3',
        name: 'BOTTLE ROCKET SNOWBOARD 2017',
        price: '480',
	date: '2018-03-27',
    	category: 'Plane Games',
        description: 'Comin at ya hotter than a Wolf Pack screamer, the K2 Bottle Rocket Snowboard is designed to propel your park riding into 	the stratosphere. Whether you need a solid jump board, or a battle axe for the cold hard streets, the K2 Bottle Rocket will have you 		whistling with confidence when you step to something big.',
	owner: 'David',        
	image: 'http://images.evo.com/imgp/700/102765/446460/k2-bottle-rocket-snowboard-2017-160.jpg'
    }
    
];

export const createProduct = (state, payload) => {
  return [...state, Object.assign({}, payload.product)]
}

export const updateProduct = (state, payload) => {
  return [
    ...state.filter(product => product.id !== payload.product.id),
    Object.assign({}, payload.product)
  ]
}

export const deleteProduct = (state, payload) => {
  return [
    ...state.filter(product => product.id !== payload.productId)
  ]
}

export default createReducer(initialState, {
  [CREATE_PRODUCT]: createProduct,
  [UPDATE_PRODUCT]: updateProduct,
  [DELETE_PRODUCT]: deleteProduct
})
