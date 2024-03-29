const ip = require( 'ip' )

module.exports = {
	// Identity variables used in pug templates
	identity: {
		title: "La Bifora e Le Lune",
		desc: "Bed and breakfast in Santa Stefano di Sessiano",
		"logo": "logo.jpg"
	},
	// System vars managing some pug elements as well as file paths
	system: {
		public: process.env.NODE_ENV == 'production' ? __dirname + '/../docs/' : __dirname + '/../public/',
		source: __dirname + '/../src/',
		url: process.env.NODE_ENV == 'production' ? 'https://labiforalelune.com/' : 'http://' + ip.address() + ':3000/',
		gverification: undefined,
		timestamp: new Date().getTime(),
		year: new Date().getFullYear()
	},
	// About the author. Change this to your own unless you went me to get credit for your page of course... <3
	author: {
		firstname: "La Bifora",
		lastname: "e Le Lune",
		// email: "mentor@palokaj.co",
		// twitter: "@actuallymentor",
		// facebook profile id, used for retargeting ad permissions
		// facebook: "1299359953416544",
		// url: "https://www.skillcollector.com/"
	},
	// Tracking codes
	track: {
		ga: "UA-XXXXXXXX-XX"
	}
}