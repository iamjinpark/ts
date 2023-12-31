//void type
//비어있는

function sayHi(): string {
    return "hello";
  } // 리턴값이 있음
  
  function printHi(): void {
    console.log("hello");
  } //리턴값이 없음   일반 자바스크립트에서는 리턴값이 없으면 undefined를 반환하지만 TS에서 타입을 undefined를 하면 리턴값이 무조건 undefined 여야함
  
  //never type
  //존재하지 않는 / 불가능한 타입, 어떤 값도 정의할 수 없는
  
  function showError(message: string): never {
    throw new Error(message);
  }
  showError("에러가 발생했습니다.");