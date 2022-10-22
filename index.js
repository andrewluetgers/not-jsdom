let {parseHTML} = require('linkedom'),
	VirtualConsole = require('./virtual-console')


function JSDOM(html, options) {
	return parseHTML(html)
}

module.exports = {
	JSDOM,
	VirtualConsole
}