import React from 'react';

import classes from '../Carousels.css';

import image1 from '../../../../../../assets/images/CarouselImages/Interests/hoop.jpg';
import image2 from '../../../../../../assets/images/CarouselImages/Interests/travel.jpg';
import image3 from '../../../../../../assets/images/CarouselImages/Interests/epl.jpg';
import image4 from '../../../../../../assets/images/CarouselImages/Interests/dunk.jpg';
import image5 from '../../../../../../assets/images/CarouselImages/Interests/pc.jpg';
import image6 from '../../../../../../assets/images/CarouselImages/Interests/hike.jpg';
import ComingSoon from '../../../../../../assets/images/CarouselImages/GW2B/construction.jpg';

const interests = (props) => {
    
    const imageList = [image1, image2, image3, image4, image5, image6, ComingSoon]
    return (
        <div className={classes.Ccontainer}
        onMouseOver={props.started}
        onMouseOut={props.ended}
        onClick={props.clicked}
        title="There's nothing here...yet!"
        >
            <img 
                className={classes.CItem} 
                src={imageList[props.counter]} 
                alt="Placeholder"
            />
            <div   
                className={classes.CTitle}>
                Interests
            </div>
            </div>
     );
}
 
export default interests;