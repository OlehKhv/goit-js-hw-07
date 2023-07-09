import { galleryItems } from './gallery-items.js';

const listEl = document.querySelector('.gallery');
let instance;

addMarkup(galleryItems);

listEl.addEventListener('click', onClick);
window.addEventListener('keydown', closeModal);

function onClick(e) {
    e.preventDefault();

    if (!e.target.classList.contains('gallery__image')) {
        return;
    }

    instance = basicLightbox.create(`
    <img src=${e.target.dataset.source} width="1280">
`);

    instance.show();
}

function addMarkup(arrGallery) {
    const markup = arrGallery
        .map(
            ({ preview, original, description }) =>
                `<li class="gallery__item">
                    <a class="gallery__link" href=${original}>
                        <img
                            class="gallery__image"
                            src=${preview}
                            data-source=${original}
                            alt='${description}'
                        />
                    </a>
                </li>`
        )
        .join('');
    listEl.innerHTML = markup;
}

function closeModal(e) {
    if (e.code === 'Escape') instance.close();
}
