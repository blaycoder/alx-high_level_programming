#!/usr/bin/node
let str = 'X'
if (isNaN(parseInt(process.argv[2]))) {
  console.log('Missing size');
} else {
  for (let i = 0; i < process.argv[2]; i++) {
    console.log(str.repeat(process.argv[2]));
  }
}
