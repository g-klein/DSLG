import React from 'react';
import { WorldGrid } from './WorldGrid/WorldGrid';

export class WorldEditor extends React.Component{
    constructor(){
        super();
        this.state = {
            resolution: 2,
            grid: [
                [false, false],
                [false, false]
            ]
        };
    }

    componentDidMount(){
        this.updateGridResolution(this.state.resolution);
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
                        grid[i].push(false);
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
        grid[row][col] = !grid[row][col];

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
            <WorldGrid grid={this.state.grid} handleCellClick={this.handleCellClick} />
            <button id="copy-world" onClick={() => {this.download("world.json", "json")}}>Download world.</button>
        </div>
    }
}