import React from 'react';
import styles from './FileInputItem.module.css';
import Icons from '../Icons/Icons';

const FileInputItem = ({ image, deleteFunction }) => {
  return (
    <div className={styles.fileInputItemContainer}>
      <Icons icon={'file'} />
      <div className={styles.fileInputItemInfoContainer}>
        <div className={styles.fileInputItemNameNDeleteConatiner}>
          <p className={styles.fileInputItemName}>{image.name}</p>
          <button
            className={styles.fileInputItemClearButton}
            type="button"
            onClick={() => deleteFunction(image)}
          >
            <Icons icon={'bin'} />
          </button>
        </div>
        <hr />
        <div className={styles.fileInputItemNameNDeleteConatiner}>
          <p className={styles.fileInputItemSize}>
            {Number((image.size / 1000000).toFixed(1))}mb
          </p>
          <p className={styles.fileInputItemSize}>100%</p>
        </div>
      </div>
    </div>
  );
};

export default FileInputItem;
