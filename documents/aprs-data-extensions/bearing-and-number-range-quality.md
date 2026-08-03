---
order: "7.7"
title: Bearing and Number/Range/Quality
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

DF reports contain an 8-byte field `/BRG/NRQ` that follows the CSE/SPD Data Extension, specifying the course, speed, bearing and NRQ (Number/Range/Quality) value of the report. NRQ indicates the Number of hits, the approximate Range and the Quality of the report.

For example, in:

```
...088/036/270/729...
```

course = 88 degrees, speed = 36 knots, bearing = 270 degrees, N = 7, R = 2, Q = 9.

If N is 0, then the NRQ value is meaningless. Values of N from 1 to 8 give an indication of the number of hits per period relative to the length of the time period — thus a value of 8 means 100% of all samples possible got a hit. A value of 9 for N indicates to other users that the report is manual.

The N value is not processed, but is just another indicator from the automatic DF units.

The range limits the length of the line to the original map's scale of the sending station. The range is 2^R so, for R=4, the range will be 16 miles.

Q is a single digit in the range 0–9, and provides an indication of bearing accuracy:

**Q Bearing Accuracy**

| Q | Bearing Accuracy | Q | Bearing Accuracy |
| :---: | :--- | :---: | :--- |
| 0 | Useless | 5 | < 16 deg |
| 1 | < 240 deg | 6 | < 8 deg |
| 2 | < 120 deg | 7 | < 4 deg |
| 3 | < 64 deg | 8 | < 2 deg |
| 4 | < 32 deg | 9 | < 1 deg (best) |

If the course and speed parameters are not appropriate, they should have the value `000/000` or `.../...` or `VVVVVV/VVVVVV`.
