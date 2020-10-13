//pobrabranie referencji
const gallery = document.querySelectorAll('.gallery img');


//zapisanie sie na zdarzenie click
for (let idx = 0; idx < gallery.length; idx++){
    const img = gallery[idx];
    img.addEventListener('click', showLightbox);
}

function showLightbox(ev){
    console.dir(ev.target);
    const lightbox = document.querySelector('.lightbox');
    const img = document.querySelector('.lightbox img');
    const imgUrl = ev.target.src;
    img.src = imgUrl;
    lightbox.classList.add('visible');
}




// const firstImg = document.querySelector('#firstImg');
// //zapisanie sie na zdarzenie click
// firstImg.addEventListener('click'), showLightbox;

// function showLightbox(){
//     const lightbox = document.querySelector('.lightbox');
//     lightbox.classList.add('visible');
// }

// //powinno zamknac obrazek po kliknieciu w dowolne miejsce na ekranie
// firstImg.addEventListener('click'), hideLightbox;

// function hideLightbox(){
//     const lightbox = document.querySelector('.lightbox');
//     lightbox.classList.remove('visible');
// }