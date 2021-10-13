var checker = document.getElementById('checkme');
var sendbtn = document.getElementById('sendNewSms');
checker.onchange = function() {
  sendbtn.disabled = !!this.checked;
};