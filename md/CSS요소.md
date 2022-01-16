## ✏️ 스타일 적용 방식

#### 1. 내장 방식
- html 내부에 작성
~~~css
<style>
  div{
    color:red;
  }
</style>
~~~

#### 2. 인라인 방식
- 요소의 style 속성에 직접 스타일 작성
~~~CSS
<div style="color:red"></div>
~~~

#### 3. 링크 방식
- link로 외부 css 문서를 가져와서 연결하는 방식
~~~css
/* html */
<link rel="stylesheet" href="./css/main.css">

/* main.css */
div{
  color:red;
}
~~~

#### 4. import 방식
- import 규칙으로 css 문서 안에서 또 다른 css 문서를 가져와 연결 
~~~css
/* html */
<link rel="stylesheet" href="./css/main.css">

/* main.css */
@import url("./box.css");
div{
  color:red;
}

/* box.css */
.box{
  color:red;
}
~~~

**import vs link**

- import(직렬방식) : 연결이 지연시키려는 목적, 지연됨
- link(병렬방식) : 한 번에 다 연결됨 


## ✏️ 선택자

#### 1. 기본 선택자

1. 전체 선택자(*)
- 모든 요소를 선택함
~~~css
*{
  color:red;
}
~~~

2. 태그 선택자(ABC)
- 태그의 이름으로 요소를 선택
~~~css
li{
  color:red;
}
~~~

3. class 선택자(.ABC)
- class 속성의 값인 요소 선택
~~~css
.abc{
  color:red;
}
~~~

4. id 선택자(#ABC)
- id 속성의 값인 요소 선택
```css
#ABC{
  color:red;
}
```

#### 2. 복합 선택자

1. 일치 선택자(ABCXYZ)
- 선택자 ABC와 XYZ를 동시에 만족하는 요소 선택
~~~css
span.orange{
  color: red;
}

/* html */
<li class="orange"></li>
<span class="orange"></span> <= 여기만 적용
~~~


2. 자식 선택자(ABC>XYZ)
- 선택자 ABC의 자식 요소 XYZ를 선택
~~~css
ul > .orange{
  color: red;
}

/* html */
<ul>
  <li class="orange"></li> <= 여기만 적용
</ul>

<span class="orange"></span> 
~~~


3. 하위 선택자(ABC XYZ)
- 선택자 ABC의 하위 요소 XYZ를 선택
- 띄어쓰기가 선택자의 기호
~~~css
div .orange{
  color: red;
}

/* html */
<div>
  <ul>
    <li class="orange"></li> <= 적용
  </ul>

  <span class="orange"></span> <= 적용
</div>

<span class="orange"></span> 
~~~


3. 인접 형제 선택자(ABC + XYZ)
- 선택자 ABC의 다음 형제 요소 XYZ를 하나만 선택
~~~css
.orange + li {
  color: red;
}

/* html */

<ul>
  <li>딸기</li>
  <li>수박</li>
  <li class="orange">오렌지</li> 
  <li>망고</li> <= 적용
  <li>사과</li>
</ul>
~~~


4. 일반 형제 선택자(ABC ~ XYZ)
- 선택자 ABC의 다음 형제 요소 XYZ를 모두 선택
~~~css
.orange ~ li {
  color: red;
}

/* html */

<ul>
  <li>딸기</li>
  <li>수박</li>
  <li class="orange">오렌지</li> 
  <li>망고</li> <= 적용
  <li>사과</li> <= 적용
</ul>
~~~


#### 3. 가상클래스 선택자

1. ABC:hover
- 선택자 ABC 요소에 마우스 커서가 올라가 있는 동안 선택
~~~css
a:hover{
  color:red;
}

<a href="http://www.naver.com">NAVER</a>
~~~


2. ABC:active
- 선택자 ABC 요소에 마우스를 클릭하고 있는 동안 선택
~~~css
a:active{
  color:red;
}

<a href="http://www.naver.com">NAVER</a>
~~~



3. ABC:focus
- 선택자 ABC 요소가 포커스되면 선택
~~~css
input:focus{
  background-color:orange;
}

<input type="text"/>
~~~

4. ABC:first-child
- 선택자 ABC가 형제 요소 중 첫째라면 선택
~~~css
.fruits span:first-child{
  color:orange;
}

<div class="fruits">
  <span>딸기</span>   => 선택자를 통해 선택됨
  <span>수박</span>
  <div>오렌지</div>
  <p>망고</p>
  <h3>사과</h3>
~~~

5. ABC:last-child
- 선택자 ABC가 형제 요소 중 마지막이면 선택
~~~css
.fruits h3:last-child{
  color:orange;
}

<div class="fruits">
  <span>딸기</span>   
  <span>수박</span>
  <div>오렌지</div>
  <p>망고</p>
  <h3>사과</h3>     => 선택자를 통해 선택됨
~~~


6. ABC:nth-child(n)
- 선택자 ABC가 형제 요소 중 (n)째라면 선택
- .fruits *:nth-child(2n) : n은 0부터 시작, 2를 곱헤서 2에 배수가 선택됨(짝수번째 요소 모두 선택)
~~~css
/* 두 번째 요소 선택 */
.fruits *:nth-child(2){
  color:orange;
}

/* 짝수 요소 선택 */
.fruits *:nth-child(2n){
  color:orange;
}

/* 홀수 요소 선택 */
.fruits *:nth-child(2n+1){
  color:orange;
}

/* 2번째 요소 이후 요소 선택 */
.fruits *:nth-child(n+2){
  color:orange;
}


<div class="fruits">
  <span>딸기</span>   
  <span>수박</span>     
  <div>오렌지</div>
  <p>망고</p>
  <h3>사과</h3>
~~~

7. ABC:not(XYZ) 
- 부정 선택자
- 선택자 XYZ가 아닌 ABC 요소 선택
- not 안에 있는 선택자를 제외하는 개념
~~~css
.fruits *:not(span){
  color:orange;
}

<div class="fruits">
  <span>딸기</span>   
  <span>수박</span>
  <div>오렌지</div>  => 선택자를 통해 선택됨
  <p>망고</p>       => 선택자를 통해 선택됨
  <h3>사과</h3>     => 선택자를 통해 선택됨
~~~



#### 4. 가상요소 선택자

1. ABC::before(인라인 요소)
- 선택자 ABC 요소의 내부 앞에 내용을 삽입
- 가상요소 선택자를 사용할 때 content를 쓰지 않으면 적용이 안 됨
~~~js
.box::before{
  content: "앞!";
}

<div class="box">

Content!

</div>

// 출력 : 앞! Content!
~~~


2. ABC::after(인라인 요소)
- 선택자 ABC 요소의 내부 뒤에 내용을 삽입
- 가상요소 선택자를 사용할 때 content를 쓰지 않으면 적용이 안 됨
~~~js
.box::after{
  content: "뒤!";
}

<div class="box">

Content!

</div>

// 출력 : Content! 뒤!
~~~



#### 5. 속성 선택자

1. [ABC]
- 속성 ABC를 포함한 요소 선택
~~~js
[disabled] { 
  color: red; 
}

<input type="text" value="SSW">
<input type="password" value="1234">
<input type="text" value="abcd" disabled> => 선택됨
~~~



~~~js
[type] { 
  color: red; 
}

<input type="text" value="SSW">           => 선택됨
<input type="password" value="1234">      => 선택됨
<input type="text" value="abcd" disabled> => 선택됨
~~~


2. [ABC="XYZ"]
- 속성 ABC를 포함하고 값이 XYZ인 요소 선택
~~~js
[type="password"] { 
  color: red; 
}

<input type="text" value="SSW">
<input type="password" value="1234">      => 선택됨
<input type="text" value="abcd" disabled> 
~~~

~~~js
[data-fruit-name] { 
  color: red; 
}

<input type="text" value="SSW">
<input type="password" value="1234">      
<span data-fruit-name="apple">사과</span>    => 선택됨
~~~

## ✏️ 선택자 우선순위

#### 우선순위
우선순위란, 같은 요소가 여러 선언의 대상이 된 경우, 어떤 선언의 CSS 속성을 우선 적용할지 결정하는 방법
- 점수가 높은 선언이 우선함
- 점수가 같으면, 가장 마지막에 해석된 선언이 우선함

```js
div{color :red !important;}       // important  99999999점
#color_yellow{color:yellow;}      // id 선택자 100점
.color_green{color:green;}        // class 선택자 10점
div{color:blue;}                  // 태그 선택자 1점
*{color:darkblue;}                // 전체 선택자 0점
body{color:violet;}               // 상속 X

<div 
  id="color_yellow"
  class="color_green"
  style="color: orange;">     //인라인 선언 1000점
  Hellow world!
</div>

// 글자 색상은 red
```