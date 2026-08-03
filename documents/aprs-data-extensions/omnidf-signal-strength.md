---
order: "7.6"
title: Omni-DF Signal Strength
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The 7-byte DFSshgd Data Extension lets APRS localize jammers by plotting the overlapping signal strength contours of all stations hearing the signal. This Omni-DF format replaces the PHG format to indicate DF signal strength, in that the transmitter power field is replaced with the relative signal strength (s) from 0 to 9.

The DFS codes are listed in the table below:

**DFS Codes**

| shgd Code | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | Units |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| Strength | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | S-points |
| Height | 10 | 20 | 40 | 80 | 160 | 320 | 640 | 1280 | 2560 | 5120 | feet |
| Gain | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | dB |
| Directivity | omni | 45 NE | 90 E | 135 SE | 180 S | 225 SW | 270 W | 315 NW | 360 N | | deg |

For example:

```
DFS2360
```

represents a weak signal (around strength S2) heard on an omni antenna with 6 dB gain at 80 feet.

A signal strength of zero (`0`) is particularly significant, because APRS uses these `0` signal reports to draw (usually black) circles where the jammer is not heard. These black circles are extremely valuable since there will be a lot more reports from stations that do not hear the jammer than from those that do. This quickly eliminates a lot of territory.
