---
order: "15.1"
title: Station Capabilities
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

A station may define a set of one or more attributes of the station, known as Station Capabilities. The station transmits its capabilities in response to an IGATE query (see below), using the < Data Type Identifier.

Each capability is a TOKEN or a TOKEN=VALUE pair. More than one capability may be on a line, with each capability separated by a comma.

Currently defined capabilities include:
- IGATE
- MSG_CNT=n
- LOC_CNT=n

where IGATE defines the station as an IGate, MSG_CNT is the number of messages transmitted, and LOC_CNT is the number of "local" stations (those to which the IGate will pass messages in the local RF network).