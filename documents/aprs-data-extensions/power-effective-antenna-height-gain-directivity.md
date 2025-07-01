---
order: "7.3"
title: Power, Effective Antenna Height/Gain/Directivity
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Power, effective antenna height, gain, and directivity are optional data extensions in APRS packets. They provide additional information about the transmitting station's radio setup, which can be useful for network planning and analysis.

## What Are These Parameters?
- **Power**: The transmitter output power, typically in watts.
- **Effective Antenna Height**: The height of the antenna above average terrain, in meters or feet.
- **Gain**: The antenna gain, usually in dB over isotropic (dBi) or dipole (dBd).
- **Directivity**: The direction the antenna is pointed, in degrees (0–359).

## Encoding in APRS
- These parameters are usually encoded as a string of numbers, often following the position or weather data.
- The format and order may vary depending on the packet type and software.

## Example
```
4903.50N/07201.75W>Test /PWR=50W/HT=10m/GAIN=6dBd/DIR=270
```
This represents:
- Power: 50 watts
- Antenna height: 10 meters
- Gain: 6 dBd
- Directivity: 270° (west)

## Usage Notes
- Not all stations report these parameters; they are optional.
- Accurate reporting helps with network diagnostics and propagation studies.
- Some compressed or alternative formats may encode these values differently.

---

Including power, antenna height, gain, and directivity in APRS packets provides valuable context for signal analysis.