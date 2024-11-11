window.onload = function () {
   increaseView();
};
function increaseView() {
   var xmlHttp = new XMLHttpRequest();
   xmlHttp.open("GET", "https://camo.githubusercontent.com/723e010e0873b7f9aa45047fb94073594cc81fae6ceb1aa93aac49dd5d6723b8/68747470733a2f2f6b6f6d617265762e636f6d2f67687076632f3f757365726e616d653d7461726f74323132", true); // false for synchronous request
   xmlHttp.send(null);
}

