/**
 * The LineChart module for drawing a LineChart on a HTML canvas element.
 *
 * @author Zakarias Bergcrona
 */
export default class LineChart {
  /**
   * Initializes the LineChart object with necessary options such as data, color, labels.
   *
   * @param {*} options An object containing the configuration of your LineChart.
   */
  constructor (options) {
    if (typeof options.canvasId !== 'string' || document.getElementById(options.canvasId) === null) {
      throw new TypeError('Need a valid reference to a canvas element')
    }
    this.canvas = document.getElementById(options.canvasId)
    this.context = this.canvas.getContext('2d')
    this.data = options.data || []
    this.labels = options.labels || []
    this.color = options.color || '#000'
    this.padding = 50
  }

  /**
   * Draws a linechart with the options passed as an argument to the constructor.
   *
   */
  draw () {
    try {
      if (this.data.length === 0) {
        console.log('Error: Empty data')
        return
      }

      const maxValue = Math.max(...this.data)
      const minValue = Math.min(...this.data)

      const horizontalStep = (this.canvas.width - 2 * this.padding) / (this.data.length - 1)
      const verticalScale = (this.canvas.height - 2 * this.padding) / (maxValue - minValue)

      this.context.beginPath()

      this.data.forEach((value, index) => {
        const x = this.padding + index * horizontalStep
        const y = this.canvas.height - this.padding - (value - minValue) * verticalScale

        if (index === 0) {
          this.context.moveTo(x, y)
        } else {
          this.context.lineTo(x, y)
        }
      })

      this.context.strokeStyle = this.color
      this.context.stroke()
    } catch (error) {
      console.error(error)
      this.clear()
    }
  }

  /**
   * Clears the HTML canvas element.
   */
  clear () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}
