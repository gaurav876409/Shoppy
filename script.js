// const url=new URLSearchParams(window.location.search);
// const code=url.get(`code`);
// -------------------------------------------------//
fetch("products.json")
.then(function(response){
    return response.json();
})
.then(function(products){
    let x=document.querySelector(".container");
    let y=``;
    for(let p of products){
        if(`${p.productCode}`== code) y =`<h1>${p.name}</h1>`;
    }
    x.innerHTML=y;
})

