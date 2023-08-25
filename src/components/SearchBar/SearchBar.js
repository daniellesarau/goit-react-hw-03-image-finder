import React from 'react';
import css from './SearchBar.module.css';

export default function SearchBar(onSubmit) {
  return (
    <header className={css.searchbar}>
      <form className={css.form}>
        <button type="submit" className={css.button}>
          <span className={css.button_label}>Search</span>
        </button>

        <input
          className={css.input}
          type="text"
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
