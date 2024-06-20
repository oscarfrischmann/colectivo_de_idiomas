import sweetalert2 from "https://cdn.jsdelivr.net/npm/sweetalert2@11.11.1/+esm";
import { openWasap } from "../main.js";
const questions = [
  {
    q: "You _____ twelve years old.",
    a: "are",
    b: "is",
    c: "am",
    d: "have",
  },
  {
    q: "_____ name is Juan.",
    a: "He",
    b: "His",
    c: "Him",
    d: "They",
  },
  {
    q: "My _______ is my mum’s brother.",
    a: "nephew",
    b: "aunt",
    c: "cousin",
    d: "uncle",
  },
  {
    q: "My birthday is in _______  ",
    a: "month",
    b: "February",
    c: "Turkey",
    d: "eleven",
  },
  {
    q: "Swimming is   _________    .",
    a: "a map",
    b: "a month",
    c: "a sport",
    d: "a country",
  },
  {
    q: "Is your brother twelve years old? Yes,  ________ .",
    a: "he do",
    b: "is he",
    c: "he is",
    d: "is",
  },

  {
    q: "My bed is in my   ________    .",
    a: "kitchen",
    b: "garage",
    c: "bedroom",
    d: "balcony",
  },

  {
    q: "There   _______    any stairs in my house.",
    a: "is",
    b: "are",
    c: "isn’t",
    d: "aren’t",
  },
  {
    q: "I  _________     like playing sports.",
    a: "don't",
    b: "not",
    c: "no",
    d: "am not",
  },
  {
    q: "She    _________   in the evenings.",
    a: "study",
    b: "studying",
    c: "studies",
    d: "studyings",
  },
  {
    q: "A:   ______    time does school finish? B: At 3 p.m.",
    a: "When",
    b: "What",
    c: "How",
    d: "Why",
  },
  {
    q: "A:  ______     do you travel to school? B: By bus.",
    a: "Why",
    b: "What",
    c: "When",
    d: "How",
  },
  {
    q: "I   ______    swim! It’s easy. ",
    a: "must",
    b: "can",
    c: "mustn't",
    d: "can’t",
  },
  {
    q: "I don’t want to help  ______     any more.",
    a: "they",
    b: "their",
    c: "theirs",
    d: "them",
  },
  {
    q: "I am  _______     my book now.",
    a: "read",
    b: "reading",
    c: "reader",
    d: "to read",
  },
  {
    q: "Where  ______     you yesterday? B: At home.",
    a: "was",
    b: "were",
    c: "did",
    d: "are",
  },
  {
    q: "Peter    _______   at my house last weekend.",
    a: "didn't stay",
    b: "not stayed",
    c: "didn't stayed",
    d: "not stay",
  },
  {
    q: "My dinner ______ very nice last night.",
    a: "aren't",
    b: "isn't",
    c: "weren't",
    d: "wasn't",
  },

  {
    q: "I ______   to the beach yesterday.",
    a: "go",
    b: "goed",
    c: "was",
    d: "went",
  },
  {
    q: "We didn’t   _____    the film at the cinema.",
    a: "saw",
    b: "see",
    c: "go",
    d: "gone",
  },
  {
    q: "_________ the food arrived, we sat down.",
    a: "And",
    b: "But",
    c: "Then",
    d: "When",
  },
  {
    q: "My sister is two years   _____    than me.",
    a: "old",
    b: "older",
    c: "oldest",
    d: "more old",
  },
  {
    q: "I think Bruno Mars is the   _______    singer in the world.",
    a: "goodest",
    b: "bestest",
    c: "best",
    d: "better",
  },
  {
    q: "I can’t eat because I have a   ______  .",
    a: "toothache",
    b: "sunburn",
    c: "temperature",
    d: "cold",
  },
  {
    q: "I   _______    at the party tonight.",
    a: "dance",
    b: "am going to dance",
    c: "am to dance",
    d: "dancing",
  },
  {
    q: "I   _______    in my notebook every day at school.",
    a: "write",
    b: "play",
    c: "learn",
    d: "do",
  },
  {
    q: "Juan’s phone is    _______   than Daisy’s phone.",
    a: "the expensive",
    b: "more expensive",
    c: "expensiver",
    d: "expensivest",
  },
  {
    q: "My dad didn’t like the art exhibition. He thought it was  _________",
    a: "scary",
    b: "terrible",
    c: "awesome",
    d: "exciting",
  },

  {
    q: "It    ______   raining yesterday lunchtime so we went to the park!",
    a: "isn't going to",
    b: "didn't",
    c: "wasn't",
    d: "not",
  },
  {
    q: "It was Tuesday yesterday. Today is _____.",
    a: "Monday",
    b: "Tuesday",
    c: "Wednesday",
    d: "Thursday",
  },
  {
    q: "I get up _____   7.30.",
    a: "on",
    b: "in",
    c: "at",
    d: "to",
  },
  {
    q: "I love _______ to the beach.",
    a: "go",
    b: "going",
    c: "to going",
    d: "for going",
  },
  {
    q: "The children are all  ______ to the teacher.",
    a: "listening",
    b: "listen",
    c: "listens",
    d: "listened",
  },
  {
    q: "I   _____    fifteen years old.",
    a: "is",
    b: "be",
    c: "am",
    d: "are",
  },
  {
    q: "Can you look ____ my dog this weekend?",
    a: "with",
    b: "away",
    c: "up",
    d: "after",
  },
  {
    q: "Mum   ______    sugar in her tea.",
    a: "not takes",
    b: "don't take",
    c: "do take",
    d: "doesn't take",
  },
  {
    q: "Dad  ______   three new books yesterday.",
    a: "has bought",
    b: "was buying",
    c: "bought",
    d: "buys",
  },
  {
    q: "_________   to the USA?",
    a: "Did you ever be",
    b: "Did you ever go",
    c: "Have you ever been",
    d: "Have you ever gone",
  },
  {
    q: "How  _______   brothers and sisters have you got?",
    a: "some",
    b: "any",
    c: "many",
    d: "much",
  },
  {
    q: "If you don't play table tennis more often, you  _______   .",
    a: "will improve",
    b: "improve",
    c: "won't improve",
    d: "don't improve",
  },
  {
    q: "Everyone  _______   eat five different kinds of fruit and vegetables every day.",
    a: "may",
    b: "should",
    c: "mustn't",
    d: "shouldn't",
  },
  {
    q: "How long have you been living here?",
    a: "For 7 years",
    b: "at least 7 years",
    c: "since 7 years",
    d: "7 years ago",
  },
  {
    q: "_______some more coffee?",
    a: "Do you",
    b: "Do you like",
    c: "You'd like",
    d: "Would you like",
  },
  {
    q: "He plays soccer, ____?",
    a: "don't he",
    b: "does he",
    c: "isn't he",
    d: "doesn't he",
  },
  {
    q: "It ___ when they went out.",
    a: "has rained",
    b: "was raining",
    c: "is raining",
    d: "was to rain",
  },
  {
    q: "That's the hotel _____ we had lunch",
    a: "what",
    b: "that",
    c: "where",
    d: "which",
  },
  {
    q: "I don't get ____ very well with my brother.",
    a: "by",
    b: "from",
    c: "on",
    d: "to",
  },
  {
    q: "______ I worked hard, I didn't pass the test.",
    a: "Although",
    b: "So",
    c: "Because",
    d: "But",
  },
  {
    q: "When I got to work, I remembered that ____ my mobile at home.",
    a: "I'd leave",
    b: "was leaving",
    c: "left",
    d: "I'd left",
  },
  {
    q: "I haven't tidied my office ____.",
    a: "just",
    b: "already",
    c: "yet",
    d: "since",
  },
  {
    button: "SUBMIT",
  },
];
const form = document.getElementById("quiz-form");
let index = 0;
for (let q of questions) {
  if (!q.button) {
    form.innerHTML += `
  <div class="question">
    <p>${(index += 1)}) ${q.q}</p>
    <label class="first-label">
      <input type="radio" name="q${index}" value="A" > A) ${q.a}
    </label>
    <label>
      <input type="radio" name="q${index}" value="B" > B) ${q.b}
    </label>
    <label>
      <input type="radio" name="q${index}" value="C" > C) ${q.c}
    </label>
    <label>
      <input type="radio" name="q${index}" value="D" > D) ${q.d}
    </label>
		<label class="first-label">
      <input type="radio" name="q${index}" value="0" checked> I don't know
    </label>
  </div>

  
  `;
  } else {
    form.innerHTML += `<button type="submit" id='button'>${q.button}</button>`;
  }
}

const button = document.getElementById("button");
button.addEventListener("click", (e) => {
  e.preventDefault();
  const answers = [];
  for (let i = 1; i <= questions.length - 1; i++) {
    const radios = document.getElementsByName(`q${i}`);
    for (let radio of radios) {
      if (radio.checked) {
        answers.push(radio.value);
      }
    }
  }
  const answersJSON = JSON.stringify(answers);
  localStorage.setItem("form", answersJSON);
  console.log(answers);

  sweetalert2
    .fire({
      title: "Excelent!",
      showConfirmButton: true,
      showCancelButton: true,
      cancelButtonText: "Tal vez después",
    })
    .then((result) => {
      if (result.isConfirmed) {
        openWasap();
      }
    });
});

const correctAnswers = [
  "A",
  "B",
  "D",
  "B",
  "C",
  "C",
  "C",
  "D",
  "A",
  "C",
  "B",
  "D",
  "B",
  "D",
  "B",
  "B",
  "A",
  "D",
  "D",
  "B",
  "D",
  "B",
  "C",
  "A",
  "B",
  "A",
  "B",
  "B",
  "C",
  "C",
  "C",
  "B",
  "A",
  "C",
  "D",
  "D",
  "C",
  "C",
  "C",
  "C",
  "B",
  "A",
  "D",
  "D",
  "B",
  "C",
  "C",
  "A",
  "D",
  "C",
];

//*modal al submit:
//* ya la completaste la parte escrita escribinos para completar la nivelacion con una entrevista por zoom
