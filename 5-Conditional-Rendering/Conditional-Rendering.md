## Conditional Rendering

이번엔 컨텐츠의 조건부 렌더링에 대해 배워보겠습니다.

특정 조건을 만족할 때 페이지의 일정 부분이 렌더링 되도록 하고 컨텐츠 목록을 출력하는 방법을 알아볼겁니다.

<br>

예를 들어 강의 목표, 상품 목록 등 동적 렌더링이 필요한 부분을 작업해 볼겁니다.

그리고 목록이 늘어나면 새 항목이 렌더링 되고, 목록이 줄어들면 항목이 제거될 겁니다.

<br>

**학습할 목록**

1. 렌더링 할 상품이 없을때 특정 텍스트를 표시할 수 있는 Vue 도구
2. 데이터 목록을 출력하는 방법
3. Vue 내부 동작 과정의 이해와 중요한 최적화 방법 1가지 (데이터 목록을 출력할 때 사용)

---

## 구현

![img](https://raw.githubusercontent.com/spacedustz/Obsidian-Image-Server/main/img/conditional-rendering.png)

<br>

지금 위 페이지에선 Input에 입력값을 넣고 Add Goal을 눌러도 아무런 반응이 없는 상태입니다.

이제 해볼것은 입력값을 넣고 Add Goal을 눌렀을 때 결과 리스트에 추가하는 것 입니다.

또, 목록 항목을 클릭해서 목록에서 삭제도 할 수 있어야 합니다.

<br>
