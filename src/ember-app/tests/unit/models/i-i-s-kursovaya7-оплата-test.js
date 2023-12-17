import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-kursovaya7-оплата', 'Unit | Model | i-i-s-kursovaya7-оплата', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
