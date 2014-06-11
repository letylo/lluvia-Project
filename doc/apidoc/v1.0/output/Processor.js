Ext.data.JsonP.Processor({"tagname":"class","name":"Processor","autodetected":{},"files":[{"filename":"ll_Processor.js","href":"ll_Processor.html#Processor"}],"members":[{"name":"constructor","tagname":"method","owner":"Processor","id":"method-constructor","meta":{}},{"name":"get","tagname":"method","owner":"Processor","id":"method-get","meta":{}},{"name":"kill","tagname":"method","owner":"Processor","id":"method-kill","meta":{}},{"name":"newThread","tagname":"method","owner":"Processor","id":"method-newThread","meta":{}},{"name":"register","tagname":"method","owner":"Processor","id":"method-register","meta":{}},{"name":"run","tagname":"method","owner":"Processor","id":"method-run","meta":{}},{"name":"start","tagname":"method","owner":"Processor","id":"method-start","meta":{}},{"name":"step","tagname":"method","owner":"Processor","id":"method-step","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Processor","short_doc":"Create a Processor to run threads. ...","component":false,"superclasses":[],"subclasses":["state"],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Subclasses</h4><div class='dependency'><a href='#!/api/state' rel='state' class='docClass'>state</a></div><h4>Files</h4><div class='dependency'><a href='source/ll_Processor.html#Processor' target='_blank'>ll_Processor.js</a></div></pre><div class='doc-contents'><p>Create a Processor to run threads.\nlluviaProject provides a default processor $Processor in the global scope.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Processor'>Processor</span><br/><a href='source/ll_Processor.html#Processor-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Processor-method-constructor' class='name expandable'>Processor</a>( <span class='pre'></span> ) : <a href=\"#!/api/Processor\" rel=\"Processor\" class=\"docClass\">Processor</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Processor ...</div><div class='long'><p>Processor</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Processor\" rel=\"Processor\" class=\"docClass\">Processor</a></span><div class='sub-desc'><p>retuns a new processor.</p>\n</div></li></ul></div></div></div><div id='method-get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Processor'>Processor</span><br/><a href='source/ll_Processor.html#Processor-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Processor-method-get' class='name expandable'>get</a>( <span class='pre'>object</span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Stereotypical mirage fetcher. ...</div><div class='long'><p>Stereotypical mirage fetcher. Get objects or functions passed as a reference or\n belonging to a class hierarchy.\n A object can be repeated as long as you can push an object twice in the threads array\n with the same or different solicitor function. <a href=\"#!/api/Processor-method-get\" rel=\"Processor-method-get\" class=\"docClass\">Processor.get</a> avoids repetion as\n in sql select distinct.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>object or class reference.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>Array with collected objects or an empty array is anything is found.</p>\n</div></li></ul></div></div></div><div id='method-kill' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Processor'>Processor</span><br/><a href='source/ll_Processor.html#Processor-method-kill' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Processor-method-kill' class='name expandable'>kill</a>( <span class='pre'>rObject, solicitorF</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Removes a thread out of the execution queue. ...</div><div class='long'><p>Removes a thread out of the execution queue.</p>\n\n<p>@memberOf   {Processor}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rObject</span> : Thread<div class='sub-desc'><p>Object to be removed from the execution queue.</p>\n</div></li><li><span class='pre'>solicitorF</span> : Function<div class='sub-desc'><p>As far as an object can be processed by several parallel solicitors function, one can be removed. (This is a fairly overenthusiastic feature indeed)</p>\n</div></li></ul></div></div></div><div id='method-newThread' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Processor'>Processor</span><br/><a href='source/ll_Processor.html#Processor-method-newThread' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Processor-method-newThread' class='name expandable'>newThread</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Executes periodically a function in a new Thread. ...</div><div class='long'><p>Executes periodically a function in a new Thread.</p>\n\n<p>Not tested. ruby -e \"puts 'sorry ' * 20\"</p>\n\n<h3>Example</h3>\n\n<p>   $Processor.newThread(function() {\n     for (var i=0; i&lt;1000; i++)\n        \"Love others as your code\"\n   })</p>\n</div></div></div><div id='method-register' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Processor'>Processor</span><br/><a href='source/ll_Processor.html#Processor-method-register' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Processor-method-register' class='name expandable'>register</a>( <span class='pre'>cObject, solicitorF</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add a thread in the execution queue\n@memberOf   {Processor} ...</div><div class='long'><p>Add a thread in the execution queue\n@memberOf   {Processor}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cObject</span> : Thread<div class='sub-desc'><p>Is the caller object to be porocessed through the thread interface.</p>\n</div></li><li><span class='pre'>solicitorF</span> : Function<div class='sub-desc'><p>Control loop object. Typically \"run\".</p>\n</div></li></ul></div></div></div><div id='method-run' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Processor'>Processor</span><br/><a href='source/ll_Processor.html#Processor-method-run' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Processor-method-run' class='name expandable'>run</a>( <span class='pre'>date</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Execute all threads. ...</div><div class='long'><p>Execute all threads. Top processors are called by themselves.\nLower tiers can belong (be registered) in another's Processor#thread. Then\na date is passed as a parameter in order to keep lower time lags between\nThread#run calls. Thus, all registered threads are informed of the same (date)\ntime.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>date</span> : Date<div class='sub-desc'><p>Parent's processor time.</p>\n</div></li></ul></div></div></div><div id='method-start' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Processor'>Processor</span><br/><a href='source/ll_Processor.html#Processor-method-start' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Processor-method-start' class='name expandable'>start</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Start Processor.run cycle. ...</div><div class='long'><p>Start <a href=\"#!/api/Processor-method-run\" rel=\"Processor-method-run\" class=\"docClass\">Processor.run</a> cycle.</p>\n</div></div></div><div id='method-step' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Processor'>Processor</span><br/><a href='source/ll_Processor.html#Processor-method-step' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Processor-method-step' class='name expandable'>step</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Execute all threads one step. ...</div><div class='long'><p>Execute all threads one step.</p>\n\n<p>@memberOf   {Processor}</p>\n</div></div></div></div></div></div></div>","meta":{}});