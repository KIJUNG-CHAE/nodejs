const p1= new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve({ p1_text : "p1's text"});
    }, 2000)
});
const p2= new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve({ p2_text : "p2's text"});
    }, 3000)
});

Promise.all([p1,p2]).then((result) => {
    console.log("p1 = " + result[0].p1_text);
    console.log("p1 = " + result[1].p2_text);
});
// promise all
// p1,p2객체를 배열로 생성해서 각 객체를 result index에 매칭
// p1 : result[0], p2 : result[1]
// chaining과 차이점 : 각각 분기점으로 나뉘어서 한꺼번에 처리 10초뒤에 콘솔로그 두개 다 실행

// p1.then((result1) => {
//     console.log("p1 = "+result1.p1_text);
//     return p2;
// }).then((result2)=>{
//     console.log("p2 = "+result2.p2_text);
// });

//method chaining