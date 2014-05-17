/**
 * @class Line
 *
 * Define method for lines and curves
 *
 * @property {Number} Permissible error in the calculations with Line
 *
 * @constructor Line
 *
 */

function Line() {
	this.ERROR = 0.00001
}

/**
* @method distance
* @static
*
* Calculate the distance between two lines or one line and point
*
* @param {Object} line1 First line for calculations
* @param {Object | Object} StraightLine || Vector shape2 Second param for calculations
*
* @return {Number} d Distance between lines or one line and point
*
* ###Example
*    |
*/
Line.distance = function(line1, shape2){
	// Si es un vector creo una linea paralela a la primera para hacer los calculos(lo hice asi por compatibilidad con lo anterior, prometo mejorarlo!!)
	if(shape2 instanceof Vector)
		shape2 = new StraightLine(shape2, new Vector( shape2.get_coord(0) + (1*(line1.director.get_coord(0))), shape2.get_coord(1) + (1*(line1.director.get_coord(1)))))

	var d = 0
	if(!Line.intersects$U(line1, shape2)){
		//if(shape2 instanceof Vector)
		//	shape2 = new StraightLine(shape2, 0,0)
		// Al ser paralelas la distancia entre rectas se convierte a una distancia entre un punto y una recta.
		//                         __   _     _
		//dist(P,r) = Area/Base = |RP x d| / |d|
		var RP = new Vector(line1.get_initial_point().get_coord(0) - shape2.get_initial_point().get_coord(0), line1.get_initial_point().get_coord(1) - shape2.get_initial_point().get_coord(1), 0)
		var d = new Vector(line1.get_initial_point().get_coord(0) - line1.get_final_point().get_coord(0), line1.get_initial_point().get_coord(1) - line1.get_final_point().get_coord(1), 0)
		var RP_module = RP.cross(d).module()
		var d_module = d.module()
		d = RP_module / d_module
	}
	return d
}

/**
* @method get_intersection
* @static
*
* Calculate the cut point two line
*
* @param {Object} line1 First line for calculations
* @param {Object} line2 Second line for calculations
*
* @return {Object} vector Cut point
* 
* ###Example
*    |
*/
Line.get_intersection = function(line1, line2){
	/* __     __   __       __    
	 * r0 + λ*vr = s0 + ß * vs
	 * 
	 * ... un porron de calculos despues ...
	 * 
	 * ß = (r1 - s1) + vr1*(s0-r0) / vs1 - vr1*(vs0/vr0)
	 *                      __       __
	 * punto_interseccion = s0 + ß * vs
	 */
	if(Line.intersects$U(line1, line2)){
		var r0 = line1.initial_point.get_coord(0)
		var r1 = line1.initial_point.get_coord(1)
		var vr0 = line1.director.get_coord(0)
		var vr1 = line1.director.get_coord(1)

		var s0 = line2.initial_point.get_coord(0)
		var s1 = line2.initial_point.get_coord(1)
		var vs0 = line2.director.get_coord(0)
		var vs1 = line2.director.get_coord(1)

		var ß = ((r1 - s1) + (vr1*(s0-r0))) / (vs1 - (vr1*(vs0/vr0)))

		var intersection = line2.initial_point.add(line2.director.scale(ß))
		alert(intersection.toSource())
		return intersection
	}
}


/**
* @method intersects$U
* @static
*
* Check if two lines intersect
*
* @param {Object} line1 First line for calculations
* @param {Object} line2 Second line for calculations
*
* @return {Boolean}
*
* ###Example
*    |
*/
Line.intersects$U = function(line1, line2){
    if(line1.director.get_coord(0) / line1.director.get_coord(1) == line2.director.get_coord(0) / line2.director.get_coord(1))
        return false // Son paralelas    
    return true
}

/**
* @method intersects_segment$U
* @static
*
* Check if two lines intersect
*
* @param {Object} line1 First line for calculations
* @param {Object} line2 Second line for calculations
*
* @return {Boolean}
*
* ###Example
*    |
*/
Line.intersects_segment$U = function(line1, line2){
	var line3 = new StraightLine(new Vector(3,5), new Vector(4,4))
	var x_s1_max = 0
	var x_s1_min = 0
	var x_s2_max = 0
	var x_s2_min = 0
 
	var y_s1_max = 0
	var y_s1_min = 0
	var y_s2_max = 0
	var y_s2_min = 0

	if(line1.get_initial_point().get_coord(0) > line1.get_final_point().get_coord(0)){
		x_s1_max = line1.get_initial_point().get_coord(0)
		x_s1_min = line1.get_final_point().get_coord(0)
	}
	else{
		x_s1_min = line1.get_initial_point().get_coord(0)
		x_s1_max = line1.get_final_point().get_coord(0)
	}


	if(line1.get_initial_point().get_coord(1) > line1.get_final_point().get_coord(1)){
		y_s1_max = line1.get_initial_point().get_coord(1)
		y_s1_min = line1.get_final_point().get_coord(1)
	}
	else{
		y_s1_min = line1.get_initial_point().get_coord(1)
		y_s1_max = line1.get_final_point().get_coord(1)
	}

	if(line2.get_initial_point().get_coord(0) > line2.get_final_point().get_coord(0)){
		x_s2_max = line2.get_initial_point().get_coord(0)
		x_s2_min = line2.get_final_point().get_coord(0)
	}
	else{
		x_s2_min = line2.get_initial_point().get_coord(0)
		x_s2_max = line2.get_final_point().get_coord(0)
	}

	if(line2.get_initial_point().get_coord(1) > line2.get_final_point().get_coord(1)){
		y_s2_max = line2.get_initial_point().get_coord(1)
		y_s2_min = line2.get_final_point().get_coord(1)
	}
	else{
		y_s2_min = line2.get_initial_point().get_coord(1)
		y_s2_max = line2.get_final_point().get_coord(1)
	}

	if(x_s1_max < x_s2_min)
		return false
	else if(x_s1_min > x_s2_max)
		return false
	else if(y_s1_max < y_s2_min)
		return false
	else if(y_s1_min > y_s2_max)
		return false

	return true

	//alert("Max: "+ x_s2_max +"; Min: "+ x_s2_min)


	/*
	// v(x,y,z)
	var p1 = new Vector(line1.get_initial_point().get_coord(0), line1.get_initial_point().get_coord(1), 1)
	var p2 = new Vector(line1.get_final_point().get_coord(0), line1.get_final_point().get_coord(1), 1)
	var p3 = new Vector(line2.get_initial_point().get_coord(0), line2.get_initial_point().get_coord(1), 1)
	var p4 = new Vector(line2.get_final_point().get_coord(0), line2.get_final_point().get_coord(1), 1)

	var r1 = p3.subs(p1)
	var r2 = p2.subs(p1)
	var r = r1.cross(r2)
	alert(r.toSource())
*/
	/*
    if(Line.intersects$U(line1, line2)){
    	var intersect_point = Line.get_intersection(line1, line2)
    	//alert(intersect_point.toSource())
    	if(point_in_segment(line2, intersect_point)){
    		return true
    	}
    }
    return false
*/
}

function point_in_segment(line1, point){ // Solo funciona si todas las coordenadas son positivas, mejorar!!
	var x1 = line1.get_initial_point().get_coord(0)
	var x2 = line1.get_final_point().get_coord(0)
	var xc = point.get_coord(0)
	var y1 = line1.get_initial_point().get_coord(1)
	var y2 = line1.get_final_point().get_coord(1)
	var yc = point.get_coord(1)
	//if(line1.get_initial_point().get_coord(0) <= point.get_coord(0) && line1.get_initial_point().get_coord(1) <= point.get_coord(1) && line1.get_final_point().get_coord(0) >= point.get_coord(0) && line1.get_final_point().get_coord(1) >= point.get_coord(1))
	//alert(xc)
	if(x1 <= xc && x2 >= xc || y1 <= yc && y2 >= yc)
	//alert(x1 +";,;"+xc)
	//if(xc < x1 && xc < x2 || xc > x1  && xc > x2)
		return true
	return false

	// Si xc < x1  && xc < x2     ||    xc > x1  && xc > x2 => no hay corte
	// Caso contrario => Hay corte.
}

/**
* @method slope line
* @static
*
* Internal functions. Calculate the slope line
*
* @param {Object} line Line for calculations
*
* @return {Number} m The slope line
*
* ###Example
*    |
*/
function slope_line(line){
	var m = (line.get_final_point().get_coord(1) - line.initial_point.get_coord(1)) / (line.get_final_point().get_coord(0) - line.initial_point.get_coord(0))
	return m
}

/**
 *
 * @method get_initial_point
 * @virtual
 *
 * Gets the initial coordinates of the defined vector
 *
 * @param  {}
 *
 * @return {String} Returns an exception for this virtual function
 */
Line.prototype.get_initial_point = function() {
	throw "virtual function invocation: Please define get_initial_point():Vector"
}

/**
 *
 * @method get_final_point
 * @virtual
 *
 * Gets the final coordinates of the defined vector
 *
 * @param  {}
 *
 * @return {String} Returns an exception for this virtual function
 */
Line.prototype.get_final_point = function() {
	throw "virtual function invocation: Please define get_final_point():Vector"
}


/**
 *
 * @method at
 * @virtual
 *
 * Gets the coordinates of the defined vector at a given point represented by lambda
 *
 * @param  {}
 *
 * @return {String} Returns an exception for this virtual function
 */
Line.prototype.at = function() {
	throw "virtual function invocation: Please define at(lambda:Number):Vector"
}

/**
 *
 * @method get_arc_length
 * @virtual
 *
 * Calculates the length of an arc
 *
 * @param  {}
 *
 * @return {String} Returns an exception for this virtual function
 */
Line.prototype.get_arc_length = function() {
	//Note: lambda = lambda || 1
	throw "virtual function invocation: Please define get_arc_length([lambda:Number=1]):Number"
}

/**
 *
 * @method get_tangent
 * @virtual
 *
 * Calculates the coordinates of the tangent to the straight line according to lambda
 *
 * @param  {}
 *
 * @return {String} Returns an exception for this virtual function
 */
Line.prototype.get_tangent = function() {
	throw "virtual function invocation: Please define get_tangent(lambda:Number):Vector"
}

/**
 *
 * @method get_normal
 * @virtual
 *
 * Calculates the coordinates of the normal vector to the straight line according to lambda.
 *
 * @param  {}
 *
 * @return {String} Returns an exception for this virtual function
 */
Line.prototype.get_normal = function() {
	throw "virtual function invocation: Please define get_normal(lambda:Number):Vector"
}

/**
 *
 * @method get_perpendicular
 * @virtual
 *
 * Calculates the coordinates of the perpendicular vector to the straight line according to lambda.
 *
 * @param  {}
 *
 * @return {String} Returns an exception for this virtual function
 */
Line.prototype.get_perpendicular = function() {
	throw "virtual function invocation: Please define get_perpendicular([point:Vector | iterator:Number]):StraightLine"
}

/**
 *
 * @method belongs_to
 * @virtual
 *
 * Description
 *
 * @param  {}
 *
 * @return {String} Returns an exception for this virtual function
 */
Line.prototype.belongs_to = function() {
	throw "virtual function invocation: Please define belongs_to(point:Vector):Boolean"
}

/*
Line.prototype.intersects$U = function() {
	throw "virtual function invocation: Please define intersects(line:Line):Boolean"
}

Line.prototype.get_intersection = function() {
	throw "virtual function invocation: Please define get_intersection(line:Line):Vector"
}
*/
