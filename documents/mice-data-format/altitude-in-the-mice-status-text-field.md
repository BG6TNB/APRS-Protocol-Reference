---
order: "10.23"
title: Altitude in the Mic-E Status Text Field
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The Mic-E status text field can contain the station's altitude. The altitude is expressed in the form `xxx}`, where `xxx` is in meters relative to 10km below mean sea level (the deepest ocean), to base 91.

For example, to compute the `xxx` characters for an altitude of 200 feet:

```
200 feet = 61 meters = 10061 meters relative to the datum
10061 / 91^2 = 1 , remainder 1780
1780 / 91 = 19 , remainder 51
```

Adding 33 to each of the highlighted values gives 34, 52 and 84 for the ASCII codes of `xxx`.

Thus the 4-character altitude string is `"4T}`

Some examples:

```
"4T}
>"4T}
]"4T}
```
