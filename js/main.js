const DESCRIPTIONS = [
  'отель',
  'указатель "go to the beach"',
  'пляж',
  'девчуля и фотоаппарат',
  'весёлый супчик',
  'суперкар',
  'клубничка на тарелке',
  'сочок',
  'девчуля и самолёт',
  'обувь',
  'тропинка на пляже',
  'ауди',
  'какая-то еда',
  'котосуши',
  'прикольные тапки',
  'небо над горами',
  'оркестр',
  'шеви импала ❤️',
  'тапки с фонариками',
  'пальмы',
  'салатик',
  'морюшко на закате',
  'крабик',
  'концерт 🤘🏻',
  'страшно, очень страшно',
];

const NAMES = [
  'Алексей',
  'Дарья',
  'Пётр',
  'Мария',
  'Ярослав',
  'Иван',
  'Кристина',
  'Антон',
  'Андрей',
  'Татьяна',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const MAX_PHOTOS = 25;
const MAX_AVATARS = 6;
const MAX_COMMENT_ID = 1000;
const MAX_COMMENTS_FOR_PHOTO = 30;
const MAX_MESSAGES_FOR_COMMENT = 2;
const MIN_LIKES = 15;
const MAX_LIKES = 200;

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomArrayElement = (array) => array[getRandomNumber(0, array.length - 1)];

const createRandomUniqueNumbers = (min, max) => {
  const ids = [];
  return () => {
    let randomNumber = getRandomNumber(min, max);
    if (ids.length >= (max - min + 1)) {
      return null;
    };
    while (ids.includes(randomNumber)) {
      randomNumber = getRandomNumber(min, max);
    };
    ids.push(randomNumber);
    return randomNumber;
  };
};

const generateCommentIds = createRandomUniqueNumbers(1, MAX_COMMENT_ID);
const generagePtohoIds = createRandomUniqueNumbers(1, MAX_PHOTOS);
const generatePhotoUrls = createRandomUniqueNumbers(1, MAX_PHOTOS);

const getCommentMessages = (messages) => {
  array = [];
  for (let i = 1; i <= getRandomNumber(1, MAX_MESSAGES_FOR_COMMENT); i++) {
    array.push(getRandomArrayElement(messages));
  };
  return array;
};

const createComment = () => {
  return {
      id: generateCommentIds(),
      avatar: 'img/avatar-' + getRandomNumber(1, MAX_AVATARS) + '.svg',
      message: getCommentMessages(MESSAGES).join(' '),
      name: getRandomArrayElement(NAMES),
  };
};

const createPhoto = () => {
  return {
      id: generagePtohoIds(),
      url: 'photos/' + generatePhotoUrls() + '.jpg',
      description: DESCRIPTIONS[getRandomNumber(0, DESCRIPTIONS.length - 1)],
      likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
      comments: Array.from({length: getRandomNumber(0, MAX_COMMENTS_FOR_PHOTO)}, createComment),
  };
};

const photos = Array.from({length: MAX_PHOTOS}, createPhoto);

console.log(photos);

