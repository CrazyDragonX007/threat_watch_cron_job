const axios = require("axios");
const url = "https://threat-watch.onrender.com/articles/newscatcher";
const page_size = 1000;
const page = 1;

const params = {
    page: page,
    page_size: page_size
}

axios.get(url,params).then(response=>{
    const data = response.data;
    console.log(data);
    const totalArticles = data.total_hits;
    if(totalArticles>page_size){
        const pages = Math.ceil(totalArticles/page_size);
        for(let i=2;i<=pages;i++){
            params.page = i;
            axios.get(url,params).catch(err=>console.log(err));
        }
    }
})