#### 1. 표기법
- dash-case(kebab-case)(html, css)
  - the-quick-brown-fox-jumps-over-the-lazy-dog
- snake_case(html, css)
  - the_quick_brown_fox_jumps_over_the_lazy_dog
- camelCase(js)
  - theQuickBrownFoxJumpsOverTheLazyDog
- PascalCase(js)
  - TheQuickBrownFoxJumpsOverTheLazyDog

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