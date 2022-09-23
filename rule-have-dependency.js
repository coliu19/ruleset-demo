import { oas } from '@stoplight/spectral-rulesets';
import checkPlural from './functions/checkPlural.js';
export default {
  'extends': [
    [
      oas,
      'off',
    ],
  ],
  'documentationUrl': 'https://www.example.com/docs/api-style-guide.md',
  'rules': {
    'oas3-schema': true,
    'oas2-schema': true,
    'info-contact': true,
    'info-description': true,
    'info-license': true,
    'license-url': true,
    'check-plural': {
      'description': 'The document must be specify the OAS version it is supporting.',
      'message': '{{description}}; {{error}}',
      'severity': 'warn',
      'given': '$',
      'then': {
        'function': checkPlural,
      },
    },
  },
};
