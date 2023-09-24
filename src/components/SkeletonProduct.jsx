import React, {useContext} from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import 'Styles/skeleton.css';

import AppContext from 'Context/AppContext';

const SkeletonProduct = () => {
  const { productRequestLimit } = useContext(AppContext);

  const skeletonList = Array.from({length: productRequestLimit}, (_, index) => {
    return <div key={index} className="skeleton">
            <div className="left-col">
              <Skeleton width="240px" height="240px" />
            </div>
            <div className="right-col">
              <p>
                <Skeleton width="100%" height="100%" />
              </p>
              <p>
                <Skeleton width="100%" height="100%" />
              </p>
              <div className="avatar">
                <Skeleton
                  circle
                  width="100%"
                  height="100%"
                  containerClassName="avatar-skeleton"
                />
              </div>
            </div>
          </div>;
  })

  return (
    <>
      {skeletonList}
    </>
  );
};

export default SkeletonProduct;
