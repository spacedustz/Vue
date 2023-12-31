## Methods & Computed & Watch 정리

|Methods|Computed|Watch|
|---|---|---|
|템플릿에서 데이터를 바인딩 하는 용도, 예를 들어 Interpolation을 위한 `{{ }}`을 사용하기 위함|데이터 바인딩에만 쓰임|템플릿에 직접 사용하지 않습니다. 데이터,연산 등 어떤 프로퍼티든 Watch로 감시할 수 있습니다.|
|이벤트 바인딩 용도|다른 데이터를 기반으로 하는 데이터를 가져오는데 유용하며 의존하는 데이터가 바뀔때만 Vue에 의해 재평가 하거나 재실행되는 장점이 있음|데이터 변경에 대한 반응을 코드로 실행할 수 있습니다. (ex: HTTP Request 보내기, Timer 설정, Local Storage에 데이터를 저장하는 작업 등|
|데이터 바인딩을 위한 사용에서 템플릿 -> Vue 인스턴스로 로직을 아웃소싱 하는 경우, Methods는 컴포넌트의 Re-Rendering 주기에 맟춰 매번 실행됩니다. 그러므로 변동 사항이 생기면 템플릿을 재평가하고 해당 템플릿에 호출된 모든 메서드를 다시 호출합니다|즉, 연산 프로퍼티에 사용된 데이터가 바뀌는 경우에 한해서입니다. 다른 데이터가 바뀔때는 연산 프로퍼티를 재평가 하지 않습니다. |데이터가 아닌 업데이트에 사용해야 합니다. 바뀌는 데이터를 토대로 데이터가 아닌 내부에서 업데이트하는 작업이 있을때 Watch를 사용하는게 좋습니다.|
|**정리: 데이터 바인딩 -> {{}} 사용, 이벤트 바인딩 -> methods 사용, 페이지에 변동사항이 생기면 메서드 재실행 되길 원한다 -> methods 사용**|**정리: 다른 데이터에 의존하는 경우에만 쓰입니다.**|보통 사용할일이 별로 없습니다. 다른 데이터에 의존하는 데이터 출력엔 보통 연산 프로퍼티를 사용하기 때문입니다.|
