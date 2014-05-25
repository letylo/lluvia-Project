$K_dependencies = [
	{	package: "kernel",
		description: "Javascript extensions && global objects.",
		path: "kernel/",
		files: [
			{name: "ll_Kernel.js",       description: "Core javascript for the global object."},
			{name: "ll_Exception.js",    description: "Exceptions."},
			{name: "ll_Module.js",       description: "Redefinition of Module class."
		]
	},
	llPackage("CoreExt"),
	llPackage("Facilities")
]

