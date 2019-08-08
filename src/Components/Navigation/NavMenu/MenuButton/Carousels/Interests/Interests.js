import React from 'react';

import classes from '../Carousels.css';

import image1 from '../../../../../../assets/images/CarouselImages/Interests/hoop.jpg'
import image2 from '../../../../../../assets/images/CarouselImages/Interests/travel.jpg'
import image3 from '../../../../../../assets/images/CarouselImages/Interests/epl.jpg'
import image4 from '../../../../../../assets/images/CarouselImages/Interests/dunk.jpg'
import image5 from '../../../../../../assets/images/CarouselImages/Interests/pc.jpg'
import image6 from '../../../../../../assets/images/CarouselImages/Interests/hike.jpg'

const interests = (props) => {
    
    const imageList = [image1, image2, image3, image4, image5, image6]

    return (
        <div className={classes.Ccontainer}
        onMouseOver={props.started}
        onMouseOut={props.ended}
        >
            <img 
                className={classes.CItem} 
                src={imageList[props.counter]} 
                alt="Placeholder"
            />
            <a   
                href="/"
                className={classes.CTitle}>
                Interests
            </a>
            </div>
     );
}
 
export default interests;