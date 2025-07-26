import { friendCreator, postCreator } from './socialCreators.js';
import { domElements } from './dom.js';
import { friends, posts } from './input.js';

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

//posts
export function loadDefaultPosts(manager) {
  if (manager.getPosts().length > 0) return;
  const postsArray = posts;
  postsArray.forEach(function (post) {
    const newPost = postCreator(post.text, post.whoLike, post.commentsNumber);
    manager.pushPost(newPost);
    makePost(
      newPost.getPostId(),
      newPost.getPostText(),
      newPost.getWhoLikePost(),
      newPost.getPostCommentsNumber()
    );
  });
}
