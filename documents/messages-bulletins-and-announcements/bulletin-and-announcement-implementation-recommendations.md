---
order: "14.12"
title: Bulletin and Announcement Implementation Recommendations
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

Bulletins and announcements are seen as a way for all participants in an event/emergency/net to see all common information posted to the group. In this sense they are visualized as a mountain-top billboard or a bulletin board on the wall of an Emergency Operations Control Center.

Information that everyone must see is to be posted there. Information is added and removed. Space is limited. Only so much information can be posted before it becomes too busy for anyone to see everything. Thus things are supposed to be posted, updated, and cleared to keep the big billboard uncluttered and current with what everyone needs to know at the present time. It should not be cluttered with obsolete information.

This can be implemented in an APRS display system as a "Bulletin Screen". Everyone has this screen, and anyone can post or update lines on this screen. At any instant, everyone in the network sees exactly the same screen. Everything is arranged and displayed in exactly the same way. Thus, everyone, everywhere is looking at the same mountain-top billboard or bulletin board. There is no ambiguity as to who sees what information, in what order at what time.

To make this work, a number of issues should be considered:

- **Sorting:** Bulletins/Announcements are almost always multi-line, and may arrive out of sequence. They must be sorted before presentation on the Bulletin Screen, and re-sorted if necessary when each new line arrives. This includes sorting by originating callsign and Bulletin/Announcement ID.
- **Replacement:** Stations sending bulletins/announcements can send new lines to replace lines sent earlier, re-using the original Bulletin/Announcement IDs. (Note: It is only necessary to re-send replacement lines. It is not necessary to re-send the whole bulletin/announcement). Receipt of a new line with the same Bulletin/Announcement ID as one already received from the same station should result in the existing line being overwritten (replaced).
- **Clearing:** A user should be able to clear any or all of the bulletins/announcements from the Bulletin Screen once he has read them. Any bulletins/announcements that are still valid will re-appear in due course because of the way they are redundantly re-transmitted.
- **Alerts:** On receipt of any new or replacement line for the Bulletin Screen, an alarm should be sounded and re-sounded periodically until the user acknowledges it. Thus, this vital information is "pushed" to the operator. There is no excuse for not being aware of the current bulletin/announcement state — this is important in the hurried and crisis-laden scenario of an APRS event.
- **Logging:** Old bulletins/announcements should be logged in sequential APRS log files in case they are subsequently needed.
