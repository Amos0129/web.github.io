function rain(){
  let amount =  500; // i標籤個數,流星個數
  let body = document.querySelector('body'); // 取得body元素
  let i = 0;
  while(i < amount){
      let drop = document.createElement('i'); //創建i這個標籤
      let size = Math.random()*5; // 寬度不超過5px
      let posX = Math.floor(Math.random() * window.innerWidth); // i產生的位置以亂數生成不超過網頁寬度

      let delay = Math.random() * - 20; // 讓動畫加載時間為亂數
      let duration = Math.random() * 5; // 雨滴落下的速度亂數決定

      drop.style.width = 3 + size + 'px'; // i標籤的寬度以亂數決定
      drop.style.left = posX + 'px'; // i生產的位置以px為單位
      drop.style.animationDelay = delay+'s'; // 動畫加載時間
      drop.style.animationDuration = 3 + duration+'s'; // 速度 
      body.appendChild(drop); 
      i++;
  }
}

rain();

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("Slides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); 
}

