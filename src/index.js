import { dropDownMenu } from './dropdown';
const Index = (() => {
  // const showContent = (co, contentItems) => {
  //   const content = [];
  // };
  const loadPage = () => {
    dropDownMenu.renderMenu('items', 'dropdown');
    dropDownMenu.renderMenu('another', 'dropdownTwo');
  };
  return {
    loadPage,
  };
})();
export { Index };
Index.loadPage();
