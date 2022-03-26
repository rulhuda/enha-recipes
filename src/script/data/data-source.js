const baseUrl = "https://themealdb.com/api/json/v1/1";

class DataSource{
    static searchMeal(keyword){
        return fetch(`${baseUrl}/filter.php?i=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.meals){
                return Promise.resolve(responseJson.meals)
            }else{
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }

};

export default DataSource;