import { Model, DataTypes } from 'sequelize';
import { storage } from '../config/database.js';

export default class Product extends Model {
  /**
   * convert Product Model to json format
   *
   * @returns (json) Json format of the file
   */
  toJSON() {
    const json = super.toJSON();
    json.model = 'Product';
    return json;
  }

  /**
   * Stringify json
   * @returns (string) Json string of the object
   */
  toString() {
    return JSON.stringify(this.toJSON(), null, 2);
  }
}

Product.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  sequelize: storage.db,
  modelName: 'product',
});
