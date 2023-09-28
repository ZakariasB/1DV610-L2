export default class PieChart {
    constructor(options) {
        this.canvas = document.getElementById(options.canvasId)
        this.context = this.canvas.getContext('2d')
        this.data = options.data || []
        this.labels = options.labels || []
        this.colors = options.colors || []
        this.centerX = this.canvas.width / 2
        this.centerY = this.canvas.height / 2
        this.radius = Math.min(this.centerX, this.centerY) - 10
    }

    draw () {
        try {
        if (this.data.length === 0) {
            console.log("Error: Empty data")
            return
        }
        let totalValue = 0
        let currentAngle = -0.5 * Math.PI // Start at the top of the canvas.

        for (let i = 0; i < this.data.length; i++) {
            totalValue += this.data[i]
        }

        for (let i = 0; i < this.data.length; i++) {
            let sliceAngle = 2 * Math.PI * this.data[i] / totalValue

            this.context.beginPath()
            this.context.moveTo(this.centerX, this.centerY)
            this.context.arc(this.centerX, this.centerY, this.radius, currentAngle, currentAngle + sliceAngle)
            this.context.closePath()

            this.context.fillStyle = this.colors[i] || 'gray'
            this.context.fill()

            currentAngle += sliceAngle;

        }

     } catch (error) {
        console.error(error)
        this.clear()
     }
    }

    clear () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}