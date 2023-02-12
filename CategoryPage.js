const url=new URLSearchParams(window.location.search);
const cat=url.get(`cat`);
// -------------------------------------------------//
fetch("products.json")
.then(function(response){
    return response.json();
})
.then(function(products){
    let catHead=document.querySelector(".cat-head");
    let catCard=document.querySelector(".cat-card");
    let catHeadDetail=cat+``;
    let catCardDetail=``;
    for(let p of products){
        if(`${p.category}`== cat){
            catCardDetail +=`${card(p.img,p.name,p.productCode,p.rating,p.price)}`;
        }
    }
    catHead.innerHTML=catHeadDetail;
    catCard.innerHTML=catCardDetail;
})

function card(url,name,productCode,rate,price){

    return `
    <a href="productPage.html?code=${productCode}" target="_blank" class="link-style">
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