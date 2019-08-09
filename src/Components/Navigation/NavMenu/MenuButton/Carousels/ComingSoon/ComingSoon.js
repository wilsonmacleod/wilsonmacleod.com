import React from 'react';

import classes from '../Carousels.css';

import image1 from '../../../../../../assets/images/CarouselImages/ComingSoon/construction.jpg'


const comingSoon = (props) => {
    
    const imageList = image1

    return (
        <div className={classes.Ccontainer}
        onMouseOver={props.started}
        onMouseOut={props.ended}
        >
            <img 
                className={classes.CItem} 
                src={imageList} 
                alt="Placeholder"
            />
            <div   
                className={classes.CTitle}>
                Coming Soon...
            </div>
            </div>
     );
}

export default comingSoon;