import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
import { galleryItems } from './gallery-items.js';


const galleryList = document.querySelector('.gallery');

const galleryItemsMarkup = galleryItems.map(item => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
    </li>`
).join('');
galleryList.innerHTML = galleryItemsMarkup;


const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom'
});