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
  console.log(document.querySelector('.ranked-list').querySelectorAll('li'));
  return n;
}
