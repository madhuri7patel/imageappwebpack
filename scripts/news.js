

let x = JSON.parse(localStorage.getItem("kesheri"));
let container = document.getElementById("container")

let mDiv = document.createElement("div");       

        let iDiv = document.createElement("div");
        let image = document.createElement("img");
        image.src=x.urlToImage;
        iDiv.append(image);

        let ti = document.createElement("div")
        let title = document.createElement("h3");
        title.innerText=x.author;
        let cont = document.createElement("p");
        cont.innerText=x.description;
        ti.append(title,cont)

        mDiv.append(iDiv,ti);
        container.append(mDiv);