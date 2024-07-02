let theImg = document.querySelector('#img')
let imgTitle = document.querySelector('#imgTitle')

function change(image){
    theImg.src=image.src;
    imgTitle.innerText = image.alt;
    theImg.parentElement.style.display='block';
}
