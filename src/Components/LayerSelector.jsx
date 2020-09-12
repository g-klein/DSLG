import React from 'react';
import { cellColors } from '../Constants/cellColors';


export function LayerSelector(props) {
    return <div>
        {[0,1,2,3,4].map((x) => {

            let selectorClass = `layer-selector ${x == props.currentLayer ? "selected" : ""}`;
            let onClick = () => {props.setLayer(x)};
            let style = {backgroundColor: cellColors[x]}
            return <div onClick={onClick} className={selectorClass} key={x} style={style}>{x + 1}</div>;
        })}
    </div>
}