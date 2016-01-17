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
    element[delta] = {
      _type: 'address',
      _address: items[delta]
    };
  }
  return element;
};

dg.theme_address = function(vars) {
  var address = vars._address;
  var function_name = 'theme_address_' + address.country_code.toLowerCase();
  if (dg[function_name]) { return dg[function_name](vars); }
  var html = '';
  if (address.address_line1) { html += address.address_line1 + '<br />'; }
  if (address.address_line2) { html += address.address_line2 + '<br />'; }
  if (address.administrative_area) { html += address.administrative_area + '<br />'; }
  if (address.country_code) { html += address.country_code + '<br />'; }
  if (address.dependent_locality) { html += address.dependent_locality + '<br />'; }
  if (address.locality) { html += address.locality + '<br />'; }
  if (address.organization) { html += address.organization + '<br />'; }
  if (address.postal_code) { html += address.postal_code + '<br />'; }
  if (address.recipient) { html += address.recipient + '<br />'; }
  if (address.sorting_code) { html += address.sorting_code + '<br />'; }
  return html;
};

dg.theme_address_us = function(vars) {
  var address = vars._address;
  var html = '';
  if (address.organization) { html += address.organization + '<br />'; }
  if (address.recipient) { html += address.recipient + '<br />'; }
  if (address.address_line1) { html += address.address_line1 + '<br />'; }
  if (address.address_line2) { html += address.address_line2 + '<br />'; }
  if (address.locality) { html += address.locality + ', '; }
  if (address.dependent_locality) { html += address.dependent_locality + ', '; }
  if (address.administrative_area) {
    html += address.administrative_area.replace('US-', '') + ' ';
  }
  if (address.postal_code) { html += address.postal_code + ''; }
  if (address.sorting_code) { html += '<br />' + address.sorting_code; }
  return html;
};
