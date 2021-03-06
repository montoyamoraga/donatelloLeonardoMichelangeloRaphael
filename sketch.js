// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
Style Transfer Image Example using p5.js
This uses a pre-trained model of The Great Wave off Kanagawa and Udnie (Young American Girl, The Dance)
=== */

let inputImg;
let statusMsg;
let transferBtn;
let style;

function setup() {
  noCanvas();
  // Status Msg
  statusMsg = select('#statusMsg');

  // get the input images
  inputImg = select('#inputImg');

  // Transfer Button
  transferBtn = select('#transferBtn');
  transferBtn.mousePressed(transferImages);

  // Create style method with different pre-trained models
  style = ml5.styleTransfer('models/tmnt', modelLoaded);
}

// A function to be called when the models have loaded
function modelLoaded() {
  // Check if both models are loaded
  if(style.ready){
    statusMsg.html('Ready!')
  }
}

// Apply the transfer to both images!
function transferImages() {
  statusMsg.html('Applying Style Transfer...!');

  style.transfer(inputImg, function(err, result) {
    createImg(result.src).parent('style');
  });

  statusMsg.html('Done!');
}
