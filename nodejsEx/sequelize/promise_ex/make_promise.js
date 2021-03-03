// const wait1seconds = new Promise((resolve, reject) => {
//     console.log('프라미스 시작!!');
//     setTimeout(() => {
//         resolve(console.log('1초뒤에 찍습니다!!!'));
//     }, 1000) //timeout설정한 시간이 끝나면 1000ms 괄호실행
// }); //변수를 넘길수 있다
// //promise는 resolve까지 찾아가고

const wait1seconds = new Promise((resolve, reject) => {
    reject("에러!!!");
}); 
//언제쓰냐 : 만약 데이터베이스를 받아오는과정에서 다른사람들이 쿼리를 하는데 에러를 표시하고 싶을 때
//사용자로그인 상황 로그인성공 : resolve, 실패 : reject


wait1seconds.then(()=>{
    console.log("프라미스 이행완료")
}).catch((err) => {
    console.log(err);
});
//그다음 resolve가 해당이 되고 ,then실행