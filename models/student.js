module.exports = function(sequelize,DataTypes){
	var child = sequelize.define("child",{
		latitude:{
			type:DataTypes.DECIMAL,
			allowNull:false
		},
		longitude:{
			type:DataTypes.DECIMAL,
			allowNull:false
		}
	});
	return child;
}