import axios from "axios";

axios.defaults.baseURL = `https://pixabay.com/api/`;
let ApiKey = `19822472-14ec0e3f9ba277805ee5b06f8`;
const perPage = 12;

const PixImages = ({ query = "", curentPage = 1 }) => {
    const url = `https://pixabay.com/api/?q=${query}&page=${curentPage}&key=${ApiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

    return axios.get(url).then(({ data }) => {
        return data.this;
    });
};


export default PixImages;