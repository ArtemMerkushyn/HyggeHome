import styles from './AboutProduct.module.css';

export default function AboutProduct({data}) {
  return (
    <p className={styles.about}>
      {data.aboutProduct}
    </p>
  );
}
