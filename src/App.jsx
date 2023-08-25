import React from 'react';
import css from './App.module.css';
import { getImages } from './components/Api/Api';
import SearchBar from 'components/SearchBar/SearchBar';
import Modal from 'components/Modal/Modal';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export const App = () => {
  return <div className={css.container}></div>;
};
