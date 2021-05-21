import React, { useMemo, useRef } from "react";

import { StatusBar, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStore, applyMiddleware, compose } from "redux";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./src/sagas";
import { Provider, useDispatch } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import { useFonts } from "expo-font";
import { PersistGate } from "redux-persist/integration/react";

import { theme } from "./src/common/theme";
import reducers from "./src/reducers";
import Toast from "react-native-toast-message";
import General from "./src/containers/Tabs/General";
import AppDetail from "./AppDetail";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth", "carts", "favorites"],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: ["products", "uploads", "suppliers"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

// create redux redux-saga redux-dev-tool for browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create redux redux-saga for mobile
const composeEnhancersRNDebugger =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const enhancers = [applyMiddleware(...middleware)];
const store = createStore(
  persistedReducer,
  composeEnhancersRNDebugger(...enhancers)
);
let persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

// const App = () => {
//   let [fontsLoaded] = useFonts({
//     "gilroy-medium": require("./assets/fonts/Gilroy-Medium.ttf"),
//     "gilroy-light": require("./assets/fonts/Gilroy-Light.otf"),
//     "gilroy-bold": require("./assets/fonts/Gilroy-ExtraBold.otf"),
//     "gilroy-semiBold": require("./assets/fonts/Gilroy-SemiBold.ttf"),
//   });
//   if (!fontsLoaded) return <View />;

//   const bottomSheetRef = useRef < BottomSheet > null;

//   // variables
//   const snapPoints = useMemo(() => ["25%", "50%"], []);

//   // callbacks
//   const handleSheetChanges = useCallback((index) => {
//     console.log("handleSheetChanges", index);
//   }, []);

//   return (
//     <View style={styles.container}>
//       {/* <StatusBar
//         animated={true}
//         backgroundColor={theme.backgrounds.white}
//         barStyle="dark-content"
//       />
//       <General /> */}

//       <BottomSheet
//         ref={bottomSheetRef}
//         index={1}
//         snapPoints={snapPoints}
//         onChange={handleSheetChanges}
//       >
//         <View style={styles.contentContainer}>
//           <Text>Awesome 🎉</Text>
//         </View>
//       </BottomSheet>

//       {/* <Toast ref={(ref) => Toast.setRef(ref)} /> */}
//     </View>
//   );
// };

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppDetail />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgrounds.white,
  },

  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
