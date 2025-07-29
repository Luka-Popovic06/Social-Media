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
