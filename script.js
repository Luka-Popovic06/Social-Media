'use strict';
import { domElements } from './dom.js';
import { loadDefaultFriends, loadDefaultPosts } from './initialData.js';
import { makePost, makeComment, texTame, prikaz } from './socialService.js';
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
console.log(texTame(new Date()));
const datum = new Date();

// Postavljanje svih parametara
datum.setFullYear(2025); // godina
datum.setMonth(7); // jul (meseci su 0–11)
//datum.setDate(20); // 20. dan u mesecu
datum.setHours(18); // 14h (2 popodne)//problem kad je d1 manji od d2
datum.setMinutes(30); // 30 minuta
datum.setSeconds(15); // 15 sekundi
datum.setMilliseconds(500);
prikaz(texTame(new Date()), texTame(datum));
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
    console.log(selectComment.getLikesArray());
    likesDisplay.textContent = `${selectComment.getLikesArray().length} likes`;
    selectComment.showLikesOnScrean(selectComment.getLikesArray());
    whoLikeBox.textContent = selectComment.getWhoLikeComment();
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
  const postItem = document.querySelectorAll('.post-item');
  postItem.forEach(function (post) {
    const createdDate = new Date();
    const stariDatum = post.getPostDate();
    const d1 = texTame(createdDate);
    const d2 = texTame(stariDatum);
  });
  const post = document.getElementById(newPost.getPostId());
  const dateParagraph = post.querySelector('.post-date');
  dateParagraph.textContent = createdDate;
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
//ubaci btn edit
//kad je post editovan neka mu pise edited
//formatiraj datume
