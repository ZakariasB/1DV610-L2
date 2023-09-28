import HorizontalBarChart from './HorizontalBarChart/HorizontalBarChart.js'
import BarChart from './BarChart/BarChart.js'
import LineChart from './LineChart/LineChart.js'
import PieChart from './PieChart/PieChart.js'

const horizontalBarchart = new HorizontalBarChart({
  canvasId: 'myCanvas1',
  data: [19, 25, 37, 8],
  labels: ['A', 'B', 'C', 'D'],
  colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00']

})
const barChart = new BarChart({
  canvasId: 'myCanvas2',
  data: [19, 25, 37, 8],
  labels: ['A', 'B', 'C', 'D'],
  colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00']
})
const lineChart = new LineChart({
  canvasId: 'myCanvas3',
  data: [19, 25, 37, 8],
  color: '#FF0000'
})
const pieChart = new PieChart({
  canvasId: 'myCanvas4',
  data: [19, 25, 37, 8],
  colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00']
})

barChart.draw()
horizontalBarchart.draw()
lineChart.draw()
pieChart.draw()
