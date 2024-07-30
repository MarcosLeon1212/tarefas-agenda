import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainTab from "./src/Stack/MainTab";
import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider, ReactReduxContext } from "react-redux";
import { store } from "./src/redux/store";
import { persistor } from "./src/redux/store";


const App = () => {

    return(
        <Provider store={store}>
             <PersistGate loading={null} persistor={persistor}>
             <NavigationContainer>
              
                     <MainTab/>
                
             </NavigationContainer>
                </PersistGate>
        </Provider>
    )
}


export default App;