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
  } else if (e.target.closest('.like-btn')) {
    const btn = e.target.closest('.like-btn');
    const selectBtn = document.getElementById(btn.id);
    const postElement = btn.closest('.post-item');
    const post = selectBtn.closest('.post-item');
    manager.findPost(post.id);
    const selectedPost = manager.getSelectPost();
    const selectIcon = selectBtn.querySelector('.icon-btn');

    if (selectedPost.getLikes().find(like => like.name === userName.name)) {
      selectIcon.style.color = '#3c42e0';
      selectedPost.getLikes().pop();
    } else {
      selectIcon.style.color = '#ff6347';
      selectedPost.pushLike(userName);
    }
    selectedPost.formatLikes(selectedPost.getLikes());
    const likesParagraph = postElement.querySelector('.likes-paragraph');
    likesParagraph.textContent = selectedPost.getWhoLikePost();
  } else if (e.target.closest('.like-btn_comment')) {
    const likeBtn = e.target.closest('.like-btn_comment');
    const commentElement = likeBtn.closest('.comment-item');
    const commentId = commentElement.id;
    const postElement = likeBtn.closest('.post-item');
    const postId = postElement.id;

    manager.findPost(postId);
    const selectedPost = manager.getSelectPost();
    selectedPost.findComment(commentId);
    const comment = selectedPost.getComment();
    console.log(comment);
    const oldLikes = comment.getLikesNumber();
    comment.setLikesNumber(oldLikes + 1);

    const likesDisplay = commentElement.querySelector('.likes-count');
    likesDisplay.textContent = comment.getLikesNumber();
  }
});

domElements.postSubmitBtn.addEventListener('click', function () {
  domElements.postForm.reset();
});

domElements.postForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const createdDate = new Date();

  const newPost = postCreator(postText);
  manager.pushPost(newPost);
  newPost.formatLikes(newPost.getLikes());
  makePost(
    newPost.getPostId(),
    newPost.getPostText(),
    newPost.getWhoLikePost(),
    newPost.getComments().length
  );
  const post = document.getElementById(newPost.getPostId());
  const dateParagraph = post.querySelector('.post-date');
  dateParagraph.textContent = timeAgo(createdDate);
});

//Dodavanje komentara
domElements.postsList.addEventListener('submit', function (e) {
  if (!e.target.classList.contains('comment-form')) return;

  e.preventDefault();

  const form = e.target;
  const input = form.querySelector('.write-comment-input');
  const commentText = input.value;
  if (!commentText) return;
  const postElement = form.closest('.post-item');
  const postId = postElement.id;

  manager.findPost(postId);
  const selectedPost = manager.getSelectPost();

  const newComment = commentCreator(
    userName.image,
    userName.name,
    commentText,
    userName.likesNumber
  );
  selectedPost.pushComment(newComment);
  makeComment(
    postId,
    newComment.getId(),
    newComment.getImage(),
    newComment.getName(),
    newComment.getText(),
    newComment.getLikesNumber()
  );
  const commentNumber = postElement.querySelector('.comments-number');
  commentNumber.textContent = selectedPost.getComments().length;
  input.value = '';
  const li = e.target.closest('.post-item');
  const comment = li.querySelector('.comments-list');
  comment.classList.remove('hidden');
});
