import React, { Component } from "react";
import "./BookSearch.css";
import Results from "./components/Results/Results";

class Search extends Component {
    state = {
        books: [],
        title: "",
        author: "",
        synopsis: ""
    }

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data, title: "", author: "", synopsis: "" })
            )
            .catch(err => console.log(err));
    }

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    }
    function BookSearch(props) {
    return (
        <section>
            <div className="book-search">
                <h3>Search for Books Here!</h3>
                <input type="search" placeholder="Book Title Please" />
            </div>
        </section>

    );


}
export default BookSearch;
