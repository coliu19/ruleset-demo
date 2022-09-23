'use strict';

import pluralize from 'pluralize';
const { isPlural } = pluralize;
/**
 * Checks targetVal contains the field specifying openapi sepc version.
 * @param {string} targetVal The string to lint
 * @param {Options} opts String requirements given by the linter ruleset
 */
export default function (targetVal) {
  if (typeof targetVal !== 'object') {
    return;
  }
  // No actual meaning, just a test.
  if (!isPlural(targetVal.info.title)) {
    return [
      {
        message: `title ${targetVal.info.title} is not plural`,
      },
    ];
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
