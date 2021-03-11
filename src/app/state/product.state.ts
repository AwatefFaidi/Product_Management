// enum for events in child component nav-bar 
export enum ProductActionsTypes{
  GET_ALL_PRODUCTS="[Product] Get All products",
  GET_SELECTED_PRODUCTS="[Product] Get Selected products",
  GET_AVAILABLE_PRODUCTS="[Product] Get Available products",
  SEARCH_PRODUCTS="[Product] Search products",
  NEW_PRODUCT="[Product] New product",
  SELECT_PRODUCT="[Product] Select product",
  EDIT_PRODUCT="[Product] Edit product",
  DELETE_PRODUCT="[Product] Delete product",
  PRODUCT_ADDED="[Product] product added",
  PRODUCT_UPDATED="[Product] product updated",

}
// we declare this interface as, some event nedd some date example search event need a keyword as value 
export interface ActionEvent{
  type:ProductActionsTypes,
  //? when we don't need paramter , not necessary to pass payload in object
  payload?:any
}
export enum DataStateEnum {
    LOADING,
    LOADED,
    ERROR
  }
  //<T> generique : t products list or another thing
  //object that contains data, state of object, error
  export interface AppDataState<T> {
    dataState:DataStateEnum,
    data?:T,
    errorMessage?:string
  }
  