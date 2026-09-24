# 素材命名与归档 / Asset naming

用户放入素材时，可以继续使用中文说明性文件名。原始文件保留原名；整理时先确定项目归属，再为网页副本使用稳定的英文名称。不要仅因整理命名而改变已发布资源的 URL。

## Folder ownership

| 内容 | 原始素材目录 | 网页素材目录 |
| --- | --- | --- |
| VEX 高中机器人 | `materials/vex-robotics/` | `public/media/projects/vex-robotics/` |
| SO101、遥操作、后续触觉与学习 | `materials/haptic-robot-learning/` | `public/media/projects/haptic-robot-learning/` |
| MATLAB / LabVIEW 远程控制演示 | `materials/remote-control-demo/` | `public/media/projects/remote-control-demo/` |
| MR 执行器 | `materials/mr-haptic-actuator/` | `public/media/projects/mr-haptic-actuator/` |
| 个人肖像与跨页面素材 | `materials/shared/` | `public/media/shared/` |
| 其他项目 | `materials/<project-slug>/` | `public/media/projects/<project-slug>/` |

项目归属按长期研究主题确定，而不只按“控制”“演示”等词分类。早期 SO101 演示属于同一个 `haptic-robot-learning` 项目；这并不代表早期视频已经包含学习或触觉反馈。

大型或私密原始资料放到 `materials-local/<project-slug>/`。未经确认的资料不进入公开 GitHub 仓库或网站。

## Published filenames

Use `subject-action-or-context[-view][-verified-year][-sequence][-role].extension`.

- Lowercase English, digits, and hyphens; no spaces or `finalfinal` suffixes.
- Subject identifies the hardware or project, such as `vex`, `so101`, or `mr-actuator`.
- Include a view only when useful: `overhead`, `side`, `front`.
- Include a year only when verified. Export timestamps are not project dates.
- Use `01`, `02` to distinguish separate clips; these are clip numbers, not project versions or chronology claims.
- Posters share the video basename plus `-poster.webp`.
- Browser-compatible WebM alternatives share the video's basename with `.webm`; both SO101 clips provide WebM plus MP4.
- Preserve the source aspect ratio. Use `.webp` for prepared photographs and `.mp4` for compatible web video.
- Existing VEX published filenames already fit the scheme and remain unchanged.
- A Bilibili embed stays an external URL / video ID; do not invent a local video file for it.

Examples: `so101-teleoperation-overhead-01.mp4`, `so101-teleoperation-overhead-01-poster.webp`, `vex-worlds-arena-2019.webp`.

## Current asset register

Names below are relative to each project's `materials/<project>/photos/` or `videos/`. A dash means the original is retained but not selected for the website.

| Project | User source name / ID | Published filename | Use |
| --- | --- | --- | --- |
| vex-robotics | 机器人设计 2019世锦赛.jpg | vex-robot-2019.webp | Hero / project listing |
| vex-robotics | 决赛场地照 2019世锦赛.jpg | vex-worlds-arena-2019.webp | Arena photograph |
| vex-robotics | 合照 2019世锦赛.jpg | vex-worlds-team-entrance-2019.webp | Album |
| vex-robotics | 合照3 2019世锦赛.jpg | vex-worlds-team-stairs-2019.webp | Album / Journey |
| vex-robotics | 合照4 2019世锦赛.jpg | vex-worlds-team-hall-2019.webp | Album |
| vex-robotics | 合照 天津挑战赛.jpg | vex-tianjin-team.webp | Album |
| vex-robotics | 奖杯 天津挑战赛技能联赛双冠军.jpg | vex-tianjin-awards.webp | Team awards |
| vex-robotics | 合照2 2019世锦赛.jpg | — | Similar scene; not selected |
| vex-robotics | 平时工作图.jpg | — | Laptop personal details; not selected |
| vex-robotics | 世锦赛宣传视频.mp4 | — | Large raw video; ignored by Git |
| vex-robotics | BV1tE411a7sR | External Bilibili embed | Existing video, unchanged |
| haptic-robot-learning | so101机械臂操作演示1.mp4 | so101-teleoperation-overhead-01.mp4 | Early demo / matching `-poster.webp` |
| haptic-robot-learning | so101机械臂操作演示2.mp4 | so101-teleoperation-side-02.mp4 | Early demo / matching `-poster.webp` |
| mr-haptic-actuator | device-architecture-and-operating-principle.png | mr-actuator-device-architecture.webp | Project hero / actuator architecture |
| mr-haptic-actuator | experiment-setup.png | mr-actuator-experiment-setup.webp | Experimental platform |
| mr-haptic-actuator | thermal-stability.png | mr-actuator-thermal-stability.webp | Sustained-operation result |
| mr-haptic-actuator | biomechanical-reference-validation.png | mr-actuator-biomechanical-reference-validation.webp | Model-derived reference validation |
| mr-haptic-actuator | Hardware-in-the-loop Demo.mp4 | mr-actuator-drug-infusion-hardware-in-loop-demo.mp4 | Opening system demo / matching `-poster.webp`; original retained in `materials-local/` |
| mr-haptic-actuator | demo.pdf | mr-actuator-system-communication.webp | HIL system communication diagram beside the opening video |
| shared/portrait | 11f30395fa797f076cb84b4df9a67c26.jpg | dong-qiang-imperial-campus.webp | Journey / Imperial MEng stage |

The two SO101 originals were moved from `materials/remote-control-demo/videos/` to `materials/haptic-robot-learning/videos/` without renaming or modifying their contents. The source-to-public mapping above preserves their meaning. Only the reviewed public derivatives are committed for publication; originals remain local.

## Future intake

Journey reuses the existing VEX Worlds team photograph, MR hardware-in-the-loop poster, and SO101 side-view poster from their project-owned public directories. The Imperial campus portrait is published from `materials/shared/portrait/` as a metadata-free WebP derivative.

1. Place source material in the matching project's subfolder with any helpful name.
2. Inventory and inspect it; resolve uncertain claims before adding them to a page.
3. Assign a stable public basename only to selected assets.
4. Record the source mapping here or in the project's notes, including omissions and transformations.
5. Update structured content and verify the page. Do not rename existing public assets as routine cleanup.
