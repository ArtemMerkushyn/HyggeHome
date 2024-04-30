import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { setIsActive } from '../../redux/slices/searchSlice';
import Filters from '../../components/Filters/Filters';
import Sort from '../../components/Sort/Sort';
import CardList from '../../components/CardList/CardList';
import styles from './GetWarm.module.css';
import { useGetGetWarmQuery } from '../../redux/services';

import Pagination from '../../components/Pagination/Pagination';

export const GetWarm = () => {
  const sortValue = useSelector(state => state.filter.sortValue);
  const minPrice = useSelector(state => state.filter.filter.minPrice);
  const maxPrice = useSelector(state => state.filter.filter.maxPrice);
  const [page, setPage] = useState(1);
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [colors, setColors] = useState([]);
  const [price, setPrice] = useState([]);
  const [sort, setSort] = useState({
    field: 'popular',
    dir: 'desc',
  });
  const { data, error, isLoading } = useGetGetWarmQuery({
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
      setPrice([data.minPrice, data.maxPrice]);
    }
  }, [data]);

  const updateFilteredData = colors => {
    setMin(minPrice);
    setMax(maxPrice);
    setColors(colors);
  };

  const currentPage = number => {
    setPage(number);
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
        <span className={styles.wrapperSpan}> Get Warm</span>
      </div>
      <h2 className={styles.title}>
        <span className={styles.spanTitle}>Get warm</span> for hygge atmosphere
      </h2>
      <div className={styles.wrapperButtons}>
        <Filters
          colorsView={false}
          onUpdateFilteredData={updateFilteredData}
          price={price}
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
      <Pagination totalPages={totalPages} newPage={currentPage} />
    </div>
  );
};
