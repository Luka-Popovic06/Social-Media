import {
  friendCreator,
  postCreator,
  commentCreator,
} from './socialCreators.js';
import { makeComment, makeFriend, makePost } from './socialService.js';
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

//posts
export function loadDefaultPosts(manager) {
  if (manager.getPosts().length > 0) return;
  const userPost = user.posts;
  userPost.forEach(function (post) {
    const newPost = postCreator(post.text);
    //console.log(post.date);
    newPost.pushLikes(post.likes);
    newPost.pushComments(post.comments); //?
    manager.pushPost(newPost);
    newPost.formatLikes(newPost.getLikes());
    makePost(
      newPost.getPostId(),
      //newPost.getDate(),
      newPost.getPostText(),
      newPost.getWhoLikePost(),
      newPost.getComments().length
    );
    //console.log(newPost.getDate());
    loadDefaultComment(newPost.getComments(), newPost.getPostId());
  });
}

//Comment
export function loadDefaultComment(commentsArray, PostId) {
  commentsArray.forEach(comment => {
    const defaultComment = commentCreator(
      comment.image,
      comment.name,
      comment.commentText,
      comment.likesNumber
    );
    makeComment(
      PostId,
      defaultComment.getId(),
      defaultComment.getImage(),
      defaultComment.getName(),
      defaultComment.getText(),
      defaultComment.getLikesNumber()
    );
  });
}
