
import BarChart from './BarChart/BarChart.js'

let chart = new BarChart({
    canvasId: 'myCanvas',
    data: [9, 5, 7, 8],
    labels: ['A', 'B', 'C', 'D'],
    colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00']

})

chart.draw()
