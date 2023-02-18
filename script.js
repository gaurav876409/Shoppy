const url = new URLSearchParams(window.location.search);//URL searchparams---> It uses this value to filter the products from the JSON data and store only the products that match the category.
const id = url.get(`code`);
fetch("data.json")
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		let smallimage = document.querySelector(".small-image");
		let mainimage = document.querySelector(".main-image");
		let name = document.querySelector(".name");
		let rating = document.querySelector(".rating");
		let price = document.querySelector(".price");
		let disprice = document.querySelector(".dis-price");
		let description = document.querySelector(".des");
		let suggestion = document.querySelector(".sugg-card");
		let title = document.querySelector("title");
		for (let detail of data) {
			if (`${detail.id}` == id) {
				title.innerHTML = `${detail.name}`;
				mainimage.innerHTML = `<img src="${detail.image[0]}">`;
				name.innerHTML = `${detail.name}`;
				rating.innerHTML = `${detail.rating}`;
				price.innerHTML = `${detail.price}`;
				disprice.innerHTML = `${detail.discount}`;
				let y = ``;
				for (let img of detail.image) {
					y += `<img src="${img}" onclick=myFunction("${img}")>`
				}
				smallimage.innerHTML = y;
				let x = ``;
				for (let p of detail.description) {
					x += `<p>${p}</p>`
				}
				description.innerHTML = x;

				let z = ``;
				let count = 0;
				for (let p of data) {
					if (count < 4) {
						if (`${p.category}` == `${detail.category}` && `${p.id}` != id) {
							z += `${card(p.image[0], p.name, p.id, p.rating, p.price)}`;
							count++;
						}
					}
					else break;
				}
				suggestion.innerHTML = z;
			}
		}
	});

function myFunction(url) {
	let mainimage = document.querySelector(".main-image");
	mainimage.innerHTML = `<img src=${url}>`;
}

function card(url, name, productCode, rate, price) {

	return `
    <div class="cart-flex">
        <a href="productPage.html?code=${productCode}" target="_blank" class="link-style">
        <div class="card">
            <img src='${url}' alt="">
            <div class="card-detail">
                <div class="pro-name">${name}</div>
                <div class="price-rate">
                    <div class="rate">
                        <p>Rating:</p>
                        <p>${rate}/5</p>
                    </div>
                    <div class="price">
                        <p>Price:</p>
                        <p>${price}</p>
                    </div>
                </div>
            </div>
        </div>
       </a>
	</div>
    `;

}
 function addToCart(){
	if(localStorage.getItem(id)) localStorage.setItem(id,parseInt(localStorage.getItem(id))+1);
	else localStorage.setItem(id,1);
 }