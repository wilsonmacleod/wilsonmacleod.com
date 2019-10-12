import React from 'react';

import classes from '../Carousels.css';

import image2 from '../../../../../../assets/images/CarouselImages/GW2B/1.jpg'
import image3 from '../../../../../../assets/images/CarouselImages/GW2B/2.jpg'
import image4 from '../../../../../../assets/images/CarouselImages/GW2B/3.jpg'
import image5 from '../../../../../../assets/images/CarouselImages/GW2B/4.jpg'
import image6 from '../../../../../../assets/images/CarouselImages/GW2B/5.jpg'


const gw2b = (props) => {
    
    const imageList = [image2, image3, image4, image5, image6, image3]

    return (
        <div className={classes.Ccontainer}
        onMouseOver={props.started}
        onMouseOut={props.ended}
        title="Check out my React/Django GW2 Build Creator and Editor" 
        >
            <img 
                className={classes.CItem} 
                src={imageList[props.counter]} 
                alt="logo"
            />
            <a   
                href="https://gw2b.wilsonmacleod.com/"
                target="_blank" rel="noopener noreferrer"
                className={classes.CTitle}>
                GW2B
            </a>
            </div>
     );
}
 
export default gw2b;