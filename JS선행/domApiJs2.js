const boxEls = document.querySelectorAll('.box-container');

boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`);    // box order-1, box order-2 ...   
  console.log(index, boxEl);
});