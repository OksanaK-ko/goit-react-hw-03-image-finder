import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/";
const key = "19211100-bdfc54b640ca60be4b98fccbf";

export const fetch = (query, page) => {
  return axios
    .get(
      `?q=${query}
         &page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((res) => res.data.hits)
    .catch((error) => console.log(error));
};
