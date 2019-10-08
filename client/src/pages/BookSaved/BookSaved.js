import React, { Component } from "react";
import "./BookSaved.css";

class Saved extends Component {
    state = {
        books: [],
        title: "",
        author: "",
        synopsis: ""
    }

    render() {
        return (
            <section>
                <div className="book-saved">
                    <h3>Saved Books Listed Below</h3>

                </div>
            </section>
        );
    };
};




export default BookSaved