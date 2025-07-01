---
order: "14.5"
title: Message Groups
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

An APRS receiving station can specify special Message Groups, containing lists of callsigns that the station will read messages from (in addition to messages addressed to itself). Such Message Groups are defined internally by the user at the receiving station, and are used to filter received message traffic.

The receiving station will read all messages with the Addressee field set to ALL, QST or CQ.

The receiving station will only acknowledge messages addressed to itself, and not any messages received which were addressed to any group callsign.

Note: The receiving station will acknowledge all messages addressed to itself, even if it is operating in an Alternate Net (see Chapter 4: APRS Data in the AX.25 Destination and Source Address Fields).