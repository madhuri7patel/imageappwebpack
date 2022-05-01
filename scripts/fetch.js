
// let sNews = (url) => {
//     fetch(url).then((res)=>{
//         return res.json();
//     }).then((res)=>{
//         console.log(res);
//         return res;
//     })
// }

let sNews = async (url) =>{
   try {
    let res = await fetch(url);
    let data = await res.json();
    // console.log(data); 
    return data; 
   } catch (err) {
       console.log(err);
   }    
}

let append = (data,container) =>{
    data.forEach(el => {
        // console.log(el);

        let mDiv = document.createElement("div");
        mDiv.addEventListener("click",function(){
            myfunc(el);
        })

        let iDiv = document.createElement("div");
        let image = document.createElement("img");
        image.src=el.urlToImage;
        iDiv.append(image);

        let ti = document.createElement("div")
        let title = document.createElement("h3");
        title.innerText=el.author;
        let cont = document.createElement("p");
        cont.innerText=el.description;
        ti.append(title,cont)

        mDiv.append(iDiv,ti);
        container.append(mDiv);
    });
}


function myfunc(el){
    localStorage.setItem("kesheri",JSON.stringify(el));
    window.location.href="news.html";
}














export {sNews,append};


/*
(20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0:
author: "Sean Keane"
content: "Lieutenant Gordon and Batman uncover an intense conspiracy as they hunt the Riddler.\r\nJonathan Olley/DC\r\nThe Batman landed in movie theaters on Friday, with Robert Pattinson donning Bruce Wayne's ico… [+9649 chars]"
description: "Robert Pattinson's first Dark Knight adventure weaves a complex tale of Gotham corruption and features Barry Keoghan as a mysterious character, so let's break it all down."
publishedAt: "2022-03-04T13:00:00Z"
source: {id: null, name: 'CNET'}
title: "'The Batman' Ending and Creepy Cameo, Explained - CNET"
url: "https://www.cnet.com/news/the-batman-ending-and-creepy-cameo-explained/"
urlToImage: "https://www.cnet.com/a/img/ttrjiqTQdlVnshL0TwCP2rjmZD0=/1200x630/2022/02/18/78cd8686-1abf-4e10-9332-e41d80a2c9e3/the-batman-jonathan-olley-dc-rev-1-tbm-01883r-high-res-jpeg-1-promo.jpg"
*/





