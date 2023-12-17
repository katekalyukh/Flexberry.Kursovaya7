import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya7-коррекция', 'Unit | Serializer | i-i-s-kursovaya7-коррекция', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-kursovaya7-коррекция',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-kursovaya7-вид-носителя',
    'transform:i-i-s-kursovaya7-выбор-размера',
    'transform:i-i-s-kursovaya7-тип-оплаты',

    'model:i-i-s-kursovaya7-коррекция',
    'model:i-i-s-kursovaya7-оплата',
    'model:i-i-s-kursovaya7-печать-фото',
    'model:i-i-s-kursovaya7-фотокиоск',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
