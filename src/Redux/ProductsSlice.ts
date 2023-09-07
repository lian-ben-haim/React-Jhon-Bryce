import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ProductModel from "../Models/ProductModel";

// products state is -> ProductModel[]


// Reduces : 
// * can not change the parameters sent to them *
// * always returns the new slice state *
// ----------------------------------------------------------

function setAll(currentState : ProductModel[], action : PayloadAction<ProductModel[]>) : ProductModel[] {
    const newState = action.payload;

    return newState;
}

function addOne(currentState: ProductModel[], action : PayloadAction<ProductModel>) : ProductModel[] {
    const newState = [...currentState];
    newState.push(action.payload);

    return newState; // will replace the current state sent at the Global State
}

function updateOne(currentState: ProductModel[], action : PayloadAction<ProductModel>) : ProductModel[] {
    const newState = [...currentState];
    const index = newState.findIndex(p => p.id === action.payload.id);
    if(index >= 0) newState[index] = action.payload;

    return newState;
}

// for delete we need only the product id as an 'action' parameter
function deleteOne(currentState: ProductModel[], action : PayloadAction<number>) : ProductModel[] {
    const newState = [...currentState];
    const index = newState.findIndex(p => p.id === action.payload);
    if(index >= 0) newState.splice(index, 1); 

    return newState;
}

// ----------------------------------------------------------


// Products Slice :

const productsSlice = createSlice({
    name: "products",
    initialState: [],
    reducers: { setAll, addOne, updateOne, deleteOne}
});


// export all actions:
// (each reducer will create it's own action)
export const productActions = productsSlice.actions;


// export Reducer:
export const productReducer = productsSlice.reducer;