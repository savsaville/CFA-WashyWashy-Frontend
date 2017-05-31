import React from 'react';
import PropTypes from 'prop-types';

const DataList = (props) => {
  return (
    <div>
       {props.Data.map((data,i) =>
        <p>{data.name} {data.cycles} {data.size}</p>

     )}
    </div>
  )

};

DataList.propTypes = {
  allData: PropTypes.array.isRequired
};

export default DataList;
