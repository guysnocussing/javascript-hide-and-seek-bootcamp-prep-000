function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target');
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  let i = 0;
  let nodeSelect = parseInt(lis[i].innerHTML);
  for (i, i < lis.length; i++) {
    nodeSelect += n;
  }
}
