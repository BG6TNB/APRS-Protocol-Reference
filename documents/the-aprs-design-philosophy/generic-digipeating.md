---
order: "2.3"
title: Generic Digipeating
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

The power of APRS in the field derives from the use of generic digipeating, in that packets are propagated without a priori knowledge of the network. There are six powerful techniques which have evolved since APRS was introduced in 1992:

1. **RELAY** — Every VHF APRS TNC is assumed to have an alias of RELAY, so that anyone can use it as a digipeater at any time.

2. **ECHO** — HF stations use the alias of ECHO as an alternative to RELAY. (However, bearing in mind the nature of HF propagation, this has the potential of causing interference over a wide area, and should only be used sparingly by mobile stations).

3. **WIDE** — Every high-site digipeater is assumed to have an alias of WIDE for longer distance communications.

4. **TRACE** — Every high-site digipeater that is using callsign substitution is assumed to have the alias of TRACE. These digipeaters self-identify packets they digipeat by inserting their own call in place of RELAY, WIDE or TRACE.

5. **WIDEn-N** — A digipeater that supports WIDEn-N digipeating will digipeat any WIDEn-N packet that is "new" and will subtract 1 from the SSID until the SSID reaches –0. The digipeater keeps a copy or a checksum of the packet and will not digipeat that packet again within (typically) 28 seconds. This considerably reduces the number of superfluous digipeats in areas with many digipeaters in radio range of each other.

6. **GATE** — This generic callsign is used by HF-to-VHF Gateway digipeaters. Any packet heard on HF via GATE will be digipeated locally on VHF. This permits local networks to keep an eye on the national and international picture.
