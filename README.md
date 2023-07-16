# Practicing React Components (리액트 컴포넌트 연습)

### `✔️ 내용`
- 리액트를 사용해서 컴포넌트 단위의 기능들을 구현 및 연습

<br>

<details>
  <summary>1. Counter</summary>

  ![img1](https://user-images.githubusercontent.com/83055813/228539228-33ff124c-f4ab-4305-9297-4a3e38b8f67e.gif)

  - 내용 : 두 개의 counter와 버튼이 있고 버튼을 누르면 각각의 counter의 숫자가 올라가고 두 개의 counter의 총 count가 업데이트 된다.
  - 배운 점 :  상위 컴포넌트와 하위 컴포넌트들이 공유하는 state는 상위 컴포넌트에 두고, 하위 컴포넌트에서 사용하는 state는 하위 컴포넌트에 둔다. 상위 컴포넌트에 있는 state를 하위 컴포넌트와 공유하려면 prop으로 전달해 준다. (이벤트도 마찬가지)

</details>

<details>
  <summary>2. Mouse Stalker</summary>

  ![img2](https://user-images.githubusercontent.com/83055813/228536215-2df7b30b-24bf-4807-bde1-119616a967ac.gif)

  - 내용 : 마우스를 움직이면 이미지가 마우스를 따라 움직인다.
  - 배운 점 : 서로 연관있는 state는 객체로 구현하는 것이 좋다. 객체를 리턴할 때는 소괄호로 감싸야 한다. (중괄호가 객체인지 코드 블록인지 구분하기 위해서) 이벤트에는 여러 가지가 있기 때문에 mdn 문서를 잘 확인하자. 

</details>

<details>
  <summary>3. Form</summary>

  ![img3](https://user-images.githubusercontent.com/83055813/228860563-abd9adfa-bbf5-49c1-8c8a-6545384c48a0.gif)

  - 내용 : 이름과 이메일을 입력하는 폼으로 Submit 버튼을 누르면 콘솔 창에 input에 입력한 이름과 이메일이 출력된다.
  - 배운 점 : useState를 사용하지 않은 폼은 아무리 업데이트를 해도 상태가 변경되어야 업데이트 되는 리액트에서는 uncontrolled component로 제대로 작동하지 않는다. 제대로 작동하는 폼을 구현하기 위해서는 useState로 폼 상태를 업데이트 해 controlled component로 만들어 주어야 한다.

</details>