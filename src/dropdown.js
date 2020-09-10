const dropDownMenu = (() => {
  let menuStatus = 'closed';

  const hiddenMenu = (container) => {
    for (let i = 0; i < container.length; i++) {
      container[i].style.display = 'none';
    }
  };

  const showMenu = (container) => {
    for (let i = 0; i < container.length; i++) {
      container[i].style.display = 'block';
    }
  };

  const menuOption = (status, container) => {
    switch (status) {
      case 'closed':
        showMenu(container);
        menuStatus = 'open';
        break;
      case 'open':
        hiddenMenu(container);
        menuStatus = 'closed';
    }
  };

  const setMenuButton = (button, itemsContainer) => {
    button[0].addEventListener(
      'click',
      function () {
        menuOption(menuStatus, itemsContainer);
        console.log('button work');
      },
      false
    );
  };

  const renderMenu = (itemClass, buttonClass) => {
    const itemsContainer = document.getElementsByClassName(itemClass);
    hiddenMenu(itemsContainer);
    const menuButton = document.getElementsByClassName(buttonClass);
    setMenuButton(menuButton, itemsContainer);
  };

  return { setMenuButton, renderMenu };
})();
export { dropDownMenu };
