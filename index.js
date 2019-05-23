function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget(nested, target) {
  return document.querySelector( '#nested .target' )
};

function increaseRankBy(n) {
  let rankedList = document.querySelectorAll(.ranked-list);
  for (let i = 0; i < rankedList.length; i++) {
    let currentN = parseInt(rankedList[i]);
    let addN = parseInt(n);
    rankedList[i] = currentN + addN;
  }
};

for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + 1).toString();
}

function deepestChild() {

};
