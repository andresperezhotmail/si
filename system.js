#!/usr/bin/env node

const si = require('systeminformation');

async function go() {

	try {
		 console.log(await si.system());
	} catch (e) {
		console.log(e)
	}
}

go();
