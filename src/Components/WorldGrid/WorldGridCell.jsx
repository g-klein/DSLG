import React from 'react';
import { cellColors } from '../../Constants/cellColors';

export function WorldGridCell(props) {
    let cellClass = `world-grid-cell ${props.cell ? "selected" : ""}`;
    let cellClick = () => {props.handleCellClick(props.rowIdx, props.cellIdx);}
    let color = cellColors[props.cell.layer];

    return <div style={{backgroundColor: color}} className={cellClass} onClick={cellClick}> </div>
}