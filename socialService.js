import { domElements } from './dom.js';

//Time

//Friends
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
//Posts
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
                  <p class="text-edited hidden">Edited</p>
                </div>
                
                <button type="button" class="btn-edit"><svg class="icon-btn" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>
</button>
              </div>
              <div class="post-text-box">
              <p class="post-text">${text}</p>
              </div>
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
                <svg class="icon-btn"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
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
//Comments
export function makeComment(
  postId,
  id,
  img,
  firstName,
  lastName,
  comment,
  likesNumber,
  showLikesOnScrean
) {
  const postElement = document.getElementById(postId);
  const commentsList = postElement.querySelector('.comments-list');

  const html = ` <li class="comment-item " id=${id}>
                  <img
                    src="${img}"
                    alt="marc-andreas"
                    class="comment-img"
                  />
                  <div class="comment-info">
                    <p class="comment-owner">${firstName} ${lastName}</p>
                    <p class="comment-text">${comment}</p>
                    <div class="comment-actions">
                      <button type="button" class="like-btn_comment">❤️ Like</button>
                      <div class="comment-stats">
                        <p class="likes-count">${likesNumber} Likes</p>
                        <p class="whoLike hidden">${showLikesOnScrean}</p>
                      </div>
                    </div>
                  </div>
                </li>`;
  commentsList.insertAdjacentHTML('afterbegin', html);
}
//toggle
//editovanje komentara
