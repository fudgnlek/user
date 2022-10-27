module.exports = function(app){
    const index = require("../controllers/indexController");
    const jwtMiddleware = require("../../config/jwtMiddleware");

    //라우터 정의
    //app.HTTP메소드(uri, 컨트롤러 콜백함수)
    app.get("/user/signup", index.output.signup);
    app.get("/user/login",index.output.login);
    app.get("/user/main",index.output.main);
    app.get("/user/pharmacy", index.pharmacy);
    app.get("/user/getmap", index.hospital);
    app.get("/user/reservation", index.reservation);
     //로그인 유지, 토큰 검증
    app.get("/user/jwt", jwtMiddleware, index.readJwtU);
    //app.get("/jwt",function(){"Hi"});

    //로그인
    app.post("/user/login",index.process.createJwtU);
    //회원가입 
    app.post("/user/signup",index.process.signup);
    app.post("/user/gethosIdx",index.process.getHosIdx);
    app.post("/user/reservation",index.process.reservation);
    //예약
    //app.post("/reservation",index.process.reservation);
    app.post("/getResInfo", index.getResInfo);
   
    //유저조회
    app.get("/users", index.readUsers);

    
    
   };
