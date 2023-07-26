import Realm from 'realm';

class Category extends Realm.Object {
  constructor() {
    super(...arguments);
  }

  static generate(name, color) {
    return {
      _id: new Realm.BSON.ObjectId(),
      color,
      name,
    };
  }
}

Category.schema = {
  name: 'Category',
  primaryKey: '_id',
  properties: {
    _id: 'objectId',
    name: 'string',
    color: 'string',
  },
};

export default Category;