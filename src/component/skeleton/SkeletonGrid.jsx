import React from "react";
import Skeleton from "./Skeleton";

const SkeletonGrid = () => {
  return (
    <div className="skeletonWrapper">
      <Skeleton type="thumbnail" />
      <Skeleton type="title" />
      <Skeleton type="text" />
      <Skeleton type="box" />
    </div>
  );
};

export default SkeletonGrid;
