# Phrase parser to extract keywords

Parse provided string of phrase, and extract keywords from that phrase to use in verious place.
parser remove stop words from the staring using stopword npm module

## Installation

Install with npm

```
npm install keywordfromphrase
```

## Usage

Include the module

```javascript
var extractkeywords = require('keywordfromphrase');
```

Parse some phrase using this, with word frequancy 1 or greter

```javascript
var keywords = extractkeywords(1,'This is test example, of parseing to get keywords');
console.log(keywords); // ['test', 'example', 'parseing', 'keywords']
```

Parse some phrase using this, with word frequancy 2 or greter
```javascript
var keywords = extractkeywords(3,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.');
console.log(keywords); // ['Lorem', 'Ipsum', 'dummy', 'text','industry']
```

## Notes

Module use stopword as dependancy

## License

**ISC**