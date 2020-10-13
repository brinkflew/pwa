const splitter = /[._-\s]+|(?=[A-Z])/;

/**
 * Splits a string into words.
 * @param {string} str - The string to cut down into pieces.
 * @returns {string[]} The splitted string.
 */
function splitToJoin(str: string): string[] {
  return str
    .split(splitter)
    .filter((word) => !!word)
    .map((word) => word.toLowerCase());
}

/**
 * Converts a string to PascalCase.
 * @param {string} str - The string to convert.
 * @returns {string} The converted string.
 */
export function pascalCase(str: string): string {
  return splitToJoin(str)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join('');
}

/**
 * Converts a string to Title Case.
 * @param {string} str - The string to convert.
 * @returns {string} The converted string.
 */
export function titleCase(str: string): string {
  return splitToJoin(str)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Converts a string to dotted.case.
 * @param {string} str - The string to convert.
 * @returns {string} The converted string.
 */
export function dottedCase(str: string): string {
  return splitToJoin(str).join('.');
}

/**
 * Converts a string to snake_case.
 * @param {string} str - The string to convert.
 * @returns {string} The converted string.
 */
export function snakeCase(str: string): string {
  return splitToJoin(str).join('_');
}

/**
 * Converts a string to kebab-case.
 * @param {string} str - The string to convert.
 * @returns {string} The converted string.
 */
export function kebabCase(str: string): string {
  return splitToJoin(str).join('-');
}

/**
 * Converts a string to UPPER_SNAKE_CASE.
 * @param {string} str - The string to convert.
 * @returns {string} The converted string.
 */
export function upperSnakeCase(str: string): string {
  return snakeCase(str).toUpperCase();
}

/**
 * Converts a string to camelCase.
 * @param {string} str - The string to convert.
 * @returns {string} The converted string.
 */
export function camelCase(str: string): string {
  str = pascalCase(str);
  return str[0].toLowerCase() + str.slice(1);
}

export default {
  pascalCase,
  titleCase,
  dottedCase,
  camelCase,
  kebabCase,
  snakeCase,
  upperSnakeCase
};
