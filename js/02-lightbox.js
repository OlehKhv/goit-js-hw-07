import { galleryItems } from './gallery-items.js';

const listEl = document.querySelector('.gallery');

addMarkup(galleryItems);

const lightbox = new SimpleLightbox('.gallery__link', {
    captionsData: 'alt',
    captionDelay: 250,
});

function addMarkup(arrGallery) {
    const markup = arrGallery
        .map(
            ({ preview, original, description }) =>
                `<li class="gallery__item">
                    <a class="gallery__link" href=${original}>
                        <img
                            class="gallery__image"
                            src=${preview}
                            alt='${description}'
                        />
                    </a>
                </li>`
        )
        .join('');
    listEl.innerHTML = markup;
}

