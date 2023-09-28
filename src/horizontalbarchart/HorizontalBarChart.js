/**
 * The HorizontalBarChart module for drawing a HorizontalBarChart on a HTML canvas element.
 *
 * @author Zakarias Bergcrona
 */
export default class HorizontalBarChart {
  /**
   * Initializes the HorizontalBarChart object with necessary options such as data, color, labels.
   *
   * @param {*} options An object containing the configuration of your HorizontalBarChart.
   */
  constructor (options) {
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
   * Draws a horizontal BarChart according to the options object passed to the constructor as an argument.
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
      const availableHeight = this.height - paddingSpace
      const barHeight = availableHeight / totalBars

      for (let i = 0; i < totalBars; i++) {
        const barWidth = (this.data[i] / maxValue) * (this.width - 2 * this.padding)
        const y = this.padding + i * (barHeight + this.padding)
        const x = this.padding

        this.context.fillStyle = this.colors[i] || 'gray'
        this.context.fillRect(x, y, barWidth, barHeight)

        if (this.labels[i]) {
          this.context.fillStyle = '#000'
          this.context.textAlign = 'left'
          this.context.fillText(this.labels[i], x + barWidth + 5, y + barHeight / 2)
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
