import React from 'react';

import classes from '../Carousels.css';

import image1 from '../../../../../../assets/images/CarouselImages/Projects/code1.jpg'
import image2 from '../../../../../../assets/images/CarouselImages/Projects/code2.jpg'
import image3 from '../../../../../../assets/images/CarouselImages/Projects/gh.jpg'
import image4 from '../../../../../../assets/images/CarouselImages/Projects/jsLogo.jpg'
import image5 from '../../../../../../assets/images/CarouselImages/Projects/py_logo.jpg'
import image6 from '../../../../../../assets/images/CarouselImages/Projects/pypy.jpg'

const projects = (props) => {
    
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
                href="https://github.com/wilsonmacleod"
                className={classes.CTitle}>
                Projects
            </a>
            </div>
     );
}
 
export default projects;