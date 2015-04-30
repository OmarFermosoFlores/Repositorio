var init = function() {

var cfg = {
  snapbackSpeed: 550,
  appearSpeed: 1500,
  draggable: true,
  position: 'start'
};
var board = new ChessBoard('board', cfg);
//--- end example JS ---

}; // end init()

$(document).ready(init);
