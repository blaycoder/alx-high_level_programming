#!/usr/bin/node
exports.nbOccurences = function (list, searchElement){
    let counter = 0;
    for(elem of list){
	if(elem == searchElement){
	    counter++;
	}
    }
    return counter;
};
