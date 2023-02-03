const navContainer = document.querySelector('.menu-sample__menu');

navContainer.addEventListener('click', (e) => {
  const subMenuList = document.querySelectorAll('.menu-sample__sub-menu-list');
  const target = e.target;

  if (target.className === 'menu-sample__menu-item') {
    target.children[0].classList.toggle('active-sub-menu');
    subMenuList.forEach(subMenuItem => {
      if (subMenuItem !== target.children[0]) {
        subMenuItem.classList.remove('active-sub-menu');
      }
    })
  } else if (target.className === 'menu-sample__sub-menu-item') {
    alert(target.textContent);
  }
})
