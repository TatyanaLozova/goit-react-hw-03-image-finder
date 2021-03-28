import React from "react";
import PropTypes from "prop-types";
import s from "../App.module.css";

const ImageGalleryItem= ({ imgGallery, largeImgUrl, onHandleClick }) => {
  const { id, webformatURL } = imgGallery;
  return (
    <li className={s.ImageGalleryItem}
      
      onClick={() => onHandleClick(largeImgUrl)}
    >
      <img className={s.ImageGalleryItem_image} src={webformatURL} alt={id} />
    </li>
  );
};

 ImageGalleryItem.propTypes = {
  imgGallery: PropTypes.object.isRequired,
  largeImgUrl: PropTypes.string.isRequired,
  onHandleClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;