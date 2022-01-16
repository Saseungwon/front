#### HTML 정리

1. div
- 블록 요소 : 특별한 의미가 없는 구분을 위한 요소 

2. h1
- 블록 요소 : 제목을 의미하는 요소 (1~6)
- 숫자가 작을수록 더 중요한 제목을 정의

3. p
- 블록 요소 : 문장을 의미하는 요소 

4. img
- 인라인 요소 : 이미지를 삽입하는 요소 
- 필수요소 : src(삽입할 이미지 경로), alt(삽입할 이미지의 이름)

5. ul
- 블록 요소 : 순서가 필요없는 목록의 집합을 의미 요소

6. li 요소
- 블록 요소 : 목록 내 각 항목 의미

~~~js
//ul과 li는 세트!

<ul>
  <li>사과<li>
  <li>딸기<li>
  <li>수박<li>
  <li>오렌지<li>
</ul>
~~~

7. a
- 인라인 요소 : 다른/같은 페이지로 이동하는 하이퍼링크를 지정하는 요소
- href(링크 url), target="_blank"(새로운 탭으로 해당 url)

8. span
- 인라인 요소 : 특별한 의미가 없는 구분을 위한 요소 
~~~js
<style>
  span{color:red;}
</style>

<span>동해물</span>과 백두산이 마르고 닳도록
// span 부분만 스타일 적용
~~~

9. br
- 인라인 요소 : 줄바꿈 요소 

10. input
- 인라인블록 요소(inline-block)
~~~js
type : 입력받을 데이터의 타입 
value : 미리 입력된 값
placeholder : 입력할 값의 힌트-이름을 입력하세요!
disabled : 입력요소 비활성화 
checked : 미리 체크가 되어있도록 지정 
radio : 1개만 선택 가능
~~~

11. label
- 라벨 가능 요소의 제목을 넣고싶을 때
- 체크박스와 라벨을 묶어서 선택할 수 있도록 만듦 
~~~js
<lable>
  <input type="checkbox"/>Apple
</lable>
~~~

12. table 
- 테이블 요소 : 표 요소, 행과 열의 집합 

13. tr(table-row)
- 테이블 요소 : 행을 지정하는 요소 

14. td(table-data)
- 테이블 요소 : 열을 지정하는 요소
~~~js
<table>
  <tr>
    <td>A<td></td>B</td>
  </tr>
  <tr>
    <td>C<td></td>D</td>
  </tr>  
</table>

// A B
// C D
~~~


<br>

#### 전역속성 정리
- 모든 것에 쓸 수 있는 속성 

1. title : 요소의 정보나 설명을 지정
2. style : 요소에 적용할 스타일 지정(css)
3. class : 요소를 지칭하는 **중복 가능한** 이름(css 선택자)
4. id : 요소를 지칭하는 **고유한** 이름
5. data-이름="데이터" : 요소에 데이터를 지정

~~~js
//html
<div data-fruit-name="apple">사과</div>
<div data-fruit-name="banana">바나나</div>

//js
const els = document.querySelectorAll('div')
els.forEach(el => {
  console.log(el.dataset.fruitName)
})

// apple
// banana
~~~

- defer : HTML 구조가 준비된 후(문서 분석 이후)에 js를 해석하겠다는 의미
~~~js
<script defer src="./main.js"></script>
~~~
