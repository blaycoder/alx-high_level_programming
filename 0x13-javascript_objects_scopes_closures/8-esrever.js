#!/usr/bin/node
exports.esrever = function(list)
{
    const new_list = [];
    let i = list.length;
    for( i <= list.length; i--;){
	new_list.push(list[i]);
    }
    return new_list;
}
