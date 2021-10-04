import React from 'react';
import './style.css'

const Skeleton = ({type}) => {
      const styles = `skeleton ${type}`;
  return (
    <div className={styles}>

    </div>
  )
}

export default Skeleton;