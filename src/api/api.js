import axios from "axios";
import md5 from "md5";
import { 
    publicKey, 
    privateKey 
} from "./keys";

import { 
    urlComis, 
    urlComisId 
} from "./url";

const ts = 1;
const hash = md5(ts + privateKey + publicKey);

export const apiGetComics = async () => {
    const url = `${urlComis}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    try {
        const response = await axios.get(url);
        return response.data.data.results;
    } catch (error) {
        console.error('Error fetching data from Marvel API:', error);
        throw error;
    }
};

export const apiGetComicsDetail = async (idArgs) => {
    const url = `${urlComisId}${idArgs}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    try {
        const response = await axios.get(url);
        return response.data.data.results;
    } catch (error) {
        console.error('Error fetching data from Marvel API Detail:', error);
        throw error;
    }
};
