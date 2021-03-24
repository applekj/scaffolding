import React from 'react';
import { Chart, Interval, Tooltip, Axis, Coordinate } from 'bizcharts';
import createState from 'createState'

function Labelline(props) {
    const { state, dispatch } = createState.useContainer()
    const { chartData = [] } = state

    return (
        <Chart height={400} data={chartData} autoFit>
            <Coordinate type="polar" />
            <Axis visible={false} />
            <Tooltip showTitle={false} />
            <Interval
                position="year*population"
                adjust="stack"
                element-highlight
                style={{
                    lineWidth: 1,
                    stroke: '#fff',
                }}
                label={['year', {
                    offset: -15,
                }]}
            />
        </Chart>
    );
}

export default Labelline