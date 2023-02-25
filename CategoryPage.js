const url=new URLSearchParams(window.location.search);
const cat=url.get(`cat`);
// -------------------------------------------------//
fetch("data.json")
.then(function(response){
    return response.json();
})
.then(function(data){
    let catHead=document.querySelector(".cat-head");
    let catCard=document.querySelector(".cat-card");
    let title=document.querySelector("title");
    let catHeadDetail=cat+``;
    let catCardDetail=``;
    for(let p of data){
        if(`${p.category}`== cat){
            title.innerHTML=cat;
            catCardDetail +=`${card(p.image[0],p.name,p.id,p.rating,p.price)}`;
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
          <p>${price}</p>
        </div>
      </div>
    </div>
  </div>
  </a>
    `;

}