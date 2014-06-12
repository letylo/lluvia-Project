Ext.data.JsonP.state({"tagname":"class","name":"state","autodetected":{},"files":[{"filename":"ll_Device.js","href":"ll_Device.html#state"}],"extends":"Processor","mixins":["Engine.ThreadAutomata"],"type":"Object","default":null,"properties":[{"tagname":"property","type":"Number","name":"suspended","default":"0","optional":true,"doc":"<p>The device is not using its executdion turn.</p>\n","html_type":"Number"},{"tagname":"property","type":"Number","name":"running","default":"1","optional":true,"doc":"<p>Normal work operations.</p>\n","html_type":"Number"},{"tagname":"property","type":"Number","name":"suspending","default":"2","optional":true,"doc":"<p>The device is cleaning up before sleeping.</p>\n","html_type":"Number"},{"tagname":"property","type":"Number","name":"killing","default":"3","optional":true,"doc":"<p>Write your last will.</p>\n","html_type":"Number"},{"tagname":"property","type":"Number","name":"killed","default":"4","optional":true,"doc":"<p>No aim to recover.</p>\n","html_type":"Number"}],"members":[{"name":"Device","tagname":"property","owner":"state","id":"property-Device","meta":{}},{"name":"constructor","tagname":"method","owner":"state","id":"method-constructor","meta":{}},{"name":"addPort","tagname":"method","owner":"state","id":"method-addPort","meta":{}},{"name":"attend","tagname":"method","owner":"state","id":"method-attend","meta":{}},{"name":"childRunner","tagname":"method","owner":"state","id":"method-childRunner","meta":{"private":true}},{"name":"fireEvent","tagname":"method","owner":"state","id":"method-fireEvent","meta":{}},{"name":"gateRunner","tagname":"method","owner":"state","id":"method-gateRunner","meta":{"private":true}},{"name":"get","tagname":"method","owner":"Processor","id":"method-get","meta":{}},{"name":"getSolicitors","tagname":"method","owner":"state","id":"method-getSolicitors","meta":{}},{"name":"getStates","tagname":"method","owner":"state","id":"method-getStates","meta":{}},{"name":"kill","tagname":"method","owner":"Processor","id":"method-kill","meta":{}},{"name":"method_missing","tagname":"method","owner":"state","id":"method-method_missing","meta":{}},{"name":"newGate","tagname":"method","owner":"state","id":"method-newGate","meta":{}},{"name":"newMessage","tagname":"method","owner":"state","id":"method-newMessage","meta":{}},{"name":"newThread","tagname":"method","owner":"Processor","id":"method-newThread","meta":{}},{"name":"register","tagname":"method","owner":"Processor","id":"method-register","meta":{}},{"name":"run","tagname":"method","owner":"Engine.ThreadAutomata","id":"method-run","meta":{}},{"name":"sendMessage","tagname":"method","owner":"state","id":"method-sendMessage","meta":{}},{"name":"start","tagname":"method","owner":"Processor","id":"method-start","meta":{}},{"name":"state_substate","tagname":"method","owner":"state","id":"method-state_substate","meta":{}},{"name":"step","tagname":"method","owner":"Processor","id":"method-step","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-state","short_doc":"Provides an asynchronous mechanism for communicating with another devices. ...","html_type":"Object","component":false,"superclasses":["Processor"],"subclasses":[],"mixedInto":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Processor' rel='Processor' class='docClass'>Processor</a><div class='subclass '><strong>state</strong></div></div><h4>Mixins</h4><div class='dependency'><a href='#!/api/Engine.ThreadAutomata' rel='Engine.ThreadAutomata' class='docClass'>Engine.ThreadAutomata</a></div><h4>Files</h4><div class='dependency'><a href='source/ll_Device.html#state' target='_blank'>ll_Device.js</a></div></pre><div class='doc-contents'><p>Provides an asynchronous mechanism for communicating with another devices.\nIn practical terms, it uses a message queue and fires events.\nI doesn't have a window on his own but handles Gates to communicate\nwith HTML DOM.</p>\n\n<h3>Example of use:</h3>\n\n<pre><code>// EXAMPLE APP DEVICE\n// ButtonGate Example\nButtonGate.prototype = new Gate\nButtonGate.prototype.constructor = ButtonGate\n\nfunction ButtonGate(el){\n    if (arguments.length)\n        Gate.call(this, el)\n}\n// No 'device' references are provided in the constructor\n\n\nButtonGate.prototype.do_onclick = function(event, element){\n    alert(\"You have made click.\")\n}\n\nTryApp.prototype = new Device\nTryApp.prototype.constructor = TryApp\n\n\n\nfunction TryApp(){\n    //  self reference for static methods\n    var that = this;\n\n    // class reference for instance objects\n    this._class = that\n\n\n    //  private static vars\n    Device.call(this, null)\n    this.newGate(\"llaveEnMano\", ButtonGate)\n // Device#newGate inject a device property inside\n // the ButtonGate object pointing to _this_.\n    this.solicitors[this.state.running][this.stateChange.steady] = function(){\n        that.gates[0].panel.innerHTML = new Date()\n    }\n}\n</code></pre>\n\n<p>We have to be very carefull with non idempotent methods (specially function references),\nbecause they are called twice during inheritance processes. Once in xxx.prototype = new yy\nand another time at object initialization \" yyy.call(xxx, params) \"</p>\n\n<p>Third generation inheritance generates constructor calls with null argumentsEnumeration with all possible states. Default values are listed below.</p>\n<ul><li><span class='pre'>suspended</span> : Number (optional)<div class='sub-desc'><p>The device is not using its executdion turn.</p>\n<p>Defaults to: <code>0</code></p></div></li><li><span class='pre'>running</span> : Number (optional)<div class='sub-desc'><p>Normal work operations.</p>\n<p>Defaults to: <code>1</code></p></div></li><li><span class='pre'>suspending</span> : Number (optional)<div class='sub-desc'><p>The device is cleaning up before sleeping.</p>\n<p>Defaults to: <code>2</code></p></div></li><li><span class='pre'>killing</span> : Number (optional)<div class='sub-desc'><p>Write your last will.</p>\n<p>Defaults to: <code>3</code></p></div></li><li><span class='pre'>killed</span> : Number (optional)<div class='sub-desc'><p>No aim to recover.</p>\n<p>Defaults to: <code>4</code></p></div></li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-Device' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='state'>state</span><br/><a href='source/ll_Device.html#state-property-Device' target='_blank' class='view-source'>view source</a></div><a href='#!/api/state-property-Device' class='name expandable'>Device</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Device default statesEnumeration constant.</p>\n</div><div class='long'><p>Device default statesEnumeration constant.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='state'>state</span><br/><a href='source/ll_Device.html#state-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/state-method-constructor' class='name expandable'>state</a>( <span class='pre'>[view], [state], [currentState], [parent]</span> ) : <a href=\"#!/api/state\" rel=\"state\" class=\"docClass\">state</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a Device. ...</div><div class='long'><p>Creates a Device.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> | HTMLElement (optional)<div class='sub-desc'><p>A possible view associated with the Device.</p>\n</div></li><li><span class='pre'>state</span> : Object (optional)<div class='sub-desc'><p>Default Device states -as ll_Enumeration- are: suspended, running, suspending, killing and killed.</p>\n</div></li><li><span class='pre'>currentState</span> : Object (optional)<div class='sub-desc'><p>Sets the initial conditions for the device to start.</p>\n<p>Defaults to: <code>{ previous: state.suspended, current: state.suspended, requested: state.running }</code></p></div></li><li><span class='pre'>parent</span> : Object (optional)<div class='sub-desc'><p>Parent Device or processor this Device belongs to.</p>\n<p>Defaults to: <code>Processor</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/state\" rel=\"state\" class=\"docClass\">state</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Engine.ThreadAutomata-method-constructor\" rel=\"Engine.ThreadAutomata-method-constructor\" class=\"docClass\">Engine.ThreadAutomata.constructor</a></p></div></div></div><div id='method-addPort' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='state'>state</span><br/><a href='source/ll_Device.html#state-method-addPort' target='_blank' class='view-source'>view source</a></div><a href='#!/api/state-method-addPort' class='name expandable'>addPort</a>( <span class='pre'>mssg_name, device</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Adds an specific port (reference to a listener) to the selected event listeners list. ...</div><div class='long'><p>Adds an specific port (reference to a listener) to the selected event listeners list.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mssg_name</span> : Object<div class='sub-desc'><p>The message to be triggered.</p>\n</div></li><li><span class='pre'>device</span> : Object<div class='sub-desc'><p>Device to be added to the ports array</p>\n</div></li></ul></div></div></div><div id='method-attend' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='state'>state</span><br/><a href='source/ll_Device.html#state-method-attend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/state-method-attend' class='name expandable'>attend</a>( <span class='pre'>date, mssg</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Generic meesage dispatcher. ...</div><div class='long'><p>Generic meesage dispatcher. Seeks for a more specific message handler.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>date</span> : Date<div class='sub-desc'><p>Time in which the message was attended in the inqueue.</p>\n</div></li><li><span class='pre'>mssg</span> : Object<div class='sub-desc'><p>Message object shifted from the message queue.</p>\n\n<h3>Note:</h3>\n\n<p>  To attend a message called \"close\" define:</p>\n\n<pre><code>  Device.prototype.attend_close = function(){;}\n</code></pre>\n\n<p> Make the previous definition in a derived class.</p>\n</div></li></ul></div></div></div><div id='method-childRunner' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='state'>state</span><br/><a href='source/ll_Device.html#state-method-childRunner' target='_blank' class='view-source'>view source</a></div><a href='#!/api/state-method-childRunner' class='name expandable'>childRunner</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Simulates multithreading for each device attached to this one. ...</div><div class='long'><p>Simulates multithreading for each device attached to this one.</p>\n</div></div></div><div id='method-fireEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='state'>state</span><br/><a href='source/ll_Device.html#state-method-fireEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/state-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>mssg</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Notifies to all the listeners that this device has generated an event. ...</div><div class='long'><p>Notifies to all the listeners that this device has generated an event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mssg</span> : Object<div class='sub-desc'><p>The message to be triggered.</p>\n</div></li></ul></div></div></div><div id='method-gateRunner' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='state'>state</span><br/><a href='source/ll_Device.html#state-method-gateRunner' target='_blank' class='view-source'>view source</a></div><a href='#!/api/state-method-gateRunner' class='name expandable'>gateRunner</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Simulates multithreading for each gate by calling the run method. ...</div><div class='long'><p>Simulates multithreading for each gate by calling the run method.</p>\n</div></div></div><div id='method-get' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Processor' rel='Processor' class='defined-in docClass'>Processor</a><br/><a href='source/ll_Processor.html#Processor-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Processor-method-get' class='name expandable'>get</a>( <span class='pre'>object</span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Stereotypical mirage fetcher. ...</div><div class='long'><p>Stereotypical mirage fetcher. Get objects or functions passed as a reference or\n belonging to a class hierarchy.\n A object can be repeated as long as you can push an object twice in the threads array\n with the same or different solicitor function. <a href=\"#!/api/Processor-method-get\" rel=\"Processor-method-get\" class=\"docClass\">Processor.get</a> avoids repetion as\n in sql select distinct.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>object or class reference.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>Array with collected objects or an empty array is anything is found.</p>\n</div></li></ul></div></div></div><div id='method-getSolicitors' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='state'>state</span><br/><a href='source/ll_Device.html#state-method-getSolicitors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/state-method-getSolicitors' class='name expandable'>getSolicitors</a>( <span class='pre'></span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the array of solicitors. ...</div><div class='long'><p>Return the array of solicitors.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>Array of three functions (up, steady and running) by state, packed in a global array.</p>\n</div></li></ul></div></div></div><div id='method-getStates' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='state'>state</span><br/><a href='source/ll_Device.html#state-method-getStates' target='_blank' class='view-source'>view source</a></div><a href='#!/api/state-method-getStates' class='name expandable'>getStates</a>( <span class='pre'></span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the list of all possible states for this Device. ...</div><div class='long'><p>Return the list of all possible states for this Device.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>List of states.</p>\n</div></li></ul></div></div></div><div id='method-kill' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Processor' rel='Processor' class='defined-in docClass'>Processor</a><br/><a href='source/ll_Processor.html#Processor-method-kill' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Processor-method-kill' class='name expandable'>kill</a>( <span class='pre'>rObject, solicitorF</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Removes a thread out of the execution queue. ...</div><div class='long'><p>Removes a thread out of the execution queue.</p>\n\n<p>@memberOf   {Processor}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rObject</span> : Thread<div class='sub-desc'><p>Object to be removed from the execution queue.</p>\n</div></li><li><span class='pre'>solicitorF</span> : Function<div class='sub-desc'><p>As far as an object can be processed by several parallel solicitors function, one can be removed. (This is a fairly overenthusiastic feature indeed)</p>\n</div></li></ul></div></div></div><div id='method-method_missing' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='state'>state</span><br/><a href='source/ll_Device.html#state-method-method_missing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/state-method-method_missing' class='name expandable'>method_missing</a>( <span class='pre'>method, obj, params</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Throws an exception when a method is not defined, unless someone has used the\ncamel case version of an existing method. ...</div><div class='long'><p>Throws an exception when a method is not defined, unless someone has used the\ncamel case version of an existing method. In that particular case it recovers\nfrom the crash and executes the call.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>method</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Name of the non-existing method.</p>\n</div></li><li><span class='pre'>obj</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Name of the object to which the method applies</p>\n</div></li><li><span class='pre'>params</span> : Array<div class='sub-desc'><p>List of the parameter taken by the method</p>\n</div></li></ul></div></div></div><div id='method-newGate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='state'>state</span><br/><a href='source/ll_Device.html#state-method-newGate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/state-method-newGate' class='name expandable'>newGate</a>( <span class='pre'>el, ClassCons</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a new Object using a derived class of Gate and attaches it to the gates array own property. ...</div><div class='long'><p>Creates a new Object using a derived class of Gate and attaches it to the gates array own property.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> | HTMLElement<div class='sub-desc'><p>See (@link Gate)</p>\n</div></li><li><span class='pre'>ClassCons</span> : Function<div class='sub-desc'><p>Class constructor deriving from Gate.</p>\n</div></li></ul></div></div></div><div id='method-newMessage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='state'>state</span><br/><a href='source/ll_Device.html#state-method-newMessage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/state-method-newMessage' class='name expandable'>newMessage</a>( <span class='pre'>type, name, data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Creates new message. ...</div><div class='long'><p>Creates new message.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Message type.</p>\n</div></li><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Name of the event</p>\n</div></li><li><span class='pre'>data</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>If defined, gives extra information about the event</p>\n</div></li></ul></div></div></div><div id='method-newThread' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Processor' rel='Processor' class='defined-in docClass'>Processor</a><br/><a href='source/ll_Processor.html#Processor-method-newThread' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Processor-method-newThread' class='name expandable'>newThread</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Executes periodically a function in a new Thread. ...</div><div class='long'><p>Executes periodically a function in a new Thread.</p>\n\n<p>Not tested. ruby -e \"puts 'sorry ' * 20\"</p>\n\n<h3>Example</h3>\n\n<p>   $Processor.newThread(function() {\n     for (var i=0; i&lt;1000; i++)\n        \"Love others as your code\"\n   })</p>\n</div></div></div><div id='method-register' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Processor' rel='Processor' class='defined-in docClass'>Processor</a><br/><a href='source/ll_Processor.html#Processor-method-register' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Processor-method-register' class='name expandable'>register</a>( <span class='pre'>cObject, solicitorF</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add a thread in the execution queue\n@memberOf   {Processor} ...</div><div class='long'><p>Add a thread in the execution queue\n@memberOf   {Processor}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cObject</span> : Thread<div class='sub-desc'><p>Is the caller object to be porocessed through the thread interface.</p>\n</div></li><li><span class='pre'>solicitorF</span> : Function<div class='sub-desc'><p>Control loop object. Typically \"run\".</p>\n</div></li></ul></div></div></div><div id='method-run' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Engine.ThreadAutomata' rel='Engine.ThreadAutomata' class='defined-in docClass'>Engine.ThreadAutomata</a><br/><a href='source/ll_ThreadAutomata.html#Engine-ThreadAutomata-method-run' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Engine.ThreadAutomata-method-run' class='name expandable'>run</a>( <span class='pre'>processors_time</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Calls a function that manages the next activity in function\nfor the state of the object. ...</div><div class='long'><p>Calls a function that manages the next activity in function\nfor the state of the object. It is responsible of state transitions through Automata#run.\nThe main difference between ThreadAutomata#run and Automata#run lies on\nthe type of the solicitor functions, designed to make atomic operations.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>processors_time</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/Processor-method-run\" rel=\"Processor-method-run\" class=\"docClass\">Processor.run</a></p></div></div></div><div id='method-sendMessage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='state'>state</span><br/><a href='source/ll_Device.html#state-method-sendMessage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/state-method-sendMessage' class='name expandable'>sendMessage</a>( <span class='pre'>type, name, data, receiptant</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sends a message to a particular device, without using the listeners list. ...</div><div class='long'><p>Sends a message to a particular device, without using the listeners list.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Message type.</p>\n</div></li><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Name of the event</p>\n</div></li><li><span class='pre'>data</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>If defined, gives extra information about the event</p>\n</div></li><li><span class='pre'>receiptant</span> : Object<div class='sub-desc'><p>Device that receives the message</p>\n</div></li></ul></div></div></div><div id='method-start' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Processor' rel='Processor' class='defined-in docClass'>Processor</a><br/><a href='source/ll_Processor.html#Processor-method-start' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Processor-method-start' class='name expandable'>start</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Start Processor.run cycle. ...</div><div class='long'><p>Start <a href=\"#!/api/Processor-method-run\" rel=\"Processor-method-run\" class=\"docClass\">Processor.run</a> cycle.</p>\n</div></div></div><div id='method-state_substate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='state'>state</span><br/><a href='source/ll_Device.html#state-method-state_substate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/state-method-state_substate' class='name expandable'>state_substate</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Dynamic\n\nDefault method to handle any state. ...</div><div class='long'><p>Dynamic</p>\n\n<p>Default method to handle any state.</p>\n\n<h3>Example</h3>\n\n<pre><code>Device.prototype.running_steady = function(){;}\n</code></pre>\n\n<p>When functionality is required, override the required method.</p>\n</div></div></div><div id='method-step' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Processor' rel='Processor' class='defined-in docClass'>Processor</a><br/><a href='source/ll_Processor.html#Processor-method-step' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Processor-method-step' class='name expandable'>step</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Execute all threads one step. ...</div><div class='long'><p>Execute all threads one step.</p>\n\n<p>@memberOf   {Processor}</p>\n</div></div></div></div></div></div></div>","meta":{}});