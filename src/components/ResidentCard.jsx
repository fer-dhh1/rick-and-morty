import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch';
import './styles/residentCard.css';

const ResidentCard = ({url}) => {

    const [resident, getResident] = useFetch();

    useEffect(() => {
        getResident(url);
    }, []);
    
    console.log(resident);

  return (
    <article className='resident'>
        <figure className='resident__img'>
            <img src={resident?.image} alt="Resident Photo" />
            <figcaption className='resident__status'>
                <div className={`resident__circle ${resident?.status}`}></div>
                <span>{resident?.status}</span>
        </figcaption>
        </figure>
        <h3 className='resident__name'>{resident?.name}</h3>
        <hr className='resident__line' />
        <ul className='resident__list'>
            <li className='resident__item'><span><strong>Specie </strong></span><span>{resident?.species}</span></li>
            <li className='resident__item'><span><strong>Orign </strong></span>{resident?.origin.name}<span></span></li>
            <li className='resident__item'><span><strong>Episodes where appear </strong></span><span>{resident?.episode.length}</span></li>
        </ul>
       
    </article>
  )
}

export default ResidentCard;