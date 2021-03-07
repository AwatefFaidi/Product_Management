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
  