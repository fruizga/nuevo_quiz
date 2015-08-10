// Definición del modelo de Comment con validación

module.exports= function(sequelize, DataTypes) {
  return sequelize.define(
    'Comment',
    {texto: {
      type: DatvalidateaTypes.STRING,
      validate: { notEmpty: {msg:"-> Falta Comentario"}}
      }
    }
  );
}
