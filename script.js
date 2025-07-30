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

domElements.postsList.addEventListener('click', function (e) {
  if (e.target.closest('.comments-paragraph')) {
    const li = e.target.closest('.post-item');
    const comment = li.querySelector('.comments-list');
    comment.classList.toggle('hidden');
  } else if (e.target.closest('.like-btn')) {
    const btn = e.target.closest('.like-btn');
    const selectBtn = document.getElementById(btn.id);
    selectBtn.style.backgroundColor = '#6063a0';
    selectBtn.style.color = '#fff';
    //
    const postS = selectBtn.closest('.post-item');
    manager.findPost(postS.id);
    const selectP = manager.getSelectPost();
    //
    selectP.pushLike('Luka Popović');
    console.log(selectP.getLikes());
  }
});
