/**
 * @author ChenTao
 * 
 * Client-side of example of 'graphql-ts-client' 
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { setGraphQLClient } from './generated/Environment';
import { GraphQLClient } from 'graphql-request';

setGraphQLClient(
  new GraphQLClient(
    "http://localhost:8080/graphql"
  )
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();