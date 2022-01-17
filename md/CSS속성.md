#### 1. width, height
- 요소의 가로, 세로 너비
- 기본값 : 브라우저가 너비를 계산(auto)
  ~~~html
  <div></div>


  div{
    width: 100px;
    heigth: 100px;
  }
  ~~~


- span
  - 대표적인 인라인 요소로 포함한 콘텐츠 크기만큼 자동으로 줄어든다.
    ~~~html
    <span>hello</span>
    <span>world</span>
    ~~~

- div
  - 대표적인 블록 요소로 포함한 콘텐츠
  - 가로는 최대한 늘림, 세로는 최대한 줄임
    ~~~html
    <div>hello</div>
    <div>world</div>
    ~~~

- max-width, max-height (기본값 : none)
  - 최대 너비 제한 없음
- min-width, min-height (기본값 : 0)
  - 최소 너비 제한 없음
<br>

#### 2. CSS 단위
- px : 픽셀
- % : 상대적 백분율
- em : 요소의 글꼴 크기
- rem : 루트 요소의 글꼴 크기
- vw : 뷰포트 가로 너비의 백분율
- vh : 뷰포트 세로 너비의 백분율

<br>

#### 3. margin
- 요소의 외부 여백을 지정하는 단축 속성
- 음수 사용 가능
- 기본값 0 : 외부 여백 없음
<br>
- margin: auto  => 가운데 정렬로 사용 가능 
- margin-bottom 같이 특정 위치만 여백 줄 수 있다.(top, right, bottom, left)
- margin: 10px 20px;
  - 10px(top, bottom) 20px(left, right)
- margin: 10px 20px 30px;
  - 10px(top) 20px(left, right) 30px(bottom)
- margin: 10px 20px 30px 40px;
  - 10px(top) 20px(right) 30px(bottom) 40px(left)

  ~~~html
  <div class="container">
    <div class="item"></div>
    <div class="item"></div>
  </div>

  .container .item{
    margin-bottom: 20px;
  }
  ~~~
<br>

#### 4. padding
  - 요소의 내부 여백을 지정하는 단축 속성
  - 요소의 크기가 커진다. 
  - 기본값 0 : 내부 여백 없음
  - % : 부모 요소의 가로 너비에 대한 비율로 지정
<br>
- padding: 10px 20px;
  - 10px(top, bottom) 20px(left, right)
- padding: 10px 20px 30px;
  - 10px(top) 20px(left, right) 30px(bottom)
- padding: 10px 20px 30px 40px;
  - 10px(top) 20px(right) 30px(bottom) 40px(left)
- padding-bottom 같이 특정 위치만 여백 줄 수 있다.(top, right, bottom, left)

<br>

#### 5. border
- 요소의 크기가 늘어남
- border-width : 선 두께
  - 단위 : px, em, % 등 단위로 지정
  - 각각의 방향을 개별적으로 설정 가능(top, right, bottom, left)
  <br>
- border-style : 선 종류
  - solod : 실선
  - dashed : 파선 - - - - -
  - 각각의 방향을 개별적으로 설정 가능(top, right, bottom, left)
  <br>
- border-color : 선 색상
  - transparent : 투명
  - 각각의 방향을 개별적으로 설정 가능(top, right, bottom, left)
<br>
- 기본값 : border: medium none black;

  ~~~js
  border-top: 두께 종류 색상;
  border-top-width: 두께;
  border-top-style: 종류;
  border-top-color: 색상;

  // bottom, left, right 도 마찬가지로 
  ~~~

<br>

#### 6. 색상 표현
- 색상 이름 : 브라우저에서 제공하는 색상 이름 (red, black ...)
- Hex 색상코드 : 16진수 색상 (#000, #FFFFFF)     **=> 권장됨**
- RGB : 빛의 삼원색 (rgb(255,255,255))
- RGBA : 빛의 삼원색 + 투명도 (rgb(0,0,0,0.5))

<br>

#### 7. border-radius
- 요소의 모소리를 둥글게 깎음

  ~~~js
  //원하는 모서리만 둥글게 깎을 수 있음
  border-radius: 0 10px 0 0 // 오른쪽 위만 둥글게 됨
  ~~~

<br>

#### 8. box-sizing
- content-box(기본값) : 요소의 내용으로 크기 계산
- border-box : 요소의 내용 + padding + border로 크기 계산
- padding이나 border 같이 요소의 크기가 커지는 속성이 적용 됐을 때 내가 원하는 정확한 수치를 위해서는 가로, 세로 사이즈를 수동으로 계산해야하지만 border-box를 사용하면 padding이나 border를 계산해서 넣어준다.
  ~~~html
  <div class="item">hello</div>
  <div class="item">hello</div>

  .item{
    width: 100px;
    heigth: 100px;
    background-color: orange;
  }
  .item:first-child{
    border: 4px solid red;
    padding: 20px;
    box-sizing: border-box;
  }
  ~~~

- Q1 : 실제 가로 넓이는?
  ~~~js
  width: 100px;
  padding: 20px;
  border: 1px solid red;

  // 142px
  ~~~
- Q2 : 실제 가로 넓이는?
  ~~~js
  width: 100px;
  padding: 20px;
  border: 1px solid red;
  box-sizing: border-box;

  // 100px
  ~~~


#### 9. overflow
- 요소의 크기 이상으로 내용이 넘쳤을 때, 보여짐을 제어하는 단축 속성
  - visible : 기본값
  - hidden : 넘친 내용을 잘라냄
  - auto : 넘친 내용이 있는 경우에만 잘라내고 스크롤바 생성