const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});
connection.connect();

//const multer = require('multer');
//const upload = multer({ dest: './upload' })


app.get('/api/showRecommend', (req, res) => {
  connection.query(
    'select * from `show` where show_id=1',
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});

app.get('/api/showAll', (req, res) => {
  connection.query(
    'select * from `show`',
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});

app.get('/api/showselected', (req, res) => {
  connection.query(
    'select * from `show` where show_id=?',
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});
//  app.use('/image', express.static('./upload'));

app.post('/api/showAll',(req, res) => {
  let sql = 'select * from show where show_id = ?)';
  let show_id = req.body3.show_id;
  let params = [show_id];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
      console.log(err);
      console.log(rows);
    }
  );
});

/*app.delete('/api/customers/:id',(req,res) => {
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
