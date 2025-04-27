import { loadLogin, loadRegister } from '../concepts/login/components/login.js';

function router() {
  const hash = window.location.hash;

  switch (hash) {
    case '#register':
      loadRegister();
      break;
    case '#login':
    default:
      loadLogin();
      break;
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);
