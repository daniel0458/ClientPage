
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* app.get('/api/customers', (req, res)=> {
   res.send({message: 'Hello Express!'}); 
}); */

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');
const parser = bodyParser.json();

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});
connection.connect();

const multer = require('multer');
const upload = multer({ dest: './upload' })


app.get('/api/customers', (req, res) => {
  connection.query(
    'select * from `show`',
    (err, rows, fields) => {
      res.send(rows);
      // res.send(err);
    }
  );
});

// app.post('/image',express.static('./upload'));

// app.post('/api/users',upload.single('wishlist'),(req,res) => {
//   let sql = 'select `wishlist` from user where `user_id` = ?';
//   let wishlist = '/image/' + req.file.filename;
//   let params =[wishlist];
//   connection.query(sql, params, 
//   (err.rows.fields) => {
//     res.send(rows)
//   }
//   )
// });

 app.get('/api/myshows',(req,res) => {
   connection.query(
     // "select show_title, start_date, end_date from showdb.show",
   'select ticketing_id,show_id, ticketing_date, refund_flag from `ticketing`',
    (err,rows,fields) => {
       res.send(rows);
    }
  )
 });

// app.get('api/passwords',(req,res) => {
//   connection.query(
//     "select *  from `user` where user_id =?  and password=?",
//     (err,rows,fields) => {
//       res.send(rows);
//     }
//   )
// });

app.get('/api/informations',(req,res) => {
  connection.query(
    'select * from `user` left outer join `exclude_show` on user.user_id = exclude_show.user_id',
    (err,rows,fields) => {
      res.send(rows);
    }
  )
});
// app.get('/api/ClientInformation',(req,res) => {
//   let sql = 'select `password` from `user` where `user_id`= ?'
//   let params = [test13];
//   connection.query(sql,(err,rows,fields) => {
//       res.send(rows);
//     }
//   );
// });

app.get('/api/ClientInformation',(req,res) => {
  connection.query(
  'select `password` from `user` where `user_id`= "test12"',
(err,rows,fields) => {
      res.send(rows);
    }
  );
});


app.get('/api/users',(req,res) => {
  connection.query(
    // "select show_title, start_date, end_date from showdb.show",
  'select * from `user`',
   (err,rows,fields) => {
      res.send(rows);
   }
 )
});
// app.post('/api/users',  (req, res) => {

//   let sql = 'update `user` set  `name`=? , `password`=? , `email`=?  where `user_id`= ?';
  
// //  let sql =  "update `user` AS A INNER JOIN `exclude_show` AS B 
// // ON A.`user_id` = B.`user_id`
// // set A.`name`= ? , A.`password`=? , A.`email`=? , A.`dislike_genre` = ? , B.`exclude_show` = ?
// // where A.`user_id` = B.`user_id`"
//   let user_id = req.body.user_id
  
//   let name = req.body.name;
  
//   let password = req.body.password;
  
//   let email = req.body.email;
  
//   // let dislike_genre = req.body. dislike_genre;
  
//   let params = [user_id, name, password, email];
  
//   connection.query(sql, params,
  
//   (err, rows, fields) => {
  
//   res.send(rows);
  
//   }
  
//   )
  
//   });

app.post('/api/QNAS',parser,(req,res)=>{
  let sql ="INSERT INTO `qna` (`QnA_id`,`QnA_title`, `QnA_content`, `user_id`, `QnA_date`, `QnA_views`) VALUES (?,?,?,?,?,?)";
    console.log("서버단입니다.")
    let QnA_id = req.body.QnA_id;
    let QnA_title = req.body.QnA_title;
    let QnA_content = req.body.QnA_content;
    let user_id = req.body.user_id;
    let QnA_date = req.body.QnA_date;
    let QnA_views = req.body.QnA_views;
    // console.log(QnA_id)
    // console.log(QnA_title)
    // console.log(QnA_content)
    console.log("**********************************************************")
    console.log(QnA_date)
    // console.log(QnA_views)
// console.log(rew);
// console.log(req.body);
  let params = [QnA_id, QnA_title, QnA_content, user_id, QnA_date, QnA_views];

  connection.query(sql,params,
    (err, rows, fields) => {
      res.send(rows);
      console.log(err);
      console.log(params);
    })
});

app.get('/api/QNAS',(req,res) => {
  connection.query(
    // "select show_title, start_date, end_date from showdb.show",
  // 'select * from `qna` order by `group_number` desc, `order` asc',
  'select `QnA_id`,  `QnA_title`, `QnA_content`, `user_id`, `QnA_date`, `QnA_views` from `qna`',
   (err,rows,fields) => {
      res.send(rows);
   }
 )
});
app.get('/api/QNAS',(req,res) => {
  connection.query(
    // "select show_title, start_date, end_date from showdb.show",
  // 'select * from `qna` order by `group_number` desc, `order` asc',
  'Update `qna` set `QnA_content` = ? where `QnA_id` = ?',
   (err,rows,fields) => {
      res.send(rows);
   }
 )
});
app.delete('/api/QNAS/:QnA_id',(req,res) => {
  console.log(req.params.QnA_id)
  let params = [req.params.QnA_id]
  connection.query(
  'delete from `qna` where `QnA_id` = ?',params,
   (err,rows,fields) => {
      res.send(rows);
   }
 )
});


// app.get('/api/QNAS',(req,res) => {
//   connection.query(
//     // "select show_title, start_date, end_date from showdb.show",
//   // 'select * from `qna` order by `group_number` desc, `order` asc',
//   'select `QnA_content` from `qna` where `QnA_id` = ? ',
//    (err,rows,fields) => {
//       res.send(rows);
//       console.log(res)
//    }
//  )
// });
app.get('/QNADetail/:QnA_id',(req,res,err) => {
  let sql =  'select `QnA_id`,  `QnA_title`, `QnA_content`, `user_id`, `QnA_date`, `QnA_views` from `qna` where `QnA_id` =?';
  let params = [req.params.QnA_id];
  console.log(params)
  connection.query(sql,params,(err,rows,fields) => {
    if(err){
      return res.send(err);
    }else{
      return res.send(rows);
    }
  })
});

// app.get('/api/QNASDetail',(req,res) => {
//   connection.query(
//     'select   `QnA_title`, `QnA_content`, `user_id`, `QnA_date`, `QnA_views` from `qna` where  QNA_id =?',
//    (err,rows,fields) => {
//       res.send(rows);
//    }
//  )
// });

// app.get('/api/QNAupdate',(req,res) => {
//   connection.query(
//     // "select show_title, start_date, end_date from showdb.show",
//   'UPDATE `qna` SET `group_number` = `group_number` +1  WHERE `order` = 2 AND `order` > 2',
//    (err,rows,fields) => {
//       res.send(rows);
//    }
//  )
// });
app.get('/api/myshowupdate',(req,res) => {
  console.log("서버단입니다.")
  console.log(user_id)
  connection.query(
    "update `ticketing` set  `refund_flag` = '환불완료' where `user_id` = 'test15'",
   (err,rows,fields) => {
      res.send(rows);
   }
  )
});


// app.update('/api/myshowupdate/:user_id',(req,res) => {
//  let sql ='update `ticketing` set  `refund_flag` = '환불완료' where `user_id` = ?';
//  let params = [req.params.user_id];
//   connection.query(sql. params,
//     (err, rows, fields) => {
//       res.send(rows);
//    }
//   )
// });

app.get('/api/myshowselect',(req,res) => {
  connection.query(
    'select `refund_flag` from `ticketing`',
   (err,rows,fields) => {
      res.send(rows);
   }
 )
});

app.get('/api/theater', (req,res) => {
  connection.query(
    "SELECT  `latitude`  , `longtitude`  FROM `theater` where `theater_id` = 1",
   (err,rows,fields) => {
      res.send(rows);
   }
 )
});
/* app.use('/image', express.static('./upload'));

app.post('/api/customers', upload.single('image'), (req, res) => {
  let sql = 'insert into customer values (null, ?,?,?,?,?,now(),0)';
  let image = '/image/' + req.file.filename;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;

  let params = [image, name, birthday, gender, job];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
      console.log(err);
      console.log(rows);
    }
  );
});

app.delete('/api/customers/:id',(req,res) => {
  let sql = 'update customer set isdeleted = 1 where id = ?';
  let params = [req.params.id];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    }
  )
});
 */
app.listen(port, () => console.log(`Listening on port ${port}`));
