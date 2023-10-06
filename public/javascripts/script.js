const btns = document.querySelectorAll('.nav-link');

btns.forEach((elem) => {
  if (elem.pathname === location.pathname) {
    elem.className = elem.className + " active"
  }
})
