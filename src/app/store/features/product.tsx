import { products } from '@/app/utils/mock'
import { Product } from '@/app/utils/types'
import { createSlice } from '@reduxjs/toolkit'

// Define the initial state using that type
const initialState: Product[] = products;

export const productSlice = createSlice({
  name: 'product',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
})

export const {  } = productSlice.actions

// Other code such as selectors can use the imported `RootState` type

export default productSlice.reducer