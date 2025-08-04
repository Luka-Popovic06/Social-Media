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
  //let postDate = date;

  const getPostId = () => id;
  const getPostText = () => postText;
  //const setDate = newDate => (postDate = newDate);
  //const getDate = () => postDate;

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
      //console.log(defaultComment.getLikesArray());
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
  //ja pusham comment bez id

  //Likes
  const pushLike = like => {
    likes.push(like);
    formatLikes(likes);
  };
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
    } else if (array.length === 2) {
      friends = `${array
        .map(person => person.name)
        .join(', ')} likes this post`;
    } else if (array.length === 1) {
      friends = `${array
        .map(person => person.name)
        .join(', ')} likes this post`;
    } else if (array.length === 0) {
      friends = '';
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
    //setDate,
    //getDate,
  };
}
