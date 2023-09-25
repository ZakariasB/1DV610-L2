export default class LineChart {
    constructor(options) {
        this.canvas = document.getElementById(options.canvasId)
        this.context = this.canvas.getContext('2d')
        this.data = options.data || []
        this.labels = options.labels || []
        this.color = options.colors || '#000'
        this.padding = 50
    }

}