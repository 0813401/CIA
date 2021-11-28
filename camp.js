// const featured_photos = document.getElementById('featured_photos');
// const carousel_item = featured_photos.getElementsByClassName('carousel-item');

// var div_container = document.createElement('div');
// div_container.setAttribute('class', 'carousel-indicators')
// featured_photos.appendChild(div_container);
// for(let i = 0; i<carousel_item.length; i++){
//     var button = document.createElement('button');
//     button.setAttribute('data-bs-silde-to', i.toString()); 
//     button.setAttribute('aria-label', 'Silde '+(i+1).toString());
//     button.style.display = 'inline';
//     var img = document.createElement('img');
//     img.style.height = '30%';
//     img.style.maxHeight = '100px';
//     img.style.padding = '0.5%';
//     img.style.objectFit = 'cover';
//     img.src = carousel_item[i].getElementsByTagName('img')[0].src;
//     // img.addEventListener('click', function(){
        
//     // });
//     button.appendChild(img);
//     // console.log(img);
//     // button.innerHTML = img;
//     div_container.appendChild(button);
// }

$(".owl-carousel").owlCarousel({
    loop: true, // 循環播放
    margin: 10, // 外距 10px
    nav: true, // 顯示點點
    responsive: {
      0: {
        items: 1 // 螢幕大小為 0~600 顯示 1 個項目
      },
      600: {
        items: 3 // 螢幕大小為 600~1000 顯示 3 個項目
      },
      1000: {
        items: 5 // 螢幕大小為 1000 以上 顯示 5 個項目
      }
    }
  });
  
