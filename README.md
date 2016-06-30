# Advanced Custom Fields Snippets for Atom

This is a collection of Atom snippets for the [Advanced Custom Fields](http://www.advancedcustomfields.com/) WordPress plugin. Based on the [Advanced Custom Fields Snippets for Sublime Text](https://github.com/iamhexcoder/acf_snippets) package.

## Snippets

Atom snippets allow you to enter a simple prefix in the editor and hit `tab` to expand the prefix into a larger code block with templated values.

To make things the easiest to remember, snippet triggers are typically named as abbreviations for their output. For example, `tf` outputs (T)he (F)ield.

Field names and variable outputs that are auto-highlighted for replacement by Atom are shown in the code wrapped in asterisks.

_**Note:** To make the most of this package, use the built-in `php` snippet to generate your opening and closing `php` tags. These snippets will generate code that will fit seamlessly between them._

**Example usage:**

`php`, `tab` (creates `<?php` and `?>`), `tf`, `tab`

### Standard Field Snippets

Snippet  | Output
-------- | -------------------------------------------------
`tf`     | `the_field('*field_name*');`
`gf`     | `get_field('*field_name*');`
`ifgf`   | `if(get_field('*field_name*')):`

### Sub-Field Snippets

Snippet | Output
------- | ---------------------------------------------
`tsf`   | `the_sub_field('*field_name*');`
`gsf`   | `get_sub_field('*field_name*');`
`whsf`  | `while(has_sub_field('*field_name*')):`
`ifgsf` | `if(get_sub_field('*field_name*')):`

### Options Page Field Snippets

_These snippets are the same as the standard and sub-field snippets, but with an 'o' appended to the end._

Snippet   | Output
--------- | -------------------------------------------------------------------------
`tfo`     | `the_field('*field_name*', 'options');`
`gfo`     | `get_field('*field_name*', 'options');`
`ifgfo`   | `if(get_field('*field_name*', 'options')):`
`tsfo`    | `the_sub_field('*field_name*', 'options');`
`whsfo`   | `while(has_sub_field('*field_name*', 'options')):`
`ifgsfo`  | `if(get_sub_field('*field_name*', 'options')):`

### Repeater Field Snippets

Snippet | Output
------- | ------------------------------------------------------------------------------------------
`rf`    | Outputs a block of code that opens and closes a repeater field loop
`rfo`   | Outputs a block of code that opens and closes a repeater field loop from the options page.

## Utility Snippets

These snippets serve specific purposes.

`acfcreateoptions` Used in `functions.php`, this snippet will output code that will create an multiple options page in ACF 5\. Code should be edited to reflect Option page names.
