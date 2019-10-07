import React from "react";
import "./BookSearch.css";
import Results from "./components/Results/Results";


function BookSearch(props) {
    return (
        <section>
            <div className="book-search">
                <h3>Search for Books Here!</h3>
                <input type="search" placeholder="Book Title Please" />
            </div>
        </section>
        <Results />
    );
}
export default BookSearch
