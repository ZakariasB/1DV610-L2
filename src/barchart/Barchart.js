/**
 * The BarChart module for drawing a BarChart on a HTML canvas element.
 *
 * @author Zakarias Bergcrona
 */
export default class BarChart {
  /**
   * Initializes the BarChart object with necessary options such as data, color, labels.
   *
   * @param {*} options An object containing the configuration of your BarChart.
   */
  constructor (options) {
    if (typeof options.canvasId !== 'string' || document.getElementById(options.canvasId) === null) {
      throw new TypeError('Need a valid reference to a canvas element')
    }
    this.canvas = document.getElementById(options.canvasId)
    this.context = this.canvas.getContext('2d')
    this.data = options.data || []
    this.labels = options.labels || []
    this.colors = options.colors || []
    this.width = this.canvas.width
    this.height = this.canvas.height
    this.padding = options.padding || 10
  }

  /**
   * Draws the BarChart according to the options object passed as an argument to the constructor.
   *
   */
  draw () {
    try {
      if (this.data.length === 0) {
        console.log('Error: Empty data')
        return
      }
      const totalBars = this.data.length
      const maxValue = Math.max(...this.data)
      const paddingSpace = (totalBars + 1) * this.padding
      const availableWidth = this.width - paddingSpace
      const barWidth = availableWidth / totalBars

      for (let i = 0; i < totalBars; i++) {
        const barHeight = (this.data[i] / maxValue) * (this.height - 2 * this.padding)
        const x = this.padding + i * (barWidth + this.padding)
        const y = this.height - barHeight - this.padding

        this.context.fillStyle = this.colors[i] || 'gray'
        this.context.fillRect(x, y, barWidth, barHeight)

        if (this.labels[i]) {
          this.context.fillStyle = '#000'
          this.context.textAlign = 'center'
          this.context.fillText(this.labels[i], x + barWidth / 2, this.height - this.padding / 2)
        }
      }
    } catch (error) {
      console.error(error)
      this.clear()
    }
  }

  /**
   * Clears the HTML canvas element.
   */
  clear () {
    this.context.clearRect(0, 0, this.width, this.height)
  }
}
