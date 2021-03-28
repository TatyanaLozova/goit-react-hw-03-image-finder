import React from "react";
import PropTypes from "prop-types";


const ImageGalleryItem= ({ imgGallery, largeImgUrl, onHandleClick }) => {
  const { id, webformatURL } = imgGallery;
  return (
    <li
      
      onClick={() => onHandleClick(largeImgUrl)}
    >
      <img src={webformatURL} alt={id} />
    </li>
  );
};

 ImageGalleryItem.propTypes = {
  imgGallery: PropTypes.object.isRequired,
  largeImgUrl: PropTypes.string.isRequired,
  onHandleClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;