Ext.data.JsonP.Engine_ThreadAutomata({"tagname":"class","name":"Engine.ThreadAutomata","autodetected":{},"files":[{"filename":"ll_ThreadAutomata.js","href":"ll_ThreadAutomata.html#Engine-ThreadAutomata"}],"members":[{"name":"constructor","tagname":"method","owner":"Engine.ThreadAutomata","id":"method-constructor","meta":{}},{"name":"run","tagname":"method","owner":"Engine.ThreadAutomata","id":"method-run","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Engine.ThreadAutomata","component":false,"superclasses":[],"subclasses":[],"mixedInto":["state"],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixed into</h4><div class='dependency'><a href='#!/api/state' rel='state' class='docClass'>state</a></div><h4>Files</h4><div class='dependency'><a href='source/ll_ThreadAutomata.html#Engine-ThreadAutomata' target='_blank'>ll_ThreadAutomata.js</a></div></pre><div class='doc-contents'><p>Creates an automata for atomic processing.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Engine.ThreadAutomata'>Engine.ThreadAutomata</span><br/><a href='source/ll_ThreadAutomata.html#Engine-ThreadAutomata-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Engine.ThreadAutomata-method-constructor' class='name expandable'>Engine.ThreadAutomata</a>( <span class='pre'>state, currentState, solicitor</span> ) : ThreadAutomata<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>state</span> : Object<div class='sub-desc'><p>Available automata states.</p>\n</div></li><li><span class='pre'>currentState</span> : Object<div class='sub-desc'><p>Initial automata state.</p>\n</div></li><li><span class='pre'>solicitor</span> : Object<div class='sub-desc'><p>Functions state managers.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>ThreadAutomata</span><div class='sub-desc'><p>Newly created automata.</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/Processor-method-constructor\" rel=\"Processor-method-constructor\" class=\"docClass\">Processor.constructor</a></p></div></div></div><div id='method-run' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Engine.ThreadAutomata'>Engine.ThreadAutomata</span><br/><a href='source/ll_ThreadAutomata.html#Engine-ThreadAutomata-method-run' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Engine.ThreadAutomata-method-run' class='name expandable'>run</a>( <span class='pre'>processors_time</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Calls a function that manages the next activity in function\nfor the state of the object. ...</div><div class='long'><p>Calls a function that manages the next activity in function\nfor the state of the object. It is responsible of state transitions through Automata#run.\nThe main difference between ThreadAutomata#run and Automata#run lies on\nthe type of the solicitor functions, designed to make atomic operations.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>processors_time</span> : Object<div class='sub-desc'></div></li></ul><p>Overrides: <a href=\"#!/api/Processor-method-run\" rel=\"Processor-method-run\" class=\"docClass\">Processor.run</a></p></div></div></div></div></div></div></div>","meta":{}});