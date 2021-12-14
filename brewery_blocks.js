Blockly.JavaScript['recipe_block'] = function(block) {
  var text_recipe = block.getFieldValue('RECIPE');
  var number_name = block.getFieldValue('NAME');
  var statements_ingridients = Blockly.JavaScript.statementToCode(block, 'INGRIDIENTS');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['farmfood'] = function(block) {
  var dropdown_ingredients = block.getFieldValue('Ingredients');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['meat'] = function(block) {
  var dropdown_ingredients = block.getFieldValue('Ingredients');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['fish'] = function(block) {
  var dropdown_ingredients = block.getFieldValue('Ingredients');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['gold'] = function(block) {
  var dropdown_ingredients = block.getFieldValue('Ingredients');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['soup'] = function(block) {
  var dropdown_ingredients = block.getFieldValue('Ingredients');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['miscellaneous'] = function(block) {
  var dropdown_ingredients = block.getFieldValue('Ingredients');
  // TODO: Assemble JavaScript into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['add'] = function(block) {
  var number_amount = block.getFieldValue('AMOUNT');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['distill'] = function(block) {
  var number_runs = block.getFieldValue('RUNS');
  var number_time = block.getFieldValue('TIME');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['alcoholamount'] = function(block) {
  var number_alcohol = block.getFieldValue('ALCOHOL');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['difficulty'] = function(block) {
  var number_difficulty = block.getFieldValue('DIFFICULTY');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};

Blockly.JavaScript['color'] = function(block) {
  var colour_color = block.getFieldValue('color');
  // TODO: Assemble JavaScript into code variable.
  var code = '...;\n';
  return code;
};