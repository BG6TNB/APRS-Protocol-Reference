---
order: "20.4"
title: Overlays with Symbols in the AX.25 Information Field
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Where the Symbol Table Identifier is `0`-`9` or `A`-`Z` (or `a`-`j` with compressed position data only), the symbol comes from the Alternate Symbol Table, and is overlaid with the identifier (as a single digit or a capital letter).

For example, in the uncompressed Position Report:

```
@092345z4903.50N3 07201.75W>...
```

the digit `3` following the latitude will cause the number "3" to be overlaid on top of the "car" icon (Note: Because the symbol is overlaid, the `>` Symbol Code here comes from the Alternate Symbol Table).

Similarly, to overlay a "car" icon with the letter "B" in a compressed Position Report, the report will look something like:

```
=BL!!<*e7 >7P[
```

However, in a compressed Position Report, it is not permissible to use a numeric Symbol Table Identifier (`0`-`9`) — compressed positions never start with a digit. If a numeric overlay is required, the report must use a lower-case letter instead (in the range `a`-`j`) as the Symbol Table Identifier. The lower-case letter is then mapped to the digits `0`-`9` (i.e. `a=0`, `b=1`, `c=2`, `d=3` etc).

Thus, in the compressed Position Report:

```
=d5L!!<*e7 >7P[
```

the letter `d` maps to overlay character "3".

As noted above, not all symbols from the Alternate Symbol Table may be overlaid in this way — those that can be overlaid are marked as `[with overlay]` in Appendix 2. This means that they are capable of taking an overlay, but they do not necessarily need to have one. Thus, for example, the following report uses the car symbol from the Alternate Symbol Table, but does not display an overlay:

```
@092345z4903.50N\07201.75W>...
```
