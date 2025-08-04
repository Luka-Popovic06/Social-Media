import { domElements } from './dom.js';

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
//export let year = new Date(Date.now() - 1000 * 60 * 60 * 24 * 365);
export const user = {
  posts: [
    {
      //id,
      //date: year,
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
          //id: crypto.randomUUID(),
          image: 'profile4.jpg',
          firstName: 'Majda',
          lastName: 'Odzaklijevska',
          commentText:
            "Makes me ponder on the importance of staying true to one's moral compass.",
          likesArray: [
            {
              firstName: 'Majda',
              lastName: 'Odzaklijevska',
            },
            {
              firstName: 'Ethan',
              lastName: 'Turner',
            },
            {
              firstName: 'Marc',
              lastName: 'Andreas',
            },
          ], //prava 3 imena
        },
        {
          //id: crypto.randomUUID(),
          image: 'profile5.jpg',
          firstName: 'Ethan',
          lastName: 'Turner',
          commentText:
            "It's a reminder that sometimes the best option is to stay true to your principles, even if the choices seem challenging.",
          likesArray: [],
        },
        {
          //id: crypto.randomUUID(),
          image: 'marc-andreas.jpg',
          firstName: 'Marc',
          lastName: 'Andreas',
          commentText:
            'Choosing between evils can be a dilemma, but your stance adds a layer of wisdom to it.',
          likesArray: [
            {
              firstName: 'Marc',
              lastName: 'Andreas',
            },
          ],
        },
        {
          //id: crypto.randomUUID(),
          image: 'profile1.jpg',
          firstName: 'Gordana',
          lastName: 'Stouns',
          commentText:
            "Sometimes the choices we face are so tough, it's almost like navigating through shades of gray.",
          likesArray: [
            {
              firstName: 'Majda',
              lastName: 'Odzaklijevska',
            },
            {
              firstName: 'Ethan',
              lastName: 'Turner',
            },
            {
              firstName: 'Marc',
              lastName: 'Andreas',
            },
            {
              firstName: 'Gordana',
              lastName: 'Stouns',
            },
          ],
        },
      ],
    },
    {
      //id,
      //date: year,
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
      //date: year,
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
          //id: crypto.randomUUID(),
          image: 'profile2.jpg',
          firstName: 'Hiroshi',
          lastName: 'Tanaka',
          commentText:
            "Sometimes, it's the small gestures that make someone a hero",
          likesArray: [],
        },
        {
          //id: crypto.randomUUID(),
          image: 'marc-andreas.jpg',
          firstName: 'Marc',
          lastName: 'Andreas',
          commentText: 'Absolutely love this quote!',
          likesArray: [
            {
              firstName: 'Majda',
              lastName: 'Odzaklijevska',
            },
            {
              firstName: 'Ethan',
              lastName: 'Turner',
            },
            {
              firstName: 'Marc',
              lastName: 'Andreas',
            },
            {
              firstName: 'Gordana',
              lastName: 'Stouns',
            },
          ],
        },
        {
          //id: crypto.randomUUID(),
          image: 'profile1.jpg',
          firstName: 'Gordana',
          lastName: 'Stouns',
          commentText:
            "Wow, this is so profound and inspiring! Couldn't agree more.",
          likesArray: [
            {
              firstName: 'Majda',
              lastName: 'Odzaklijevska',
            },
            {
              firstName: 'Ethan',
              lastName: 'Turner',
            },
          ],
        },
      ],
    },
  ],
};
export const userName = {
  name: 'Luka Popović',
  firstName: 'Luka',
  lastName: 'Popović',
  image: 'IMG_6827-removebg-preview.jpg',
  likesArray: [
    {
      firstName: 'Luka',
      lastName: 'Popović',
    },
  ],
  defoltArray: [],
};
export let postText;
domElements.postInput.addEventListener('input', function (e) {
  postText = e.target.value;
});
