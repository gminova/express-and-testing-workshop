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

test("Check /factsers/ request returns an object", t => {
  request(app)
    .get('/factsers')
    .end((err, res) => {
      t.error(err)
      t.deepEquals(typeof res.body, 'object', "Check /factsers/:name request should return a JSON file")
      t.end()
    })
})

test("Check we are getting Bart name back", t=> {
    request(app)
    .get("/facsters/Bart")
    .expect(200)
    .end((err, res) =>{
        t.error(err),
        t.deepEqual(res.body, [ { cohort: 11, firstname: 'Bart', id: 5, surname: 'Bucknill' } ]);
      t.end();
    })

})
