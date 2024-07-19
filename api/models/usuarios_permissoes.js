'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class usuarios_permissoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Use models.permissoes ao invés de permissoes
      models.permissoes.belongsToMany(models.roles, {
        through: models.usuarios_permissoes,
        as: 'permissoes_do_usuario',
        foreignKey: 'permissao_id'
      });
      
      models.permissoes.belongsToMany(models.roles, {
        through: models.roles_permissoes,
        as: 'permissoes_das_roles',
        foreignKey: 'permissao_id'
      });
    }
  }

  usuarios_permissoes.init({
    usuario_id: DataTypes.UUID,
    permissao_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'usuarios_permissoes',
  });

  return usuarios_permissoes;
};
