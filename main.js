const display = document.querySelector('.js-display');
const btnsCalculate = document.querySelectorAll('.js-btn-calculate');
const btns = document.querySelectorAll('.js-btn');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let btnText = e.target.textContent;
    if (btnText === 'x') {
      btnText = '*';
    }
    if (btnText === '÷') {
      btnText = '/';
    }
    if (btnText === 'AC') {
      display.value = '';
    }
    if (btnText === 'C') {
      display.value = display.value.slice(0, -1);
    }
    if (btnText === '=') {
      display.value = eval(display.value);
    }
    if (btnText === '=' || btnText === 'AC' || btnText === 'C') {
      btnText = '';
    }
    display.value += btnText;
  });
});

const sin = () => {
  display.value = Math.sin(display.value);
}
const cos = () => {
  display.value = Math.cos(display.value);
}
const tan = () => {
  display.value = Math.tan(display.value);
}
const pow = () => {
  display.value = Math.pow(display.value, 2);
}
const sqrt = () => {
  display.value = Math.sqrt(display.value, 2);
}

btnsCalculate.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let btnText = e.target.textContent;
    if (btnText === 'sin') {
      sin();
    }
    if (btnText === 'cos') {
      cos();
    }
    if (btnText === 'tan') {
      tan();
    }
    if (btnText === 'x²') {
      pow();
    }
    if (btnText === '√') {
      sqrt();
    }
  });
});