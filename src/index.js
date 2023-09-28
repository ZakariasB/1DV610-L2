
import HorizontalBarChart from './HorizontalBarChart/HorizontalBarChart.js'

let chart = new HorizontalBarChart({
    canvasId: 'myCanvas',
    data: [19, 25, 37, 8],
    labels: ['A', 'B', 'C', 'D'],
    colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00']

})

chart.draw()
