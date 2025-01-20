import { createThumbnails } from './create-thumbnails.js';
import { openFullSizePhotoModal } from './full-size-photo-modal.js';
import { openPhotoEditModal } from './photo-edit-modal.js';
import { getData, sendData } from './api.js';
import { showFilters } from './filters.js';

getData().then(photos => {
  createThumbnails(photos);
  openFullSizePhotoModal(photos);
  showFilters(photos);
  createThumbnails(photos);
});

openPhotoEditModal();
sendData();


