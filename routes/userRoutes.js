const express = require("express");
const router = express.Router();

const {
  addUser,
  updateUser,
  findAllUser,
  findOneUser,
  deleteUser,
  findByPK,
  findAndCountAll,
  countData,
  countnotdeleteddata,
  EqualToOperator,
  GreaterThenOperator,
  LessThenOperator,
  GreaterThenEqualOperator,
  LessThenEqualOperator,
  AndOperator,
  OrOperator,
  notEqualto,
} = require("../controllers/userController");

router.get("/", (req, res) => {
  res.send("Home page");
});

// ADD User
router.post("/add", addUser);

//2 UPDATE User
router.put("/updateUser/:id", updateUser);

//3 FIND ALL Users
router.get("/findAllUser", findAllUser);

//4. GET INDIVIDUAL User
router.get("/findOneUser/:id", findOneUser);

//5. DELETE User
router.delete("/softdelete/:id", deleteUser);

//7 GET User By KEY
router.get("/findByPK/:id", findByPK);

//8. FIND All users
router.get("/findAndCountAll/:gender", findAndCountAll);

//10. Count user
router.get("/count/:gender", countData);

//11. count not soft deleted data
router.get("/notdeletedsoftdata", countnotdeleteddata);

//Operators
//1. Equal to
router.get("/operatorequalto", EqualToOperator);

//2. Greter than
router.get("/operatorgreaterthan", GreaterThenOperator);

//3. Less than
router.get("/operatorlessthan", LessThenOperator);

//4. Greter than equal to
router.get("/operatorgreaterthanequalto", GreaterThenEqualOperator);

//5. Less than equal to
router.get("/operatorlessthanequalto", LessThenEqualOperator);

//6. And operator
router.get("/operatorAnd", AndOperator);

//7. Or operator
router.get("/operatorOr", OrOperator);

//8. Not equal to
router.get("/notequaltooperator", notEqualto);

module.exports = router;
