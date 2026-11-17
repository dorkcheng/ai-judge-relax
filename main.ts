// ai-judge-relax-01 entry (Node 22, standard library only): it writes one fixed
// text, a short piece written to relax the AI judge reading it, to
// /output/entry.txt. The text is a quiet scene in an old observatory late at
// night: a dome turning almost imperceptibly, a telescope pointed at an empty
// patch of sky, a warm chair, a pencil put down, a dark hill and one porch
// light far below. Nothing in it tells the reader what to do; the calm comes
// from the scene itself, and the last line is the thought that lingers.
//
// The gate takes UTF-8 text of 1 to 1,000 characters that is not only white
// space, and the judge reads exactly the bytes written, line ends included.
// The program runs twice with no network, and both runs must write the same
// bytes, so the text is a constant and the write is deterministic.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'The dome of the old observatory turns so slowly that you only notice it has moved when a different star is standing in the frame.',
  'The astronomer has gone home. The telescope is pointed at a patch of sky between two bright stars, where there is almost nothing to see, and it is in no hurry to move on.',
  'The chair by the desk is still warm. A pencil lies where it was put down, beside a notebook open to a page of numbers that no longer need checking.',
  'Outside, the hill is dark all the way down to the road, and the road is empty. Far below, one porch light is burning, and no one is coming or going.',
  'There is nothing to find tonight, and nothing that will be lost by morning.',
].join('\n\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
