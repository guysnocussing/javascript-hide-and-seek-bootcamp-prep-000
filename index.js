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
  // const nodeSelect = parseInt(lis[0].innerHTML);
  for (let i = 0; i < lis.length; i++) {
    let nodeSelect = parseInt(lis[i].innerHTML);
    lis[i].innerHTML += n;
  }
}
