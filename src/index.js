
import LineChart from './linechart/LineChart.js'

let chart = new LineChart({
    canvasId: 'myCanvas',
    data: [1, 5, 7, 8],
    colors: '#FF0000'

})

chart.draw()
chart.clear()