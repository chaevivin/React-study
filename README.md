# Practicing React Components (리액트 컴포넌트 연습)

![6](https://github.com/chaevivin/React-study/assets/83055813/ec80c5a9-ea41-4559-b219-98ca67077ab0)

- 리액트를 사용해서 컴포넌트 단위의 기능들을 구현 및 연습
- 토글 버튼으로 해당 컴포넌트 확인 가능
- 계속 추가 중

<br>

### `🔗 링크`
https://chaevivin.github.io/React-study/

<br>

### `✔️ 내용`

<details>
  <summary>1. Counter</summary>

  ![img1](https://user-images.githubusercontent.com/83055813/228539228-33ff124c-f4ab-4305-9297-4a3e38b8f67e.gif)

  ### 📖 내용 
  - 두 개의 개별 counter와 한 개의 Total Count 존재
  - 두 개의 개별 counter의 버튼을 누르면 각각의 counter의 숫자 증가
  - Total Count는 두 개의 counter의 총 count가 업데이트
  - Total Count가 10이상이 되면 이모티콘 변경 (☔ → ☀️)

  ### ✏️ 배운 점 
  - 리액트는 단방향이기 때문에 상위 컴포넌트와 하위 컴포넌트들이 공유하는 state는 상위 컴포넌트에 두어야 한다.
  - 하위 컴포넌트에서 사용하는 state는 하위 컴포넌트에 두어야 한다.
  - 상위 컴포넌트에 있는 state를 하위 컴포넌트와 공유하려면 prop으로 전달해 준다. (이벤트도 마찬가지)

  <br>

</details>

<details>
  <summary>2. Mouse Stalker</summary>

  ![img2](https://user-images.githubusercontent.com/83055813/228536215-2df7b30b-24bf-4807-bde1-119616a967ac.gif)

  ### 📖 내용 
  - 마우스를 움직이면 이미지가 마우스를 따라 움직인다.

  ### ✏️ 배운 점 
  - 서로 연관있는 state는 객체로 구현하는 것이 좋다. 
  - 객체를 리턴할 때는 소괄호로 감싸야 한다. (중괄호가 객체인지 코드 블록인지 구분하기 위해서) 
  - 이벤트에는 여러 가지가 있기 때문에 mdn 문서를 잘 확인하자. 

  <br>

</details>

<details>
  <summary>3. Form</summary>

  ![img3](https://user-images.githubusercontent.com/83055813/228860563-abd9adfa-bbf5-49c1-8c8a-6545384c48a0.gif)

  ### 📖 내용 
  - 이름과 이메일을 입력하는 폼
  - Submit 버튼을 누르면 콘솔 창에 폼에 입력한 이름과 이메일이 출력

  ### ✏️ 배운 점 
  - useState를 사용하지 않은 폼은 아무리 업데이트를 해도 제대로 작동하지 않는다. 왜냐하면 상태가 변경되어야 업데이트 되는 리액트에서 해당 폼은 uncontrolled component이기 때문이다.
  - 제대로 작동하는 폼을 구현하기 위해서는 useState로 폼 상태를 업데이트 해 controlled component로 만들어 주어야 한다.

  <br>

</details>

<details>
  <summary>4. Todo List</summary>

  ![img4](https://github.com/chaevivin/React-study/assets/83055813/0fbc758b-8879-473e-b0e4-a46a585fd376)

  ### 📖 내용 
  - 할 일을 입력할 수 있는 투두 리스트
  - 입력 창에 할 일을 입력하면 리스트에 추가 (state: active)
  - 체크박스 누르면 할 일을 완료한 것으로 간주 (state: completed)
  - 네비게이션 바의 메뉴 'all', 'active', 'completed'로 각각의 상태에 맞는 투두 필터링
  - 삭제 버튼 누르면 투두 삭제
  - 새로고침해도 기존에 작성해 둔 내용이 사라지지 않고 남아있음
  - 다크모드 지원

  ### ✏️ 배운 점 
  - 컴포넌트의 상태와 밀접하게 연관 있는 함수가 아니라면 외부에 선언하여 메모리 성능을 최적화할 수 있다. 컴포넌트 안에 연관 있지 않은 함수를 선언한다면 컴포넌트가 리렌더링될 때마다 불필요하게 재선언(재할당)되기 때문이다.
  - useState의 초기값으로 함수를 선언해야 할 때는 콜백 함수로 호출하는 것이 좋다. 왜냐하면 컴포넌트가 리렌더링될 때마다 useState가 호출되어 함수도 계속 호출되기 때문이다. 이미 useState에서 내부적으로 업데이트된 값을 기억하고 있는데 불필요하게 함수를 계속 호출하여 useState 값을 읽어온다.
  - local storage를 이용하면 데이터가 만료되지 않고 해당 데이터를 계속 사용할 수 있다. local storage는 키와 값 형태로 저장하고 키와 값은 반드시 문자열이어야 한다. 객체를 사용하고 싶다면 JSON으로 변환하여야 한다.
  - input과 label을 input의 id와 label의 htmlFor 어트리뷰트로 연결하는 것이 좋다. 이렇게 하면 웹 접근성이 더 좋아지고, 브라우저가 자동으로 이벤트를 연결해준다.
  - 다크모드를 구현하기 위해 context API를 사용할 수 있다. context는 부모 컴포넌트가 공통된 데이터를 자식 컴포넌트들에게 전달해야할 때 유용하다. createContext로 context를 생성하고, provider로 자식 컴포넌트들에게 데이터를 전달한다. 공통 데이터들은 useState로 정의한다. 

</details>