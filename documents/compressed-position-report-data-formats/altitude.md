---
order: "9.8"
title: Altitude
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

If the `T` byte indicates that the raw data originates from a GGA sentence (i.e. bits 4 and 3 of the `T` byte are `10`), then the sentence contains an altitude value, in feet. After compression, the compressed altitude data is placed in the `cs` bytes, such that:

```
altitude = 1.002^cs feet
```

For example, if the received `cs` bytes are `S]`, the computation is as follows:

- Subtract 33 from the ASCII code for each character:
  - `c = 83 – 33 = 50`
  - `s = 93 – 33 = 60`
- Multiply `c` by 91 and add `s` to obtain `cs`:
  - `cs = 50 x 91 + 60 = 4610`
- Then altitude:
  - `altitude = 1.002^4610 = 10004 feet`
