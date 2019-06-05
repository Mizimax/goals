import { tcasData, khengData } from "./mockApi";

const months = ['Jan','Feb','Mar','April','May','June','July','Aug','Sep','Oct','Nov','Dec']

var options = [];

options[0] = {
    title: {
        text: 'TCAS Goal'
    },
    xAxis: {
        tickInterval: 1,
        labels: {
            enabled: true,
            formatter: function() { return months[this.value];},
        }
    },
    yAxis: {
        title: {
            text: 'Sales'
        }
    },
    series:
        Object.keys(tcasData).map(key => {
            var value = tcasData[key];
            var serieSum = 0;
            return {
                name: key,
                data: value.map(val=>serieSum+=val)
            };
        })
    ,
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    tooltip: {
        formatter: function(i) {
            return '<b>' + this.series.name + '</b><br />Sales : <b>' + (this.y - this.series.yData[this.key-1]) + '</b><br />month : <b>' + months[this.x] + '</b>'
        }
    }
}

options[1] = {
    title: {
        text: 'Kheng Goal'
    },
    series:
        Object.keys(khengData).map(key => {
            var value = khengData[key];
            var serieSum = 0;
            return {
                name: key,
                data: value.map(val=>serieSum+=val)
            };
        })
    ,
    xAxis: {
        tickInterval: 1,
        labels: {
            enabled: true,
            formatter: function() { return months[this.value];},
        }
    },
    yAxis: {
        title: {
            text: 'Sales'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    }
}

export default options;