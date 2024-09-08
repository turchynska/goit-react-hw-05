import { useState } from "react";
import css from "./SearchBar.module.css";
import { Slide, toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const SearchBar = ({ onSubmit, defaultSearchValue }) => {
  const [value, setValue] = useState(defaultSearchValue || '');

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (value.trim() === '') {
      return toast.error("Please enter some text", {
        position: 'top-right',
        hideProgressBar: false,
        closeOnClick: true,
        theme: "colored",
      });
    }

    onSubmit(value);
    setValue('');
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input 
          className={css.text}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Please enter text"
          value={value}
          onChange={handleChange}
        />
        <button type="submit" className={css.btn}>Search</button>
      </form>
      <ToastContainer transition={Slide} />
    </>
  );
};

export default SearchBar;