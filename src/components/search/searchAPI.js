import axios from "axios";

export const searchByTitle = async (term) => {
    try {
        return await axios.post(`https://oni-search-api-apim.azure-api.net/oni-search-api/search?value=${term}`)
        .then((response) => {
            return response.data;
        }).catch((err) => {
            console.log(`error: ${err}`);
        })
    } catch (err) {
        throw new Error("the call failed");
    }
}