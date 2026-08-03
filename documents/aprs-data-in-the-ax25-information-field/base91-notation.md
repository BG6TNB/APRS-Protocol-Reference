---
order: "5.5"
title: Base-91 Notation
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Two APRS data formats use base-91 notation: lat/long coordinates in compressed format (see Chapter 9) and the altitude in Mic-E format (see Chapter 10).

Base-91 data is compressed into a short string of characters. All the characters are printable ASCII, with character codes in the range 33–124 decimal (i.e. `!` through `|`).

To compute the base-91 ASCII character string for a given data value, the value is divided by progressively reducing powers of 91 until the remainder is less than 91. At each step, 33 is added to the modulus of the division process to obtain the corresponding ASCII character code.

## Example

For a data value of 12345678:

```
12345678 / 91^3 = modulus 16, remainder 288542
288542   / 91^2 = modulus 34, remainder 6988
6988     / 91^1 = modulus 76, remainder 72
```

The four ASCII character codes are thus 49 (i.e. 16 + 33), 67 (i.e. 34 + 33), 109 (i.e. 76 + 33) and 105 (i.e. 72 + 33), corresponding to the ASCII string `1Cmi`.
