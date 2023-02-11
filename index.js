fetch("products.json")
.then(function(response){
    return response.json();
})
.then(function(products){
    let x=document.querySelector(".deal-cards");
    let y=``;
    let r=Math.floor(Math.random()*4+1)
    for(let p of products){
        if(`${p.productCode}`%100==r)
        y +=`${card(p.img,p.name,p.productCode,p.rating,p.price)}`;
    }
    x.innerHTML=y;
})
$('.carousel').carousel({
    interval: 2000
})

function card(url,name,productCode,rate,price){

    return `
    <a href="CategoryPage.html?code=${productCode}" target="_blank" class="link-style">
    <div class="card">
    <img src='${url}' alt="">
    <div class="card-detail">
      <div class="pro-name">${name}</div>
      <div class="price-rate">
        <div class="rate">
          <p>Rating :</p>
          <p>${rate}/5</p>
        </div>
        <div class="price">
          <p>Price :</p>
          <p>Rs.${price}</p>
        </div>
      </div>
    </div>
  </div>
  </a>
    `;

}
