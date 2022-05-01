
import { navbar } from "../conponents/navbar.js";
import { sNews,append } from "./fetch.js";
document.getElementById("nav").innerHTML=navbar();

async function search(){
    let query = document.getElementById("search").value;
    // console.log(query);
    let url = `https://blog-search-u3c4.herokuapp.com/api/search/?q=${query}`;
    let container = document.getElementById("container");
    let data=await sNews(url);
    append(data,container);
    // console.log(data);
    
}
document.getElementById("search").addEventListener("keydown",search);














