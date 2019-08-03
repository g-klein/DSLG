import React from 'react';
import { WorldGridRow } from './WorldGridRow';

export function WorldGrid(props) {
    let { grid } = props;
    return <div id="world-grid">
        {grid && grid.map((row, idx) => {
            return <WorldGridRow row={row} idx={idx} key={idx} handleCellClick={props.handleCellClick} />
        })}
    </div>
}