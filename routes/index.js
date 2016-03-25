var express = require('express');
var path = require('path');
var pg = require('pg');
var router = express.Router();
var conString = require(path.join(__dirname, '..', 'db/config')).conString;

module.exports = router.get('/teas', (req, res, next) =>{
  pg.connect(conString, (err, client, done) =>{
    if (err) {
      done();
      return {
        success: false,
        data: err
      };
    }
    var query, results = {result_count: 0, data: []};
    query = client.query("SELECT * FROM teas");

    query.on('row', row =>{
      results.data.push(row);
    });
    query.on('error', () =>{

    });
    query.on('end', result =>{
      done();
      results.result_count = result.rowCount;
      res.json(results);
    });
  });
});

