import Skeleton from './Skeleton';
import './skeleton.css';

const SkeletonProduct = () => {
  return (
    <div className="skeleton-wrapper">
      <Skeleton type="thumbnail" />
      <Skeleton type="text-lg" />
      <Skeleton type="text-md" />
      <Skeleton type="text-sm" />
      <div className="shimmer-wrapper">
        <div className="shimmer"></div>
      </div>
    </div>
  );
};

export default SkeletonProduct;
