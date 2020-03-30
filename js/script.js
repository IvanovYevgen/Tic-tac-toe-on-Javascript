window.onload = function() {
  for (var i = 0; i <= 9; i++) {
    document.getElementById("game").innerHTML += '<div class="block"></div>';
  }

  var hod = 0;
  let checkWin = false;
  document.getElementById("game").onclick = function(event) {
    console.log(event);
    if (event.target.className == "block") {
      if (hod % 2 == 0) {
        event.target.innerHTML = "x";
      } else {
        event.target.innerHTML = "0";
      }
      hod++;
      checkWinner();
    }
    if (hod == 9) {
      checkDraw();
    }
  };

  function checkWinner() {
    var allblock = document.getElementsByClassName("block");
    //console.log(allblock);
    if (
      allblock[0].innerHTML == "x" &&
      allblock[1].innerHTML == "x" &&
      allblock[2].innerHTML == "x"
    ) {
      alert("Won 'X'!");
      checkWin = true;
    } else if (
      allblock[3].innerHTML == "x" &&
      allblock[4].innerHTML == "x" &&
      allblock[5].innerHTML == "x"
    ) {
      alert("Won 'X'!");
      checkWin = true;
    } else if (
      allblock[6].innerHTML == "x" &&
      allblock[7].innerHTML == "x" &&
      allblock[8].innerHTML == "x"
    ) {
      alert("Won 'X'!");
      checkWin = true;
    } else if (
      allblock[0].innerHTML == "x" &&
      allblock[3].innerHTML == "x" &&
      allblock[6].innerHTML == "x"
    ) {
      alert("Won 'X'!");
      checkWin = true;
    } else if (
      allblock[1].innerHTML == "x" &&
      allblock[4].innerHTML == "x" &&
      allblock[7].innerHTML == "x"
    ) {
      alert("Won 'X'!");
      checkWin = true;
    } else if (
      allblock[2].innerHTML == "x" &&
      allblock[5].innerHTML == "x" &&
      allblock[8].innerHTML == "x"
    ) {
      alert("Won 'X'!");
      checkWin = true;
    } else if (
      allblock[0].innerHTML == "x" &&
      allblock[4].innerHTML == "x" &&
      allblock[8].innerHTML == "x"
    ) {
      alert("Won 'X'!");
      checkWin = true;
    } else if (
      allblock[2].innerHTML == "x" &&
      allblock[4].innerHTML == "x" &&
      allblock[6].innerHTML == "x"
    ) {
      alert("Won 'X'!");
      checkWin = true;
    }
    //O
    else if (
      allblock[0].innerHTML == "0" &&
      allblock[1].innerHTML == "0" &&
      allblock[2].innerHTML == "0"
    ) {
      alert("Won 'O'!");
      checkWin = true;
    } else if (
      allblock[3].innerHTML == "0" &&
      allblock[4].innerHTML == "0" &&
      allblock[5].innerHTML == "0"
    ) {
      alert("Won 'O'!");
      checkWin = true;
    } else if (
      allblock[6].innerHTML == "0" &&
      allblock[7].innerHTML == "0" &&
      allblock[8].innerHTML == "0"
    ) {
      alert("Won 'O'!");
      checkWin = true;
    } else if (
      allblock[0].innerHTML == "0" &&
      allblock[3].innerHTML == "0" &&
      allblock[6].innerHTML == "0"
    ) {
      alert("Won 'O'!");
      checkWin = true;
    } else if (
      allblock[1].innerHTML == "0" &&
      allblock[4].innerHTML == "0" &&
      allblock[7].innerHTML == "0"
    ) {
      alert("Won 'O'!");
      checkWin = true;
    } else if (
      allblock[2].innerHTML == "0" &&
      allblock[5].innerHTML == "0" &&
      allblock[8].innerHTML == "0"
    ) {
      alert("Won 'O'!");
      checkWin = true;
    } else if (
      allblock[0].innerHTML == "0" &&
      allblock[4].innerHTML == "0" &&
      allblock[8].innerHTML == "0"
    ) {
      alert("Won 'O'!");
      checkWin = true;
    } else if (
      allblock[2].innerHTML == "0" &&
      allblock[4].innerHTML == "0" &&
      allblock[6].innerHTML == "0"
    ) {
      alert("Won 'O'!");
      checkWin = true;
    }
  }

  function checkDraw() {
    if (checkWin == false) {
      alert("This`s a Draw!");
    }
  }
};
