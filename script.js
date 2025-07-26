'use strict';
import { domElements } from './dom.js';
import {
  loadDefaultFriends,
  makeFriend,
  loadDefaultPosts,
  makePost,
} from './initialData.js';
import { friendCreator, socialManager } from './socialCreators.js';
window.addEventListener('load', function () {
  setTimeout(function () {
    domElements.loader.classList.add('hidden');
    domElements.nav.classList.remove('hidden');
    domElements.main.classList.remove('hidden');
  }, 2000);
});
