---
order: "14.4"
title: Multiple Acknowledgements
---

# {{$frontmatter.order}} {{ $frontmatter.title }}

If a station receives a particular message more than once, it will respond with an acknowledgement for each instance of the message.

If a station receives a message over a long path, it may respond with a reasonable number of multiple copies of the acknowledgement, to improve the chances of the originating station receiving at least one of the copies.

In either of these two situations, multiple message acknowledgements should be separated by at least 30 seconds (this is because some network components such as digipeaters will suppress duplicated messages within a 30-second period).