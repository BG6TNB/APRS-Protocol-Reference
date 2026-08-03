---
order: "9.3"
title: Symbol
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The presence of the leading Symbol Table Identifier instead of a digit indicates that this is a compressed Position Report and not a normal lat/long report.

Compressed format can be used in place of lat/long position format anywhere that `...ddmm.hhN/dddmm.hhW$xxxxxxx...` occurs.

All bytes except for the `/` and `$` are base-91 printable ASCII characters (`!`..`{`). These are converted to numeric values by subtracting 33 from the decimal ASCII character code. For example, `#` has an ASCII code of 35, and represents a numeric value of 2 (i.e. 35-33).
