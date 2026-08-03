---
order: "10.10"
title: Longitude Minutes Encoding
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The m+28 byte in the Information field contains the encoded value of the longitude minutes, in the range 0–59 minutes:

**Mic-E Longitude Minutes Encoding**

| Long Mins | ASCII Char | m+28 |
| :---: | :---: | :---: |
| 0  | X | 88 |
| 1  | Y | 89 |
| 2  | Z | 90 |
| 3  | [ | 91 |
| 4  | \ | 92 |
| 5  | ] | 93 |
| 6  | ^ | 94 |
| 7  | _ | 95 |
| 8  | ` | 96 |
| 9  | a | 97 |
| 10 | & | 38 |
| 11 | ' | 39 |
| 12 | ( | 40 |
| 13 | ) | 41 |
| 14 | * | 42 |
| 15 | + | 43 |
| 16 | , | 44 |
| 17 | - | 45 |
| 18 | . | 46 |
| 19 | / | 47 |
| 20 | 0 | 48 |
| 21 | 1 | 49 |
| 22 | 2 | 50 |
| 23 | 3 | 51 |
| 24 | 4 | 52 |
| 25 | 5 | 53 |
| 26 | 6 | 54 |
| 27 | 7 | 55 |
| 28 | 8 | 56 |
| 29 | 9 | 57 |
| 30 | : | 58 |
| 31 | ; | 59 |
| 32 | < | 60 |
| 33 | = | 61 |
| 34 | > | 62 |
| 35 | ? | 63 |
| 36 | @ | 64 |
| 37 | A | 65 |
| 38 | B | 66 |
| 39 | C | 67 |
| 40 | D | 68 |
| 41 | E | 69 |
| 42 | F | 70 |
| 43 | G | 71 |
| 44 | H | 72 |
| 45 | I | 73 |
| 46 | J | 74 |
| 47 | K | 75 |
| 48 | L | 76 |
| 49 | M | 77 |
| 50 | N | 78 |
| 51 | O | 79 |
| 52 | P | 80 |
| 53 | Q | 81 |
| 54 | R | 82 |
| 55 | S | 83 |
| 56 | T | 84 |
| 57 | U | 85 |
| 58 | V | 86 |
| 59 | W | 87 |

Note from the table that the encoding is split into two separate pieces:

- 0–9 minutes: m+28 is in the range 88–97 decimal, corresponding to the ASCII characters `X` to `a`.
- 10–59 minutes: m+28 is in the range 38–87 decimal (corresponding to the ASCII characters `&` to `W`).

Thus the overall range of valid m+28 values is 38–97 decimal (corresponding to ASCII characters `&` to `a`). All of these characters are printable ASCII characters.

To decode the longitude minutes value:

1. subtract 28 from the m+28 value to obtain m.
2. subtract 60 if m ≥ 60 (i.e. the longitude minutes is in the range 0–9).
