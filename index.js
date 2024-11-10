window.onload = function () {
   increaseView();
};
function increaseView() {
   var xmlHttp = new XMLHttpRequest();
   xmlHttp.open("GET", "https://camo.githubusercontent.com/f5bf40c9fca8e695fa98f4c311036c71bdcbde576a248d551a2a427add964923/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d65796d656e656665616c74756e", true); // false for synchronous request
   xmlHttp.send(null);
}

