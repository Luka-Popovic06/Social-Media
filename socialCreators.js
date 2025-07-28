export function socialManager() {
  let friends = [];
  let posts = [];
  let post;
  const pushFriend = friend => friends.push(friend);
  const getFriends = () => friends;
  function findPost(id) {
    const selectPost = posts.find(p => p.getPostId() === id);
    post = selectPost;
  }

  const getSelectPost = () => post;

  const pushPost = post => posts.push(post);
  const getPosts = () => posts;
  return {
    pushFriend,
    getFriends,
    pushPost,
    getPosts,
    findPost,
    getSelectPost,
  };
}

export function friendCreator(img, alt, name) {
  let image = img;
  let alternativText = alt;
  let friendName = name;
  const getImage = () => image;
  const getAlternativText = () => alternativText;
  const getFriendName = () => friendName;
  return {
    getImage,
    getAlternativText,
    getFriendName,
  };
}
//posts
export function postCreator(text, like, commentsNumber) {
  let postText = text;
  let whoLikePost = like;
  let postCommentsNumber = commentsNumber;
  let id = crypto.randomUUID();
  let comments = [];
  let comment;
  function findComment(id) {
    const selectComment = comments.find(comment => comment.getId() === id);
    comment = selectComment;
  }

  const setPostCommentsNumber = number => (postCommentsNumber = number);
  const getCommentsArray = () => comments;
  const getPostId = () => id;
  const getPostText = () => postText;
  const getWhoLikePost = () => whoLikePost;
  const getPostCommentsNumber = () => postCommentsNumber;
  return {
    findComment,
    getCommentsArray,
    getPostId,
    getPostCommentsNumber,
    getPostText,
    getWhoLikePost,
    setPostCommentsNumber,
  };
}
export function commentCreator(img, name, comment, likes) {
  let image = img;
  let commentOwnerName = name;
  let commentText = comment;
  let likesNumber = likes;
  let id = crypto.randomUUID();

  const setImage = ownerImg => (image = ownerImg);
  const setComment = comment => (commentText = comment);
  const setLikesNumber = number => (likesNumber = number);
  const setName = name => (commentOwnerName = name);

  const getId = () => id;
  const getName = () => commentOwnerName;
  const getImage = () => image;
  const getComment = () => commentText;
  const getLikesNumber = () => likesNumber;
  return {
    getId,
    setComment,
    setImage,
    setLikesNumber,
    getComment,
    getImage,
    getName,
    getLikesNumber,
    setName,
  };
}
