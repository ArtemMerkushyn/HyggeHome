import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useGetCandlesQuery } from '../../redux/services'
import { Hero } from '../../components/MainPageContent/Hero/Hero';
import { SpecialOffer } from '../../components/MainPageContent/SpecialOffer/SpecialOffer';
import { NewCollection } from '../../components/MainPageContent/secondMainContent/NewCollection';
import { setIsActive } from '../../redux/slices/searchSlice';

export const Main = () => {
  const [catalog, setCatalog] = useState([]);
  const { data, error, isLoading } = useGetCandlesQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsActive(false));
  }, [dispatch]);

  useEffect(() => {
    if (data) {
      setCatalog(data.results);
    }
  }, [data]);

  return (
    <div>
      <Hero />
      <NewCollection 
      sliderNeeded={true}
      catalog={catalog} 
      error={error} i
      sLoading={isLoading} 
      upperText='New collection' 
      lowerText='New Hygge goods for comfort'/>
      <SpecialOffer />
    </div>
  );
};