Blockly.JavaScript['recipe'] = function(block) {
  var brew_name = block.getFieldValue('Name');
  var brew_id = brew_name.toLowerCase()
  var number_alcohol = block.getFieldValue('Alcohol');
  var number_difficulty = block.getFieldValue('Difficulty');
  var text_bad = block.getFieldValue('Bad');
  var text_normal = block.getFieldValue('Normal');
  var text_good = block.getFieldValue('Good');
  var colour_potion = block.getFieldValue('Potion');
  var statements_process = Blockly.JavaScript.statementToCode(block, 'Process');
  // TODO: Assemble JavaScript into code variable.
  var code = `${brew_id}:
  name: ${text_bad}/${text_normal}/${text_good}
  ingredients:
  ${statements_process}
  color: ${colour_potion}
  difficulty: ${number_difficulty}
  alcohol: ${number_alcohol}`;
  return code;
};

Blockly.JavaScript['cook'] = function(block) {
  var number_time = block.getFieldValue('Time');
  var statements_ingredients = Blockly.JavaScript.statementToCode(block, 'Ingredients');
  // TODO: Assemble JavaScript into code variable.
  var code = `${statements_ingredients}
  cookingtime: ${number_time}`;
  return code;
};

Blockly.JavaScript['ingredient'] = function(block) {
  var number_amount = block.getFieldValue('Amount');
  var value_ingredient = Blockly.JavaScript.valueToCode(block, 'Ingredient', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  if (number_amount == 1) {
  var code = ` - ${value_ingredient}`;
} else {
  var code = ` - ${value_ingredient}/${number_amount}`
}
  return code;
};

Blockly.JavaScript['distill'] = function(block) {
  var number_runs = block.getFieldValue('Runs');
  var number_time = block.getFieldValue('Time');
  // TODO: Assemble JavaScript into code variable.
  var code = `distillruns:${number_runs}
  distilltime:${number_time}`;
  return code;
};

Blockly.JavaScript['gold'] = function(block) {
  var dropdown_ingredient = block.getFieldValue('Ingredient');
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_ingredient}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['meat'] = function(block) {
  var dropdown_ingredient = block.getFieldValue('Ingredient');
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_ingredient}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['natural'] = function(block) {
  var dropdown_ingredient = block.getFieldValue('Ingredient');
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_ingredient}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['bowl_food'] = function(block) {
  var dropdown_ingredient = block.getFieldValue('Ingredient');
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_ingredient}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['sweets'] = function(block) {
  var dropdown_ingredient = block.getFieldValue('Ingredient');
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_ingredient}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['fish'] = function(block) {
  var dropdown_ingredient = block.getFieldValue('Ingredient');
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_ingredient}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['herbs'] = function(block) {
  var dropdown_ingredient = block.getFieldValue('Ingredient');
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_ingredient}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['dusts'] = function(block) {
  var dropdown_ingredient = block.getFieldValue('Ingredient');
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_ingredient}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['miscellaneous'] = function(block) {
  var dropdown_ingredient = block.getFieldValue('Ingredient');
  // TODO: Assemble JavaScript into code variable.
  var code = `${dropdown_ingredient}`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};