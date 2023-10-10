// Dom Selectors    

const cardContainer = document.getElementById('.card-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showBtn = document.getElementById('show');
const hideBtn = document.getElementById('hide');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const addQuestionBtn = document.getElementById('add-question');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');

// keep track of current card

let currentActiveCard = 0;

//store DOM cards

const cardsEl = [];

//store card data

const cardData = getCardData();