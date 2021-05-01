module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "article",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      title: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },

      contents: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      createdDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: false,
    }
  );
};
