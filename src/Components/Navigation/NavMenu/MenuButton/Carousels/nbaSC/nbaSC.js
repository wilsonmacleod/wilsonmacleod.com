import React from 'react';

import classes from '../Carousels.css';

import image2 from '../../../../../../assets/images/CarouselImages/nbaSC/1.jpg'
import image3 from '../../../../../../assets/images/CarouselImages/nbaSC/2.jpg'
import image4 from '../../../../../../assets/images/CarouselImages/nbaSC/3.jpg'
import image5 from '../../../../../../assets/images/CarouselImages/nbaSC/4.jpg'
import image6 from '../../../../../../assets/images/CarouselImages/nbaSC/5.jpg'


const nbaSC = (props) => {
    
    const imageList = [image2, image3, image4, image5, image6, image3]

    return (
        <div className={classes.Ccontainer}
        onMouseOver={props.started}
        onMouseOut={props.ended}
        title="Check out my Django NBA analytics tool and shot chart generator" 
        >
            <img 
                className={classes.CItem} 
                src={imageList[props.counter]} 
                alt="logo"
            />
            <a   
                href="https://nbashotcharts.wilsonmacleod.com/"
                target="_blank" rel="noopener noreferrer"
                className={classes.CTitle}>
                SHOT CHARTS
            </a>
            </div>
     );
}
 
export default nbaSC;