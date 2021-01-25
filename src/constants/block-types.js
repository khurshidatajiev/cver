export const BLOCK_TITLE = "title";
export const BLOCK_SUBTITLE = "subtitle";
export const BLOCK_AVATAR = "avatar";
export const BLOCK_TEXT = "text";

export const BLOCK_DEFAULT = BLOCK_TITLE;

export const BLOCK_DICTIONARY = {
  [BLOCK_TITLE]: "Заголовок",
  [BLOCK_SUBTITLE]: "Подзаголовок",
  [BLOCK_AVATAR]: "Аватар",
  [BLOCK_TEXT]: "Текст",
};

const BLOCK_TYPES = [
  {
    id: BLOCK_TITLE,
    name: BLOCK_DICTIONARY[BLOCK_TITLE],
  },
  {
    id: BLOCK_SUBTITLE,
    name: BLOCK_DICTIONARY[BLOCK_SUBTITLE],
  },
  {
    id: BLOCK_AVATAR,
    name: BLOCK_DICTIONARY[BLOCK_AVATAR],
  },
  {
    id: BLOCK_TEXT,
    name: BLOCK_DICTIONARY[BLOCK_TEXT],
  },
];

export default BLOCK_TYPES;
