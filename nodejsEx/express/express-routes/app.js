const express = require('express'); // nodejs에서 다른 패키지를 불러올 때  

const admin = require('./routes/admin');
const contacts = require('./routes/contacts');

const app = express(); //express함수의 변환값 저장
const port = 3000; // 포트넘버

app.get('/', (req,res) => {
    res.send('express start');
}); //함수의 인자를 함수로 받음, arrow function

app.use('/admin', admin) // admin이후는 앞에 선언된 admin을 참조하여라
app.use('/contacts', contacts)

app.listen( port, () => {
    console.log('Express listening on port', port); // 웹서버가동시 현재 사용중이 포트
});