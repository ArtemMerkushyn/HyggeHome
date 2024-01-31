import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonProductLib = () => {
  return (
    <SkeletonTheme>
      <section>
        <div>
          <Skeleton height={497} width={`412px`} borderRadius={'24px'} />
        </div>
      </section>
    </SkeletonTheme>
  );
};

export default SkeletonProductLib;
