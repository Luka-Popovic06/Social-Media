import { domElements } from './dom.js';

export let postText;
domElements.postInput.addEventListener('input', function (e) {
  postText = e.target.value;
});
