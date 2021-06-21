var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("img");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

// products decription shows 
let proBtns = document.querySelectorAll('#proBtn');
for (item of proBtns) {

  item.addEventListener('click', (e) => {
    let cards = e.target.parentNode.parentNode;
    let img = cards.children[0]["src"];
    let h5 = cards.children[1].innerText;
    let price = cards.children[2].innerText;
    e.target.style.boxShadow = '0px 1px 4px 3px #8BC34A'
    let description = document.getElementById('description');
    description.classList.remove('hide')
    description.classList.add('show');
    let strig = `<div id="picinfo">
   <img src="${img}" alt="">
   <h4>${h5}</h4>
   <p>${price}
   </p>
   <span class="fa fa-star checked"></span>
   <span class="fa fa-star checked"></span>
   <span class="fa fa-star checked"></span>
   <span class="fa fa-star unchecked"></span>
   <span class="fa fa-star unchecked"></span>
   <div id="buttons">

     <button id="addtocart">Add to the cart</button>
     <button id="Buybtn">Buy</button>
   </div>
 </div>
<div id="var"></div>
 <div id="product-info">
   <div id="cut">  <button id="cancel">X<button></div>
   <div id="quan">
     <h5>Quantity: </h5> <button id="pre">-</button>
     <input type="text" id="num" value="1"><button
       id="next">+</button>
   </div>
   <div id="size">  
     <h5>Size:&nbsp&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h5> <button id="sixe">S</button>
     <button id="sixe" name="btn">M</button>
     <button id="sixe" name="btn">X</button>
     <button id="sixe">XL</button>

   </div>
   <div id="aboutPro">
     <h4>About the product</h4>
     <p>
     <ul>
       <li>Solids: 100% Cotton; Sport Grey: 90% Cotton, 10% Polyester</li>
       <li>Imported</li>
       <li>Moisture wicking keeps you cool and dry</li>
       <li>Feels soft to the touch; Tag free; Lays flat
       </li>
     </ul>
    
     </p>
     </div>
     </div>
    
</div>

</div>

</div>`;

    description.innerHTML = strig;
    let num = document.getElementById('num').value;
    console.log(num);
    let next = document.getElementById('next');
    next.addEventListener('click', () => {
      num++;
      let inputvalue = document.getElementById('num');
      inputvalue.value = num;
    })
    let pre = document.getElementById('pre');
    pre.addEventListener('click', () => {
      if (num <= 1) {
        let inputvalue = document.getElementById('num');
        inputvalue.value = 1;
      }
      else {
        num--;
        let inputvalue = document.getElementById('num');
        inputvalue.value = num;
      }
    })

    let sixe = document.querySelectorAll('#sixe');
    for (element of sixe) {
      element.addEventListener('click', (d) => {
        d.target.style.border = '1px solid  #8BC34A'
      })
    }
    let cancel = document.getElementById('cancel');
    cancel.addEventListener('click', (p) => {
      description.classList.add('hide');
    e.target.style.boxShadow = '0px 0px 0px 0px white'
     


    })

  })

}




"use strict";

productScroll();

function productScroll() {
  let slider = document.getElementById("slider");
  let next = document.getElementsByClassName("pro-next");
  let prev = document.getElementsByClassName("pro-prev");
  let slide = document.getElementById("slide");
  let item = document.getElementById("slide");

  for (let i = 0; i < next.length; i++) {
    //refer elements by class name

    let position = 0; //slider postion

    prev[i].addEventListener("click", function() {
      //click previos button
      if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
        translateX(position); //translate items
      }
    });

    next[i].addEventListener("click", function() {
      if (position >= 0 && position < hiddenItems()) {
        //avoid slide right beyond the last item
        position += 1;
        translateX(position); //translate items
      }
    });
  }

  function hiddenItems() {
    //get hidden items
    let items = getCount(item, false);
    let visibleItems = slider.offsetWidth / 315;
    return items - Math.ceil(visibleItems);
  }
}

function translateX(position) {
  //translate items
  slide.style.left = position * -315 + "px";
}

function getCount(parent, getChildrensChildren) {
  //count no of items
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  console.log(children)
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}


function myFunction(x) {
  x.classList.toggle("change");
  let hidemenu = document.getElementById('hidemenu');
  if(hidemenu.style.display=='block'){
    hidemenu.style.display ='none';
  }
  else{
    hidemenu.style.display ='block';
  }
}

let submit = document.getElementById('submit');
submit.addEventListener('click',(e)=>{
e.target.style.boxShadow = '0px 1px 4px 3px #8BC34A'
 let formdisplay =  document.getElementById('form-submit');
 if(formdisplay=='block'){
   formdisplay.style.display = 'none'
 }
 else{
  formdisplay.style.display = 'block'

 }
 let hidesubmit = document.getElementById('hidesubmit');
 hidesubmit.addEventListener('click',()=>{
e.target.style.boxShadow = '0px 0px 0px 0px white'
formdisplay.style.display = 'none'


 })
})

