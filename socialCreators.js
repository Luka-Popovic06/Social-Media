export function socialManager() {
  let friends = [];
  let posts = [];
  const pushFriend = friend => friends.push(friend);
  const getFriends = () => friends;

  const pushPost = post => posts.push(post);
  const getPosts = () => posts;
  return {
    pushFriend,
    getFriends,
    pushPost,
    getPosts,
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

  const setPostCommentsNumber = number => (postCommentsNumber = number);
  const getComments = () => comments;
  const getPostId = () => id;
  const getPostText = () => postText;
  const getWhoLikePost = () => whoLikePost;
  const getPostCommentsNumber = () => postCommentsNumber;
  return {
    getComments,
    getPostId,
    getPostCommentsNumber,
    getPostText,
    getWhoLikePost,
    setPostCommentsNumber,
  };
}
