export default class HorizontalBarChart {
    constructor(options) {
        this.canvas = document.getElementById(options.canvasId)
        this.context = this.canvas.getContext('2d')
        this.data = options.data || []
        this.labels = options.labels || []
        this.colors = options.colors || []
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.padding = options.padding || 10
    }

    draw() {
        try {
        if (this.data.length === 0) {
            console.log("Error: Empty data")
            return
        }

        let totalBars = this.data.length
        let maxValue = Math.max(...this.data)
        let paddingSpace = (totalBars + 1) * this.padding
        let availableHeight = this.height - paddingSpace
        let barHeight = availableHeight / totalBars

        for (let i = 0; i < totalBars; i++) {
            let barWidth = (this.data[i] / maxValue) * (this.width - 2 * this.padding)
            let y = this.padding + i * (barHeight + this.padding)
            let x = this.padding

            this.context.fillStyle = this.colors[i] || 'gray'
            this.context.fillRect(x, y, barWidth, barHeight)

            if (this.labels[i]) {
                this.context.fillStyle = "#000"
                this.context.textAlign = "left"
                this.context.fillText(this.labels[i], x + barWidth + 5, y + barHeight / 2)
            }
        }
     } catch (error) {
        console.error(error)
        this.clear()
     }
    }

    

    clear() {
        this.context.clearRect(0, 0, this.width, this.height)
    }
}
