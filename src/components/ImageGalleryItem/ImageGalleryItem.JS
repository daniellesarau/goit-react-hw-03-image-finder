import React from 'react';
import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem() {
  return (
    <li className={css.gallery_item}>
      <img className={css.image} src="" alt="" />
    </li>
  );
}
