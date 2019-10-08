import React, { Component } from "react";
import "./BookSearch.css";
import API from "../client/utils/API";

class BookSearch extends Component {
    state = {
        books: [],
        title: "",
        author: "",
        synopsis: ""
    };

    componentDidMount() {
        this.loadBooks();
    };

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data, title: "", author: "", synopsis: "" })
            )
            .catch(err => console.log(err));
    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    handleInputChange = () => {
        const { name, value } = event.target;
        this.state({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
            API.saveBook({
                title: this.state.tile,
                author: this.state.author,
                synopsis: this.state.synopsis
            })
                .then(res => this.loadBooks())
                .catch(err => console.log(err))
        };
    };
    render() {
        return (
            <section>
                <div className="book-search">
                    <h3>Search for Books Here!</h3>
                    <input type="search" placeholder="Book Title Please" />
                </div>
            </section>

        );
    };

};
export default BookSearch;
