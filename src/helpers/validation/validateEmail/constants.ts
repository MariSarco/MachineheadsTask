export const emailRegExp =
  /^(?![.])(?!.*\.{2}|.*\.@)(?![-\s])[a-zA-Z0-9_.-]{4,30}@[a-zA-Z0-9_.-]{4,15}\.[a-zA-Z]{2,3}$/;

export const emailRegExpWithoutLength =
  /^(?!.*\.{2})[^\s.-][a-zA-Z0-9_.-]*@(?!.*\.{2})[a-zA-Z0-9_.-]+\.[a-zA-Z]{1,}$/;

export const maxLength = 50;
export const minUserNameLength = 4;
export const maxUserNameLength = 30;
export const minMailServiceLength = 4;
export const maxUserServiceLength = 15;
export const minDomainLength = 2;
export const maxDomainLength = 3;
export const atSeparator = '@';
export const dotSeparator = '.';

export const emailErrors = {
  incorrectEmail: 'Некорректный email',
  commonMaxLength: 'Email не должен быть длиннее 50 символов (включительно)',
  userNameLength: 'Минимальная длина до @ - 4 символов, максимальная - 30 символов',
  mailServiceLength: 'Минимальная длина после @ и до (.) - 4 символов, максимальная - 15 символов',
  domainLength: 'Минимальная длина после (.) - 2 символа, максимальная - 3 символа',
  validChars:
    'Допустимы латинские буквы в верхнем и нижнем регистре, цифры от 0 до 9, символы - @._- (точка и @ без дублирования)',
  emptyField: 'Введите email',
};
