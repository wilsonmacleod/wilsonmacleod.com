import React from 'react';

import Aux from '../../../../hoc/Auxiliary';
import StarChart from './StarChart/StarChart';

const ScBody = () => {

    return (
        <Aux>
        <StarChart
        category={"Python"}
        count={4}
        content={
                <Aux>
                <StarChart
                category={"Flask"}
                count={4}
                content={false} />
                <StarChart
                category={"Django"}
                count={2}
                content={false} />
                <StarChart
                category={"Automation"}
                count={5}
                content={false} />
                </Aux>
        }
        />
        <StarChart
        category={"JavaScript"}
        count={3}
        content = {
            <Aux>
            <StarChart
            category={"React"}
            count={3}
            content={false} />
            <StarChart
            category={"JQuery"}
            count={2}
            content={false} />
            </Aux>
        }
        />
        <StarChart
        category={"SQL"}
        count={3}
        content={
            <Aux>
            <StarChart
            category={"Psycopg2"}
            count={4}
            content={false} />
            <StarChart
            category={"SQLALCHEMY"}
            count={3}
            content={false} />
            <StarChart
            category={"PostgreSQL"}
            count={3}
            content={false} />
            </Aux>
        }
        />
        </Aux>
     );
}
 
export default ScBody;