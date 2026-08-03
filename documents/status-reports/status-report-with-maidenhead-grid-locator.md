---
order: "16.2"
title: Status Report with Maidenhead Grid Locator
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The Maidenhead grid locator may be 4 or 6 characters long, and must immediately follow the `>` Data Type Identifier.

All letters must be transmitted in upper case. Letters may be received in upper case or lower case.

The Symbol Table Identifier and Symbol Code follow the locator.

If the report also contains status text, the first character of the text must be a space.

A Status Report with Maidenhead locator can not have a timestamp.

## Status Report Format — with Maidenhead Grid Locator

```
>   Maidenhead Locator   Sym Table ID   Symbol Code   Status Text (starting with a space)
        GG nn gg                              (max 54 chars)
Bytes: 1      2 2 2                1              1                  1-54
```

Examples
```
>IO91SX/G
>IO91/G
>IO91SX/-  My house                                                    (Note the space at the start of the status text).
>IO91SX/-V^B7 Meteor Scatter beam heading = 110 degrees, ERP = 490 watts.
```
