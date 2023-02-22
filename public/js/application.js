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
const message = document.createElement('p');
const navbar = document.getElementById('navbar');

const registerButton = document.getElementById('regBtn');

const entryModalWindow = document.querySelector('#modalOne');
const regModalWindow = document.querySelector('#modalTwo');

const modalWin = document.querySelector('#modalWin');
const closeButton = document.querySelectorAll('.close');

const regButton = document.getElementById('registerForm');
const loginButton = document.getElementById('loginBtn');

const formReg = document.forms.signup;
const formLogin = document.forms.login;

const logindiv = document.getElementById('logindiv');
const signupdiv = document.getElementById('signupdiv');

navbar?.addEventListener('click', async (e) => {
  if (e.target.id === 'entryBtn') {
    entryModalWindow.style.display = 'block';
  }
  if (e.target.id === 'regBtn') {
    regModalWindow.style.display = 'block';
  }
  if (e.target.id === 'homeBtn') {
    window.location = '/';
  }
  if (e.target.id === 'exitBtn') {
    await fetch('/auth/signout');
    window.location = '/';
  }
  if (e.target.id === 'privateBtn') {
    await fetch('/user/:id');
  }
});

modalWin?.addEventListener('click', async (e) => {
  // console.log(1111)
  if (e.target === regModalWindow || e.target === closeButton[0]) {
    regModalWindow.style.display = 'none';
  }
  if (e.target === entryModalWindow || e.target === closeButton[1]) {
    entryModalWindow.style.display = 'none';
  }
  if (e.target === regButton) {
    e.preventDefault();
    message.innerText = '';
    const formData = Object.fromEntries(new FormData(formReg));
    try {
      const reg = await fetch('/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (reg.status !== 200) {
        const data = await reg.json();
        message.innerText = data.error;
        signupdiv.appendChild(message);
      } else {
        reg.json();
        window.location = '/';
      }
    } catch (error) {
      console.error(error);
    }
  }
  if (e.target === loginButton) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(formLogin));

    try {
      const login = await fetch('/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const dataerr = await login;
      if (login.status !== 200) {
        message.innerText = dataerr.err;
        logindiv.appendChild(message);
      } else {
        window.location = '/';
      }
    } catch (err) {
      console.error(err);
    }
  }
});
