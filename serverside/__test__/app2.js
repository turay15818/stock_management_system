
const app = require("./index");
const supertest = require("supertest");
const request = supertest(app);

// jest.setTimeout(100000)


describe('login user', ()=>{

  describe('given', ()=>{

      const jsonBody = {
          email:"info@turaymusa.com",
          password:"Sunshine@2022"
      }
      const jsonBodyWrong = {
          email:"nfo@turaymusa.com",
          password:"unshine@2022"
      }
      it('should return 200 status and login the user' , async ()=>{
      const {statusCode, body} =  await supertest(app).post(`/login`).send(jsonBody);
          expect(statusCode).toBe(200)
          
      })
      
      describe('given wrong details in login ', ()=>{
          it('should return 404 status and says User not found' , async ()=>{
              const {statusCode, body} =  await supertest(app).post(`/login`).send(jsonBodyWrong);
                  expect(statusCode).toBe(404)
                  expect(body.msg).toBe("User not found")
              })
      })
  })  
})


describe('get user', ()=>{


})






// describe("Login Api", () => {
//   it("Should login admin", async () => {
//     const res = await request.post("/login")
//     .send({
//         "email": "info@turaymusa.com",
//         "password": "Sunshine@2022"
//     });
//     expect(res.statusCode).toEqual(200);
//   });
// });


// password Reset Link
// describe("Reset Password", () => {
//   it("Should login admin", async () => {
//     const res = await request.post("/resetPasswordEmail")
//     .send({
//         "email": "info@turaymusa.com"
//     });
//     expect(res.statusCode).toEqual(201);
//   });
// });

//Create Users
// describe("Users Api", () => {
//   it("Should register a user", async () => {
//     const res = await request.post("/users")
//     .send({
//       "staffid": "15818AAAAAATuray",
//         "name": "Nfa Turay Mannnnnn",
//         "email": "example@gmail.com.com",
//         "department": "computer Science",
//         "staffStatus": "New",
//         "role": "admin",
//         "password": "qqqqqq",
//         "confPassword": "qqqqqq"
//     });
//     expect(res.statusCode).toEqual(201);
//   });
// });


// Should be able to update users 
// describe("Users Api", () => {
//   it("Should Update A User", async () => {
//     const res = await request.patch("/users/266")
//     .send({
//       "staffid": "15818AAAAAATuray",
//         "name": "Nfa Turay Manchester United",
//         "email": "example@gmail.com.com",
//         "department": "computer Science",
//         "staffStatus": "New",
//         "role": "admin",
//         "password": "11111111",
//         "confPassword": "11111111"
//     });
//     expect(res.statusCode).toEqual(200);
//   });
// });



// describe("GET Users Api", () => {
//   it("Should get all user", async () => {
//     const res = await request.get("/users")
//     expect(res.statusCode).toEqual(200);
//   });
// });


// describe("GET Users By Id Api", () => {
//   it("Should get all user", async () => {
//     const res = await request.get("/users/:id-2")
//     expect(res.statusCode).toEqual(200);
//   });
// });


// 
// describe("Should Delete user", () => {
//   it("Should Delete User", async () => {
//     const res = await request.delete("/users/263")
//     expect(res.statusCode).toEqual(200);
//   });
// });




//Request Route Start Here;

// describe("GET Request Api", () => {
//   it("Should get all Approved", async () => {
//     const res = await request.get("/request")
//     expect(res.statusCode).toEqual(200);
//   });
// });


// should get  request By Manager Approved
describe("GET Request Api", () => {
  it("Should get all Request", async () => {
    const res = await request.get("/managerRequest")
    expect(res.statusCode).toEqual(200);
  });
});

//Should Get request By Director Approved
describe("GET Request Api", () => {
  it("Should get all Request", async () => {
    const res = await request.get("/requestByDirectorApproved")
    expect(res.statusCode).toEqual(200);
  });
});





//Should Get request By Admin
describe("GET Request Api", () => {
  it("Should get all Admin Request", async () => {
    const res = await request.get("/adminRequest")
    expect(res.statusCode).toEqual(200);
  });
});




//Should Get request By Pending for users
describe("GET Request Api", () => {
  it("Should get all Request Pending for users", async () => {
    const res = await request.get("/pendingRequest")
    expect(res.statusCode).toEqual(200);
  });
});



//Should Get request pending for Director
describe("GET Request Api", () => {
  it("Should get all Request pending for director", async () => {
    const res = await request.get("/requestDirectorPending")
    expect(res.statusCode).toEqual(200);
  });
});




//Should Get request By Director Approved
describe("GET Request Api", () => {
  it("Should get all Request", async () => {
    const res = await request.get("/requestByDirectorApproved")
    expect(res.statusCode).toEqual(200);
  });
});



//Should Get request By Director Approved
describe("GET Request Api", () => {
  it("Should get all Request", async () => {
    const res = await request.get("/requestByDirectorApproved")
    expect(res.statusCode).toEqual(200);
  });
});




//Should Get request By Director Approved
describe("GET Request Api", () => {
  it("Should get all Request", async () => {
    const res = await request.get("/requestByDirectorApproved")
    expect(res.statusCode).toEqual(200);
  });
});




//Should Get request By Director Approved
describe("GET Request Api", () => {
  it("Should get all Request", async () => {
    const res = await request.get("/requestByDirectorApproved")
    expect(res.statusCode).toEqual(200);
  });
});




//Should Get request By Director Approved
describe("GET Request Api", () => {
  it("Should get all Request", async () => {
    const res = await request.get("/requestByDirectorApproved")
    expect(res.statusCode).toEqual(200);
  });
});





//Should Get requestRejected Request List
describe("GET Request Api", () => {
  it("Should get all Rejected Request", async () => {
    const res = await request.get("/rejectedRequest")
    expect(res.statusCode).toEqual(200);
  });
});




//Should Get request By Both Approved
describe("GET Request Api", () => {
  it("Should get request by both manage and director approved", async () => {
    const res = await request.get("/requestByBothApproved")
    expect(res.statusCode).toEqual(200);
  });
});






































// describe("GET Users By Id Api", () => {
//   it("Should get all user", async () => {
//     const res = await request.get("/request/:id-2")
//     expect(res.statusCode).toEqual(200);
//   });
// });
