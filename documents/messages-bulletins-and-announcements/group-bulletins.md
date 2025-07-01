---
order: "14.8"
title: Group Bulletins
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Bulletins may be sent to bulletin groups. A bulletin group address consists of the letters BLN, followed by a single-digit group bulletin identifier, followed in turn by the name of the group (up to 5 characters long, with filler spaces to pad the name to 5 characters).

**Group Bulletin Format**
```
:BLNnGROUP:Group Bulletin Text
```
- BLN: literal string
- n: single-digit group bulletin identifier
- GROUP: group name (up to 5 characters, padded)
- Group Bulletin Text: up to 67 characters

**Example:**
```
:BLN4WXVVV:Stand by your snowplows
```