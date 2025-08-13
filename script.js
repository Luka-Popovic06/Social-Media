'use strict';
import { domElements } from './dom.js';
import { loadDefaultFriends, loadDefaultPosts } from './initialData.js';
import {
  makePost,
  makeComment,
  extractDateParts,
  formatTimeAgo,
  editMode,
  createFriendElement,
  startCommentEditMode,
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
      selectIcon.style.color = '#fff';
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
      likeBtn.innerHTML = '';
      const html = `<svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>`;
      likeBtn.insertAdjacentHTML('afterbegin', html);
      selectComment.getLikesArray().pop();
    } else {
      likeBtn.innerHTML = '';
      const html = `<svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
</svg>
`;
      likeBtn.insertAdjacentHTML('afterbegin', html);
      selectComment.getLikesArray().push(userName.likesArray[0]);
    }
    const likesDisplay = commentElement.querySelector('.likes-count');
    const whoLikeBox = commentElement.querySelector('.whoLike');
    likesDisplay.textContent = `${selectComment.getLikesArray().length} likes`;
    selectComment.showLikesOnScrean(selectComment.getLikesArray());
    whoLikeBox.textContent = selectComment.getWhoLikeComment();
    likesDisplay.addEventListener('mouseenter', function () {
      if (selectComment.getLikesArray().length > 0) {
        whoLikeBox.classList.remove('hidden');
      }
    });
    likesDisplay.addEventListener('mouseleave', function () {
      whoLikeBox.classList.add('hidden');
    });
  } else if (e.target.closest('.btn-edit')) {
    const editBtn = e.target.closest('.btn-edit');
    const postElement = editBtn.closest('.post-item');
    const post = postElement.id;
    manager.findPost(post);
    const selectedPost = manager.getSelectPost();
    editMode(selectedPost);
  } else if (e.target.closest('.comment_btn_edit')) {
    const editBtn = e.target.closest('.comment_btn_edit');
    const postElement = editBtn.closest('.post-item');
    const comment = editBtn.closest('.comment-item');
    const post = postElement.id;
    manager.findPost(post);
    const selectedPost = manager.getSelectPost();
    selectedPost.findComment(comment.id);
    const selectedComment = selectedPost.getComment();
    startCommentEditMode(comment.id, selectedComment);
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
  const like = comment.querySelector('.likes-count');
  const peopleWhoLike = comment.querySelector('.whoLike');
  like.addEventListener('mouseenter', function () {
    if (newComment.getLikesArray().length > 0) {
      peopleWhoLike.classList.remove('hidden');
    }
  });
  like.addEventListener('mouseleave', function () {
    peopleWhoLike.classList.add('hidden');
  });
});

domElements.findFriends.addEventListener('input', function (e) {
  let text = e.target.value;
  const allFriends = manager.getFriends();
  const filteredFriends = allFriends.filter(friend =>
    friend.getFriendName().toLowerCase().includes(text.toLowerCase())
  );
  domElements.searchFriends.innerHTML = '';
  if (!text) return;
  filteredFriends.forEach(function (friend) {
    createFriendElement(
      friend.getImage(),
      friend.getAlternativText(),
      friend.getFriendName()
    );
  });
});

//time
function updateAllPostTimes() {
  const allPosts = manager.getPosts();
  const currentTime = new Date();

  allPosts.forEach(post => {
    const d1 = extractDateParts(currentTime);
    const d2 = extractDateParts(post.getPostDate());
    const text = formatTimeAgo(d1, d2);

    const domPost = document.getElementById(post.getPostId());
    const dateElement = domPost.querySelector('.post-date');
    if (dateElement) dateElement.textContent = text;
  });
}
