import styles from './CandlesItem.module.css';

export default function CandlesItem({ candle }) {
  return (
    <li className={styles.cardItem}>
      <div style={{ margin: '20px' }}>
        <img className={styles.cardImage} src={candle.image} alt="Candles" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="374"
          height="3"
          viewBox="0 0 374 3"
          fill="none"
        >
          <path d="M1 1L373 2" stroke="#FCB654" strokeLinecap="round" />
        </svg>
        <p className={styles.titleItem}>
          Product name
          <div className={styles.iconsWrapper}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 3C2 2.44772 2.44772 2 3 2H4C5.32783 2 6.45418 2.86266 6.84916 4.05811L18.9755 4.92427C20.1511 5.00825 20.9996 6.08543 20.8058 7.24799L20.2649 10.4932C20.0238 11.9398 18.7723 13 17.3057 13H7V14C7 14.5523 7.44772 15 8 15H18C18.5523 15 19 15.4477 19 16C19 16.5523 18.5523 17 18 17H8C6.34315 17 5 15.6569 5 14V5C5 4.44772 4.55228 4 4 4H3C2.44772 4 2 3.55228 2 3ZM7 11H17.3057C17.7946 11 18.2118 10.6466 18.2921 10.1644L18.833 6.91919L7 6.07398V11Z"
                fill="#FCB654"
              />
              <path
                d="M6 22C7.10457 22 8 21.1046 8 20C8 18.8954 7.10457 18 6 18C4.89543 18 4 18.8954 4 20C4 21.1046 4.89543 22 6 22Z"
                fill="#FCB654"
              />
              <path
                d="M18 22C19.1046 22 20 21.1046 20 20C20 18.8954 19.1046 18 18 18C16.8954 18 16 18.8954 16 20C16 21.1046 16.8954 22 18 22Z"
                fill="#FCB654"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.01117 3C5.28664 3 3.69449 4.56732 2.86614 6.3266C2.06607 8.02581 1.93251 9.96125 2.02577 11.0829C2.30995 14.5007 4.57285 16.9813 6.73617 18.5581C7.8301 19.3555 8.93824 19.9523 9.84457 20.3524C10.2979 20.5524 10.7098 20.7073 11.0531 20.8142C11.3589 20.9094 11.7122 21 12.0022 21C12.2923 21 12.6456 20.9094 12.9514 20.8142C13.2946 20.7073 13.7066 20.5524 14.1599 20.3524C15.0662 19.9523 16.1744 19.3555 17.2683 18.5581C19.4316 16.9813 21.6945 14.5007 21.9787 11.0829C22.072 9.96125 21.9384 8.02581 21.1383 6.3266C20.31 4.56732 18.7178 3 15.9933 3C14.5787 3 13.3568 3.63008 12.5053 4.3703C12.3244 4.52752 12.156 4.69329 12.0022 4.86427C11.8485 4.69329 11.68 4.52752 11.4992 4.3703C10.6477 3.63008 9.42576 3 8.01117 3ZM13.0022 7C13.0022 7.51777 12.6087 7.94363 12.1045 7.99484C12.0709 7.99825 12.0367 8 12.0022 8C11.4499 8 11.0022 7.55228 11.0022 7C11.0022 7.00057 11.0023 7.00029 11.0022 7C11.0021 6.99968 11.0019 6.99924 11.0016 6.99786C10.9979 6.9783 10.9743 6.85289 10.8383 6.62967C10.6972 6.39802 10.4769 6.13167 10.187 5.8797C9.6006 5.36992 8.82696 5 8.01117 5C6.24574 5 5.2606 5.93613 4.6756 7.17858C4.0623 8.4811 3.94643 10.0457 4.01889 10.9171C4.23359 13.4993 5.96175 15.5187 7.91423 16.9419C8.87819 17.6445 9.85913 18.1727 10.6521 18.5226C11.0485 18.6976 11.3888 18.824 11.6477 18.9046C11.8467 18.9666 11.9566 18.9883 11.995 18.9959C11.9978 18.9965 12.0002 18.997 12.0022 18.9974C12.0043 18.997 12.0066 18.9965 12.0094 18.9959C12.0479 18.9883 12.1578 18.9666 12.3568 18.9046C12.6157 18.824 12.956 18.6976 13.3523 18.5226C14.1453 18.1727 15.1263 17.6445 16.0902 16.9419C18.0427 15.5187 19.7709 13.4993 19.9856 10.9171C20.058 10.0457 19.9422 8.4811 19.3289 7.17858C18.7439 5.93613 17.7587 5 15.9933 5C15.1775 5 14.4039 5.36992 13.8174 5.8797C13.5276 6.13167 13.3073 6.39802 13.1662 6.62967C13.0302 6.85289 13.0065 6.9783 13.0029 6.99786C13.0024 7.00048 13.0022 7.0012 13.0022 7Z"
                fill="#FCB654"
              />
            </svg>
          </div>
        </p>
        <p className={styles.priceItem}>$4</p>
      </div>
      <img className={styles.cardPicture} src={candle.picture} alt="Candles" />
    </li>
  );
}
