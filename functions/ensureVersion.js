'use strict';

/**
 * Checks targetVal contains the field specifying openapi sepc version.
 * @param {string} targetVal The string to lint
 * @param {Options} opts String requirements given by the linter ruleset
 */
export default function (targetVal) {
  if (typeof targetVal !== 'object') {
    return;
  }

  if (targetVal.openapi || targetVal.swagger) {
    return;
  }

  return [
    {
      message: 'openapi version is missing',
    },
  ];
};
