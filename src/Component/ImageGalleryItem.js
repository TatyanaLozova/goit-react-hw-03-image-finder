import React from "react";
import PropTypes from "prop-types";
import s from "../App.module.css";

const ImageGalleryItem= ({ imgGallery, largeImgUrl, onClick }) => {
  const { id, webformatURL } = imgGallery;
  return (
    <li className={s.ImageGalleryItem}
      
      onClick={() => onClick(largeImgUrl)}
    >
      <img className={s.ImageGalleryItem_image} src={webformatURL} alt={id} />
    </li>
  );
};

 ImageGalleryItem.propTypes = {
  imgGallery: PropTypes.object.isRequired,
  largeImgUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;