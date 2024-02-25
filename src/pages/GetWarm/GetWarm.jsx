import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { setIsActive } from '../../redux/slices/searchSlice';
import Filters from '../../components/Filters/Filters';
import Sort from '../../components/Sort/Sort';
import CardList from '../../components/CardList/CardList';
import styles from './GetWarm.module.css';
import { useGetGetWarmQuery } from '../../redux/services';
import sortData from '../../utils/helpers/sort';
import Pagination from '../../components/Pagination/Pagination';

export const GetWarm = () => {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = useGetGetWarmQuery(page);
  const sortValue = useSelector(state => state.filter.sortValue);
  const [newData, setNewData] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsActive(false));
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setNewData(data.results);
      setTotalPages(data.totalPages);
    }
  }, [data]);

  const updateFilteredData = filteredData => {
    setNewData(filteredData);
    setTotalPages(1);
  };

  const currentPage = number => {
    setPage(number);
  };

  useEffect(() => {
    const sortedData = sortData({ option: sortValue, value: newData });
    setDataList(sortedData);
  }, [sortValue, newData]);

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
        Choose the <span className={styles.spanTitle}>get warm</span> for
        atmosphere
      </h2>
      <div className={styles.wrapperButtons}>
        <Filters
          colorsView={true}
          dataFilter={data}
          onUpdateFilteredData={updateFilteredData}
        />
        <div className={styles.dropdownList}>
          Sort by
          <Sort />
        </div>
      </div>
      <CardList data={dataList} error={error} isLoading={isLoading} />
      <Pagination totalPages={totalPages} newPage={currentPage} />
    </div>
  );
};
