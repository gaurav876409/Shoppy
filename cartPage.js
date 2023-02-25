fetch("data.json")
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
       if(localStorage.length==0){ //for empty cart
        let emptyContainer=document.querySelector(".cart-container");
        emptyContainer.innerHTML=`
        <div class="empty-container">
        <img src="images/emptycart.png">
        <h2>Your cart is empty!</h2>
        </div>
        `;
       }
       else{ //cart with items
        let cart=document.querySelector(".cart-items");
        let total=document.querySelector(".total");
        let x=``;
        let totalPrice=0;
        for(let i=0;i<localStorage.length;i++){
            let id=localStorage.key(i);
            for(let details of data){
                var flag=false;
                if(details.id==id){
                    let subPrice=0;
                    // price string to number
                    for(var str of details.discount){
                        if(str >='0' && str <='9' ){
                            subPrice=subPrice*10+parseInt(str);
                        }
                    }
                    // multiply price with quatity
                    subPrice=subPrice*parseInt(localStorage.getItem(id));
                    totalPrice+=subPrice;
                    x+=`
                    <div class="cart-item">
                        <img src="${details.image[0]}">
                        <div class="cart-info">
                            <h3>${details.name}</h3>
                            <p>Price: ${details.discount}</p>
                            <div class="quantity">
                                <a href="" onclick=removeItem(${id})>-</a>
                                <p>${localStorage.getItem(id)}</p>
                                <a href="" onclick=addItem(${id})>+</a>
                            </div>
                        </div>
                        <div class="subtotal">₹${subPrice}</div>
                    </div>
                    
                    `;
                }
                if(flag===true) break;
            }
            
        }
        cart.innerHTML=x;
        if(totalPrice>0) total.innerHTML=`<div id="placeorder"><a href="#"><p>Place Order</p></a></div> <div id="Total_div"><p>Total Price:</p><span>₹${totalPrice}</span></div>`;
       }
    });

    function addItem(id){
        localStorage.setItem(id,parseInt(localStorage.getItem(id))+1);
    }
    function removeItem(id){
        if(localStorage.getItem(id)==1) localStorage.removeItem(id);
        else localStorage.setItem(id,parseInt(localStorage.getItem(id))-1);
    }