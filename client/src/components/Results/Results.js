import React from "react";
import "./Results.css";

function Results(props) {
    return (
        <container id="results-container">
            <h3>Results</h3>
            <section className="book-display">

                <button className="view-button"></button>
                <button className="save-button"></button>
            </section>
        </container>
    )
}

export default Results;