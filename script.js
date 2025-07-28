'use strict';
import { domElements } from './dom.js';
import {
  loadDefaultFriends,
  makeFriend,
  loadDefaultPosts,
  makePost,
  loadDefaultComment,
} from './initialData.js';
import { friendCreator, socialManager, postCreator } from './socialCreators.js';
import { comments } from './input.js';
window.addEventListener('load', function () {
  setTimeout(function () {
    domElements.loader.classList.add('hidden');
    domElements.nav.classList.remove('hidden');
    domElements.main.classList.remove('hidden');
  }, 100);
});
loadDefaultFriends(socialManager());
loadDefaultPosts(socialManager());
const manager = socialManager();
domElements.postsList.addEventListener('click', function (e) {
  if (e.target.closest('.comments-paragraph')) {
    const li = e.target.closest('.post-item');
    const comment = li.querySelector('.comments-list');
    comment.classList.toggle('hidden');
  }
});
