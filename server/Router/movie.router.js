const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM movies';
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT movie query', err);
      res.sendStatus(500);
    });
});

router.put('/:id', (req, res) => {
  let title=req.body.title
  let description=req.body.description
  let id=req.body.id
  
  const queryText = 
  `UPDATE "movies" 
SET "title"=$1,
 "description"=$2 
 WHERE "id"=$3`;
  pool.query(queryText, title, description, id )
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT movie query', err);
      res.sendStatus(500);
    });
});

router.put('/character/tag/:id', (req, res) => {
  let characterId = req.params.id;
  let tagId = req.body.tag_id;
  const sqlText = 'UPDATE "character" SET "tag_id"=$1 WHERE character.id=$2;'
  const values = [tagId, characterId];
  pool.query(sqlText, values)
    .then( (response) => {
      res.sendStatus(200);
    })
    .catch( (error) => {
      console.log(`Error updating tag`, error);
      res.sendStatus(500);
    })
 })
 
 

module.exports = router;