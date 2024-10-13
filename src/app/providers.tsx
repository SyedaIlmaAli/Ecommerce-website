"use client"

import { Provider } from 'react-redux';
import { store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';


const Providers = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const persistor = persistStore(store)
  return (
    <Provider store={store} >
      <PersistGate persistor={persistor}>

      {children}
      </PersistGate>
    </Provider >
  )
}

export default Providers
