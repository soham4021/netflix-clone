import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

//axios.get(url) => "https://api.themoviedb.org/3/url" , so sending a get request with axios basically appends the url with a / infront of it and sends the request

export default instance;
