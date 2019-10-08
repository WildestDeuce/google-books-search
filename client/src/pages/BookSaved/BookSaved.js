import React, { Component } from "react";
import "./BookSaved.css";
import API from "../../utils/API";

class Saved extends Component {
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

                </div>
            </section>
        );
    };
};




export default BookSaved