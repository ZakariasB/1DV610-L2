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

    

    clear() {
        this.context.clearRect(0, 0, this.width, this.height)
    }
}
