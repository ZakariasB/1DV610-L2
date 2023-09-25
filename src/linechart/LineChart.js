export default class LineChart {
    constructor(options) {
        this.canvas = document.getElementById(options.canvasId)
        this.context = this.canvas.getContext('2d')
        this.data = options.data || []
        this.labels = options.labels || []
        this.color = options.colors || '#000'
        this.padding = 50
    }

    draw() {
        if (this.data.length === 0) {
            console.log("Error: Empty data")
            return
        }

        let maxValue = Math.max(...this.data)
        let minValue = Math.min(...this.data)

        let horizontalStep = (this.canvas.width - 2 * this.padding) / (this.data.length - 1)
        let verticalScale = (this.canvas.height - 2 * this.padding) / (maxValue - minValue)

        this.context.beginPath()

        this.data.forEach((value, index) => {
            let x = this.padding + index * horizontalStep
            let y = this.canvas.height - this.padding - (value - minValue) * verticalScale

            if (index === 0) {
                this.context.moveTo(x, y)
            } else {
                this.context.lineTo(x, y)
            }
        })

        this.context.strokeStyle = this.color
        this.context.stroke()
    }

    clear () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

}