#!/usr/bin/node
const Rectangle = require('./4-rectangle');
modules.exports = class Square extends Rectangle{
    constructor(size){
	this.size = size;
	super()
    }
}
