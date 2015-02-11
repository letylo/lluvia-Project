/**
 * @class SeekBehavior
 *
 * Creates Itinerant Behavior: seek
 *
 * @constructor SeekBehavior
 *
 */

SeekBehavior.prototype = new Behavior
SeekBehavior.prototype.constructor = SeekBehavior
SeekBehavior.prototype.super = Behavior

function SeekBehavior(){
  Behavior.apply(this, arguments)
  this.approach_distance = 100 // Default approach distance
  this.arrival_distance = 0
  this.cached_target = this.target || new Vector(0,0)
}


/**
 * @method set_target
 *
 * Search a target boid
 *
 * @param  {Object} boid Target boid
 *
 */
SeekBehavior.prototype.set_target = function(boid){
  this.target = boid || new Boid({
                          position:      new Vector(1,1),
                          velocity:      new Vector(1,1),
                          acceleration:  new Vector(1,1)
      }, "red")
}


/**
 * @method target_data
 *
 * Position information of boid
 *
 * @return {Object} this.target.geo_data Position information of boid
 */
SeekBehavior.prototype.target_data = function(){
  if (!this.target)
    throw "SeekBehavior Disabled. Still no target."
  return this.target ? this.target.geo_data : null
}


/**
 * @method get_target
 *
 * Get a targetboid
 *
 * @return {Object} this.target_data() Position information of boid
 */
SeekBehavior.prototype.get_target = function(){
  return this.target_data()
}


/**
 * @method target_at
 *
 * Get the distance between the given boid and its target
 *
 * @return {}
 */
SeekBehavior.prototype.target_at = function(){
  if  (this.is_premodified_by$U("foresee")) {
    var boid_target_pos          = this.get_target().position
    var boid_target_rel_pos      = boid_target_pos.subs(this.me.geo_data.position)
    var boid_target_velocity     = this.get_target().velocity
    var boid_target_acceleration = this.get_target().acceleration
    var normal_acceleration      = this.target.localize(boid_target_acceleration).get_coord(1)
    var impact_time              = boid_target_rel_pos.module() / this.me.geo_data.velocity.module()

    normal_acceleration = this.target.globalize(0, normal_acceleration)

    return this.cached_target = boid_target_pos.add( boid_target_velocity.add(normal_acceleration.scale(impact_time/3)).scale(impact_time)).subs( this.me.geo_data.position )

  }
  return this.get_target().position.subs( this.me.geo_data.position )
}


/**
 * @method desired_velocity
 *
 * Desired velocity by boid
 *
 * @return {Object} vector Vector velocity
 */
SeekBehavior.prototype.desired_velocity = function(){
  var arrival_distance
  try{
    arrival_distance = this.target_at().module()
  }catch(err){
    arrival_distance = 0
  }
  this.arrival_distance = arrival_distance
  var scale = 1
  /* Arrival behavior Modifier */
  if (this.is_postmodified_by$U("arrival"))
    if (this.approach_distance > arrival_distance)
      scale = arrival_distance / this.approach_distance

  return (new Vector(this.target_at().unit().scale(scale * this.me.vel_max)))
}


/**
 * @method desired_acceleration
 *
 * Desired acceleration by boid
 *
 * @return {Object} vector Vector acceleration
 *
 */
SeekBehavior.prototype.desired_acceleration = function(){
  var response = this.desired_velocity().subs(this.me.velocity())
  return response
}

