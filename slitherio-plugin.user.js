// ==UserScript==
// @name        slitherio plugin
// @namespace   hc.priv.no
// @description Plugin for slither.io
// @include     http://slither.io/*
// @include     https://slither.io/*
// @updateURL   https://github.com/Montaron/Slitherio-Plugin/raw/master/slitherio-plugin.meta.js
// @downloadURL https://github.com/Montaron/Slitherio-Plugin/raw/master/slitherio-plugin.user.js
// @version     1.11
// @grant       none
// ==/UserScript==

function updateElem(str) {
  currServ = bso ? bso.ip + ':' + bso.po : 'None';
  topElem.textContent = 'Server: ' + currServ + ', ' + str + ', ' + 'X: ' + (parseInt(ovxx) || 0) + ', Y: ' + (parseInt(ovyy) || 0);
};

function force(elem) {
  var splitArr = elem.value.split(':');
  if (splitArr.length > 1) forceServer((splitArr[0] || ''), (splitArr[1] || ''));
};

var topElem = document.createElement('span');
topElem.style.position = 'fixed';
topElem.style.zIndex = '666';
topElem.style.top = '5px';
topElem.style.left = '50%';
topElem.style.marginLeft = '-250px'
topElem.style.fontSize = '20px';
topElem.style.fontFamily = 'Verdana';
topElem.style.color = '#FFF';
document.body.appendChild(topElem);

var parent = document.getElementById('playh');
var div = document.createElement('div');
var input = document.createElement('input');
var button = document.createElement('span');
var currServ = 'None';

div.style.width = '244px';
div.style.margin = '14px auto';
div.style.background = '#4c447c none repeat scroll 0% 0%';
div.style.boxShadow = '0px 6px 50px rgb(0, 0, 0)';
div.style.border = '2px solid rgba(0, 0, 0, 1)';
div.style.borderRadius = '29px';
div.style.display = 'block';
div.style.padding = '5px';
div.style.fontFamily = 'Verdana';
div.style.position = 'relative';

input.type = 'text';
input.placeholder = 'IP-Address:Port';
input.style.margin = '2px';
input.style.background = 'rgba(0, 0, 0, 0) none repeat scroll 0 0';
input.style.border = '0 none';
input.style.color = '#e0e0ff';
input.style.fontSize = '15px';

button.textContent = 'Go!';
button.style.cursor = 'pointer';
button.style.color = '#FFF';
button.style.borderRadius = '24px';
button.style.margin = '2px';
button.style.padding = '2px 6px';
button.style.background = 'linear-gradient(180deg, #9DA, #485)';
button.onclick = function() { force(input); };

div.appendChild(input);
div.appendChild(button);

parent.appendChild(div);


if(window.console){
  window.console.yo = console.log;
  window.console.log = function(str){
    window.console.yo(str);
    updateElem(str);
  }
}
