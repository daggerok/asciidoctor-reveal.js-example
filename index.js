// Load asciidoctor.js and asciidoctor-reveal.js
var asciidoctor = require('asciidoctor.js')();
require('asciidoctor-reveal.js').register();
// Convert the document 'README.adoc' using the reveal.js converter
asciidoctor.convertFile('README.adoc', {
  safe: 'safe',
  backend: 'revealjs',
  to_file: './index.html',
  sourcemap: true,
  // see reveal.js options here: https://github.com/asciidoctor/asciidoctor-reveal.js#reveal-js-options
  // attributes,
  // header_footer,
  // header_only,
  // base_dir,
  // backend,
  // doctype,
  // cursor,
  // extension_registry,
  // extensions,
  // parse_header_only,
  // catalog_assets,
  // template_dirs,
  // template_engine,
  // template_engine_options,
  // eruby,
  // converter,
});
