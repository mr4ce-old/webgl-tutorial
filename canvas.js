var canvas = document.getElementById('my-canvas');
var context = canvas.getContext('2d');

// getContext() used to obtain the rendering context and its drawing functions. This method takes one parameter, the type of context 2d

context.font = '20pt Calibri';
context.fillStyle = 'green';
context.fillText('Welcome to tutorialspoint', 70, 70);