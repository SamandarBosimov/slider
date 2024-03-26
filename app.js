let prev = document.getElementById('prev')
let next = document.getElementById('next')
let imgs = document.querySelectorAll('img')

let i = 0;

next.onclick = function(){
    imgs[i].style.display = 'none';

    i++;

    if(imgs.length <= i){
        i = 0;
    }
    imgs[i].style.display = 'block'
}

prev.onclick = function(){
    imgs[i].style.display = 'none';

    i--;

    if(i < 0){
        i = imgs.length - 1;
    }
    imgs[i].style.display = 'block'
}