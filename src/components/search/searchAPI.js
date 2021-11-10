import axios from "axios";

export const searchByTitle = async (term) => {
    if (!term) {
        throw new Error(`Search API Error! '${term}' is not a valid input`);
    };

    try {
        return await axios.post(`https://oni-search-api-apim.azure-api.net/oni-search-api/search?value=${term}`)
        .then((response) => {
            return response.data;
        }).catch((err) => {
            throw new Error(`Search API Error! The request failed: ${err.message}`)
        })
    } catch (err) {
        throw new Error(`Search API Error! The promise was rejected: ${err.message}`);
    };
}