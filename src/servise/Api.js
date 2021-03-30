import axios from "axios";

axios.defaults.baseURL = `https://pixabay.com/api/`;
let myApiKey = `19822472-14ec0e3f9ba277805ee5b06f8`;
const perPage = 12;

const pixImages = ({ query = "", currentPage = 1 }) => {
    const url = `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=${myApiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

    return axios.get(url).then(({ data }) => {
        return data.hits;
    });
};


export default pixImages;