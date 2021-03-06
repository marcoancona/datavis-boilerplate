import superagent from 'superagent';
import superagentJsonapify from 'superagent-jsonapify';
import * as d3 from 'd3'
import Plotly from 'plotly.js'
superagentJsonapify(superagent);

// Use D3.js csv function to load and parse CSV data
d3.csv("/data/", function(data) {
    // Plot using the powerful plotly.js
    // Alternatively, we could now use D3.js to plot whatever we need
    console.log(data)
    var matrix = data.map((row) => Object.values(row).slice(0, Object.values(row).length - 1));
    var data = [{
        z: matrix,
        type: 'heatmap'
    }];
    Plotly.newPlot('heatmap-div', data);
});











