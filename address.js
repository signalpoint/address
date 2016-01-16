dg.modules.address = new dg.Module();

// Let DrupalGap know we have a FieldFormatter(s).
dg.modules.address.FieldFormatter = {};

// Address default field formatter.
// Extend the FieldFormatter prototype for the address_default field.
dg.modules.address.FieldFormatter.address_default = function() { dg.FieldFormatterPrepare(this, arguments); };
dg.modules.address.FieldFormatter.address_default.prototype = new dg.FieldFormatter;
dg.modules.address.FieldFormatter.address_default.prototype.constructor = dg.modules.address.FieldFormatter.address_default;

dg.modules.address.FieldFormatter.address_default.prototype.viewElements = function(FieldItemListInterface, langcode) {
  var items = FieldItemListInterface.getItems();
  var element = {};
  if (items.length == 0) { return element; }
  for (var delta = 0; delta < items.length; delta++) {
    element[delta] = { _markup: '<div>address_default: ' + delta + '</div>' };
  }
  return element;
};