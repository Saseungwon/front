let boxEl = document.querySelector('.box');   // .box 선택자를 통해 요소를 찾아 해당 변수를 할당한다. //

console.log(boxEl);

boxEl.addEventListener('click', function(){
  console.log('Click!!');
  box.classList.add('active');  
  // 해당하는 요소를 클릭하면 그 요소에 active 추가

  console.log(boxEl.classList.contains('active'));
  // boxEl에 active가 있는지 확인 - true

  box.classList.remove('active');
  console.log(boxEl.classList.contains('active'));
  // false
});

