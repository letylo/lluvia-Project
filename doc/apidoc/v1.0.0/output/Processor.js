Ext.data.JsonP.Processor({"inheritdoc":null,"extends":null,"uses":[],"subclasses":[],"superclasses":[],"component":false,"meta":{},"requires":[],"mixedInto":[],"files":[{"href":"ll_Processor.html#Processor","filename":"ll_Processor.js"}],"tagname":"class","enum":null,"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/ll_Processor.html#Processor' target='_blank'>ll_Processor.js</a></div></pre><div class='doc-contents'><p>@classDescription   create a Processor to run threads.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Processor'>Processor</span><br/><a href='source/ll_Processor.html#Processor-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Processor-method-constructor' class='name expandable'>Processor</a>( <span class='pre'></span> ) : <a href=\"#!/api/Processor\" rel=\"Processor\" class=\"docClass\">Processor</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Processor\" rel=\"Processor\" class=\"docClass\">Processor</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-kill' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Processor'>Processor</span><br/><a href='source/ll_Processor.html#Processor-method-kill' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Processor-method-kill' class='name expandable'>kill</a>( <span class='pre'>rObject, solicitorF</span> )</div><div class='description'><div class='short'>Removes a thread out of the execution queue. ...</div><div class='long'><p>Removes a thread out of the execution queue.</p>\n\n<p>@memberOf   {Processor}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rObject</span> : <a href=\"#!/api/Thread\" rel=\"Thread\" class=\"docClass\">Thread</a><div class='sub-desc'><p>Object to be removed from the execution queue.</p>\n</div></li><li><span class='pre'>solicitorF</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>As far as an object can be processed by several parallel solicitors function, one can be removed. (This is a fairly overenthusiastic feature indeed)</p>\n</div></li></ul></div></div></div><div id='method-register' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Processor'>Processor</span><br/><a href='source/ll_Processor.html#Processor-method-register' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Processor-method-register' class='name expandable'>register</a>( <span class='pre'>cObject, solicitorF</span> )</div><div class='description'><div class='short'>Add a thread in the execution queue\n@memberOf   {Processor} ...</div><div class='long'><p>Add a thread in the execution queue\n@memberOf   {Processor}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cObject</span> : <a href=\"#!/api/Thread\" rel=\"Thread\" class=\"docClass\">Thread</a><div class='sub-desc'><p>Is the caller object to be porocessed through the thread interface.</p>\n</div></li><li><span class='pre'>solicitorF</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Control loop object. Typically \"run\".</p>\n</div></li></ul></div></div></div><div id='method-run' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Processor'>Processor</span><br/><a href='source/ll_Processor.html#Processor-method-run' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Processor-method-run' class='name expandable'>run</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Execute all threads. ...</div><div class='long'><p>Execute all threads.</p>\n\n<p>@memberOf   {Processor}</p>\n</div></div></div></div></div></div></div>","parentMixins":[],"members":{"cfg":[],"property":[],"css_var":[],"method":[{"meta":{},"owner":"Processor","tagname":"method","name":"constructor","id":"method-constructor"},{"meta":{},"owner":"Processor","tagname":"method","name":"kill","id":"method-kill"},{"meta":{},"owner":"Processor","tagname":"method","name":"register","id":"method-register"},{"meta":{},"owner":"Processor","tagname":"method","name":"run","id":"method-run"}],"event":[],"css_mixin":[]},"inheritable":null,"singleton":false,"override":null,"private":null,"name":"Processor","mixins":[],"statics":{"cfg":[],"property":[],"css_var":[],"method":[],"event":[],"css_mixin":[]},"linenr":9,"id":"class-Processor","html_meta":{},"alternateClassNames":[],"aliases":{}});