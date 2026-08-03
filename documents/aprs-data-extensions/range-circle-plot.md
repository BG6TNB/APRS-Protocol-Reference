---
order: "7.4"
title: Range Circle Plot
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

On receipt, APRS uses the p, h, g and d codes to calculate the usable radio range (in miles), for plotting a range circle representing the local radio horizon around the station. The radio range is calculated as follows:

```
power = p^2
Height-above-average-terrain (haat) = 10 × 2^h
gain = 10^(g/10)
range = √(2 × haat × √((power/10) × (gain/2)))
```

Thus, for `PHG5132`:

```
power = 5^2 = 25 watts
haat = 10 × 2^1 = 20 feet
gain = 10^(3/10) = 1.995262
range = √(2 × 20 × √((25/10) × (1.995262/2)))
      ~ 7.9 miles
```

As the direction of maximum gain is due east, APRS will draw a range circle of radius 8 miles around the station, offset by 2.7 miles (i.e. one third of 8 miles) in an easterly direction.

::: tip Note
In the absence of any PHG data, stations are assumed to be running 10 watts to a 3dB omni antenna at 20 feet, resulting in a 6-mile radius range circle, centered on the station.
:::
