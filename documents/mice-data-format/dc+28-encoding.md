---
order: "10.14"
title: DC+28 Encoding
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The DC+28 byte contains the encoded units of speed, plus the encoded course in hundreds of degrees:

**DC+28 Speed / Course Encoding (units of knots/hundreds of degrees)**

There are two encoding schemes in existence for the DC+28 byte. Hence there are two columns for the ASCII character, and two columns for the corresponding DC+28 byte values.

| Knots (units) | Course (deg) | ASCII Char (Scheme 1) | DC+28 byte (Scheme 1) | ASCII Char (Scheme 2) | DC+28 byte (Scheme 2) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| 0 | 0–99    | space | 32  | 0x1c | 28  |
| 0 | 100–199 | !     | 33  | 0x1d | 29  |
| 0 | 200–299 | "     | 34  | 0x1e | 30  |
| 0 | 300–360 | #     | 35  | 0x1f | 31  |
| 1 | 0–99    | *     | 42  | &    | 38  |
| 1 | 100–199 | +     | 43  | '    | 39  |
| 1 | 200–299 | ,     | 44  | (    | 40  |
| 1 | 300–360 | -     | 45  | )    | 41  |
| 2 | 0–99    | 4     | 52  | 0    | 48  |
| 2 | 100–199 | 5     | 53  | 1    | 49  |
| 2 | 200–299 | 6     | 54  | 2    | 50  |
| 2 | 300–360 | 7     | 55  | 3    | 51  |
| 3 | 0–99    | >     | 62  | :    | 58  |
| 3 | 100–199 | ?     | 63  | ;    | 59  |
| 3 | 200–299 | @     | 64  | <    | 60  |
| 3 | 300–360 | A     | 65  | =    | 61  |
| 4 | 0–99    | H     | 72  | D    | 68  |
| 4 | 100–199 | I     | 73  | E    | 69  |
| 4 | 200–299 | J     | 74  | F    | 70  |
| 4 | 300–360 | K     | 75  | G    | 71  |
| 5 | 0–99    | R     | 82  | N    | 78  |
| 5 | 100–199 | S     | 83  | O    | 79  |
| 5 | 200–299 | T     | 84  | P    | 80  |
| 5 | 300–360 | U     | 85  | Q    | 81  |
| 6 | 0–99    | \     | 92  | X    | 88  |
| 6 | 100–199 | ]     | 93  | Y    | 89  |
| 6 | 200–299 | ^     | 94  | Z    | 90  |
| 6 | 300–360 | _     | 95  | [    | 91  |
| 7 | 0–99    | f     | 102 | b    | 98  |
| 7 | 100–199 | g     | 103 | c    | 99  |
| 7 | 200–299 | h     | 104 | d    | 100 |
| 7 | 300–360 | i     | 105 | e    | 101 |
| 8 | 0–99    | p     | 112 | l    | 108 |
| 8 | 100–199 | q     | 113 | m    | 109 |
| 8 | 200–299 | r     | 114 | n    | 110 |
| 8 | 300–360 | s     | 115 | o    | 111 |
| 9 | 0–99    | z     | 122 | v    | 118 |
| 9 | 100–199 | {     | 123 | w    | 119 |
| 9 | 200–299 | \|    | 124 | x    | 120 |
| 9 | 300–360 | }     | 125 | y    | 121 |

**Note:** The ASCII characters `0x1c`, `0x1d`, `0x1e`, `0x1f` and `space` (in the range 28–32) are non-printing characters.

For example, for a speed of 73 knots (i.e. units=3) and a bearing of 294 degrees (i.e. in the range 200–299), the DC+28 byte may contain either `@` or `<`, depending on the encoding method used. Both are equally valid.

The decoding algorithm described later handles either of these encoding schemes.
