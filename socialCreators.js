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
export function postCreator(text, date) {
  let postText = text;
  let id = crypto.randomUUID();
  let comments = [];
  let likes = [];
  let postDate = date;
  let friends;

  const setPostText = newText => (postText = newText);
  const getPostId = () => id;
  const getPostText = () => postText;
  const getPostDate = () => postDate;

  //Comments
  let comment;
  const pushComments = commentsArray => {
    commentsArray.forEach(comment => {
      const defaultComment = commentCreator(
        comment.image,
        comment.firstName,
        comment.lastName,
        comment.commentText,
        comment.likesArray
      );
      defaultComment.pushLikes(defaultComment.getLikesArray());
      defaultComment.showLikesOnScrean(defaultComment.getLikesArray());
      comments.push(defaultComment);
    });
  };
  const pushComment = comment => comments.push(comment);
  const findComment = id => {
    const selectComment = comments.find(comment => comment.getId() === id);
    comment = selectComment;
  };
  const getComment = () => comment;
  const getComments = () => comments;

  //Likes
  const pushLikes = likesArray => {
    likesArray.forEach(like => likes.push(like));
  };
  const getLikes = () => likes;
  const formatLikes = array => {
    if (array.length > 2) {
      const firstTwoNames = array
        .slice(0, 2)
        .map(l => `${l.firstName} ${l.lastName}`)
        .join(', ');
      const rest = array.length - 2;
      friends = `${firstTwoNames} and ${rest} others likes this post`;
    } else if (array.length === 2) {
      friends = `${array
        .map(l => `${l.firstName} ${l.lastName}`)
        .join(', ')} likes this post`;
    } else if (array.length === 1) {
      friends = `${array
        .map(l => `${l.firstName} ${l.lastName}`)
        .join(', ')} likes this post`;
    } else if (array.length === 0) {
      friends = '';
    }
  };
  const getWhoLikePost = () => friends;

  return {
    pushComment,
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
    getPostDate,
    setPostText,
  };
}

export function commentCreator(
  img,
  commentOwnerFirstName,
  commentOwnerLastName,
  comment,
  likes
) {
  let image = img;
  let firstName = commentOwnerFirstName;
  let lastName = commentOwnerLastName;
  let commentText = comment;
  let arrayOfLikes = likes;
  let likesOnComments = [];
  let id = crypto.randomUUID();
  let friends;

  const getId = () => id;
  const getFirstName = () => firstName;
  const getLastName = () => lastName;
  const getImage = () => image;
  const getText = () => commentText;
  const getLikesArray = () => arrayOfLikes;
  const pushLike = like => likesOnComments.push(like);
  const pushLikes = likesArray => {
    likesArray.forEach(like => likesOnComments.push(like));
  };
  const showLikesOnScrean = array => {
    friends = array.map(l => `${l.firstName} ${l.lastName}`).join(', ');
  };
  const getWhoLikeComment = () => friends;
  return {
    pushLike,
    pushLikes,
    getId,
    getText,
    getImage,
    getFirstName,
    getLastName,
    getLikesArray,
    showLikesOnScrean,
    getWhoLikeComment,
  };
}
