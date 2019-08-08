import React from 'react';

import BoxWrapper from '../../../../../hoc/BoxWrapper/BoxWrapper';
import TooltipSummon from '../../../../../hoc/Tooltip/TooltipSummon';

import classes from './StarChart.css';


const starChart = (props) => {
    
    const indents = [];
    let i = 0;
    for (i; i < props.count; i++) {
        indents.push(<span key={i} className={classes.StarChecked + " fa fa-star"}></span>);
    }
    for (i; i < 5; i++) {
        indents.push(<span key={i} className={classes.Star + " fa fa-star"}></span>);
    }
    let finalMain = 
        <p className={classes.Item}>
        <ins className={classes.Skeels}>{props.category}:</ins> 
        {indents}</p>

    let scEl =             
            <TooltipSummon
            content = {props.content}
            children ={ 
                <BoxWrapper>
                {finalMain}
                </BoxWrapper>
            }
            />
    if (!props.content){
        scEl = <BoxWrapper>
                {finalMain}
                </BoxWrapper>
    }

        return (
            <div className={classes.Container}>
                {scEl}
                </div>
        );
}
export default starChart;
