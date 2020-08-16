import React, {useState} from 'react';
import classes from './Paginator.module.css';
import cn from "classnames";


const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i) 
      }
      let portionCount = Math.ceil(pagesCount / 10);
      let [portionNumber, setPortionNumber] = useState(1);
      let leftPortionPageNumber = (portionNumber - 1) * 10 + 1;
      let rightPortionPageNumber = portionNumber * 10;
      
    return (
        
        <div className={classes.paginator}>
            { portionNumber > 1 &&
          <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button> }
            {pages
            .filter(page => page >= leftPortionPageNumber && page<=rightPortionPageNumber)
            .map((page) => { 
             return <span className={ cn({[classes.selectedPage]: props.currentPage === page}, classes.pageNumber) }
                        key={page}
                        onClick={ () => props.onPageChanged(page)}>{page}</span>})}
            { portionCount > portionNumber &&<button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }
        </div>
    )
}

export default Paginator;
