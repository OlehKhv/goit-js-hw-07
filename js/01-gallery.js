import { galleryItems } from './gallery-items.js';

const listEl = document.querySelector('.gallery');
let instance;

addMarkup(galleryItems);

listEl.addEventListener('click', onClick);

function onClick(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return;
    }

    instance = basicLightbox.create(
        `
    <img src=${e.target.dataset.source} width="1280">
`,
        {
            onShow: instance => {
                document.addEventListener('keydown', closeModal);
            },
            onClose: instance => {
                document.removeEventListener('keydown', closeModal);
            },
        }
    );

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
