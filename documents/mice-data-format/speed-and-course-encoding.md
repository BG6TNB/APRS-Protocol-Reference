---
order: "10.12"
title: Speed and Course Encoding
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The speed and course of a station are encoded in 3 bytes, designated SP+28, DC+28 and SE+28.

The speed is in the range 0–799 knots, and the course is in the range 0–360 degrees (0 degrees represents an unknown or indefinite course, and 360 degrees represents due north).

The encoded speed and course are spread over the three bytes, as follows:

| Speed | Course | Course |
| --- | --- | --- |
| Encoded Speed (hundreds/tens of knots) | Encoded Speed (units) and Encoded Course (hundreds of degrees) | Encoded Course (tens/units) |
| SP+28 | DC+28 | SE+28 |

## SP+28 Encoding

The SP+28 byte contains the encoded speed, in hundreds/tens of knots, according to this table:

### SP+28 Speed Encoding (hundreds/tens of knots)

For speeds in the range 0–199 knots, there are two encoding schemes in existence. Hence there are two columns for the ASCII character, and two columns for the corresponding SP+28 byte values.

| Speed (knots) | ASCII Char (Scheme 1) | SP+28 byte (Scheme 1) | ASCII Char (Scheme 2) | SP+28 byte (Scheme 2) |
| --- | --- | --- | --- | --- |
| 0-9 | l | 108 | 0x1c (non-printing) | 28 |
| 10-19 | m | 109 | 0x1d (non-printing) | 29 |
| 20-29 | n | 110 | 0x1e (non-printing) | 30 |
| 30-39 | o | 111 | 0x1f (non-printing) | 31 |
| 40-49 | p | 112 | (space) | 32 |
| 50-59 | q | 113 | ! | 33 |
| 60-69 | r | 114 | " | 34 |
| 70-79 | s | 115 | # | 35 |
| 80-89 | t | 116 | $ | 36 |
| 90-99 | u | 117 | % | 37 |
| 100-109 | v | 118 | & | 38 |
| 110-119 | w | 119 | ' | 39 |
| 120-129 | x | 120 | ( | 40 |
| 130-139 | y | 121 | ) | 41 |
| 140-149 | z | 122 | * | 42 |
| 150-159 | { | 123 | + | 43 |
| 160-169 | \| | 124 | , | 44 |
| 170-179 | } | 125 | - | 45 |
| 180-189 | ~ | 126 | . | 46 |
| 190-199 | DEL | 127 | / | 47 |

| Speed (knots) | ASCII Char | SP+28 byte |
| --- | --- | --- |
| 200-209 | 0 | 48 |
| 210-219 | 1 | 49 |
| 220-229 | 2 | 50 |
| 230-239 | 3 | 51 |
| 240-249 | 4 | 52 |
| 250-259 | 5 | 53 |
| 260-269 | 6 | 54 |
| 270-279 | 7 | 55 |
| 280-289 | 8 | 56 |
| 290-299 | 9 | 57 |
| 300-310 | : | 58 |
| 310-320 | ; | 59 |
| ... | ... | ... |
| 730-739 | e | 101 |
| 740-749 | f | 102 |
| 750-759 | g | 103 |
| 760-769 | h | 104 |
| 770-779 | i | 105 |
| 780-789 | j | 106 |
| 790-799 | k | 107 |

Note: The ASCII characters shown in white on a black background are non-printing characters.

For example, for a speed of 73 knots (i.e. in the range 70–79), the SP+28 byte may contain either s or #, depending on the encoding method used. Both are equally valid.

The decoding algorithm described later handles either of these encoding schemes.

## DC+28 Encoding

The DC+28 byte contains the encoded units of speed, plus the encoded course in hundreds of degrees:

### DC+28 Speed / Course Encoding (units of knots/hundreds of degrees)

There are two encoding schemes in existence for the DC+28 byte. Hence there are two columns for the ASCII character, and two columns for the corresponding DC+28 byte values.

| Knots (units) | Course (deg) | ASCII Char (Scheme 1) | DC+28 byte (Scheme 1) | ASCII Char (Scheme 2) | DC+28 byte (Scheme 2) |
| --- | --- | --- | --- | --- | --- |
| 0 | 0-99 | (space) | 32 | 0x1c (non-printing) | 28 |
| 0 | 100-199 | ! | 33 | 0x1d (non-printing) | 29 |
| 0 | 200-299 | " | 34 | 0x1e (non-printing) | 30 |
| 0 | 300-360 | # | 35 | 0x1f (non-printing) | 31 |
| 1 | 0-99 | * | 42 | & | 38 |
| 1 | 100-199 | + | 43 | ' | 39 |
| 1 | 200-299 | , | 44 | ( | 40 |
| 1 | 300-360 | - | 45 | ) | 41 |
| 2 | 0-99 | 4 | 52 | 0 | 48 |
| 2 | 100-199 | 5 | 53 | 1 | 49 |
| 2 | 200-299 | 6 | 54 | 2 | 50 |
| 2 | 300-360 | 7 | 55 | 3 | 51 |
| 3 | 0-99 | > | 62 | : | 58 |
| 3 | 100-199 | ? | 63 | ; | 59 |
| 3 | 200-299 | @ | 64 | < | 60 |
| 3 | 300-360 | A | 65 | = | 61 |
| 4 | 0-99 | H | 72 | D | 68 |
| 4 | 100-199 | I | 73 | E | 69 |
| 4 | 200-299 | J | 74 | F | 70 |
| 4 | 300-360 | K | 75 | G | 71 |
| 5 | 0-99 | R | 82 | N | 78 |
| 5 | 100-199 | S | 83 | O | 79 |
| 5 | 200-299 | T | 84 | P | 80 |
| 5 | 300-360 | U | 85 | Q | 81 |
| 6 | 0-99 | \\ | 92 | X | 88 |
| 6 | 100-199 | ] | 93 | Y | 89 |
| 6 | 200-299 | ^ | 94 | Z | 90 |
| 6 | 300-360 | _ | 95 | [ | 91 |
| 7 | 0-99 | f | 102 | b | 98 |
| 7 | 100-199 | g | 103 | c | 99 |
| 7 | 200-299 | h | 104 | d | 100 |
| 7 | 300-360 | i | 105 | e | 101 |
| 8 | 0-99 | p | 112 | l | 108 |
| 8 | 100-199 | q | 113 | m | 109 |
| 8 | 200-299 | r | 114 | n | 110 |
| 8 | 300-360 | s | 115 | o | 111 |
| 9 | 0-99 | z | 122 | v | 118 |
| 9 | 100-199 | { | 123 | w | 119 |
| 9 | 200-299 | \| | 124 | x | 120 |
| 9 | 300-360 | } | 125 | y | 121 |

Note: The ASCII characters shown in white on a black background are non-printing characters.

For example, for a speed of 73 knots (i.e. units=3) and a bearing of 294 degrees (i.e. in the range 200–299), the DC+28 byte may contain either @ or <, depending on the encoding method used. Both are equally valid.

The decoding algorithm described later handles either of these encoding schemes.

## SE+28 Encoding

The SE+28 byte contains the encoded tens and units of degrees of the course:

### SE+28 Course Encoding (tens/units of degrees)

| Course (deg) | ASCII Char | SE+28 byte |
| --- | --- | --- |
| 0 | 0x1c (non-printing) | 28 |
| 1 | 0x1d (non-printing) | 29 |
| 2 | 0x1e (non-printing) | 30 |
| 3 | 0x1f (non-printing) | 31 |
| 4 | (space) | 32 |
| 5 | ! | 33 |
| 6 | " | 34 |
| 7 | # | 35 |
| 8 | $ | 36 |
| 9 | % | 37 |
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
| ... | ... | ... |
| 91 | w | 119 |
| 92 | x | 120 |
| 93 | y | 121 |
| 94 | z | 122 |
| 95 | { | 123 |
| 96 | \| | 124 |
| 97 | } | 125 |
| 98 | ~ | 126 |
| 99 | DEL | 127 |
