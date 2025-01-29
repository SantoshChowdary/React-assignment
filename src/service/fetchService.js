const API = "https://apis.ccbp.in/list-creation/lists";

export const fetchItemsService = async () => {
    const apiData = {
        data : [],
        error : false,
        errorData : null
    };

    try{
        const response = await fetch(API);
        const data = await response.json();
        apiData.data = data
    } catch(error) {
        apiData.error = true;
        apiData.errorData = error.message;
    };
    // console.log(apiData)
    return apiData;
}