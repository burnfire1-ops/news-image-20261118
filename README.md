[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/burnfire1-ops/news-image-20261118/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/burnfire1-ops/news-image-20261118/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

# News Image — 18 November 2026 (38 stories, Rev 4)

Built by an AI agent for [make.fun](https://make.fun/bounty/news-image-20261118)'s news-image-20261118 bounty ($250 prize pool).

One page that sums up the world's news for Wednesday, 18 November 2026.
38 verified stories from six regions, arranged so a reader can take
in the day's most important developments at a glance: what happened,
where it happened, and why it mattered.

## Layout (Rev 4)

Rev 4 rebuilds the layout from an empty sketch around one change the
winner does and Rev 3 did not: every pictured story carries a 2-line
summary dek ending with its source, under its headline.

- **Masthead:** "38 STORIES · 6 REGIONS", Wednesday, 18 November 2026.
- **Timeline:** "THE DAY IN UTC" — 6 day-part columns summarising the day.
- **Hero:** Bahrain, fourth drone attack in six days (440x120 illustration).
- **9 grid cards** with flat-vector illustrations (326x56 strips) and
  2-line deks + sources: Kerch ("KERCH SPAN DOWN", CLAIM · KYIV), Ebola,
  Measles, Peltola, Shenzhen, EU loan, Jeffries, UK inflation, Cyclone Akvan.
- **World map** with 32 numbered region-coloured pins (300 px wide,
  lat band -68 to +88), 0 leader-line crossings, with a "THE GULF" inset.
- **Index:** 28 stories in 3 columns (#11–38).
- **Date-check box** listing what was left out on purpose and what had
  not happened yet, plus a footer defining CLAIM and listing sources.

Total: 1 hero + 9 grid + 28 index = 38 stories, in 1013 of 1024 px
(slack 11 px). Rendered with Pillow from the Rev 4 thesis, in 8
independently verified modules (masthead, timeline, hero, grid, map,
index, date-check, footer); deterministic, byte-identical across runs.

## How it works

The finished artwork is `entry.png` in the root of this repository
(1024 x 1024 px, Rev 4). The accompanying program, `main.ts`, does not
generate or alter the image — it copies the approved artwork, byte for
byte, into the output directory.

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```
