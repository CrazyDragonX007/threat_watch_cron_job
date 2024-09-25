const page_size = 1000;
const params = {
    page: 1,
    page_size: page_size
}
const url = "https://threat-watch.onrender.com/articles/newscatcher?"+new URLSearchParams(params).toString();
fetch(url).then(response=>{
    response.json().then(data=>{
        if(data.total_hits>page_size){
            const pages = Math.ceil(data.total_hits / page_size);
            let x=2;
            const handle = setInterval(()=>{
                if(x>=pages){
                    clearInterval(handle);
                }
                params.page = x;
                const url = "https://threat-watch.onrender.com/articles/newscatcher?" + new URLSearchParams(params).toString();
                fetch(url).catch(err => console.log(err));
                x++;
            },1000);
        }
    }).catch(err=>console.log(err));
}).catch(err=>console.log(err));