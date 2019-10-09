import React, { Component } from "react";
import "./BookSaved.css";
import API from "../../utils/API";

class BookSaved extends Component {
    state = {
        books: [],
    };

    componentDidMount() {
        API.getBook(this.props.match.params.id)
            .then(res => this.setState({ book: res.data }))
            .catch(err => console.log(err))
    };



    render() {
        return (
            <section>
                <div className="book-saved">
                    <h3>Saved Books Listed Below</h3>
                    <h1>{this.state.book.title} by {this.state.book.author}</h1>
                    <article>
                        <h1>Synopsis: </h1>
                        <p>
                            {this.state.book.synopsis}
                        </p>
                    </article>
                </div>
            </section>
        );
    };
};




export default BookSaved