'use strict';
import { domElements } from './dom.js';
import { loadDefaultFriends, loadDefaultPosts } from './initialData.js';
import { makePost, makeComment } from './socialService.js';
import {
  socialManager,
  postCreator,
  commentCreator,
} from './socialCreators.js';
import { userName, postText } from './input.js';

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

domElements.postsList.addEventListener('click', function (e) {
  if (e.target.closest('.comments-paragraph')) {
    const li = e.target.closest('.post-item');
    const comment = li.querySelector('.comments-list');
    comment.classList.toggle('hidden');
    //post likes
  } else if (e.target.closest('.like-btn')) {
    const btn = e.target.closest('.like-btn');
    const selectBtn = document.getElementById(btn.id);
    const postElement = btn.closest('.post-item');
    const post = selectBtn.closest('.post-item');
    manager.findPost(post.id);
    const selectedPost = manager.getSelectPost();
    const selectIcon = selectBtn.querySelector('.icon-btn');

    if (
      selectedPost
        .getLikes()
        .find(
          like =>
            like.firstName === userName.firstName &&
            like.lastName === userName.lastName
        )
    ) {
      selectIcon.style.color = '#3c42e0';
      selectedPost.getLikes().pop();
    } else {
      selectIcon.style.color = '#ff6347';
      selectedPost.getLikes().push(userName.likesArray[0]);
    }
    selectedPost.formatLikes(selectedPost.getLikes());
    console.log(selectedPost.getLikes());
    const likesParagraph = postElement.querySelector('.likes-paragraph');
    likesParagraph.textContent = selectedPost.getWhoLikePost();
    //comment likes
  } 