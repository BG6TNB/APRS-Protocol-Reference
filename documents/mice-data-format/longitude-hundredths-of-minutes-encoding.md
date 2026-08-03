---
order: "10.11"
title: Longitude Hundredths of Minutes Encoding
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The h+28 byte in the Information field contains the encoded value of the longitude hundredths of minutes, in the range 0–99 minutes. This byte takes a value in the range 28 decimal (corresponding to 0 hundredths of a minute) through 127 decimal (corresponding to 99 hundredths of a minute).

**Mic-E Longitude Hundredths of Minutes Encoding**

| Hundredths | ASCII Char | h+28 |
| :---: | :---: | :---: |
| 0  | 0x1c | 28  |
| 1  | 0x1d | 29  |
| 2  | 0x1e | 30  |
| 3  | 0x1f | 31  |
| 4  | space | 32  |
| 5  | !    | 33  |
| 6  | "    | 34  |
| 7  | #    | 35  |
| 8  | $    | 36  |
| 9  | %    | 37  |
| 10 | &    | 38  |
| 11 | '    | 39  |
| 12 | (    | 40  |
| 13 | )    | 41  |
| 14 | *    | 42  |
| 15 | +    | 43  |
| 16 | ,    | 44  |
| 17 | -    | 45  |
| 18 | .    | 46  |
| 19 | /    | 47  |
| 20 | 0    | 48  |
| 21 | 1    | 49  |
| 22 | 2    | 50  |
| 23 | 3    | 51  |
| 24 | 4    | 52  |
| 25 | 5    | 53  |
| 26 | 6    | 54  |
| 27 | 7    | 55  |
| 28 | 8    | 56  |
| 29 | 9    | 57  |
| 30 | :    | 58  |
| 31 | ;    | 59  |
| 32 | <    | 60  |
| 33 | =    | 61  |
| 34 | >    | 62  |
| 35 | ?    | 63  |
| 36 | @    | 64  |
| 37 | A    | 65  |
| 38 | B    | 66  |
| 39 | C    | 67  |
| 40 | D    | 68  |
| 41 | E    | 69  |
| 42 | F    | 70  |
| 43 | G    | 71  |
| 44 | H    | 72  |
| 45 | I    | 73  |
| 46 | J    | 74  |
| 47 | K    | 75  |
| 48 | L    | 76  |
| 49 | M    | 77  |
| 50 | N    | 78  |
| 51 | O    | 79  |
| 52 | P    | 80  |
| 53 | Q    | 81  |
| 54 | R    | 82  |
| 55 | S    | 83  |
| 56 | T    | 84  |
| 57 | U    | 85  |
| 58 | V    | 86  |
| 59 | W    | 87  |
| 60 | X    | 88  |
| 61 | Y    | 89  |
| 62 | Z    | 90  |
| 63 | [    | 91  |
| 64 | \    | 92  |
| 65 | ]    | 93  |
| 66 | ^    | 94  |
| 67 | _    | 95  |
| 68 | `    | 96  |
| 69 | a    | 97  |
| 70 | b    | 98  |
| 71 | c    | 99  |
| 72 | d    | 100 |
| 73 | e    | 101 |
| 74 | f    | 102 |
| 75 | g    | 103 |
| 76 | h    | 104 |
| 77 | i    | 105 |
| 78 | j    | 106 |
| 79 | k    | 107 |
| 80 | l    | 108 |
| 81 | m    | 109 |
| 82 | n    | 110 |
| 83 | o    | 111 |
| 84 | p    | 112 |
| 85 | q    | 113 |
| 86 | r    | 114 |
| 87 | s    | 115 |
| 88 | t    | 116 |
| 89 | u    | 117 |
| 90 | v    | 118 |
| 91 | w    | 119 |
| 92 | x    | 120 |
| 93 | y    | 121 |
| 94 | z    | 122 |
| 95 | {    | 123 |
| 96 | \|   | 124 |
| 97 | }    | 125 |
| 98 | ~    | 126 |
| 99 | DEL  | 127 |

To decode the longitude hundredths of minutes value, subtract 28 from the h+28 value.

All of the possible values are printable ASCII characters (except 0–3 and 99 hundredths of a minute).
