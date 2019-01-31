const test = QUnit.test;


test('if random number less than 0.5, return heads', function(assert){
    const result = headsTails(0.3);
    assert.equal(result, 'heads');
});
test('if random number greater than or equal to 0.5 return tails', function(assert) {
    const result = headsTails(0.7);
    assert.equal(result, 'tails');
});

