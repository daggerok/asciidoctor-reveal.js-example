// Load asciidoctor.js and asciidoctor-reveal.js
var asciidoctor = require('asciidoctor.js')();
require('asciidoctor-reveal.js').register();
// use cross-env to setup <base href="...." />
var baseHref = process.env.BASE_HREF || '/';
var attributes = !process.env.BASE_HREF ? {} : { revealjsdir: baseHref + 'node_modules/reveal.js' };
// Convert the document 'README.adoc' using the reveal.js converter
asciidoctor.convertFile('README.adoc', {
  safe: 'safe',
  backend: 'revealjs',
  to_file: './index.html',
  attributes,
  // ...
  // see reveal.js options here: https://github.com/asciidoctor/asciidoctor-reveal.js#reveal-js-options
});
