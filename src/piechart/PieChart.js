export default class PieChart {
    constructor(options) {
        this.canvas = document.getElementById(options.canvasId)
        this.context = this.canvas.getContext('2d')
        this.data = options.data || []
        this.labels = options.labels || [];
        this.colors = options.colors || []
        this.centerX = this.canvas.width / 2
        this.centerY = this.canvas.height / 2
        this.radius = Math.min(this.centerX, this.centerY) - 10
    }
}