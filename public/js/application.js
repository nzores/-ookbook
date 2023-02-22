// we will add this content, replace for anything you want to add
const more = '<div style="height: 1000px; background: #EEE;"></div>';

const wrapper = document.getElementsByClassName('card');
const content = document.getElementsByClassName('icon');
const test = document.getElementsByClassName('text');
content.innerHTML = more;

// cross browser addEvent, today you can safely use just addEventListener
function addEvent(obj, ev, fn) {
  if (obj.addEventListener) obj.addEventListener(ev, fn, false);
  else if (obj.attachEvent) obj.attachEvent(`on${ev}`, fn);
}

// this is the scroll event handler
function scroller() {
  // print relevant scroll info
  test.innerHTML = `${wrapper.scrollTop}+${wrapper.offsetHeight}+100>${content.offsetHeight}`;

  // add more contents if user scrolled down enough
  if (wrapper.scrollTop + wrapper.offsetHeight + 100 > content.offsetHeight) {
    content.innerHTML += more;
  }
}

// hook the scroll handler to scroll event
addEvent(wrapper, 'scroll', scroller);
