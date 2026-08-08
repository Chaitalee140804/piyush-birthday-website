export type TimelineMemory = { id: string; date: string; title: string; description: string; image: string };
export type GalleryMemory = { id: string; src: string; alt: string; caption?: string };

const siteConfig = {
  person: { name: "Piyush", birthday: "Happy Birthday ❤️" },
  hero: {
    eyebrow: "For my favorite person",
    title: "Happy Birthday, Piyush ❤️",
    subtitle: "A little journey through our memories, laughter, friendship and love.",
    image: "/images/hero.jpg",
    cta: "Begin Our Story ❤️",
  },
  intro: {
    title: "Before you became my love, you became my best friend.",
    message: "And that is one of the most beautiful things about us.",
  },
  loveLetter: {
    title: "A Letter From My Heart 💌",
    paragraphs: [
      "Piyush, if I could put every memory, every smile, every little conversation and every feeling I have for you into words, I still don't think the words would be enough.",
      "You became my safe place, my favorite person and the one I want beside me through all the ordinary and extraordinary moments of life.",
      "Thank you for being my best friend, for understanding me, for making me laugh and for filling my days with a kind of happiness I never want to take for granted.",
      "Happy birthday to the person who means more to me than I can ever properly explain. I hope this year brings you every beautiful thing you deserve.",
    ],
    signature: "Forever yours ❤️",
  },
  gift: {
    title: "A Little Surprise For You 🎁",
    subtitle: "Open this with a smile",
    message: "If friendship was the beginning of our story, love is the beautiful chapter I hope we keep writing together. You are my favorite hello, my safest place and my sweetest adventure. ❤️",
    buttonLabel: "Open Your Surprise",
    image: "/images/surprise.jpg",
  },
  timeline: [
    { id: "1", date: "The Beginning", title: "When Our Story Started", description: "The first little chapter of a story that became so much more than either of us expected.", image: "/images/timeline-1.jpg" },
    { id: "2", date: "A Special Memory", title: "Laughing Together", description: "The silly moments, the long conversations and the memories that made us closer.", image: "/images/timeline-2.jpg" },
    { id: "3", date: "Us", title: "My Favorite Person", description: "Somewhere along the way, you became the person I wanted to share everything with.", image: "/images/timeline-3.jpg" },
    { id: "4", date: "Always", title: "More Memories To Come", description: "This isn't the end of our story. It is another beautiful page in it.", image: "/images/timeline-4.jpg" },
  ] satisfies TimelineMemory[],
  gallery: {
    title: "Little Pieces Of Us 📸",
    subtitle: "Every photo holds a memory I never want to forget.",
    memories: [
      { id: "g1", src: "/images/gallery-1.jpg", alt: "A memory of us", caption: "One of my favorite memories ❤️" },
      { id: "g2", src: "/images/gallery-2.jpg", alt: "A special moment", caption: "A moment worth keeping forever." },
      { id: "g3", src: "/images/gallery-3.jpg", alt: "A happy memory", caption: "Just us being us. 🐼❤️" },
      { id: "g4", src: "/images/gallery-4.jpg", alt: "A beautiful memory", caption: "Another little piece of our story." },
      { id: "g5", src: "/images/gallery-5.jpg", alt: "A favorite photo", caption: "Forever one of my favorites." },
      { id: "g6", src: "/images/gallery-6.jpg", alt: "A memory together", caption: "More memories, more reasons to smile." },
    ] satisfies GalleryMemory[],
  },
  video: { src: "/videos/birthday.mp4", poster: "/images/video-poster.jpg", title: "Our Birthday Memory 🎥" },
  reasons: [
    "Because you became my best friend first.", "Because you make ordinary days feel special.", "Because your smile can change my whole mood.", "Because you listen to even my smallest stories.", "Because you make me laugh when I need it most.",
    "Because I can be completely myself with you.", "Because you make me feel safe.", "Because you support my dreams.", "Because you remember little things about me.", "Because you know how to make me smile.",
    "Because you are patient with me.", "Because you never make me feel alone.", "Because you make friendship feel beautiful.", "Because you make love feel like home.", "Because you are my favorite person to talk to.",
    "Because you make even boring moments fun.", "Because you understand my silly side.", "Because you celebrate my happiness.", "Because you stand beside me when things are difficult.", "Because you make me want to become better.",
    "Because your kindness inspires me.", "Because you make me feel appreciated.", "Because you know when I need a hug.", "Because you can turn tears into laughter.", "Because you are wonderfully yourself.",
    "Because I love the way we talk about everything.", "Because our memories mean so much to me.", "Because you are the first person I want to tell things to.", "Because you make my heart feel lighter.", "Because you make me believe in forever.",
    "Because you make me feel chosen.", "Because you respect me.", "Because you make me feel understood.", "Because you are there in the little moments.", "Because you make every celebration sweeter.",
    "Because you are my comfort person.", "Because you make me feel lucky.", "Because you know how to cheer me up.", "Because you make me laugh at the most random things.", "Because you are part of so many of my favorite memories.",
    "Because you make distance feel smaller.", "Because you make every reunion special.", "Because you never stop surprising me.", "Because you make my heart happy.", "Because I love your little habits.",
    "Because I love our inside jokes.", "Because I love the way you care.", "Because I love how naturally we became us.", "Because you make me proud.", "Because you are someone I can count on.",
    "Because you make love feel gentle.", "Because you make friendship feel effortless.", "Because you are my favorite notification.", "Because your presence is enough.", "Because you make me smile without trying.",
    "Because I love sharing plans with you.", "Because I love dreaming about our future.", "Because you make tomorrow exciting.", "Because you make yesterday worth remembering.", "Because you make today better.",
    "Because you know the real me.", "Because you accept the real me.", "Because you make me feel beautiful inside and out.", "Because you make me feel special.", "Because you are my happy place.",
    "Because you bring warmth into my life.", "Because you make my world brighter.", "Because you are one of my greatest blessings.", "Because you make every memory more meaningful.", "Because I love being on your team.",
    "Because you are my favorite adventure.", "Because you make me excited for what comes next.", "Because you make me believe good things are ahead.", "Because you make my heart feel at home.", "Because you are worth every beautiful moment.",
    "Because you make me feel heard.", "Because you make me feel valued.", "Because you care about the details.", "Because you never stop being you.", "Because your happiness matters to me.",
    "Because your dreams matter to me.", "Because your smile matters to me.", "Because your hugs feel like home.", "Because your voice can calm me down.", "Because you know how to make a difficult day softer.",
    "Because you make me grateful for our story.", "Because you make me cherish the present.", "Because you make me hopeful about the future.", "Because you are my favorite chapter.", "Because I love the person I am around you.",
    "Because we can be serious and silly together.", "Because we can talk for hours.", "Because silence with you feels comfortable.", "Because you make me feel understood without words.", "Because you make every little moment count.",
    "Because you are my person.", "Because you are my best friend.", "Because you are my love.", "Because you are you.", "Because somehow, even 100 reasons will never be enough. ❤️",
  ],
  cake: { title: "Make A Wish 🎂", subtitle: "Close your eyes, make a wish and blow out the candles.", candleCount: 5, wishTitle: "Happy Birthday, Piyush! 🎉", wishMessage: "May this year bring you endless happiness, beautiful opportunities and every dream your heart is quietly wishing for. And may I be beside you for as many of those moments as possible. ❤️", signature: "Forever & always ❤️" },
  finale: { title: "I Love You Forever, Piyush ❤️", message: "If this little website could hold every feeling I have for you, it would never end. Thank you for being my best friend, my favorite person, my safe place and one of the most beautiful parts of my life. Wherever life takes us, I hope we keep choosing each other, laughing together, making memories and writing new chapters. Happy birthday, my love. You deserve the world and so much more.", signature: "With all my love, always. ❤️" },
  seo: { title: "Happy Birthday, Piyush ❤️", description: "A romantic birthday journey made with love." },
};

export default siteConfig;
