'use strict';
import { domElements } from './dom.js';
import { loadDefaultFriends, loadDefaultPosts } from './initialData.js';
import {
  makePost,
  makeComment,
  extractDateParts,
  formatTimeAgo,
  editMode,
} from './socialService.js';
import {
  socialManager,
  postCreator,
  commentCreator,
} from './socialCreators.js';
import { userName, postText } from './input.js';
const manager = socialManager();
window.addEventListener('load', function () {
  setTimeout(function () {
    domElements.loader.classList.add('hidden');
    domElements.nav.classList.remove('hidden');
    domElements.main.classList.remove('hidden');
  }, 100);
  setInterval(updateAllPostTimes, 60 * 1000);
});

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
    const likesParagraph = postElement.querySelector('.likes-paragraph');
    likesParagraph.textContent = selectedPost.getWhoLikePost();
    //comment likes
  } else if (e.target.closest('.like-btn_comment')) {
    const likeBtn = e.target.closest('.like-btn_comment');
    const commentElement = likeBtn.closest('.comment-item');
    const commentId = commentElement.id;

    const postElement = likeBtn.closest('.post-item');
    const post = postElement.id;
    manager.findPost(post);
    const selectedPost = manager.getSelectPost();
    selectedPost.findComment(commentId);
    const selectComment = selectedPost.getComment();
    if (
      selectComment
        .getLikesArray()
        .find(
          like =>
            like.firstName === userName.firstName &&
            like.lastName === userName.lastName
        )
    ) {
      likeBtn.style.backgroundColor = '#fff';
      selectComment.getLikesArray().pop();
    } else {
      likeBtn.style.backgroundColor = '#6063a0';
      selectComment.getLikesArray().push(userName.likesArray[0]);
    }
    const likesDisplay = commentElement.querySelector('.likes-count');
    const whoLikeBox = commentElement.querySelector('.whoLike');
    likesDisplay.textContent = `${selectComment.getLikesArray().length} likes`;
    selectComment.showLikesOnScrean(selectComment.getLikesArray());
    whoLikeBox.textContent = selectComment.getWhoLikeComment();
  } else if (e.target.closest('.btn-edit')) {
    const editBtn = e.target.closest('.btn-edit');
    const postElement = editBtn.closest('.post-item');
    const post = postElement.id;
    manager.findPost(post);
    const selectedPost = manager.getSelectPost();
    editMode(selectedPost);
  }
});

domElements.postSubmitBtn.addEventListener('click', function () {
  domElements.postForm.reset();
});

domElements.postForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const newPost = postCreator(postText, new Date());
  manager.pushPost(newPost);
  newPost.formatLikes(newPost.getLikes());
  makePost(
    newPost.getPostId(),
    newPost.getPostText(),
    newPost.getWhoLikePost(),
    newPost.getComments().length
  );
  updateAllPostTimes();
});

//Dodavanje komentara
domElements.postsList.addEventListener('submit', function (e) {
  if (!e.target.classList.contains('comment-form')) return;

  e.preventDefault();

  const form = e.target.closest('.comment-form');
  console.log(form);
  const input = form.querySelector('.write-comment-input');
  const commentText = input.value;
  if (!commentText) return;
  const postElement = form.closest('.post-item');
  const postId = postElement.id;

  manager.findPost(postId);
  const selectedPost = manager.getSelectPost();

  const newComment = commentCreator(
    userName.image,
    userName.firstName,
    userName.lastName,
    commentText,
    []
  );
  selectedPost.pushComment(newComment);
  makeComment(
    postId,
    newComment.getId(),
    newComment.getImage(),
    newComment.getFirstName(),
    newComment.getLastName(),
    newComment.getText(),
    newComment.getLikesArray().length,
    newComment.getWhoLikeComment()
  );
  const commentNumber = postElement.querySelector('.comments-number');
  commentNumber.textContent = selectedPost.getComments().length;
  input.value = '';
  const li = e.target.closest('.post-item');
  const comment = li.querySelector('.comments-list');
  comment.classList.remove('hidden');
});
//time
