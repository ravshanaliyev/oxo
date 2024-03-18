import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { client } from './service/client.js'
import { Provider } from 'react-redux'
import { store } from './redux/store.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <App />
          <ToastContainer />
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
