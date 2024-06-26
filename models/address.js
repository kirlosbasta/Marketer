const { Model, DataTypes } = require('sequelize');
const storage = require('../config/database.js');

class Address extends Model {
  /**
   * convert Address Model to json format
   *
   * @returns (json) Json format of the file
   */
  toJSON () {
    const json = super.toJSON();
    json.model = 'Address';
    return json;
  }

  /**
   * Stringify json
   * @returns (string) Json string of the object
   */
  toString () {
    return JSON.stringify(this.toJSON(), null, 2);
  }
}

Address.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    country: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    zipCode: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    street: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    houseNumber: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    floor: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phoneNumber: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        is: {
          args: /^\+[0-9]{6,14}$/,
          msg: 'Phone number must be in the format +1234567890'
        }
      }
    },
    additionalPhoneNumber: {
      type: DataTypes.STRING(20),
      allowNull: true,
      validate: {
        is: {
          args: /^\+[0-9]{6,14}$/,
          msg: 'Phone number must be in the format +1234567890'
        }
      }
    }
  },
  {
    sequelize: storage.db,
    modelName: 'address'
  });

module.exports = Address;
