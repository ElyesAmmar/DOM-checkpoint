// method 1 by id
let p1=document.getElementById('product1');
let Q = document.getElementById('quantity').innerHTML;
let Q2=Q;
let  p = document.getElementById('price').innerHTML;
let DL=document.getElementById('DL');
let newp= document.createElement('p');
newp.setAttribute("id","total1");
document.getElementById('product1').appendChild(newp);


function Tot() {
    total1.innerHTML=Q*p;
}
Tot();

    //    method 1 click event listener
function modifyQuantity(){
    Q++;
    quantity.innerHTML=Q;
    if (Q != Q2){
        Tot()
    }
    else if(Q=Q2){Tot();}
    
}

    //    method 2 click event listener
let btn2=document.getElementById('btn-');
btn2.addEventListener("click", function() {
    Q--
    quantity.innerHTML=Q
    if (Q != Q2){
        Tot()
    }
   else if(Q=Q2){Tot();}
}
)

DL.addEventListener("click", function(){
    p1.remove();
}
)





// method 2 by classname
let prd=document.getElementsByClassName('products');
let Q3=document.getElementsByClassName('quantity2');
let p2=document.getElementsByClassName('price2');
const Q4=Q3;
let T=document.getElementsByClassName('total');
let btnPO=document.getElementsByClassName('btn+1');
let btnNE=document.getElementsByClassName('btn-1');
let del=document.getElementsByClassName('DLT');
console.log(Q3);
console.log(Q3[0].innerHTML);
console.log(btnPO[0].innerHTML);
console.log(Q4[0].innerHTML);



for(let i=0; i<prd.length; i++){
function Tot2() {
    T[i].innerHTML=Q3[i].innerHTML*p2[i].innerHTML;
    
}
Tot2();


btnPO[i].addEventListener("click", function(){
    Q3[i].innerHTML++;
    console.log(Q3[i].innerHTML);
    console.log(Q4[i]);
    if (Q3[i].innerHTML != Q4[i]) {
        Tot2();
    } else if(Q3[i].innerHTML!= Q4[i]){ Tot2(); }
    

}
)

btnNE[i].addEventListener('click',function(){
    Q3[i].innerHTML--;
    if (Q3[i].innerHTML != Q4[i]) {
        Tot2();
    } else if(Q3[i].innerHTML!= Q4[i]){ Tot2(); }
}
)

del[i].addEventListener("click", function(){
    prd[i].remove();
    // if(prd.length==1){
    //     prd[i].remove()
    // }
   }
   ) 
 

}








