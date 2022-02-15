#### 1. 표기법
- dash-case(kebab-case)(html, css)
  - the-quick-brown-fox-jumps-over-the-lazy-dog
- snake_case(html, css)
  - the_quick_brown_fox_jumps_over_the_lazy_dog
- camelCase(js)
  - theQuickBrownFoxJumpsOverTheLazyDog
- PascalCase(js)
  - TheQuickBrownFoxJumpsOverTheLazyDog

<br>

#### 2. Zero-based Numbering
- 0 기반 번호 매기기! js는 특수한 경우를 제외하고 0부터 시작한다. 

  ~~~js
  let fruits = ['Apple', 'Banana', 'Cherry']; 

  console.log(fruits[0]); // 'Apple'
  console.log(fruits[0]); // 'Banana'
  console.log(fruits[0]); // 'Cherry'

  console.log(new Date('2021-01-30').getDay()); // 6, 토요일
  console.log(new Date('2021-01-30').getDay()); // 0, 일요일
  console.log(new Date('2021-01-30').getDay()); // 1, 월요일
  ~~~

<br>

#### 3. 데이터 종류(자료형)

- html, css는 모양으로 출력, js는 모든 것들이 데이터로 이뤄짐

  - String
  - Neumber
  - Boolean
  - Undefined
  - Null
  - Object
  - Array

<br>

1. String(문자 데이터)
  - 따옴표 사용(큰, 작은 따움표 상관없음)
  ~~~js
  let myName = "SSW";
  let email = 'ssw@gmail.com';
  let hello = 'Hello ${myName}?!' // ${보관법}

  console.log(myName);  // SSW
  console.log(email);   // ssw@gmail.com
  console.log(hello);   // Hello SSW?!
  ~~~

<br>

2. Number(숫자 데이터)
  - 정수 및 부동소수점 숫자를 나타낸다. 
  ~~~js
  let number = 123; 
  let opacity = 1.57;

  console.log(number);  // 123
  console.log(opacity); // 1.57
  ~~~

<br>

3. Boolean(불린 데이터)
  - true, false 두 가지 값밖에 없는 논리 데이터
  ~~~js
  let checked = true;
  let isShow = false; 

  console.log(checked); // true
  console.log(isShow);  // false
  ~~~

<br>

4. Undefined
  - 값이 할당되지 않은 상태를 나타낸다. 
  ~~~js
  let undef; 
  let obj = { abc: 123 };

  console.log(undef);   // undefined
  console.log(obj.abc); // 123
  console.log(obj.xyz); // undefined
  ~~~

<br>

5. Null
  - 어떤 값이 **의도적으로** 비어있음을 의미한다.(undef랑 차이)
  ~~~js
  let empty = null; 

  console.log(empty); // null
  ~~~

6. Object(객체 데이터)
  - 여러 데이터를 **Key:Value 형태**로 저장한다. { }
  ~~~js
  let user = { 
    // Key:value,
    name: 'SSW',
    age : 27,
    isValid: true
  };

  console.log(user.name);     // SSW
  console.log(user.age);      // 27
  console.log(user.isValid);  // true
  ~~~


7. Array(배열 데이터)
  - 여러 데이터를 **순차적으로** 저장한다. [ ]
  ~~~js
  let fruits = ['Apple', 'Banana', 'Cherry'];

  console.log(fruits[0]); // 'Apple'
  console.log(fruits[1]); // 'Banana'
  console.log(fruits[2]); // 'Cherry'
  ~~~

<br>

#### 4. 변수
- 데이터를 저장하고 참조하는 데이터의 이름
  - var (사용X)
  - let 
  - const

~~~js
// 재사용 가능!
// 변수 선언!

let a = 2;
let b = 5; 

console.log(a + b); // 7 
console.log(a - b); // -3
console.log(a * b); // 10
console.log(a / b); // 0.4
~~~
- let : 값의 재할당 가능
  ~~~js
  let a = 12;
  console.log(a); // 12

  a = 999;
  console.log(a); // 999
  ~~~

- const : 값의 재할당 불가
  ~~~js
  const a = 12;
  console.log(a); // 12

  a = 999;
  console.log(a); // TypeError
  ~~~

<br>

#### 5. 예약어
- 특별한 의미를 가지고 있어서 변수나 함수 이름 등으로 사용할 수 없는 단어

  ~~~js
  let this = 'hello';   // SyntaxError
  let if = 123;         // SyntaxError
  let break = true;     // SyntaxError
  ~~~


  <br>

#### 6. 함수
- function : 특정 동작을 수행하는 일부 코드의 집합을
~~~js
// 함수 선언
function helloFunc(){
  // 실행 코드 
    console.log(1234);
}

// 함수 호출
helloFunc(); // 1234
~~~

~~~js
function returnFunc(){
  return 123;   // 123을 반환해준다.
}

let a = returnFunc(); // 123을 a가 받는다.

console.log(a); // 123
~~~

~~~js
// 함수 선언
function sum(a, b){   // a, b는 매개변수(Parameters)
  return a + b;
}

// 재사용
let a = sum(1, 2);    // 1과 2는 인수(Arguments) 
let b = sum(7, 12); 
let c = sum(2, 4); 

console.log(a, b, c); // 3, 19, 6
~~~
- 기명(이름이 있는) 함수
  ~~~js
  // 기명(이름이 있는) 함수 
  // 함수 선언!!
  function hello(){
    console.log('hello');
  }

  //함수 호출!
  hello();    // hello
  ~~~
- 익명(이름이 없는) 함수
  - 함수 이름이 없으면 호출할 수 없음
  - 익명함수는 대부분 변수에 할당해서 사용하거나, 데이터로 활용함
  ~~~js
  // 익명(이름이 없는) 함수
  // 함수 표현!
  let world = function(){
    console.log('world');
  }

  //함수 호출!
  world();    // world
  ~~~

- 객체 데이터
  ~~~js
  const ssw = {
    name: 'SSW',
    age : 27,
    // 메소드(Method)
    getName: function(){
      return this.name;
    }
  };

  const hisName = ssw.getName();
  console.log(hisName); // SSW
  // 혹은
  console.log(ssw.getName()); // SSW
  ~~~

<br>

#### 7. 조건문
- 조건의 결과에 따라 다른 코드를 실행하는 구문
  - if
  - else

~~~js
let isShow = true;
let checked = false;

if(isShow){
  console.log('Show!'); // Show!
}

if(checked){
  console.log('Checked!'); 
}
~~~


~~~js
let isShow = true;

if(isShow){
  console.log('Show!');
}else{
  console.log('Hide?');
}

// Show!
~~~

<br>

#### 8. DOM API
- DOM : Document Object Model
- API : Application Programming Interface

- DOM API : html을 제어하는 명령들
<br>

1. HTML 요소 1개 검색/찾기
    ~~~js
    const boxEl = document.querySelector('.box');
    ~~~

2. HTML 요소에 적용할 수 있는 메소드
    ~~~js
    boxEl.addEventListener();
    ~~~

3. HTML 요소에 적용할 수 있는 메소드
    ~~~js
    boxEl.addEventListener(1, 2);
    ~~~

4. 1 - 이벤트(Event, 상황)
    ~~~js
    boxEl.addEventListener('click, 2');
    ~~~

5. 2 - 핸들러(Handler, 실행할 함수)
    ~~~js
    boxEl.addEventListener('click', function(){
      console.log('Click~!');
    });
    ~~~

6. HTML 요소 검색/찾기
    ~~~js
    const boxEl = document.querySelector('.box');
    ~~~

7. 요소의 클래스 정보 객체 활용!
    ~~~js
    boxEl.classList.add('active');    
    // boxEl을 가지고 있는 클레스에 active 추가

    let isContains = boxEl.classList.contains('active');  
    // let은 재할당 가능
    // boxEl에 클래스 내부에서 active가 포함되어 있는지 체크하는 것 있으면 true 없으면 false
    console.log(isContains); // true

    boxEl.classList.remove('active');
    // boxEl라는 요소에서 active라는 클래스 삭제 
    isContains = boxEl.classList.contains('active');
    console.log(isContains); // false
    ~~~

8. HTML 요소 모두 검색/찾기
    ~~~js
    const boxEls = document.querySelectorAll('.box');
    console.log(boxEls); 
    ~~~

9. 찾은 요소들 반복해서 함수 실행, 익명 함수를 인수로 추가
    ~~~js
    boxEls.forEach(function () {});
    ~~~


    

10. 첫 번째 매개변수(boxEl) : 반복 중인 요소
  두 번째 매개변수(index) : 반복 중인 번호
    ~~~js
    boxEls.forEach(function(boxEl, index) {} ); 
    ~~~


11. 출력
    ~~~js
    boxEls.forEach(function (boxEl, index) {
      boxEl.classList.add(`order-${index + 1}`);
      console.log(index, boxEl); 
    })
    ~~~

12. Getter, Setter
    ~~~js
    const boxEl = document.querySelector('.box');   // box 클래스를 가진 요소 중 제일 처음 찾아진 요소에 할당해줌

    // Getter, 값을 얻는 용도
    console.log(boxEl.textContent); // Box!!
        // text로만 이뤄진 Content만 반환됨 

    // Setter, 값을 지정하는 용도
    boxEl.textContent = 'SSW!';
    console.log(boxEl.textContent); // SSW!
    ~~~


<br>

#### 9. 메소드 체이닝(Method Chaining)
- 메소드를 붙여서, 연결해서 사용하는 것
  ~~~js
  const a = 'Hello~'; 
  // split: 문자를 인수 기준으로 쪼개서 배열로 반환
  // reverse : 배열을 뒤집기
  // join : 배열을 인수 기준으로 문자로 병합해 반환

  const b = a.split('').reverse().join(''); // <- 이런 게 메소드 체이닝

  console.log(a); // Hello~
  console.log(b); // ~olleH
  ~~~