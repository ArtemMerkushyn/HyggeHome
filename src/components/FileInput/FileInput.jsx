import React, { useState } from 'react';
import styles from './FileInput.module.css';
import Icons from '../Icons/Icons';
import FileInputItem from '../FileInputItem/FileInputItem';

const FileInput = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState(null);

  return (
    <>
      <label>Uploading a picture (1) for the hover</label>
      <div className={styles.FileInputContainer}>
        <input
          type="file"
          accept="image/*"
          hidden
          id="fileInput"
          onChange={({ target: { files } }) => {
            files[0] && setFileName(files[0].name);
            if (files) {
              setImage(URL.createObjectURL(files[0]));
            }
          }}
        />
        <Icons icon={'file'} />
        <p className={styles.fileInputUploadText}>
          <span
            className={styles.fileInputUploadSpan}
            onClick={() => document.querySelector('#fileInput').click()}
          >
            Click here
          </span>{' '}
          to upload your file
        </p>
        <p className={styles.fileInputSizeText}>
          Supported Format: SVG, JPG, PNG (10mb each)
        </p>
      </div>
      {image && <FileInputItem />}
    </>
  );
};

export default FileInput;
