import React from 'react';
import { WorldGridCell } from './WorldGridCell';

export function WorldGridRow(props) {
    let { row, idx } = props;

    return <div className="world-grid-row">
        {row && row.map((cell, cellIdx) => {
            return <WorldGridCell cell={cell} rowIdx={idx} cellIdx={cellIdx} key={cellIdx} handleCellClick={props.handleCellClick} />
        })}
    </div>
}