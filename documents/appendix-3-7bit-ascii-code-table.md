---
order: APPENDIX 3
title: 7-BIT ASCII CODE TABLE
---

# APPENDIX 3: 7-BIT ASCII CODE TABLE

In addition to listing the ASCII character codes in their usual form, this table also expresses the hexadecimal codes for the ASCII digits 0–9 and the upper-case letters A–Z in shifted form; i.e. shifted one bit left. This is particularly useful for decoding callsigns and Mic-E position information contained in the address fields of AX.25 frames.

## Part 1: Codes 0–31 decimal (00–1f hexadecimal)

| Dec | Hex | Char | Description |
|-----|-----|------|-------------|
| 0   | 00  | NUL  | CTRL-@ |
| 1   | 01  | SOH  | CTRL-A Start of Header |
| 2   | 02  | STX  | CTRL-B Start of Text |
| 3   | 03  | ETX  | CTRL-C End of Text |
| 4   | 04  | EOT  | CTRL-D End of Transmission |
| 5   | 05  | ENQ  | CTRL-E Enquiry (Poll) |
| 6   | 06  | ACK  | CTRL-F Acknowledge |
| 7   | 07  | BEL  | CTRL-G Bell |
| 8   | 08  | BS   | CTRL-H Backspace |
| 9   | 09  | HT   | CTRL-I Horizontal Tab |
| 10  | 0a  | LF   | CTRL-J Line Feed |
| 11  | 0b  | VT   | CTRL-K Vertical Tab |
| 12  | 0c  | FF   | CTRL-L Form Feed |
| 13  | 0d  | CR   | CTRL-M Carriage Return |
| 14  | 0e  | SO   | CTRL-N Shift Out |
| 15  | 0f  | SI   | CTRL-O Shift In |
| 16  | 10  | DLE  | CRTL-P Data Link Escape |
| 17  | 11  | DC1/XON | CTRL-Q Device Control 1 |
| 18  | 12  | DC2  | CTRL-R Device Control 2 |
| 19  | 13  | DC3/XOFF | CTRL-S Device Control 3 |
| 20  | 14  | DC4  | CTRL-T Device Control 4 |
| 21  | 15  | NAK  | CTRL-U Negative Acknowledge |
| 22  | 16  | SYN  | CTRL-V Synchronous Idle |
| 23  | 17  | ETB  | CTRL-W End of Transmission Block |
| 24  | 18  | CAN  | CTRL-X Cancel |
| 25  | 19  | EM   | CTRL-Y End of Medium |
| 26  | 1a  | SUB  | CTRL-Z Substitute |
| 27  | 1b  | ESC  | ESCAPE |
| 28  | 1c  | FS   | CTRL-\ File Separator |
| 29  | 1d  | GS   | CTRL-] Group Separator |
| 30  | 1e  | RS   | CTRL-^ Record Separator |
| 31  | 1f  | US   | CTRL-_ Unit Separator |

## Part 2: Codes 32–127 decimal (20–7f hexadecimal), including hex codes for shifted 0–9/A–Z

| Dec | Hex | Char | Shifted | Dec | Hex | Char | Shifted |
|-----|-----|------|---------|-----|-----|------|---------|
| 32  | 20  | (space) |  | 80  | 50  | P | a0/a1 |
| 33  | 21  | !    | 81 51    | 81  | 51  | Q | a2/a3 |
| 34  | 22  | "    | 82 52    | 82  | 52  | R | a4/a5 |
| 35  | 23  | #    | 83 53    | 83  | 53  | S | a6/a7 |
| 36  | 24  | $    | 84 54    | 84  | 54  | T | a8/a9 |
| 37  | 25  | %    | 85 55    | 85  | 55  | U | aa/ab |
| 38  | 26  | &    | 86 56    | 86  | 56  | V | ac/ad |
| 39  | 27  | '    | 87 57    | 87  | 57  | W | ae/af |
| 40  | 28  | (    | 88 58    | 88  | 58  | X | b0/b1 |
| 41  | 29  | )    | 89 59    | 89  | 59  | Y | b2/b3 |
| 42  | 2a  | *    | 90 5a    | 90  | 5a  | Z | b4/b5 |
| 43  | 2b  | +    | 91 5b    | 91  | 5b  | [ | b6/b7 |
| 44  | 2c  | ,    | 92 5c    | 92  | 5c  | \ | b8/b9 |
| 45  | 2d  | -    | 93 5d    | 93  | 5d  | ] | ba/bb |
| 46  | 2e  | .    | 94 5e    | 94  | 5e  | ^ | bc/bd |
| 47  | 2f  | /    | 95 5f    | 95  | 5f  | _ | be/bf |
| 48  | 30  | 0    | 60/61    | 96  | 60  | ' | c0/c1 |
| 49  | 31  | 1    | 62/63    | 97  | 61  | a | c2/c3 |
| 50  | 32  | 2    | 64/65    | 98  | 62  | b | c4/c5 |
| 51  | 33  | 3    | 66/67    | 99  | 63  | c | c6/c7 |
| 52  | 34  | 4    | 68/69    | 100 | 64  | d | c8/c9 |
| 53  | 35  | 5    | 6a/6b    | 101 | 65  | e | ca/cb |
| 54  | 36  | 6    | 6c/6d    | 102 | 66  | f | cc/cd |
| 55  | 37  | 7    | 6e/6f    | 103 | 67  | g | ce/cf |
| 56  | 38  | 8    | 70/71    | 104 | 68  | h | d0/d1 |
| 57  | 39  | 9    | 72/73    | 105 | 69  | i | d2/d3 |
| 58  | 3a  | :    | 106 6a   | 106 | 6a  | j | d4/d5 |
| 59  | 3b  | ;    | 107 6b   | 107 | 6b  | k | d6/d7 |
| 60  | 3c  | <    | 108 6c   | 108 | 6c  | l | d8/d9 |
| 61  | 3d  | =    | 109 6d   | 109 | 6d  | m | da/db |
| 62  | 3e  | >    | 110 6e   | 110 | 6e  | n | dc/dd |
| 63  | 3f  | ?    | 111 6f   | 111 | 6f  | o | de/df |
| 64  | 40  | @    | 112 70   | 112 | 70  | p | e0/e1 |
| 65  | 41  | A    | 82/83    | 113 | 71  | q | e2/e3 |
| 66  | 42  | B    | 84/85    | 114 | 72  | r | e4/e5 |
| 67  | 43  | C    | 86/87    | 115 | 73  | s | e6/e7 |
| 68  | 44  | D    | 88/89    | 116 | 74  | t | e8/e9 |
| 69  | 45  | E    | 8a/8b    | 117 | 75  | u | ea/eb |
| 70  | 46  | F    | 8c/8d    | 118 | 76  | v | ec/ed |
| 71  | 47  | G    | 8e/8f    | 119 | 77  | w | ee/ef |
| 72  | 48  | H    | 90/91    | 120 | 78  | x | f0/f1 |
| 73  | 49  | I    | 92/93    | 121 | 79  | y | f2/f3 |
| 74  | 4a  | J    | 94/95    | 122 | 7a  | z | f4/f5 |
| 75  | 4b  | K    | 96/97    | 123 | 7b  | { | f6/f7 |
| 76  | 4c  | L    | 98/99    | 124 | 7c  | | | f8/f9 |
| 77  | 4d  | M    | 9a/9b    | 125 | 7d  | } | fa/fb |
| 78  | 4e  | N    | 9c/9d    | 126 | 7e  | ~ | fc/fd |
| 79  | 4f  | O    | 9e/9f    | 127 | 7f  | DEL | fe/ff |