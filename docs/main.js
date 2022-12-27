let shop = document.getElementById("shopicon")
let shopdiv = document.getElementById("ban1")
let boxs = document.getElementById("carts1")
let first = document.getElementById("bodycart")
let main = document.getElementById("maincart")

 
let row = [

{
	id:"procut1",
	pname:"Watch",
	pprice:250,
	pimg:"img1.jpg"
	
},

{
	id:"procut2",
	pname:"Shoe",
	pprice:350,
	pimg:"img2.jpg"
	
},
{
	id:"procut3",
	pname:"Shirt",
	pprice:250,
	pimg:"img3.jpg"
	
},
{
	id:"procut4",
	pname:"Tshirt",
	pprice:250,
	pimg:"img6.jpg"
	
}

];



for(i=0; i<row.length; i++){
	
	//create Element
  	let box = document.createElement("div");
	let img = document.createElement("IMG");
	let box2 = document.createElement("div");
	let name = document.createElement("h3");
	let price = document.createElement("span");
	let addbtn = document.createElement("BUTTON");
   
	
	//add id and class
	box.id = "row[i].id";
	box.className = "probox";
	img.className = "proimg";
	box2.className = "probox2";
	name.className = "proname";
	price.className = "proprice";
	addbtn.className = "proadd"
	

	//add innerText
	
	img.src = row[i].pimg;
	name.innerText = row[i].pname;
    price.innerText = " Rs." + " " + row[i].pprice;
	addbtn.innerText = "Add TO Cart";
	
    //parent 

    boxs.appendChild(box);
    box.appendChild(img);
	box.appendChild(box2);
    box2.appendChild(name);
    box2.appendChild(price);
	box.appendChild(addbtn);
	addbtn.setAttribute("data-cart", row[i].id)
	
}
                    //function for add shoping cart

	shop.addEventListener('click',function1);
    
	function function1(){
		
	shop.disabled = true;
	
	
	// creat element
	
	let cartdiv = document.createElement("div");
	let carthead = document.createElement("h3");
	let closebtn = document.createElement("BUTTON")
	let cartdiv2 = document.createElement("div")
	let carth = document.createElement("span");
	let cartsp = document.createElement("span");
	
	//add class and id
	cartdiv.id = "ctdiv1";
	carthead.className = "head-cart";
	closebtn.className = "colsect";
	cartdiv2.className = "ctdiv5";
	carth.className ="tohead";
	cartsp.className ="toamt";
   
	//parent
    first.appendChild(cartdiv);
	cartdiv.appendChild(carthead);
	cartdiv.appendChild(closebtn);
	cartdiv.appendChild(cartdiv2);
	cartdiv2.appendChild(carth);
	cartdiv2.appendChild(cartsp);
	 	
	//get element
	
	//innertext
	carthead.innerText = "SHOP CART";
    closebtn.innerText ="close";
	carth.innerText = "total";
	cartsp.innerText = "Rs";
	
	
	

	 
	closebtn.addEventListener('click',closse)
	  
	    function closse(){
	    this.parentElement.remove();
        shop.disabled = false;		
        } ; 
	}
	  	
 
	//adding cart function       
	       
	let addbtn = document.getElementsByClassName("proadd");  
	for(let x = 0; x < addbtn.length; x++){
	addbtn[x].addEventListener('click',add, false);	
	}
	
	function add(e){
		
	let getaData = row.find(e => e.id == this.dataset["cart"])
	
	addcarts(getaData)
	
    let mainprt = this.parentNode;
    
    let head = mainprt.querySelector(".proname").innerText;
    let span = mainprt.querySelector(".proprice").innerText;
    let picture = mainprt.querySelector(".proimg").src; 

    	
	
	}
	
	function addcarts(getaData){
		
	let divcart = document.getElementById("ctdiv1");
	let cartdiv2 = document.createElement("div");
	let cartdiv3 = document.createElement("div");
	let cartimg = document.createElement("IMG");
	let cartdiv4 = document.createElement("div");
	let carth4 = document.createElement("h4");
	let cartinput = document.createElement("BUTTON")
	let cartspan = document.createElement("span");
	let ctdelete = document.createElement("BUTTON");
	
    
	
	//set attribute
	cartinput.setAttribute("type", "number");
	
    
	// add class and id name
	
	cartdiv2.className = "ctdiv2";
	cartdiv3.className = "ctdiv3";
	cartimg.className = 'ctimg';
	cartdiv4.className = "ctdiv4";
	carth4.className = "cth4";
	cartspan.className = "ctspn";
	cartinput.className = "ctinput"; 
	ctdelete.className = "ctdel";
	
	
	//parent
	divcart.appendChild(cartdiv2);
	cartdiv2.appendChild(cartdiv3);
	cartdiv3.appendChild(cartimg);
	cartdiv2.appendChild(cartdiv4);
	cartdiv4.appendChild(carth4);
	cartdiv4.appendChild(cartspan);
	cartdiv4.appendChild(cartinput);
	cartdiv2.appendChild(ctdelete);
		
	
	//innertext
     
	cartimg.src = getaData.pimg;
	carth4.innerText = getaData.pname;
	cartspan.innerText = getaData.pprice;
    ctdelete.innerText = "delete";
	cartinput.innerText = "+";
	
    //add cart item
	
	var display = document.querySelector(".ctinput");
	display.addEventListener('click', addcart)
	function addcart(){	
	
	
	let total;
	for(let i = 1; i<5; i++)
	{
	
    total = i*getaData.pprice;
   
	}
	
	let amount = document.getElementsByClassName("toamt") ;
	amount.textContent = total;
};

	
	
	
    let deleteBtn = document.getElementsByClassName("ctdel");
	
	    for(let i = 0; i<deleteBtn.length; i++){
		deleteBtn[i].addEventListener('click', delt)	
	    }		
	}
	 
	
    // delete function calling	
		function delt(){
	    this.parentElement.remove();	
        } ; 
		
		
	// 	
		
		
    