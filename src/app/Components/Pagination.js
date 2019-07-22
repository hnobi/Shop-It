
import React from 'react';
import './../asset/scss/pagination.scss';

const pagination = (props) => {
  const { totalCount, setPage, pageNumber } = props;
  const limit = 8;
  const range = [];

  for (let i = 1; i <= Math.ceil(totalCount / limit); i++) {
    range.push(i)
  }

  return (
    <div className="pagination">
      <a
        onClick={() => {
          if (pageNumber > 1) {
            const nextPage = pageNumber - 1
            return setPage(nextPage);
          }
        }}
      >&laquo;</a>

      {range.map(number => {

        // to be able to give the active element bg-color;
        const isActive = number === pageNumber;
        if (number == 1 || number == totalCount || (number >= pageNumber - 2 && number <= pageNumber + 2)) {

          return <a
            onClick={() => setPage(number)}
            key={number}
            className={isActive ? 'active' : ''}
          > {number}</a>
        }
      })
      }
      <a onClick={() => {
        if (pageNumber <= (totalCount / limit)) {
          const nextPage = pageNumber + 1;
          setPage(nextPage);
        }
      }} >&raquo;</a>
    </div >)
};

export default pagination;
