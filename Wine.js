let price=[180,160,180,250,300];
let quantity=[0,0,0,0,0];

let product_1={
    brand:"Budweiser",
    price:180,
    msg:"Few left",
    qty:1,
    totalprice:0,
};
let product_2={
    brand:"Kingfisher",
    price:160,
    msg:"Few left",
    qty:2,
    totalprice:0,
};
let product_3={
    brand:"Tuborg",
    price:180,
    msg:"Few left",
    qty:0,
    totalprice:0,
};
let product_4={
   brand:"Brocode",
    price:250,
    msg:"Few left",
    qty:0,
    totalprice:0,
};
let product_5={
    brand:"Monkey",
     price:300,
     msg:"Few left",
     qty:0,
     totalprice:0,
 };


let product_info = [product_1,product_2,product_3,product_4,product_5];

function loadHtml()
{
    for(let i=1;i<=price.length;i++){
        console.log(i);
        let cartItem=`<div><span>${product_info[i-1].brand}</span></div>
        <div><span>${product_info[i-1].price}</span></div>
        <div><span id="p-msg${i.toString()}">${product_info[i-1].msg}</span></div>
        <div><i class="fa fa-minus-circle pe-2"
        onclick="decX(${i.toString()});"></i><span id="p-qty${i.toString()}">${product_info[i-1].qty}</span><i class="fa fa-plus-circle pe-2"
        onclick="incX(${i.toString()});"></i></div>
        <div><span id="t-price${i.toString()}">${product_info[i-1].qty*product_info[i-1].totalprice}</span></div>`;
        document.getElementById('item'+i.toString()).innerHTML=cartItem;
    }
}

loadHtml();

function decX(id)
{
    if (quantity[id-1]>0)
    {
        quantity[id-1]--;
        productcalculation(id);
        setMsg(id);
    }
}


function incX(id)
{
    quantity[id-1]++;
    productcalculation(id);
    setMsg(id);
}

function productcalculation(id)
{
    document.getElementById('p-qty'+id.toString()).innerText=quantity[id-1];
    document.getElementById('t-price'+id.toString()).innerText=quantity[id-1]*price[id-1];
}

function setMsg(id)
{
    if(quantity[id-1]===0){
        document.getElementById('p-msg'+id.toString()).innerText="Out of stock";
    }else if (quantity[id-1]<10){
        document.getElementById('p-msg'+id.toString()).innerText="Few left";
    }else{
        document.getElementById('p-msg'+id.toString()).innerText="In stock";
    }
    }
