function getFirstSelector(selector) {
  return document.querySelector(selector);
};

function nestedTarget(nested, target) {
  return document.querySelector( '#nested .target' )
};

function increaseRankBy(n) {
  let rankedList = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < rankedList.length; i++) {
    let children = rankedList[i].children;
    for (let j = 0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
  };
  };
};



function deepestChild() {
  let node = document.getElementById('grand-node');
  let childNode = node.children[0];
  while(childNode) {
    node = childNode;
    childNode = node.children[0];
  };
  return node;
};
