import React, { useEffect, useState } from 'react';
import styles from './FileInput.module.css';
import Icons from '../Icons/Icons';
import FileInputItem from '../FileInputItem/FileInputItem';
import { toast } from 'react-toastify';

const FileInput = ({ max }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log(images.length);
    console.log(max);
  }, [images]);
  const handleFiles = ({ target: { files } }) => {
    // files[0] && setFileName(files[0].name);
    // if (files) {
    //   setImage(URL.createObjectURL(files[0]));
    // }

    if (files) {
      if (images.length >= Number(max)) {
        toast.error('You`ve exceeded maximum amount of pictures');
      }
    } else if (images.length <= max) {
      if (!images.length) {
        setImages([...files]);
      } else {
        setImages(prevImages => [...prevImages, ...files]);
      }
    }
  };

  const handleDrop = e => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    if (files && files.length <= Number(max)) {
      setImages(prevImages => [...prevImages, ...files]);
      console.log(files);
    } else {
      toast.error('working');
    }
  };

  const handleDropOver = e => {
    e.preventDefault();
  };
  const handleRemoveFile = file => {
    const newData = images.filter(image => image.name !== file.name);
    setImages(newData);
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
              <FileInputItem image={image} deleteFunction={handleRemoveFile} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default FileInput;
