import React from 'react';

import classes from '../Carousels.css';

import image1 from '../../../../../../assets/images/CarouselImages/SpendEz/pugsly.jpg'
import image2 from '../../../../../../assets/images/CarouselImages/SpendEz/moneywings.jpg'
import image3 from '../../../../../../assets/images/CarouselImages/SpendEz/GUI.jpg'
import image4 from '../../../../../../assets/images/CarouselImages/SpendEz/flask.jpg'
import image5 from '../../../../../../assets/images/CarouselImages/SpendEz/mb.jpg'
import image6 from '../../../../../../assets/images/CarouselImages/SpendEz/sqla.jpg'

const spendEz = (props) => {
    
    const imageList = [image1, image2, image3, image4, image5, image6]

    return (
        <div className={classes.Ccontainer}
        onMouseOver={props.started}
        onMouseOut={props.ended}
        title="Check out my Flask-based budgeting app" 
        >
            <img 
                className={classes.CItem} 
                src={imageList[props.counter]} 
                alt="logo"
            />
            <a   
                href="https://ez.wilsonmacleod.com/spend-ez/login"
                className={classes.CTitle}>
                SpendEz
            </a>
            </div>
     );
}
 
export default spendEz;