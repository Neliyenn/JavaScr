const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const images = document.querySelectorAll('img');
images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active');
        const img = document.createElement('img');
        img.src = image. src;
        while (lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
    });
});

lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return;
    lightbox.classList.remove('active');
});





// //pobrabranie referencji
// const gallery = document.querySelectorAll('.gallery img');

// //zapisanie sie na zdarzenie click
// for (let idx = 0; idx < gallery.length; idx++){
//     const img = gallery[idx];
//     img.addEventListener('click', showLightbox);
// }

// function showLightbox(ev){
//     console.dir(ev.target);
//     const lightbox = document.querySelector('.lightbox');
//     const img = document.querySelector('.lightbox img');
//     const imgUrl = ev.target.src;
//     img.src = imgUrl;
//     lightbox.classList.add('visible');
// }


// //pobrabranie referencji
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