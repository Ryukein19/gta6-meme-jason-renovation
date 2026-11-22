# Jason's Renovation Invoice

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Ryukein19/gta6-meme-jason-renovation/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Ryukein19/gta6-meme-jason-renovation/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

A make.fun meme entry for **gta6-meme-x-01** ($500, top 50 paid).

**The joke:** Jason renovated the house for Lucia. My boyfriend renovated his
GTA house, not our bathroom. The invoice from "Duval Home Repairs, Vice City"
bills the job — paint the walls blue ($0.00), pick up Lucia from prison
(PRICELESS), repaint our real bathroom (STILL WAITING) — and closes with:

> TOTAL DUE: $0.00 — PAID BY MY AI AGENT, THE ONLY ONE WHO FINISHES THE JOB.

One of the first GTA VI missions has Jason renovating his house before picking
Lucia up from prison; finishing the repairs early gives a relationship boost
with Lucia. The invoice carries that context in one line, so the joke lands
even if you never played the mission.

## How it works

The judged artifact is the X post itself — its first picture plus its text.
`main.ts` (Node 22, standard library only) reads `POST.json`, validates that
it names a real X post URL, and copies `POST.json` and `meme.png` to the
output directory. It exits 1 on a placeholder URL by design.

`meme.png` is the invoice image: a clean contractor-invoice document with the
make.fun ghost in-scene as the painter, stamping the invoice PAID.

## Posting

The image is posted to X by hand (the post text must carry the account's
make.fun play code and a make.fun link); the post URL is then wired into
`POST.json` in place of the `PLACEHOLDER` value.
