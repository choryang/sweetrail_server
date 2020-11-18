const db = require("../models");
const Users = db.users;

exports.register = (req, res) => {
  const user = {
    userName: req.body.name,
    email: req.body.email,
    password: req.body.password,
    lifeStyle: req.body.lifestyle,
    journeyType: req.body.journeytype,
  };

  Users.create(user)
    .then(() => {
      res.send({ registerSuccess: true });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });

  // Users.findOne({where: {userName: req.body.name}})
  //   .then((userInfo) => {
  //     if(userInfo !== undefined) {
  //       return res.json({
  //         registerSuccess: false,
  //         message: "이미 존재하는 이름입니다.",
  //       });
  //     } else {
  //       Users.create(user)
  //         .then(() => {
  //           res.send({ registerSuccess: true });
  //         })
  //         .catch((err) => {
  //           res.status(500).send({
  //             message: err.message || "Some error occurred while creating the User.",
  //           });
  //         });
  //     }
  //   })
  //   .catch((err) => {
  //     return res.status(400).send(err);
  //   });
};

exports.login = (req, res) => {
  //요청된 이메일을 데이터베이스에 있는지 찾는다
  Users.findOne({ where: { email: req.body.email } }).then((userInfo) => {
    if (userInfo === null) {
      return res.send({
        NoExistedUser: true
      });
    }
    else {
      userInfo.comparePassword(req.body.password, (err, isMatch) => {
        if (!isMatch) {
          return res.json({
            isLogin: false,
          });
        }
        else {
          userInfo.generateToken((err, tok) => {
            //토큰을 쿠키, 로컬스토리지, 아무튼 여러군데 저장 가능
            Users.update({ token: tok }, 
              { 
                where: { email: req.body.email }, 
              })
              .then(() => {
                res.cookie("x_auth", tok).status(200).json({
                  isLogin: true,
                });
              })
              .catch((err) => {
                return res.status(400).send(err);
              });
          });
        }
      });
    }
  })
  .catch((err) => {
    return res.json({
      loginSuccess: false,
      message: err.massage || "Some error occurred while logging in the User.",
    });
  });
};

exports.auth = (req, res) => {
  //여기까지 미들웨어를 통과해서 왔다 == Authentication이 true
  res.status(200).json({
    isAuth: true,
    userId: req.user.id,
    userName: req.user.userName,
    userImg: req.user.image,
    journeyType: req.user.journeyType,
    lifeStyle: req.user.lifeStyle,
  });
};

exports.logout = (req, res) => {
  //req.user는 미들웨어에서 넣어준 것

  Users.update({ token: "" }, { where: { id: req.user.id } })
    .then(() => {
      return res.status(200).send({ success: true });
    })
    .catch((err) => {
      return res.status(400).send(err);
    });
};

exports.profile = (req, res) => {
  if(req.file === undefined) {
    Users.update({image: "default"}, { where: {id: req.body.userId}})
    .then(() => {
      return res.send({userImg: "default"});
    })
    .catch((err) => {
      return res.status(400).send(err);
    })
  }
  else {
    Users.update({image: `static/profile/${req.file.filename}`}, 
    {
      where: {id: req.body.userId},
      returning: true,
      plain: true
    })
    .then((result) => {
      return res.send({userImg: result[0].image});
    })
    .catch((err) => {
      return res.status(400).send(err);
    })
  }
  
};

exports.getUserInfo = (req, res) => {
  Users.findByPk(req.params.id)
  .then((userInfo) => {
    return res.send({
      userId: userInfo.id,
      userImg: userInfo.image,
      userName: userInfo.userName,
      journeyType: userInfo.journeyType,
      lifeStyle: userInfo.lifeStyle
    });
  })
  .catch((err) => {
    return res.status(400).send(err);
  })

}
