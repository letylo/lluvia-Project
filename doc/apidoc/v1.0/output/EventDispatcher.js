Ext.data.JsonP.EventDispatcher({"tagname":"class","name":"EventDispatcher","autodetected":{},"files":[{"filename":"ll_EventDispatcher.js","href":"ll_EventDispatcher.html#EventDispatcher"}],"extends":"ThreadAutomata","members":[{"name":"constructor","tagname":"method","owner":"EventDispatcher","id":"method-constructor","meta":{}},{"name":"addPort","tagname":"method","owner":"EventDispatcher","id":"method-addPort","meta":{}},{"name":"delPort","tagname":"method","owner":"EventDispatcher","id":"method-delPort","meta":{}},{"name":"enqueue","tagname":"method","owner":"EventDispatcher","id":"method-enqueue","meta":{}},{"name":"fireEvent","tagname":"method","owner":"EventDispatcher","id":"method-fireEvent","meta":{}},{"name":"joinPorts","tagname":"method","owner":"EventDispatcher","id":"method-joinPorts","meta":{}},{"name":"run","tagname":"method","owner":"EventDispatcher","id":"method-run","meta":{}},{"name":"shift","tagname":"method","owner":"EventDispatcher","id":"method-shift","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-EventDispatcher","component":false,"superclasses":["ThreadAutomata"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/ThreadAutomata' rel='ThreadAutomata' class='docClass'>ThreadAutomata</a><div class='subclass '><strong>EventDispatcher</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/ll_EventDispatcher.html#EventDispatcher' target='_blank'>ll_EventDispatcher.js</a></div></pre><div class='doc-contents'><p>Handle in and out asynchronous communications via a message queue\nand a listener mechanism (ports).</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventDispatcher'>EventDispatcher</span><br/><a href='source/ll_EventDispatcher.html#EventDispatcher-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/EventDispatcher-method-constructor' class='name expandable'>EventDispatcher</a>( <span class='pre'>lookup</span> ) : <a href=\"#!/api/EventDispatcher\" rel=\"EventDispatcher\" class=\"docClass\">EventDispatcher</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a EventDispatcher. ...</div><div class='long'><p>Creates a EventDispatcher.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lookup</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/EventDispatcher\" rel=\"EventDispatcher\" class=\"docClass\">EventDispatcher</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/ThreadAutomata-method-constructor\" rel=\"ThreadAutomata-method-constructor\" class=\"docClass\">ThreadAutomata.constructor</a></p></div></div></div><div id='method-addPort' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventDispatcher'>EventDispatcher</span><br/><a href='source/ll_EventDispatcher.html#EventDispatcher-method-addPort' target='_blank' class='view-source'>view source</a></div><a href='#!/api/EventDispatcher-method-addPort' class='name expandable'>addPort</a>( <span class='pre'>event, device</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Adds an specific device referer in the list of event listeners for a\nparticular event. ...</div><div class='long'><p>Adds an specific device referer in the list of event listeners for a\nparticular event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Name of the event to listen</p>\n</div></li><li><span class='pre'>device</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Device to be added to the ports array (dock).</p>\n</div></li></ul></div></div></div><div id='method-delPort' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventDispatcher'>EventDispatcher</span><br/><a href='source/ll_EventDispatcher.html#EventDispatcher-method-delPort' target='_blank' class='view-source'>view source</a></div><a href='#!/api/EventDispatcher-method-delPort' class='name expandable'>delPort</a>( <span class='pre'>event, device</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Removes a listener from the dock. ...</div><div class='long'><p>Removes a listener from the dock.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Event that we were listening to</p>\n</div></li><li><span class='pre'>device</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Device to be deleted to the ports array</p>\n</div></li></ul></div></div></div><div id='method-enqueue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventDispatcher'>EventDispatcher</span><br/><a href='source/ll_EventDispatcher.html#EventDispatcher-method-enqueue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/EventDispatcher-method-enqueue' class='name expandable'>enqueue</a>( <span class='pre'>mssg</span> ) : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Receives incoming messages stamping the arrival number. ...</div><div class='long'><p>Receives incoming messages stamping the arrival number. The arrival\norder can be used to identificate messages.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mssg</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Message object pushed into the message queue.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span><div class='sub-desc'><p>Order of arrival</p>\n</div></li></ul></div></div></div><div id='method-fireEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventDispatcher'>EventDispatcher</span><br/><a href='source/ll_EventDispatcher.html#EventDispatcher-method-fireEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/EventDispatcher-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>event</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Notifies to all the listeners that this device has generated an event. ...</div><div class='long'><p>Notifies to all the listeners that this device has generated an event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Event generated</p>\n</div></li></ul></div></div></div><div id='method-joinPorts' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventDispatcher'>EventDispatcher</span><br/><a href='source/ll_EventDispatcher.html#EventDispatcher-method-joinPorts' target='_blank' class='view-source'>view source</a></div><a href='#!/api/EventDispatcher-method-joinPorts' class='name expandable'>joinPorts</a>( <span class='pre'>listArray</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Builds an empty dock (port array) for every event. ...</div><div class='long'><p>Builds an empty dock (port array) for every event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>listArray</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-run' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventDispatcher'>EventDispatcher</span><br/><a href='source/ll_EventDispatcher.html#EventDispatcher-method-run' target='_blank' class='view-source'>view source</a></div><a href='#!/api/EventDispatcher-method-run' class='name expandable'>run</a>( <span class='pre'></span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Drives the incoming message queue. ...</div><div class='long'><p>Drives the incoming message queue.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>true</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/ThreadAutomata-method-run\" rel=\"ThreadAutomata-method-run\" class=\"docClass\">ThreadAutomata.run</a></p></div></div></div><div id='method-shift' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='EventDispatcher'>EventDispatcher</span><br/><a href='source/ll_EventDispatcher.html#EventDispatcher-method-shift' target='_blank' class='view-source'>view source</a></div><a href='#!/api/EventDispatcher-method-shift' class='name expandable'>shift</a>( <span class='pre'></span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Extract messages from the queue and send them\nto the device default dispatcher. ...</div><div class='long'><p>Extract messages from the queue and send them\nto the device default dispatcher. If the dispatcher\nhas closed the message being processed then it removes\nit from the message queue. Otherwise is kept until\noperations around this message are finished.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'><p>true Confirms removal</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});