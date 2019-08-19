const test = require("tape");
const request = require("supertest");
const app = require("../server");

//Fill this with many many tests YAY!! 😜😩
test("Check tape is working", t => {
  t.equal(1, 1, "One should be one");
  t.end();
});

test("Check /facsters route is being served", t => {
  request(app)
    .get("/facsters")
    .end((err, res) => {
      t.error(err);
      t.equal(res.statusCode, 200, "Home should return status code 200");
      t.end();
    });
});

test("Check /factsers/ request returns an HTML file", t => {
  request(app)
    .get('/factsers')
    .end((err, res) => {
      t.error(err)
      t.equal(res.headers['content-type'], 'text/html; charset=utf-8', "Check /factsers/:name request should return a JSON file")
      t.end()
    })
})
