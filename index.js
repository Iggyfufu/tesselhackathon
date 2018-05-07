'use strict';

// Import the interface to Tessel hardware
const path = require('path');
const tessel = require('tessel');
const av = require('tessel-av');
// const mp3 = path.join(__dirname, 'music.mp3');

const sound = new av.Speaker();

sound.say('Hello');

sound.stop();
console.log("Test");
