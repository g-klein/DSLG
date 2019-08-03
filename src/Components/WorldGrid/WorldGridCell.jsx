import React from 'react';

export function WorldGridCell(props) {
    return <div className={`world-grid-cell ${props.cell ? "selected" : ""}`} onClick={() => {props.handleCellClick(props.rowIdx, props.cellIdx);}}>
            {`${props.rowIdx}, ${props.cellIdx}`}
        </div>
}