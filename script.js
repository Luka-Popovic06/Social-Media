'use strict';
import { domElements } from './dom.js';
import {
  loadDefaultFriends,
  makeFriend,
  loadDefaultPosts,
  makePost,
} from './initialData.js';
import { friendCreator, socialManager, postCreator } from './socialCreators.js';

window.addEventListener('load', function () {
  setTimeout(function () {
    domElements.loader.classList.add('hidden');
    domElements.nav.classList.remove('hidden');
    domElements.main.classList.remove('hidden');
  }, 100);
});
const manager = socialManager();
loadDefaultFriends(manager);
loadDefaultPosts(manager);
//manager.getPosts().forEach(post => console.log(post.getCommentsArray()));
