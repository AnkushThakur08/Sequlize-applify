module.exports = (sequelize, DataType) => {
  const Users = sequelize.define(
    "users",
    {
      name: DataType.STRING,
      email: DataType.STRING,
      gender: DataType.STRING,
      isdeleted:{
          type: DataType.INTEGER,
          defaultValue: 0
      } 
    },
    {
      paranoid: true,
      deletedAt: {
        type: DataType.INTEGER,
        defaultValue: 0,
      },
      deletedAt: "SoftDeleted",
    }
  );
  return Users;
};
