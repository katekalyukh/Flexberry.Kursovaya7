import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ВыборРазмераEnum from '../enums/i-i-s-kursovaya7-выбор-размера';

export default FlexberryEnum.extend({
  enum: ВыборРазмераEnum,
  sourceType: 'IIS.Kursovaya7.ВыборРазмера'
});
