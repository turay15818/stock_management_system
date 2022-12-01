const request = require ('request');
const router = require ('./routes/UserRoute');

describe('Users Api', ()=>{

  it('GET /Users ---> Users', async() => {
    return request(router).get('/users').expect('content-Type', /json/).expect(200)
  })


  it('GET /UsersById --->Get users by id Users', () => {})


  it('POST /Users ---> Should be able to create Users', () => {})


  it('PATCH /Users ---> Should be able to update users in the database', () => {})


  it('DELETE /Users ---> Should be able to to return 404 if a user is not found in the database', () => {})



  it('GET /Users ---> Should be able to delete users within the database', () => {})
})




// export default appTest;