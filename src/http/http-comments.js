import axios from "axios";

const httpComments = {
  get(query) {
    return axios.get("https://jsonplaceholder.typicode.com/comments", {
      params: query,
    });
  },
};

export default httpComments;
