import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app";
import ErrorBoundry from "./components/error-boundry/";
import BookstoreService from "./services/bookstore-service";
import { BookstoreSercviceProvider } from "./components/bookstore-service-context";

import store from "./store";

const bookstorService = new BookstoreService();

ReactDOM.render(
    <ReduxProvider store={store}>
        <ErrorBoundry>
             <BookstoreSercviceProvider value={bookstorService} >
                <Router>
                    <App />
                </Router >
             </BookstoreSercviceProvider>
        </ErrorBoundry>
    </ReduxProvider>,
    document.getElementById('root')
);