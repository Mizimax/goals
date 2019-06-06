import apiData from "./mockApi";

const [ tcasData, kengData ] = apiData.data

const months = ['Jan','Feb','Mar','April','May','June','July','Aug','Sep','Oct','Nov','Dec']

const colors = {
    physic: '#673AB7',
    math: '#ff9700',
    chem: '#54bd13',
    bio: '#d93030'
}

var options = [];

options[0] = {
    name: 'คอร์สพิชิต TCAS',
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
        tickInterval: 200,
        title: {
            text: 'Sales'
        }
    },
    series:
        [...tcasData.map((item, index) => {
            var serieSum = 0;
            return {
                name: item.name,
                color: colors[index],
                data: item.data.map(val=>serieSum+=val)
            };
        }),{
            type: 'line',
            color: '#888',
            dashStyle: 'dash',
            marker: { enabled: false },
            enableMouseTracking: false,
            /* function returns data for trend-line */
            data: Array.from(Array(12),(val,index)=>(index+1)*1000/12)
        }]
    ,
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    tooltip: {
        formatter: function(i) {
            return '<b>' + this.series.name + '</b><br />Sales : <b>' + (this.y - this.series.yData[this.key - 1]) +
                '</b><br />Month : <b>' + months[this.x] + '</b><br />Total : <b>' + this.y + '</b>'
        }
    }
}

options[1] = {
    name: 'คอร์สเก่งม.ปลาย',
    title: {
        text: 'Keng Goal'
    },
    series:
        [...kengData.map((item, index) => {
            var serieSum = 0;
            return {
                name: item.name,
                color: colors[index],
                data: item.data.map(val=>serieSum+=val)
            };
        }),{
            type: 'line',
                color: '#888',
                dashStyle: 'dash',
                marker: { enabled: false },
            enableMouseTracking: false,
                /* function returns data for trend-line */
                data: Array.from(Array(12),(val,index)=>(index+1)*500/12)
        }]
    ,
    xAxis: {
        tickInterval: 1,
        labels: {
            enabled: true,
            formatter: function() { return months[this.value];},
        }
    },
    yAxis: {
        tickInterval: 100,
        title: {
            text: 'Sales'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    tooltip: {
        formatter: function(i) {
            return '<b>' + this.series.name + '</b><br />Sales : <b>' + (this.y - this.series.yData[this.key-1]) +
                '</b><br />Month : <b>' + months[this.x] + '</b><br />Total : <b>' + this.y + '</b>'
        }
    }
}

export default options;