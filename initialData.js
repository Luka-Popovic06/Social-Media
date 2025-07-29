import {
  friendCreator,
  postCreator,
  commentCreator,
} from './socialCreators.js';
import { domElements } from './dom.js';
import { friends, user } from './input.js';

export function loadDefaultFriends(manager) {
  if (manager.getFriends().length > 0) return;
  const friendsArray = friends;
  friendsArray.forEach(function (friend) {
    const newFriend = friendCreator(friend.image, friend.alt, friend.name);
    manager.pushFriend(newFriend);
    makeFriend(
      newFriend.getImage(),
      newFriend.getAlternativText(),
      newFriend.getFriendName()
    );
  });
}
export function makeFriend(img, alt, name) {
  const html = `<li class="friend">
              <img
                src=${img}
                alt=${alt}
                class="friend-img"
              />
              <p class="friend-paragraph">${name}</p>
            </li>`;
  domElements.friendsList.insertAdjacentHTML('afterbegin', html);
}
//posts
export function loadDefaultPosts(manager) {
  if (manager.getPosts().length > 0) return;
  const userPost = user.posts;
  userPost.forEach(function (post) {
    const newPost = postCreator(post.text);
    newPost.pushLikes(post.likes);
    newPost.pushComments(post.comments); //?
    manager.pushPost(newPost);
    newPost.formatLikes(newPost.getLikes());
    makePost(
      newPost.getPostId(),
      newPost.getPostText(),
      newPost.getWhoLikePost(),
      newPost.getComments().length
    );
    loadDefaultComment(newPost.getComments());
  });
}
export function makePost(id, text, whoLike, commentsNumber) {
  const html = `<li class="post-item" id=${id}>
            <div class="post">
              <div class="post-owner-info">
                <img
                  src="IMG_6827-removebg-preview.jpg"
                  alt="luka-img"
                  class="img-post_owner"
                />
                <div class="name_date-box">
                  <p class="post-owner-name">Luka Popović</p>
                  <p class="post-date">about 1 year ago</p>
                </div>
              </div>
              <p class="post-text">
              ${text}
              </p>
              <div class="likes-comments-number">
                <div class="likes-box">
                  <p class="likes-paragraph">
                    ${whoLike}
                  </p>
                </div>
                <div class="comments-box">
                  <p class="comments-paragraph">
                    <span class="comments-number">${commentsNumber}</span> comments
                  </p>
                </div>
              </div>
            </div>
            <div class="post-btn">
              <button type="button" class="like-btn" id=${crypto.randomUUID()}>
                <svg
                  class="icon-btn"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    class="icon-btn"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                  />
                </svg>
                <p>Like</p>
              </button>
              <button type="button" class="comment-btn">
                <svg
                  class="icon-btn"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    class="icon-btn"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
                <p>Comment</p>
              </button>
            </div>
            <div class="add-comment">
              <img
                src="IMG_6827-removebg-preview.jpg"
                alt="luka-img"
                class="img-profile_small"
              />
              <form class="comment-form">
                <input
                  type="text"
                  placeholder="Write a comment"
                  class="write-comment-input"
                />
                <button type="submit" class="add-comment-btn">
                  Add comment
                </button>
              </form>
            </div>
            <div class="all-comment">
              <ul class="comments-list hidden" id=${crypto.randomUUID()}></ul>
            </div>
          </li>`;
  domElements.postsList.insertAdjacentHTML('afterbegin', html);
}

//Comment
export function loadDefaultComment(commentsArray) {
  commentsArray.forEach(comment => {
    const defaultComment = commentCreator(
      comment.image,
      comment.name,
      comment.commentText,
      comment.likesNumber
    );
    commentsArray.push(defaultComment);
    makeComment(
      defaultComment.getId(),
      defaultComment.getImage(),
      defaultComment.getName(),
      defaultComment.getText(),
      defaultComment.getLikesNumber()
    );
  });
}
