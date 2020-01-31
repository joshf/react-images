'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.className = className;
exports.isTouch = isTouch;
exports.isVideo = isVideo;


// ==============================
// NO OP
// ==============================

var noop = exports.noop = function noop() {};

// ==============================
// Class Name Prefixer
// ==============================

var CLASS_PREFIX = exports.CLASS_PREFIX = 'react-images';

/**
 String representation of component state for styling with class names.

 Expects an array of strings OR a string/object pair:
 - className(['comp', 'comp-arg', 'comp-arg-2'])
   @returns 'react-images__comp react-images__comp-arg react-images__comp-arg-2'
 - className('comp', { some: true, state: false })
   @returns 'react-images__comp react-images__comp--some'
*/
function className(name, state) {
  var arr = Array.isArray(name) ? name : [name];

  // loop through state object, remove falsey values and combine with name
  if (state && typeof name === 'string') {
    for (var _key in state) {
      if (state.hasOwnProperty(_key) && state[_key]) {
        arr.push(name + '--' + _key);
      }
    }
  }

  // prefix everything and return a string
  return arr.map(function (cn) {
    return CLASS_PREFIX + '__' + cn;
  }).join(' ');
}

// ==============================
// Touch Capability Detector
// ==============================

function isTouch() {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
}

// ==============================
// Video detection
// ==============================

function isVideo(src) {
  if (src) {
    if (["mp4", "mov", "avi", "ogg", "3gp", "MOV", "3GP", "MP4"].includes(src.split(".").pop())) {
      return true;
    }
  }

  return false;
}