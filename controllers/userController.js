var db = require("../models/index.js");
const sequelize = require("../models/users.js");
const Users = db.users;
const { Op } = require("sequelize");

// ADD_USER
exports.addUser = async (req, res) => {
  let data = await Users.create({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
  });

  res.status(200).json(data);
};

// UPDATE_USER
exports.updateUser = async (req, res) => {
  let data = await Users.update(
    {
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  let datas = await Users.findOne({
    where: { id: req.params.id },
  });
  res.status(200).json(data);
  res.status(200).json(datas);
};

// GET_USER
exports.findAllUser = async (req, res) => {
  let data = await Users.findAll();
  res.status(200).json(data);
};

// GET_BY_ID
exports.findOneUser = async (req, res) => {
  let datas = await Users.findOne({
    where: { id: req.params.id },
  });

  res.status(200).json(datas);
};

// DELETE_USER
exports.deleteUser = async (req, res) => {
  let p = req.params.id;
  if (p === null) {
    res.status(400).json("No data present");
  } else {
    let data = await Users.destroy({
      where: { id: req.params.id },
    });
  }
  res.json("Yes soft deleted data");
};

// GET_BY_ID
exports.findByPK = async (req, res) => {
  let pk = req.params.id;
  if (pk === null) {
    res.json("Invalid id");
  } else {
    let data = await Users.findByPk(pk);
    res.status(200).json(data);
  }
};

// GET_ALL_USER
exports.findAndCountAll = async (req, res) => {
  let { count } = await Users.findAndCountAll({
    where: { gender: req.params.gender },
  });
  res.json(count);
};

// COUNT_USER
exports.countData = async (req, res) => {
  let data = await Users.count({
    where: {
      gender: req.params.gender,
    },
  });
  res.json(data);
};

// COUNT_USER_NOTDELETEED
exports.countnotdeleteddata = async (req, res) => {
  let { count, rows } = await Users.findAndCountAll({
    where: {
      SoftDeleted: {
        [Op.eq]: null,
      },
    },
  });
  let response = {
    count: count,
    data: rows,
  };
  res.json(response);
};

//1. EQUAL_TO_OPERATOR
exports.EqualToOperator = async (req, res) => {
  let data = await Users.findAll({
    where: {
      gender: {
        [Op.eq]: "male",
      },
    },
  });
  res.json(data);
};

// GREATER_THEN_OPERATOR
exports.GreaterThenOperator = async (req, res) => {
  let data = await Users.findAll({
    where: {
      id: {
        [Op.gt]: 3,
      },
    },
  });
  res.json(data);
};

// LESS_THEN_OPERATOR
exports.LessThenOperator = async (req, res) => {
  let data = await Users.findAll({
    where: {
      id: {
        [Op.lt]: 3,
      },
    },
  });
  res.json(data);
};

// GREATER_THEN_EQUAL_TO_OPERATOR
exports.GreaterThenEqualOperator = async (req, res) => {
  let data = await Users.findAll({
    where: {
      id: {
        [Op.gte]: 3,
      },
    },
  });
  res.json(data);
};

// LESS_THEN_EQUAL_TO_OPERATOR
exports.LessThenEqualOperator = async (req, res) => {
  let data = await Users.findAll({
    where: {
      id: {
        [Op.lte]: 3,
      },
    },
  });
  res.json(data);
};

//6 AND_OPERATOR
exports.AndOperator = async (req, res) => {
  let data = await Users.findAll({
    where: {
      [Op.and]: {
        id: 5,
      },
      [Op.and]: {
        name: "vanni thakur",
      },
    },
  });
  res.json(data);
};

// OR_OPERATOR
exports.OrOperator = async (req, res) => {
  let data = await Users.findAll({
    where: {
      [Op.or]: {
        id: 4,
      },
      [Op.or]: {
        gender: "male",
      },
    },
  });
  res.json(data);
};

// NOT_EQUAL_TO
exports.notEqualto = async (req, res) => {
  let data = await Users.findAll({
    where: {
      gender: {
        [Op.ne]: "male",
      },
    },
  });
  res.json(data);
};
