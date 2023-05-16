import React from 'react';

const List = ({data}) => {
    //const data = data;
  return (
    <div className='container-list'>
         { data && data.map((item, index) => {
        return (<div className='item-list' key={`${item.numer-index}`}>
                <img src='src/img/incoming-call.png' width={'16px'} height={'16px'} />
                <div className='number'>{item.number}</div>
                <div className='details'>{item.details}</div>
                </div>)
    })}
    </div>
  );
};

export default List;
