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
  const nodeSelect = parseInt(lis[0].innerHTML);
  console.log(typeof nodeSelect);
  // for (let i = 0; i < lis.length; i++) {
  //   lis[i].innerHTML = n;
  // }
}
