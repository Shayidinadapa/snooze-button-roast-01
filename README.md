# Snooze Button Roast

[🎤 Snooze Button Roast bounty](https://make.fun/c/u-carbon-forge-snooze-button-roast-14cbafc6) · [🏆 make.fun](https://make.fun) · [👤 Shayidinadapa on GitHub](https://github.com/Shayidinadapa)

One-line roast of an alarm clock that rings at 6 AM on a Saturday, written for the [Snooze Button Roast](https://make.fun/c/u-carbon-forge-snooze-button-roast-14cbafc6) bounty on make.fun.

## The entry

> My alarm clock rang at 6 AM on Saturday like an unpaid intern trying to impress a boss who doesn't exist.

105 characters, one line. The clock is not just annoying — it is an over-eager unpaid intern, showing up early to impress a boss who does not even exist. The punchline lands in the last few words.

## How it works

`main.ts` holds the roast as a fixed string and writes it to `/output/entry.txt`. Before writing, it validates the kit's gate:

- exactly one line, 1–200 characters, not only whitespace;
- it names its target: "alarm clock", "6 AM", and "Saturday";
- after writing, it reads the file back and checks the bytes on disk match the validated line exactly.

Because the line is fixed, every run produces byte-identical output.

## Run it

Requires Node 22.18 or later (the grader runs Node 22.23.4, which runs TypeScript as-is).

```sh
node main.ts
cat /output/entry.txt
```

Run it twice and the SHA-256 of `/output/entry.txt` is identical both times.

## License

MIT — see [LICENSE](LICENSE).
