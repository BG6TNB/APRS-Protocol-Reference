---
order: APPENDIX 2
title: THE APRS SYMBOL TABLES
---

# APPENDIX 2: THE APRS SYMBOL TABLES

> Each highlighted character in the Alternate Symbol Table may be replaced with an overlay character (digit or letter) to indicate additional meaning (e.g., car number, group, etc.).

APRS uses two symbol tables to represent stations, objects, and other map features:
- **Primary Symbol Table** (ID: `/`)
- **Alternate Symbol Table** (ID: `\`)

Below are the full symbol tables as defined in the official APRS Protocol Reference. For each symbol, the left column is the Primary Symbol Table, the right column is the Alternate Symbol Table. Overlay-capable symbols in the Alternate table are marked.

---

## APRS Symbol Table (Primary & Alternate)

| `Primary Symbol` | `Description (Primary)` | `Alternate Symbol` | `Description (Alternate)` |
|:----------------:|:----------------------:|:------------------:|:-------------------------|
| `/!`             | `Police, Sheriff`      | `\!`              | `Emergency`               |
| `/"`            | `[reserved]`           | `\"`              | `[reserved]`              |
| `/#`             | `Digi (green star, white center)` | `\#` | `Digi (green star) [with overlay]` |
| `/$`             | `Phone`                | `\$`              | `Bank or ATM (green box)` |
| `/%`             | `DX Cluster`           | `\%`              |                           |
| `/&`             | `HF Gateway`           | `\&`              | `HF Gateway (diamond) [w/ overlay]` |
| `/\'`           | `Small Aircraft (SSID –7)` | `\'`         | `Crash Site`              |
| `/(`             | `Mobile Satellite Groundstation` | `\(`   | `Cloudy`                   |
| `/)`             |                        | `\)`              |                            |
| `/*`             | `Snowmobile`           | `\*`              | `Snow`                     |
| `/+`             | `Red Cross`            | `\+`              | `Church`                   |
| `/,`             | `Boy Scouts`           | `\,`              | `Girl Scouts`              |
| `/-`             | `House QTH (VHF)`      | `\-`              | `House (HF)`               |
| `/.`             | `X`                    | `\.`              | `Unknown/indeterminate position` |
| `//`             | `Dot`                  | `\/`              |                            |
| `/0`             | `Numerical Circle Ä`   | `\0`              | `Circle [with overlay]`     |
| `/1`             | `Numerical Circle Å`   | `\1`              |                             |
| `/2`             | `Numerical Circle Ç`   | `\2`              |                             |
| `/3`             | `Numerical Circle É`   | `\3`              |                             |
| `/4`             | `Numerical Circle Ñ`   | `\4`              |                             |
| `/5`             | `Numerical Circle Ö`   | `\5`              |                             |
| `/6`             | `Numerical Circle Ü`   | `\6`              |                             |
| `/7`             | `Numerical Circle á`   | `\7`              |                             |
| `/8`             | `Numerical Circle à`   | `\8`              |                             |
| `/9`             | `Numerical Circle â (Obsolete, use \0)` | `\9` | `Gas Station (blue pump)` |
| `/:`             | `Fire`                 | `\:`              | `Hail`                     |
| `/;`             | `Campground`           | `\;`              | `Park/Picnic Area`         |
| `/<`             | `Motorcycle (SSID –10)`| `\<`              | `NWS Advisory (gale flag)` |
| `/=`             | `Railroad Engine`      | `\=`              |                            |
| `/>`             | `Car (SSID –9)`        | `\>`              | `Car [with overlay]`       |
| `/?`             | `File Server`          | `\?`              | `Information Kiosk (blue box with ?)` |
| `/@`             | `Hurricane Future Prediction (dot)` | `\@` | `Hurricane/Tropical Storm` |
| `/A`             | `Aid Station`          | `\A`              | `Box [with overlay]`       |
| `/B`             | `BBS`                  | `\B`              | `Blowing Snow`             |
| `/C`             | `Canoe`                | `\C`              | `Coastguard`               |
| `/D`             |                        | `\D`              | `Drizzle`                  |
| `/E`             | `Eyeball (eye catcher)`| `\E`              | `Smoke`                    |
| `/F`             |                        | `\F`              | `Freezing Rain`            |
| `/G`             | `Grid Square (6-char)` | `\G`              | `Snow Shower`              |
| `/H`             | `Hotel (blue bed icon)`| `\H`              | `Haze`                     |
| `/I`             | `TCP/IP`               | `\I`              | `Rain Shower`              |
| `/J`             |                        | `\J`              | `Lightning`                |
| `/K`             | `School`               | `\K`              | `Kenwood`                  |
| `/L`             |                        | `\L`              | `Lighthouse`               |
| `/M`             | `MacAPRS`              | `\M`              |                            |
| `/N`             | `NTS Station`          | `\N`              | `Navigation Buoy`          |
| `/O`             | `Balloon (SSID –11)`   | `\O`              |                            |
| `/P`             | `Police`               | `\P`              | `Parking`                  |
| `/Q`             |                        | `\Q`              | `Earthquake`               |
| `/R`             | `Recreational Vehicle (SSID –13)` | `\R` | `Restaurant`                |
| `/S`             | `Space Shuttle`        | `\S`              | `Satellite/PACsat`         |
| `/T`             | `SSTV`                 | `\T`              | `Thunderstorm`             |
| `/U`             | `Bus (SSID –2)`        | `\U`              | `Sunny`                    |
| `/V`             | `ATV`                  | `\V`              | `VORTAC Nav Aid`           |
| `/W`             | `National Weather Service Site` | `\W` | `NWS Site [with overlay]`      |
| `/X`             | `Helicopter (SSID –6)` | `\X`              | `Pharmacy Rx`              |
| `/Y`             | `Yacht (sail boat) (SSID –5)` | `\Y` |                             |
| `/Z`             | `WinAPRS`              | `\Z`              |                            |
| `/[`             | `Jogger`               | `\[`              | `Wall Cloud`               |
| `/\\`           | `Triangle (DF)`        | `\\`              |                            |
| `/]`             | `PBBS`                 | `\]`              |                            |
| `/^`             | `Large Aircraft`       | `\^`              | `Aircraft [with overlay]`   |
| `/_`             | `Weather Station (blue)`| `\_`             | `WX Stn with digi (green) [w/ overlay]` |
| `/\'`           | `Dish Antenna`         | `\'`              | `Rain`                     |
| `/a`             | `Ambulance (SSID –1)`  | `\a`              | `(A=ARRL, R=RACES etc) [w/ overlay]` |
| `/b`             | `Bicycle (SSID –4)`    | `\b`              | `Blowing Dust/Sand`        |
| `/c`             |                        | `\c`              | `Civil Defense (RACES) [w/ overlay]` |
| `/d`             | `Dual Garage (Fire Department)` | `\d`   | `DX Spot (from callsign prefix)` |
| `/e`             | `Horse (equestrian)`   | `\e`              | `Sleet`                    |
| `/f`             | `Fire Truck (SSID –3)` | `\f`              | `Funnel Cloud`             |
| `/g`             | `Glider`               | `\g`              | `Gale Flags`               |
| `/h`             | `Hospital`             | `\h`              | `Ham Store`                |
| `/i`             | `IOTA (Island on the Air)` | `\i`         | `Indoor short range digi [w/ overlay]` |
| `/j`             | `Jeep (SSID –12)`      | `\j`              | `Work Zone (steam shovel)` |
| `/k`             | `Truck (SSID –14)`     | `\k`              |                            |
| `/l`             |                        | `\l`              | `Area Symbols (box, circle, etc)` |
| `/m`             | `Mic-repeater`         | `\m`              | `Value Signpost {3-char display}` |
| `/n`             | `Node`                 | `\n`              | `Triangle [with overlay]` |
| `/o`             | `Emergency Operations Center` | `\o`      | `Small Circle`              |
| `/p`             | `Rover (puppy dog)`    | `\p`              | `Partly Cloudy`             |
| `/q`             | `Grid Square shown above 128m` | `\q`    |                             |
| `/r`             | `Antenna`              | `\r`              | `Restrooms`                 |
| `/s`             | `Ship (power boat) (SSID –8)` | `\s`     | `Ship/Boat (top view) [w/ overlay]` |
| `/t`             | `Truck Stop`           | `\t`              | `Tornado`                   |
| `/u`             | `Truck (18-wheeler)`   | `\u`              | `Truck [with overlay]`      |
| `/v`             | `Van (SSID –15)`       | `\v`              | `Van [with overlay]`        |
| `/w`             | `Water Station`        | `\w`              | `Flooding`                  |
| `/x`             | `X-APRS (Unix)`        | `\x`              |                             |
| `/y`             | `Yagi at QTH`          | `\y`              |                             |
| `/z`             |                        | `\z`              |                             |
| `/{`             |                        | `\{`              | `Fog`                       |
| `/|`             | `[Reserved — TNC Stream Switch]` | `\|`  | `[Reserved — TNC Stream Switch]` |
| `/}`             |                        | `\}`              |                             |
| `/~`             | `[Reserved — TNC Stream Switch]` | `\~`  | `[Reserved — TNC Stream Switch]` |

---

**Notes:**
- Overlay characters (digits/letters) are only valid for certain symbols in the Alternate Symbol Table (see APRS spec for details).
- For full icon graphics, refer to APRS client software or the official protocol reference.
- This table is a textual summary for protocol and packet analysis.