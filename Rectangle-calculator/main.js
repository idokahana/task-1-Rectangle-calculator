function drowRectangle() {
  const myCanvas = document.querySelector("#myCanvas");

  const painter = myCanvas.getContext("2d");
  const x = document.querySelector("#x");
  const y = document.querySelector("#y");
  const w = document.querySelector("#w");
  const h = document.querySelector("#h");

  isValid(x, y, w, h);

  if (x.value && y.value && w.value && h.value) {
    painter.fillStyle = "red";
    painter.fillRect(x.value, y.value, w.value, h.value);
  }

  calculatorArea();
}

function clearCanvas() {
  const myCanvas = document.querySelector("#myCanvas");
  const painter = myCanvas.getContext("2d");
  painter.clearRect(0, 0, 300, 300);
}

function isValid(x, y, w, h) {
  if (
    x.value > 300 ||
    x.value < 1 ||
    y.value > 300 ||
    y.value < 1 ||
    w.value > 300 ||
    w.value < 1 ||
    h.value > 300 ||
    h.value < 1
  ) {
    alert("Invalid values!");
  }
}

function calculatorArea() {
  const w = document.querySelector("#w");
  const h = document.querySelector("#h");
  if (w.value > 300 || w.value < 1 || h.value > 300 || h.value < 1) {
  } else {
    const element = document.querySelector("#area");
    element.innerHTML = `Rectangle Area - ${h.value * w.value} `;
  }
}

function onWindowLoad() {
  const btn = document.querySelector("#calculatBtn");
  btn.onclick = drowRectangle;
  const btn2 = document.querySelector("#resetBtn");
  btn2.onclick = clearCanvas;
}

window.onload = onWindowLoad;
