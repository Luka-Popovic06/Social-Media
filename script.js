'use strict';
import { domElements } from './dom.js';
import { loadDefaultFriends, loadDefaultPosts } from './initialData.js';
import { friendCreator, socialManager, postCreator } from './socialCreators.js';
import { userName } from './input.js';
import { updatePost } from './socialService.js';
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
    //selektovanje elemenata
    const btn = e.target.closest('.like-btn');
    const selectBtn = document.getElementById(btn.id);
    const postElement = btn.closest('.post-item');
    //Nalazenje odredjenog posta i uzimanje njegovog id
    const post = selectBtn.closest('.post-item');
    manager.findPost(post.id);
    const selectedPost = manager.getSelectPost(); //imam odredjeni post
    const selectIcon = selectBtn.querySelector('.icon-btn');

    if (selectedPost.getLikes().find(like => like.name === userName.name)) {
      selectIcon.style.color = '#3c42e0';
      selectedPost.getLikes().pop();
    } else {
      selectIcon.style.color = '#ff6347';
      selectedPost.pushLike(userName);
    }
    //Opet proispitujem koliko ima lajkova i formatiram ih
    selectedPost.formatLikes(selectedPost.getLikes());
    //nalazenje likes paragrafa i njegovo abdejtovanje
    const likesParagraph = postElement.querySelector('.likes-paragraph');
    likesParagraph.textContent = selectedPost.getWhoLikePost();
    console.log(selectedPost.getLikes().some(likes => likes === userName));
  }
});
