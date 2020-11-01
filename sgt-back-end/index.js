const pg = require('pg');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// when using pg package, create database connection (ONLY ONE pool for whole server)
const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

// -------------GET METHOD---------------
app.get('/api/grades', (req, res, next) => {
  const sql = `
    select "name",
           "course",
           "grade"
      from "grades"
  `;

  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

// -------------POST METHOD---------------
app.post('/api/grades', (req, res, next) => {
  const gradeInfo = parseInt(req.body.grade, 10);

  if (!gradeInfo) {
    res.status(400).json({ error: 'Must insert a grade' });
  } else if (!Number.isInteger(gradeInfo)) {
    res.status(400).json({ error: 'Grade must be a positive integer' });
  } else if (!req.body.name) {
    res.status(400).json({ error: 'Must insert a name' });
  } else if (!req.body.course) {
    res.status(400).json({ error: 'Must insert a course name' });
  }

  const sql = `
    insert into "grades" (name, course, grade)
    values ($1, $2, $3)
    returning "gradeId", "name", "course", "grade"
  `;

  const values = [req.body.name, req.body.course, req.body.grade];

  db.query(sql, values)
    .then(result => res.status(201).json(result.rows[0]))
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

// -------------PUT METHOD---------------
app.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    return res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
  }

  const selectSql = `
    select "grade"
      from "grades"
      where "gradeId" = $1
  `;

  const selectValues = [req.params.gradeId];

  db.query(selectSql, selectValues)
    .then(result => {
      if (result.rowCount === 0) {
        return res.status(404).json({ error: `"gradeId" ${gradeId} does not exist in the database` });
      }

      const sql = `
        update "grades"
          set "grade" = $1
          where "gradeId" = $2
          returning "gradeId", "name", "course", "grade"
        `;

      const values = [req.body.grade, req.params.gradeId];

      db.query(sql, values)
        .then(result => res.status(200).json(result.rows[0]))
        .catch(err => {
          console.error(err);
          res.status(500).json({ error: 'An unexpected error occurred.' });
        });
    });
});

// -------------DELETE METHOD---------------
app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    return res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
  }

  const selectSql = `
    select "grade"
      from "grades"
      where "gradeId" = $1
  `;

  const selectValues = [req.params.gradeId];

  db.query(selectSql, selectValues)
    .then(result => {
      if (result.rowCount === 0) {
        return res.status(404).json({ error: `"gradeId" ${gradeId} does not exist in the database` });
      }

      const sql = `
        delete from "grades"
          where "gradeId" = $1
        `;

      const values = [req.params.gradeId];

      db.query(sql, values)
        .then(result => res.status(200).json())
        .catch(err => {
          console.error(err);
          res.status(500).json({ error: 'An unexpected error occurred.' });
        });
    });

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on 3000');
});
