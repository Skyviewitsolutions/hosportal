import React from 'react';
import SupplierCardComponent from './SupplierCardComponent';

const SupplierCardContainer = (props) => {
  return (
    <>
        <SupplierCardComponent {...props}/>
    </>
  )
}

export default SupplierCardContainer