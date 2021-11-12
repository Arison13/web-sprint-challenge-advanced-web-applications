import axiosWithAuth from "../utils/axiosWithAuth";

const articleService = () => {
    let data 
    axiosWithAuth()
        .get('/articles')
            .then(res => {
                data = res.data;
                console.log("this is the data in article,", data);
                return data
            })
            .catch(err => {err})
            
            
return data

}


export default articleService;

//I've made the call but i dont know if im returning it correctly or if im not calling setting state correctly inside the View Component

//Task List:
//1. Complete articleServices. This module should make an authenticated call and return an array of those articles.