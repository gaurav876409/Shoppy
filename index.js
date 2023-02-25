// $("#navbar").load(`nav.html`);
fetch("data.json")
.then(function(response){
    return response.json();
})
.then(function(data){
    let catArray=new Array();
    let x=document.querySelector(".deal-cards");
    let y=``;
    let r=Math.floor(Math.random()*12+1)
    for(let p of data){
        if(`${p.id}`%100==r){
        y +=`${card(p.image[0],p.name,p.id,p.rating,p.price)}`;
      }
       if(!catArray.includes(`${p.category}`)){
        catArray.push(`${p.category}`);
       } 
    }
    x.innerHTML=y;

    // product category wise
     
    
    let catProduct= document.querySelector(".cat-product");
    let catHtml=``;
    for(let cat of catArray){
      var count=0;
      let z=``;
      for(let p of data){
        if(count<4){ 
        if(`${p.category}`== cat){
          z+=`${card(p.image[0],p.name,p.id,p.rating,p.price)}`;
          count++;
        }
      }
        else break;
      }
      catHtml+=`

          <div class="cat">
        <div class="cat-head">
          <h2 class="cat-heading">${cat}</h2>
          <a href="CategoryPage.html?cat=${cat}">Veiw All</a>
        </div>
        <div class="cat-card">${z}</div>
      </div>

          `; 
    }
    catProduct.innerHTML=catHtml;

})

$('.carousel').carousel({
    interval: 2000
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
          <p>${price}</p>
        </div>
      </div>
    </div>
  </div>
  </a>
    `;

}

function searchbar(event){
  event.preventDefault();
}
