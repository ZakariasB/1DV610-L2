export default class BarChart {
  constructor(options) {
    this.canvas = document.getElementById(options.canvasId)
    this.context = this.canvas.getContext('2d')
    this.data = options.data ||  []
        this.labels = options.labels || []
        this.colors = options.colors || []
        this.width = this.canvas.width
        this.height = this.canvas.height
        this.padding = options.padding || 10
  }

  draw() {
    if (this.data.length === 0) {
        console.log("Error: Empty data")
        return
    }
    let totalBars = this.data.length
    let maxValue = Math.max(...this.data)
    let paddingSpace = (totalBars + 1) * this.padding
    let availableWidth = this.width - paddingSpace
    let barWidth = availableWidth / totalBars

    for (let i = 0; i < totalBars; i++) {
        let barHeight = (this.data[i] / maxValue) * (this.height - 2 * this.padding)
            let x = this.padding + i * (barWidth + this.padding)
            let y = this.height - barHeight - this.padding

            this.context.fillStyle = this.colors[i] || 'gray'
            this.context.fillRect(x, y, barWidth, barHeight)

            if (this.labels[i]) {
                this.context.fillStyle = "#000"
                this.context.textAlign = "center"
                this.context.fillText(this.labels[i], x + barWidth / 2, this.height - this.padding / 2)
            }
    }
  }
}