import axios from "axios";

export const searchByTitle = async (term) => {
    try {
        await axios.post(`https://oni-search-api-apim.azure-api.net/oni-search-api/search?value=${term}`)
        .then((response) => {
            return response.data;
        }).catch((err) => {
            console.error(`error: ${err}`);
        })
    } catch (err) {
        throw new Error("the call failed");
    }
}