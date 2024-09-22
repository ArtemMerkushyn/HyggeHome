import React, { useState } from 'react';
import styles from './FileInput.module.css';
import Icons from '../Icons/Icons';
import FileInputItem from '../FileInputItem/FileInputItem';

const FileInput = ({ max }) => {
  const [images, setImages] = useState([]);
  const handleFiles = ({ target: { files } }) => {
    // files[0] && setFileName(files[0].name);
    // if (files) {
    //   setImage(URL.createObjectURL(files[0]));
    // }

    if (files) {
      if (!images.length) {
        setImages([...files]);
      } else {
        setImages(prevImages => [...prevImages, ...files]);
        console.log(images);
      }
    }
  };

  const handleDrop = e => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    console.log(files);
    if (files) {
      setImages(prevImages => [...prevImages, ...files]);
    }
  };

  const handleDropOver = e => {
    e.preventDefault();
  };

  return (
    <>
      <label>
        Uploading a picture ({max}) for the{' '}
        {max > 1 ? 'product gallery' : 'hover'}
      </label>
      <div
        className={styles.FileInputContainer}
        onDrop={handleDrop}
        onDragOver={handleDropOver}
      >
        <input
          type="file"
          accept="image/*"
          hidden
          id="fileInput"
          multiple
          onChange={handleFiles}
        />
        <Icons icon={'file'} />
        <p className={styles.fileInputUploadText}>
          <span
            className={styles.fileInputUploadSpan}
            onClick={() => document.querySelector('#fileInput').click()}
          >
            Click here
          </span>{' '}
          to upload your file or drag and drop
        </p>
        <p className={styles.fileInputSizeText}>
          Supported Format: SVG, JPG, PNG (10mb each)
        </p>
      </div>
      {images && (
        <ul className={styles.itemList}>
          {images.map((image, index) => (
            <li className={styles.itemListItem} key={index}>
              <FileInputItem image={image} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FileInput;
