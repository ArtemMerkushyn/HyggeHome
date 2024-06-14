import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { setIsActive } from '../../redux/slices/searchSlice';
import Filters from '../../components/Filters/Filters';
import Sort from '../../components/Sort/Sort';
import CardList from '../../components/CardList/CardList';
import styles from './LightingDecor.module.css';
import { useGetLightingDecorQuery } from '../../redux/services';
import Pagination from '../../components/Pagination/Pagination';

export const LightingDecor = () => {
  const sortValue = useSelector(state => state.filter.sortValue);
  const [defaultPrice, setDefaultPrice] = useState([0, 0]);
  const [currentPrice, setCurrentPrice] = useState([0, 0]);
  const [page, setPage] = useState(1);
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [colors, setColors] = useState([]);
  const [sort, setSort] = useState({
    field: 'popular',
    dir: 'desc',
  });
  const { data, error, isLoading } = useGetLightingDecorQuery({
    page: page,
    min: min,
    max: max,
    color: colors,
    sort: sort,
  });
  const [newData, setNewData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsActive(false));
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setNewData(data.results);
      setTotalPages(data.totalPages);

      if (!defaultPrice[0] && !defaultPrice[1]) {
        setDefaultPrice([data.minPrice, data.maxPrice]);
        setCurrentPrice([data.minPrice, data.maxPrice]);
      }
    }
  }, [data, defaultPrice]);

  const updateFilteredData = ({ minPr, maxPr, colors }) => {
    if (minPr !== undefined) {
      setMin(minPr);
    }
    if (maxPr !== undefined) {
      setMax(maxPr);
    }
    if (colors !== undefined) {
      setColors(colors);
    }
  };

  useEffect(() => {
    setSort(sortValue);
  }, [sortValue]);

  return (
    <div className={styles.wrapperFilters}>
      <div className={styles.wrapper}>
        <Link to={'/'}>
          <span>Home </span>
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="15"
          viewBox="0 0 8 15"
          fill="none"
        >
          <path
            d="M0 1.27778L0.8 0.5L8 7.5L0.8 14.5L0 13.7222L6.4 7.5L0 1.27778Z"
            fill="#CACCCE"
          />
        </svg>
        <span className={styles.wrapperSpan}> Lighting Decor</span>
      </div>
      <h2 className={styles.title}>
        Make your room unique with{' '}
        <span className={styles.spanTitle}>lighting decor</span>
      </h2>
      <div className={styles.wrapperButtons}>
        <Filters
          colorsView={false}
          onUpdateFilteredData={updateFilteredData}
          currentPrice={currentPrice}
          setCurrentPrice={setCurrentPrice}
          defaultPrice={defaultPrice}
        />
        <div className={styles.dropdownList}>
          Sort by
          <Sort />
        </div>
      </div>
      <CardList
        data={newData}
        error={error}
        isLoading={isLoading}
        totalPages={totalPages}
      />
      <Pagination totalPages={totalPages} newPage={setPage} />
    </div>
  );
};
