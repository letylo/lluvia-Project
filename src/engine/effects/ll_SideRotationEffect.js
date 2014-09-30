SideRotationEffect.prototype = new ThreadAutomata
SideRotationEffect.prototype.constructor = SideRotationEffect
SideRotationEffect.prototype.super = ThreadAutomata

/**
 * [SideRotationEffect description]
 * @param {[type]} view          [description]
 * @param {[type]} angle         [description]
 * @param {[type]} origin        [description]
 * @param {[type]} velocity      [description]
 * @param {[type]} final_coord   [description]
 * @param {[type]} initial_coord [description]
 */
function SideRotationEffect(view, config) {

    var that = this
    if (Object.prototype.toString.call(view) == "[object String]")
        view = document.getElementById(view)
    this.view = view
    config = config || {}
    this.angle = config.angle
    this.origin = config.origin || [0, 0]
    this.final_coord = config.final_coord || [0, 0]
    this.coord = this.initial_coord = config.initial_coord || [0, 0]
    this.velocity = config.velocity || [20, 20]

    var solicitors = {
        "running": function(now, before) {
            for (var i = that.coord.length - 1; i >= 0; i--)
                that.coord[i] += that.velocity[i] * (now - before) / 1000

            that.view.style.transform = 'rotate(' + that.coord[0] + 'deg)'
            that.view.style.transformOrigin = '' + that.origin[0] + '%' + that.origin[1] + '%'
            that.view.style.webkitTransform = 'rotate(' + that.coord[0] + 'deg)'
            that.view.style.webkitTransformOrigin = '' + that.origin[0] + '%' + that.origin[1] + '%'
            that.view.style.mozTransform = 'rotate(' + that.coord[0] + 'deg)'
            that.view.style.mozTransformOrigin = '' + that.origin[0] + '%' + that.origin[1] + '%'
            that.view.style.msTransform = 'rotate(' + that.coord[0] + 'deg)'
            that.view.style.msTransformOrigin = '' + that.origin[0] + '%' + that.origin[1] + '%'
            that.view.style.oTransform = 'rotate(' + that.coord[0] + 'deg)'
            that.view.style.oTransformOrigin = '' + that.origin[0] + '%' + that.origin[1] + '%'

            if (that.angle && that.coord[0] >= that.angle)
                that.switch("stopped")
        }
    }

    ThreadAutomata.call(this, ["stopped", "*running"], solicitors)
}