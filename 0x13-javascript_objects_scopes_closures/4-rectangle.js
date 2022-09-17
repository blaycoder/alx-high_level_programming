#!/usr/bin/node
module.exports = class Rectangle{
	constructor(w, h){
	    if(w > 0 && h > 0){
		this.width = w;
		this.height = h;
	    }
	}
	print(){
	    let str = 'X';
	    let multistr = str.repeat(this.width);
	    for(let i = 0; i <this.height; i++){
		console.log(multistr);
	    }
    }
    rotate(){
	[this.width, this.height] = [this.height, this.width];
    }
    double(){
	this.width = this.width * 2;
	this.height = this.height * 2;
    }
}
