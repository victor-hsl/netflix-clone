import React, {useState} from 'react'
import './MovieRow.css'
export default ({title, items}) => {
    const [scrollX, setScrollX] = useState(0);
    const handleLeft = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if( x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    const handleRight = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listWidth = items.results.length * 250;
        if((window.innerWidth - listWidth) > x){
          x = (window.innerWidth - listWidth) - 60;
        }
        setScrollX(x);
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className='movieRow--left' onClick={handleLeft}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
            </div>
            <div className='movieRow--right' onClick={handleRight}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            </div>
            <div className='movieRow--listarea'>
                <div className='movieRow--list' style={{marginLeft: scrollX, width: items.results.length * 250}}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className='movieRow--item'>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}