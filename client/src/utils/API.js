import axios from "axios";

export default API {
    getBooks: function () {
        return axios.get("/api/books");
    },

    getBook: function (id) {
        return axios.get("/api/books" + id);
    },

    deleteBook: function (id) {
        return axios.delete("/api/books" + id);
    },

    saveBook: function (id) {
        return axios.post("/api/books" + id);
    }
}