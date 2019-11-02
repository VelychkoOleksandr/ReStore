import React from "react";
import { BookstoreSercviceConsumer } from "../bookstore-service-context";

const withBookstoreService = () => (Component) => {
    
    return  (props) => {
        return (
            <BookstoreSercviceConsumer>
                {
                    (bookstoreService) => {
                        return <Component {...props}
                                          bookstoreService={bookstoreService}  />
                    }
                }
            </BookstoreSercviceConsumer>
        );
    }
}

export default withBookstoreService;