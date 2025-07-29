export const friends = [
  {
    image: 'marc-andreas.jpg',
    alt: 'Marc Andreas img',
    name: 'Marc Andreas',
  },
  {
    image: 'profile5.jpg',
    alt: 'Ethan Turner img',
    name: 'Ethan Turner',
  },
  {
    image: 'profile4.jpg',
    alt: 'Majda Odzaklijevska img',
    name: 'Majda Odzaklijevska',
  },
  {
    image: 'profile3.jpg',
    alt: 'Kilibarda Petrovska img',
    name: 'Kilibarda Petrovska',
  },
  {
    image: 'profile2.jpg',
    alt: 'Hiroshi Tanaka img',
    name: 'Hiroshi Tanaka',
  },
  {
    image: 'profile1.jpg',
    alt: 'Gordana Stouns img',
    name: 'Gordana Stouns',
  },
];
////
export const user = {
  posts: [
    {
      //id,
      text: "If I'm to choose between one evil and another, I'd rather not choose at all.",
      likes: [
        {
          name: 'Kilibarda Petrovska',
        },
        {
          name: 'Hiroshi Tanaka',
        },
        {
          name: 'Gordana Stouns',
        },
        {
          name: 'Marc Andreas',
        },
      ],
      comments: [
        {
          image: 'profile4.jpg',
          name: 'Majda Odzaklijevska',
          commentText:
            "Makes me ponder on the importance of staying true to one's moral compass.",
          likesNumber: '3',
        },
        {
          image: 'profile5.jpg',
          name: 'Ethan Turner',
          commentText:
            "It's a reminder that sometimes the best option is to stay true to your principles, even if the choices seem challenging.",
          likesNumber: '0',
        },
        {
          image: 'marc-andreas.jpg',
          name: 'Marc Andreas',
          commentText:
            'Choosing between evils can be a dilemma, but your stance adds a layer of wisdom to it.',
          likesNumber: '1',
        },
        {
          image: 'profile1.jpg',
          name: 'Gordana Stouns',
          commentText:
            "Sometimes the choices we face are so tough, it's almost like navigating through shades of gray.",
          likesNumber: '6',
        },
      ],
    },
    {
      //id,
      text: "It's not who I am underneath, but what I do that defines me.",
      likes: [
        {
          name: 'Ethan Turner',
        },
      ],
      comments: [],
    },
    {
      //id,
      text: "A true hero isn't measured by the size of his strength but by the strength of his heart",
      likes: [
        {
          name: 'Gordana Stouns ',
        },
        {
          name: 'Hiroshi Tanaka',
        },
      ],
      comments: [
        {
          image: 'profile2.jpg',
          name: 'Hiroshi Tanaka',
          commentText:
            "Sometimes, it's the small gestures that make someone a hero",
          likesNumber: '0',
        },
        {
          image: 'marc-andreas.jpg',
          name: 'Marc Andreas',
          commentText: 'Absolutely love this quote!',
          likesNumber: '5',
        },
        {
          image: 'profile1.jpg',
          name: 'Gordana Stouns',
          commentText:
            "Wow, this is so profound and inspiring! Couldn't agree more.",
          likesNumber: '2',
        },
      ],
    },
  ],
};
