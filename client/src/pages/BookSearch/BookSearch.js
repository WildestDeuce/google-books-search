import React from "react";
import "./BookSearch.css";

function BookSearch(props) {
    return (
        <section>
            <div className="book-search">
                <h3>Search for Books Here!</h3>
                <input type="text" placeholder="What Book are You Looking For?" />
            </div>
        </section>
    );
}
export default BookSearch
