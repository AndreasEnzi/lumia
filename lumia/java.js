
let carContents ={ };


function search(needle){
    console.log('I would search'); 
    
    let haystack = $('.product');
   console.log('haystack', haystack, 'needle', needle)
    for(let product of haystack){

        let h2=$(product).find('h2').text();
        console.log('h2',h2);
        if(h2.toLowerCase().includes(needle.toLowerCase())){


            $(product).show();
        }
        else{
            $(product).hide();
        }
    }
        
}



function addToCart(productButton){

    console.log('I would add to cart');

    let price= $(productButton).children('span').text();
    console.log('price',price);
    let name =$(productButton).siblings('h2').text();
    console.log('name',name);

    if(!carContents[name]){
        carContents[name]={

            name: name,
            price: price,
            amount: 0
        }
        

    }


    carContents[name].amount++;

    console.log('cartContents', carContents);

    renderCart()
}

function renderCart(){

    let cart = $('#cart ul')
    cart.find(`li`).not(`.total`).remove();
    for(let name in carContents){//item = index
        let product = carContents[name];

        cart.prepend(`<li>${product.name}
        <span>
        ${product.price}</span></li>`)

    }
    //calculate total!!
}
