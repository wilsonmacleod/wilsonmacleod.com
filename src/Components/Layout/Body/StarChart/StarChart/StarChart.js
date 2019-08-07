import React from 'react';

import Aux from '../../../../../hoc/Auxiliary';
import BoxWrapper from '../../../../../hoc/BoxWrapper/BoxWrapper';
import TooltipSummon from '../../../../../hoc/Tooltip/TooltipSummon';

import classes from './StarChart.css';


const starChart = (props) => {
    
    const indents = [];
    for (var i = 0; i < props.count; i++) {
        indents.push(<span key={i} className={classes.Star + " fa fa-star checked"}></span>);
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
            <Aux>
                {scEl}
                </Aux>
        );
}
export default starChart;
