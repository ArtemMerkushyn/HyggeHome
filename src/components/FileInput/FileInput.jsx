import React from 'react';
import styles from './FileInput.module.css';
import Icons from '../Icons/Icons';
import FileInputItem from '../FileInputItem/FileInputItem';
import { toast } from 'react-toastify';

const FileInput = ({
  max,
  images,
  setImages,
  currentItems,
  setCurrentImages,
}) => {
  const handleFiles = ({ target: { files } }) => {
    const allowedTypes = [
      'image/png',
      'image/jpg',
      'image/jpeg',
      'image/svg+xml',
    ];
    if (files.length > 0) {
      if (currentItems.length > Number(max)) {
        return toast.error('There are already maximum amount of pictures');
      }
      if (images.length + files.length + currentItems.length > Number(max)) {
        return toast.error("You've exceeded the maximum number of pictures");
      }

      const invalidFiles = Array.from(files).filter(
        file => !allowedTypes.includes(file.type),
      );
      if (invalidFiles.length > 0) {
        return toast.error(
          `Unsupported file type: ${invalidFiles
            .map(file => file.type)
            .join(', ')}`,
        );
      }

      setImages(prevImages => [...prevImages, ...files]);
    }
  };
  const handleDrop = e => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const allowedTypes = ['image/png', 'image/jpg', 'image/svg+xml'];

    if (files.length + images.length > Number(max)) {
      return toast.error("You've exceeded the maximum number of pictures");
    }

    const invalidFiles = files.filter(
      file => !allowedTypes.includes(file.type),
    );
    if (invalidFiles.length > 0) {
      return toast.error(
        `Unsupported file type: ${invalidFiles
          .map(file => file.type)
          .join(', ')}`,
      );
    }

    setImages(prevImages => [...prevImages, ...files]);
  };

  const handleDropOver = e => {
    e.preventDefault();
  };

  const handleRemoveFile = file => {
    const newData = images.filter(image => image.name !== file.name);
    setImages(newData);
  };

  const handleDelete = item => {
    if (Array.isArray(currentItems)) {
      const newData = currentItems.filter(image => image !== item);
      setCurrentImages(newData);
    } else {
      setCurrentImages(null);
    }
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
          accept="image/svg, image/png, image/jpg, image/jpeg"
          hidden
          id={`fileInput${max}`}
          multiple
          onChange={handleFiles}
        />
        <Icons icon={'file'} />
        <p className={styles.fileInputUploadText}>
          <span
            className={styles.fileInputUploadSpan}
            onClick={() => document.querySelector(`#fileInput${max}`).click()}
          >
            Click here
          </span>{' '}
          to upload your file or drag and drop
        </p>
        <p className={styles.fileInputSizeText}>
          Supported Format: SVG, JPG, PNG (10mb each)
        </p>
      </div>
      {currentItems && currentItems.length > 0 && (
        <ul className={styles.currentItemsList}>
          {Array.isArray(currentItems) && currentItems.length > 0 ? (
            currentItems.map((item, index) => (
              <li className={styles.currentItem} key={index}>
                <button
                  className={styles.deleteItemButton}
                  type="button"
                  onClick={() => handleDelete(item)}
                >
                  <Icons icon={'cross'} />
                </button>
                <img
                  src={`${item}`}
                  className={styles.currentItemImage}
                  alt={`Preview ${index}`}
                />
              </li>
            ))
          ) : (
            <li className={styles.currentItem}>
              <button
                className={styles.deleteItemButton}
                type="button"
                onClick={() => handleDelete(currentItems)}
              >
                <Icons icon={'cross'} />
              </button>
              <img
                src={`${currentItems}`}
                className={styles.currentItemImage}
                alt="Preview"
              />
            </li>
          )}
        </ul>
      )}
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
