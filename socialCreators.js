export function socialManager() {
  let friends = [];
  let posts = [];
  let post;
  //Friends
  const pushFriend = friend => friends.push(friend);
  const getFriends = () => friends;

  //Posts
  const pushPost = post => posts.push(post);
  const getPosts = () => posts;
  const findPost = id => {
    const selectPost = posts.find(p => p.getPostId() === id);
    post = selectPost;
  };
  const getSelectPost = () => post;

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
export function postCreator(text) {
  let postText = text;
  let id = crypto.randomUUID();
  let comments = [];
  let likes = [];
  let friends;

  const getPostId = () => id;
  const getPostText = () => postText;
  //Comment
  let comment;
  const findComment = id => {
    const selectComment = comments.find(comment => comment.getId() === id);
    comment = selectComment;
  };
  const getComments = () => comments;
  const pushComments = commentsArray => {
    commentsArray.forEach(comment => comments.push(comment));
  };
  const pushComment = comment => comments.push(comment);
  const getComment = () => comment;
  //const getCommentsArray = () => comments;
  //Likes
  const pushLike = like => likes.push(like);
  const pushLikes = likesArray => {
    likesArray.forEach(like => likes.push(like));
  };
  const getLikes = () => likes;
  const formatLikes = array => {
    if (array.length > 2) {
      const firstTwoNames = array
        .slice(0, 2)
        .map(person => person.name)
        .join(', ');
      const rest = array.length - 2;
      friends = `${firstTwoNames} and ${rest} others likes this post`;
    } else if ((array.length = 2)) {
      friends = `${array
        .map(person => person.name)
        .join('and ')} likes this post`;
    } else if ((array.length = 1)) {
      friends = `${array
        .map(person => person.name)
        .join(', ')} likes this post`;
    }
  };
  const getWhoLikePost = () => friends;

  return {
    pushComment,
    pushLike,
    formatLikes,
    getWhoLikePost,
    getComments,
    pushComments,
    getComment,
    findComment,
    getPostId,
    getPostText,
    getLikes,
    pushLikes,
  };
}

export function commentCreator(img, commentOwnerName, comment, likes) {
  let image = img;
  let name = commentOwnerName;
  let commentText = comment;
  let likesNumber = likes;
  let id = crypto.randomUUID();

  const setImage = ownerImg => (image = ownerImg);
  const setText = comment => (commentText = comment);
  const setLikesNumber = number => (likesNumber = number);
  const setName = newName => (name = newName);

  const getId = () => id;
  const getName = () => name;
  const getImage = () => image;
  const getText = () => commentText;
  const getLikesNumber = () => likesNumber;
  return {
    getId,
    setText,
    setImage,
    setLikesNumber,
    getText,
    getImage,
    getName,
    getLikesNumber,
    setName,
  };
}
