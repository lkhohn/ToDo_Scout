function moveUp(paymentSelect) {
  var selectionList = document.getElementById("paymentSelect");
  var selectionSpecific = selectionList.getElementsByTagName('option');
  // console.log(selectionSpecific);
  for (var i = 0; i < selectionSpecific.length; i++) {
    var opt = selectionSpecific[i];
    if (opt.selected) {
      selectionList.removeChild(opt);
      selectionList.insertBefore(opt, selectionSpecific[i - 1]);
    }
  }
}

function moveDown(paymentSelect) {
  var selectionList = document.getElementById("paymentSelect");
  var selectionSpecific = selectionList.getElementsByTagName('option');
  for (var i = selectionSpecific.length - 2; i >= 0; i--) {
    var opt = selectionSpecific[i];
    if (opt.selected) {
      var nextOpt = selectionSpecific[i + 1];
      opt = selectionList.removeChild(opt);
      nextOpt = selectionList.replaceChild(opt, nextOpt);
      selectionList.insertBefore(nextOpt, opt);
    }
  }
}
