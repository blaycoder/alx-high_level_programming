#!usr/bin/node
const mainSquare = require('./5-square');
module.exports = class Square extends mainSquare {
    constructor(size){
	super(size,size);
    }
    charPrint(c){
	if (c === undefined){
	    c = 'X';
	}
	let multiStr = c.repeat(this.width);
	for(let i = 0; i < this.height; i++){
	    console.log(multiStr)
	}
    }
}
