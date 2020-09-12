import React from 'react';
import { WorldGrid } from './WorldGrid/WorldGrid';
import { LayerSelector } from './LayerSelector';
import { cellColors } from '../Constants/cellColors';

export class WorldEditor extends React.Component{
    defaultGridCell = {
        layer: -1
    }

    constructor(){
        super();
        this.setLayer = this.setLayer.bind(this);
        this.escFunction = this.escFunction.bind(this);

        this.state = {
            resolution: 2,
            grid: [
                [this.defaultGridCell, this.defaultGridCell],
                [this.defaultGridCell, this.defaultGridCell]
            ],
            layer: 0
        };
    }

    componentDidMount(){
        this.updateGridResolution(this.state.resolution);
        document.addEventListener("keydown", this.escFunction, false);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.escFunction, false);
    }

    escFunction(event){
        var keyString = String.fromCharCode(event.keyCode);
        var keyInt = parseInt(keyString);
        if(Number.isInteger(keyInt)){
            keyInt--;
            if(!!cellColors[keyInt])
                this.setState({layer: keyInt});
        }
    }

    setLayer(layer){
        this.setState({layer});
    }

    updateGridResolution = () => {
        let { grid, resolution } = this.state;
        if(resolution > grid.length){
            
            for(var i = 0; i < resolution; i++){
                if(!grid[i]){
                    grid[i] = [];
                }

                for(var j = 0; j < resolution; j++){
                    if(j >= grid[i].length){
                        grid[i].push(this.defaultGridCell);
                    }
                }
            }
        } else if (resolution < grid.length){
            grid = grid.slice(0, resolution);

            for(var i = 0; i < grid.length; i++){
                grid[i] = grid[i].slice(0, resolution);
            }
        }

        this.setState({grid});
    }

    handleResolutionChange = (e) => {
        this.setState({
            resolution: e.target.value
        });
    }

    handleCellClick = (row, col) => {
        let grid = this.state.grid.slice();
        let currentLayer = grid[row][col].layer;
        if(currentLayer == this.defaultGridCell.layer){
            grid[row][col] = {
                layer: this.state.layer
            };
        } else {
            grid[row][col] = this.defaultGridCell;
        }

        this.setState({grid});
    }

    //modified from: https://stackoverflow.com/questions/13405129/javascript-create-and-save-file
    download = (filename, type) => {
        let copy = {
            rows: []
        };

        for(var i = this.state.grid.length - 1; i >= 0; i--){
            copy.rows.push({
                cols: this.state.grid[i]
            });
        }

        var file = new Blob([JSON.stringify(copy)], {type: type});
        if (window.navigator.msSaveOrOpenBlob) // IE10+
            window.navigator.msSaveOrOpenBlob(file, filename);
        else { // Others
            var a = document.createElement("a"),
                    url = URL.createObjectURL(file);
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            setTimeout(function() {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);  
            }, 0); 
        }
    }

    render() {
        return <div>
            <div id="resolution">
                Resolution: <input type="number" value={this.state.resolution} onChange={this.handleResolutionChange} onBlur={this.updateGridResolution}></input>
            </div>
            <LayerSelector currentLayer={this.state.layer} setLayer={this.setLayer} />
            <WorldGrid grid={this.state.grid} handleCellClick={this.handleCellClick} />
            <button id="copy-world" onClick={() => {this.download("world.json", "json")}}>Download world.</button>
        </div>
    }
}