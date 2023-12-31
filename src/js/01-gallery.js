// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const gallery = document.querySelector('.gallery');
function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/>
        </a>
    </li>`
    )
    .join('');
}

gallery.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
