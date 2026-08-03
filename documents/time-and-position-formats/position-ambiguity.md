---
order: "6.6"
title: Position Ambiguity
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

In some instances — for example, where the exact position is not known — the sending station may wish to reduce the number of digits of precision in the latitude and longitude. In this case, the mm and hh digits in the latitude may be progressively replaced by a space character as the amount of imprecision increases. For example:

```
4903.5 N represents latitude to nearest 1/10th of a minute.
4903.  N represents latitude to nearest minute.
490 .  N represents latitude to nearest 10 minutes.
49  .  N represents latitude to nearest degree.
```

The level of ambiguity specified in the latitude will automatically apply to the longitude as well — it is not necessary to include any space characters in the longitude.

For example, the coordinates:

```
4903.  N/07201.75W-
```

represent the position to the nearest minute. That is, the hundredths of minutes of latitude and longitude may take any value in the range 00–99.

Thus the station may be located anywhere inside a bounding box having the following corner coordinates:

| Corner | Latitude | Longitude |
| :--- | :--- | :--- |
| North West corner | 49 deg 3.99 mins N | 72 deg 1.99 mins W |
| North East corner | 49 deg 3.99 mins N | 72 deg 1.00 mins W |
| South East corner | 49 deg 3.00 mins N | 72 deg 1.00 mins W |
| South West corner | 49 deg 3.00 mins N | 72 deg 1.99 mins W |
