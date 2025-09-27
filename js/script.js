// Auto-update footer year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
const quotes = [
  { text: "A child miseducated is a child lost.", author: "John F. Kennedy" },
  { text: "A good teacher must be able to put himself in the place of those who find learning hard.", author: "Eliphas Levi" },
  { text: "A liberal education is at the heart of a civil society, and at the heart of a liberal education is the act of teaching.", author: "A. Bartlett Giamatti" },
  { text: "An educational system isn’t worth a great deal if it teaches young people how to make a living but doesn’t teach them how to make a life.", author: "Unknown" },
  { text: "All the world is a laboratory to the inquiring mind.", author: "Martin H. Fischer" },
  { text: "An investment in knowledge pays the best dividends.", author: "Benjamin Franklin" },
  { text: "Around here, we don’t look backwards for very long… We keep moving forward, opening up new doors and doing new things because we’re curious… and curiosity keeps leading us down new paths.", author: "Walt Disney" },
  { text: "Before any great things are accomplished, a memorable change must be made in the system of education…to raise the lower ranks of society nearer to the higher.", author: "John Adams" },
  { text: "Better than a thousand days of diligent study is one day with a great teacher.", author: "Japanese Proverb" },
  { text: "Children have to be educated, but they have also to be left to educate themselves.", author: "Ernest Dimnet" },
  { text: "Children must be taught how to think, not what to think.", author: "Margaret Mead" },
  { text: "Do not confine your children to your own learning, for they were born in another time.", author: "Chinese Proverb" },
  { text: "Do you know the secret of the true scholar? In every man there is something wherein I may learn of him; and in that I am his pupil.", author: "Ralph Waldo Emerson" },
  { text: "Don’t just teach your kids to read, teach them to question what they read. Teach them to question everything.", author: "George Carlin" },
  { text: "Education aims to give you a boost up the ladder of knowledge. Too often, it just gives you a cramp on one of its rungs.", author: "Martin H. Fischer" },
  { text: "Education costs money, but then so does ignorance.", author: "Claus Moser" },
  { text: "Education is a better safeguard of liberty than a standing army.", author: "Edward Everett" },
  { text: "Education is a progressive discovery of our own ignorance.", author: "Will Durant" },
  { text: "Education is a vaccine for violence.", author: "Edward James Olmos" },
  { text: "Education is not filling of a pail but the lighting of a fire.", author: "William Butler Yeats" },
  { text: "Education is not preparation for life; education is life itself.", author: "John Dewey" },
  { text: "Education is simply the soul of a society as it passes from one generation to another.", author: "G.K. Chesterton" },
  { text: "Education is the ability to listen to almost anything without losing your temper or your self-confidence.", author: "Robert Frost" },
  { text: "Education is the key to unlock the golden door of freedom.", author: "George Washington Carver" },
  { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
  { text: "Education is what remains after one has forgotten what one has learned in school.", author: "Albert Einstein" },
  { text: "Education is what survives when what has been learned has been forgotten.", author: "B.F. Skinner" },
  { text: "Education is… doing anything that changes you.", author: "George B. Leonard" },
  { text: "Education should be exercise; it has become massage.", author: "Martin H. Fischer" },
  { text: "Education would be much more effective if its purpose was to ensure that by the time they leave school every boy and girl should know how much they do not know, and be imbued with a lifelong desire to know it.", author: "William Haley" },
  { text: "Education… has produced a vast population able to read but unable to distinguish what is worth reading.", author: "G.M. Trevelyan" },
  { text: "Every child deserves a champion – an adult who will never give up on them, who understands the power of connection and insists that they become the best that they can possibly be.", author: "Rita Pierson" },
  { text: "Every time you stop a school, you will have to build a jail. What you gain at one end you lose at the other. It’s like feeding a dog on his own tail. It won’t fatten the dog.", author: "Mark Twain" },
  { text: "Friendship is a horizon – which expands whenever we approach it.", author: "E.R. Hazlip" },
  { text: "Good teaching is one-fourth preparation and three-fourths theatre.", author: "Gail Goldwin" },
  { text: "He who opens a school door, closes a prison.", author: "Victor Hugo" },
  { text: "I am not a teacher, but an awakener.", author: "Robert Frost" },
  { text: "I cannot teach anybody anything, I can only make them think.", author: "Socrates" },
  { text: "I did then what I knew how to do. Now that I know better, I do better.", author: "Maya Angelou" },
  { text: "I have never let my schooling interfere with my education.", author: "Mark Twain" },
  { text: "I read Shakespeare and the Bible, and I can shoot dice. That’s what I call a liberal education.", author: "Tallulah Bankhead" },
  { text: "I’m not afraid of storms, for I’m learning to sail my ship.", author: "Aeschylus" },
  { text: "If you are planning for a year, sow rice; if you are planning for a decade, plant trees; if you are planning for a lifetime, educate people.", author: "Chinese Proverb" },
  { text: "If you think education is expensive, try ignorance.", author: "Derek Bok" },
  { text: "It is a thousand times better to have common sense without education than to have education without common sense.", author: "Robert G. Ingersoll" },
  { text: "It’ll be a great day when education gets all the money it wants, and the Air Force has to hold a bake sale to buy bombers.", author: "Unknown" },
  { text: "Learning is never done without errors and defeat.", author: "Vladimir Lenin" },
  { text: "Learning never exhausts the mind.", author: "Leonardo Da Vinci" },
  { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
  { text: "Logic will get you from A to B. Imagination will take you everywhere.", author: "Albert Einstein" },
  { text: "Minds are like parachutes, they only function when they are open.", author: "James Dewar" },
  { text: "My idea of education is to unsettle the minds of the young and inflame their intellects.", author: "Robert Maynard Hutchins" },
  { text: "Nations have recently been led to borrow billions for war; no nation has ever borrowed largely for education. Probably, no nation is rich enough to pay for both war and civilization. We must make our choice; we cannot have both.", author: "Abraham Flexner" },
  { text: "No man who worships education has got the best out of education…. Without a gentle contempt for education no man’s education is complete.", author: "G.K. Chesterton" },
  { text: "Once you have learned to ask questions – relevant and appropriate and substantial questions – you have learned how to learn and no one can keep you from learning whatever you want or need to know.", author: "Neil Postman & Charles Weingartner" },
  { text: "Only a generation of readers will spawn a generation of writers.", author: "Steven Spielberg" },
  { text: "Real education must ultimately be limited to men who INSIST on knowing, the rest is mere sheep-herding.", author: "Ezra Pound" },
  { text: "Teach the children so it will not be necessary to teach the adults.", author: "Abraham Lincoln" },
  { text: "Teachers open the door, but you must enter by yourself.", author: "Chinese Proverb" },
  { text: "Teaching is more than imparting knowledge; it is inspiring change.", author: "William Arthur Ward" },
  { text: "Learning is more than absorbing facts; it is acquiring understanding.", author: "William Arthur Ward" },
  { text: "Tell me and I forget, teach me and I may remember, involve me and I learn.", author: "Benjamin Franklin" },
  { text: "The aim of education should be to teach us rather how to think, than what to think — rather to improve our minds, so as to enable us to think for ourselves, than to load the memory with thoughts of other men.", author: "Bill Beattie" },
  { text: "The basic idea behind teaching is to teach people what they need to know.", author: "Carl Rogers" },
  { text: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King" },
  { text: "The best education in the world is that got by struggling to get a living.", author: "Wendell Phillips" },
  { text: "The function of education is to teach one to think intensively and to think critically. Intelligence plus character – that is the goal of true education.", author: "Martin Luther King, Jr." },
  { text: "The greatest sign of a success for a teacher…is to be able to say, “The children are now working as if I did not exist.”", author: "Maria Montessori" },
  { text: "The hardest thing to teach is how to care.", author: "Unknown" },
  { text: "The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires.", author: "William A. Ward" },
  { text: "The mind is not a vessel to be filled, but a fire to be ignited.", author: "Plutarch" },
  { text: "The more that you read, the more things you will know, the more that you learn, the more places you’ll go.", author: "Dr. Seuss" },
  { text: "The object of education is to prepare the young to educate themselves throughout their lives.", author: "Robert Maynard Hutchins" },
  { text: "The principal goal of education in the schools should be creating men and women who are capable of doing new things, not simply repeating what other generations have done.", author: "Jean Piaget" },
  { text: "The school is the last expenditure upon which America should be willing to economize.", author: "Franklin D. Roosevelt" },
  { text: "The secret in education lies in respecting the student.", author: "Ralph Waldo Emerson" },
  { text: "The teacher who is indeed wise does not bid you to enter the house of wisdom but rather leads you to the threshold of your mind.", author: "Kahlil Gibran" },
  { text: "The whole purpose of education is to turn mirrors into windows.", author: "Sydney J. Harris" },
  { text: "The world is a book and those who do not travel read only one page.", author: "Augustine of Hippo" },
  { text: "There is no friends as loyal as a book.", author: "Ernest Hemingway" },
  { text: "To the uneducated, an A is just three sticks.", author: "A.A. Milne" },
  { text: "Too many of our children cannot read. Reading is the building block, and it must be the foundation for education reform.", author: "George W. Bush" },
  { text: "We shouldn’t teach great books; we should teach a love of reading.", author: "B. F. Skinner" },
  { text: "What sculpture is to a block of marble, education is to a human soul.", author: "Joseph Addison" },
  { text: "What we learn with pleasure we never forget.", author: "Alfred Mercier" },
  { text: "What we want is to see the child in pursuit of knowledge, and not knowledge in pursuit of the child.", author: "George Bernard Shaw" },
  { text: "Whatever the cost of our libraries, the price is cheap compared to that of an ignorant nation.", author: "Walter Cronkite" },
  { text: "When you learn, teach. When you get, give.", author: "Maya Angelou" },
  { text: "Why should society feel responsible only for the education of children, and not for the education of all adults of every age?", author: "Erich Fromm" },
  { text: "You can never be overdressed or over educated.", author: "Oscar Wilde" },
  { text: "You can teach a student a lesson for a day; but if you can teach him to learn by creating curiosity he will continue the learning process as long as he lives.", author: "Clay P. Bedford" },
  { text: "You educate a man; you educate a man. You educate a woman; you educate a generation.", author: "Brigham Young" },
  { text: "Education is not the means of showing people how to get what they want. Education is an exercise by means of which enough men, it is hoped, will learn to want what is worth having.", author: "Ronald Reagan" },
  { text: "Education is not a problem. Education is an opportunity.", author: "Lyndon Johnson" }
];

// Pick random quote safely
function displayRandomQuote() {
  const quoteTextEl = document.getElementById("quote-text");
  const quoteAuthorEl = document.getElementById("quote-author");

  if (quoteTextEl && quoteAuthorEl) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteTextEl.textContent = `"${quote.text}"`;
    quoteAuthorEl.textContent = `— ${quote.author}`;
  }
}

// Run when page loads
window.addEventListener("load", displayRandomQuote);

// Animate counters safely
document.addEventListener("DOMContentLoaded", () => {
  const counters = [
    { id: "students-count", value: 24 },
    { id: "projects-count", value: 5 },
    { id: "events-count", value: 12 },
    { id: "languages-count", value: 4 }
  ];

  counters.forEach(counter => {
    const el = document.getElementById(counter.id);
    if (!el) return; // skip if element not on page

    let count = 0;
    const target = counter.value;
    const interval = setInterval(() => {
      count++;
      el.textContent = count;
      if (count >= target) clearInterval(interval);
    }, 80);
  });
});