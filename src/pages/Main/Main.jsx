import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Hero } from '../../components/MainPageContent/Hero/Hero';
import { SpecialOffer } from '../../components/MainPageContent/SpecialOffer/SpecialOffer';
import { NewCollection } from '../../components/MainPageContent/secondMainContent/NewCollection';
import { setIsActive } from '../../redux/slices/searchSlice';

export const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsActive(false));
  }, [dispatch]);

  return (
    <div>
      <Hero />
      <div style={{ marginTop: '120px' }}>
        <NewCollection
          sliderNeeded={true}
          upperText="New collection"
          lowerText="New Hygge goods for comfort"
        />
      </div>
      <SpecialOffer />
    </div>
  );
};
