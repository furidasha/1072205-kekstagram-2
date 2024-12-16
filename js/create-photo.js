import { getPhotoData } from './data.js';
import { getRandomUniqueNumbers, getRandomArrayElement, getRandomNumber } from './utils.js';

const createPhoto = () => {

  const PhotosQuantity = {
    MIN: 1,
    MAX: 25,
  };

  const AvatarsQuantity = {
    MIN: 1,
    MAX: 6,
  };

  const LikesQuantity = {
    MIN: 15,
    MAX: 200,
  };

  const CommentsIdQuantity = {
    MIN: 1,
    MAX: 1000,
  };

  const CommentsForPhotoQuantity = {
    MIN: 0,
    MAX: 30,
  };

  const MessagesForCommentQuantity = {
    MIN: 1,
    MAX: 2,
  };

  const generateCommentIds = getRandomUniqueNumbers(CommentsIdQuantity.MIN, CommentsIdQuantity.MAX);
  const generagePtohoIds = getRandomUniqueNumbers(PhotosQuantity.MIN, PhotosQuantity.MAX);
  const generatePhotoUrls = getRandomUniqueNumbers(PhotosQuantity.MIN, PhotosQuantity.MAX);

  const getCommentMessages = (messages) => {
    const array = [];
    for (let i = 1; i <= getRandomNumber(MessagesForCommentQuantity.MIN, MessagesForCommentQuantity.MAX); i++) {
      array.push(getRandomArrayElement(messages));
    }
    return array;
  };

  const createComment = () => ({
    id: generateCommentIds(),
    avatar: `img/avatar-${getRandomNumber(AvatarsQuantity.MIN, AvatarsQuantity.MAX)}.svg`,
    message: getCommentMessages(getPhotoData().MESSAGES).join(' '),
    name: getRandomArrayElement(getPhotoData().NAMES),
  });

  return {
    id: generagePtohoIds(),
    url: `photos/${generatePhotoUrls()}.jpg`,
    description: getPhotoData().DESCRIPTIONS[getRandomNumber(0, getPhotoData().DESCRIPTIONS.length - 1)],
    likes: getRandomNumber(LikesQuantity.MIN, LikesQuantity.MAX),
    comments: Array.from({length: getRandomNumber(CommentsForPhotoQuantity.MIN, CommentsForPhotoQuantity.MAX)}, createComment),
  };
};

export { createPhoto };
