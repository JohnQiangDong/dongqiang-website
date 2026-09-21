// Rebuild selected web derivatives without modifying the source photographs.
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const output = new URL('../public/media/projects/vex-robotics/', import.meta.url);
await mkdir(output, { recursive: true });
const selected = [
  ['机器人设计 2019世锦赛.jpg', 'vex-robot-2019'],
  ['决赛场地照 2019世锦赛.jpg', 'vex-worlds-arena-2019'],
  ['合照 2019世锦赛.jpg', 'vex-worlds-team-entrance-2019'],
  ['合照3 2019世锦赛.jpg', 'vex-worlds-team-stairs-2019'],
  ['合照4 2019世锦赛.jpg', 'vex-worlds-team-hall-2019'],
  ['合照 天津挑战赛.jpg', 'vex-tianjin-team'],
  ['奖杯 天津挑战赛技能联赛双冠军.jpg', 'vex-tianjin-awards'],
];
for (const [source, name] of selected) {
  const input = new URL(`../materials/vex-robotics/photos/${source}`, import.meta.url);
  const result = await sharp(fileURLToPath(input))
    .rotate().resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 83 })
    .toFile(fileURLToPath(new URL(`${name}.webp`, output)));
  console.log(`${name}.webp: ${result.width} × ${result.height}, ${result.size} bytes`);
}
