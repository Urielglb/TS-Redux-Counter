import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Routes from './routes/index';
import './index.css'
import store from "./store/index"


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
