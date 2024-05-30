const express = require('express');   // 아까 설치한 라이브러리 참고해주세요
const app = express();  // 그 라이브러리로 새 객체 만들어 주세요
                        // 여기까지가 서버 띄우기 위한
app.listen(3108, function(){  // 기본 셋팅 (express 라이브러리)
                              // listen(서버띄울 포트 번호, 띄운 후 실행할 코드)
    console.log('listening on 3108') // 8080으로 들어오면 이거 출력
});         // 이제 여기서 localhost:8080 치면 접속 가   



/* ~~ 경로로 들어오면 ~~ 해줘  > get 요청 해보자
app.get('경로', function(요청, 응답){
    응답.send('출력출력');
});     */

app.get('/pet', function(req, res){
    res.send('펫 용품을 쇼핑할 수 있는 페이지입니다.');
});

// 참고로 변경사항 자동으로 변경 >>  npm install -g nodemon

//  /어쩌구로 접속 시 html 파일을 보내보자
app.get('/', function(req, res){         //  / 하나는 홈이라는 뜻
    res.sendfile(__dirname + '/index.html.')
});  // /에 접속했을 때 /index.html을 여기에 보내

app.get('/login', function(req, res){
    res.sendfile(__dirname + '/login.html');
});