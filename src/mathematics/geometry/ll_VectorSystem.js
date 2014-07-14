/**
 * @class mathematics.geometry.VectorSystem
 * Creates a vector system as an array of anything that derives from Vector
 *
 */

VectorSystem.prototype = new Array
VectorSystem.prototype.constructor = VectorSystem
VectorSystem.super = Array

function VectorSystem(vectors) {
    for (var i = 0; i < arguments.length; i++)
        this.push(arguments[i])

}

VectorSystem._this = this

/**
 * @method check_integrity
 * @static
 * description
 *
 * @return {[type]} [description]
 */
VectorSystem.check_integrity = function() { //doesn't work yet
    //class that checks that everything that gets in and out of vectorSystem is a vector
    //needs to evaluate this
    var that = this
    var method_name = []
    var type_check = 0
    var is_vec
    var res = true

    for (var i = 0; i < arguments[0].length; i++) {
        method_name[i] = arguments[0][i][0]
        type_check[i] = arguments[0][i][1]
    }

    function check_me(type_of_check, met_name) {
        if (type_of_check)
            j
        else {
            for (var i = 0; i < that.length; i++)
                if (!that instanceof VectorSystem || that[i] instanceof Vector)
                    res = false
        }

    }

    for (var j = 0; j < method_name.length; j++)
        check_me(type_check[j], method_name[j])


}

/**
 * @method push
 * description
 *
 * @param  {[type]} elements [description]
 * @return {[type]}          [description]
 */
VectorSystem.prototype.push = function(elements) {
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] instanceof Array) {
            for (var j = 0; j < arguments[i].length; j++)
                if (arguments[i][j] instanceof Vector)
                    Array.prototype.push.call(this, arguments[i][j])
                else
                    throw ("VectorSystem#push: Invalid input.\n" + arguments[i][j] + " must be a Vector or derived from it")
        } else {
            if (arguments[i] instanceof Vector)
                Array.prototype.push.call(this, arguments[i])
            else
                throw ("VectorSystem#push: Invalid input.\n" + arguments[i] + " must be a Vector or derived from it")
        }
    }
}

/**
 * @method push_with_index
 * Pushed vectors into this according to a given position
 *
 * @return {VectorSystem} Returns this
 */
VectorSystem.prototype.push_with_index = function() {
    var new_index = []
    var args = []
    var position = 0
    var number = 0

    for (var i = 0; i < arguments.length; i++) {
        args[i] = arguments[i]
        if (typeof(arguments[i]) === "number") {
            position = args[i]
            number = i
        }
    }
    args.erase_at$B(number)

    for (var i = 0; i < position; i++)
        new_index[i] = this[i]

    for (var i = 0; i < args.length; i++)
        new_index[i + position] = args[i]

    for (var i = position; i < this.length; i++)
        new_index[i + args.length] = this[i]

    this.clear()

    VectorSystem.prototype.push.apply(this, new_index)

    return this
}

/**
 * @method to_a
 * Transforms the coordinates of all the vectors of the Vector System into an array
 *
 *
 * @return {Array}
 */
VectorSystem.prototype.to_a = function() {
    var a = []
    for (var i = 0; i < this.length; i++)
        a.push(this[i].Coord)
    return a
}

/**
 * @method distribute$B
 * Method not valid for VectorSystem. When called, throws an exception
 *
 */
VectorSystem.prototype.distribute$B = function(op2) {
    throw "No a valid function for VectorSystem"
}

/**
 * @method map$B
 * description
 *
 * @param {Function} block Function to be used to modified the VectorSystem
 * @return {Array}
 */
VectorSystem.prototype.map$B = function(block) { //doesn't work yet

    var res = Array.prototype.map.apply(this, arguments)
    this.clear()

    for (var i = 0; i < res.length; i++)
        this[i] = res[i]

    return this
}

/**
 * @method uniq$B
 * [description]
 *
 * @return {[]} [description]
 */
VectorSystem.prototype.uniq$B = function() {
    var a = []
    var eq = false
    var lgh = this.length

    for (var i = 0; i < this.length; i++)
        a[i] = this[i]

    this.clear()

    for (var i = 0; i < lgh; i++) {
        for (var j = (i + 1); j < lgh; j++) {
            eq = a[i].is_equal_to$U(a[j])
            if (eq == true) {
                a.erase$B(a[j])
                lgh--
            }
        }
    }
    this.push(a)

    return this
}

/**
 * @method merge
 * [description]
 *
 * ###Example
 *    var a = new VectorSystem(new Vector(3,2), new Vector(1,6))
 *    var b = new VectorSystem(new Vector(8,6))
 *    var c = a.merge(b)
 *    c.to_a()
 *    //=> [[3,2], [1,6], [8,6]]
 *
 * @return {[]} [description]
 */
VectorSystem.prototype.merge = function() {
    alert("hey")
    for (var i = 0; i < arguments.length; i++)
        this.push(arguments[i])
}

/**
 * @method splice
 * [description]
 *
 * @return {[]} [description]
 */
VectorSystem.prototype.splice = function() {}

/**
 * @method unshift
 * [description]
 *
 * @return {[]} [description]
 */
VectorSystem.prototype.unshift = function() {}



VectorSystem.methods_to_check = [
    ["push", 1],
    ["push_with_index", 1],
    ["map$B", 1],
    ["uniq$B", 1]
]

VectorSystem.check_integrity(VectorSystem.methods_to_check)