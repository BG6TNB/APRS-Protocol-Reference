---
order: "10.22"
title: Maidenhead Locator in the Mic-E Status Text Field
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The Mic-E status text field can contain a Maidenhead locator.

If the locator is followed by a plain text comment, the first character of the text must be a space. For example:

```
IO91SX/G  Hello world (from a Mic-E or PIC-E)
>IO91SX/G  Hello world (from a Kenwood TH-D7)
]IO91SX/G  Hello world (from a Kenwood TM-D700)
```

`(/G` is the grid locator symbol.
