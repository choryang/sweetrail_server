const db = require("../models");
const Users = db.users;

let auth = (req, res, next) => {
  //인증 처리
  //클라이언트 쿠키에서 토큰 가져오기
  let token = req.cookies.x_auth;
  //토큰 복호화 한 후 유저 찾기
  Users.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });

    req.token = token;
    req.user = user;
    next(); //미들웨어에 갇히지 않고 넘겨주기 위해
  });
  //유저가 있으면 인증 ok
  //유저가 없으면 인증 no
};

module.exports = { auth };
