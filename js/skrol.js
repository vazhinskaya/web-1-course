(function(){  
var a = document.querySelector('.h1'), b = null; 
window.addEventListener('scroll', Ascroll, false);
function Ascroll() {
  if (b == null) {  
    var Sa = getComputedStyle(a, ''), s = '';
    for (var i = 0; i < Sa.length; i++) {  
      if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
      }
    }
    b = document.createElement('div');  
    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
    a.insertBefore(b, a.firstChild);  
    var l = a.childNodes.length;
    for (var i = 1; i < l; i++) {  
      b.appendChild(a.childNodes[1]);
    }
  }
  if (a.getBoundingClientRect().top <= 0) { 
    b.className = 'sticky';
  } else {
    b.className = '';
  }
}
})()