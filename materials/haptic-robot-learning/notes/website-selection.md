# SO101 demonstration selection

The user identified both clips as early SO101 operation demonstrations and requested publication. They belong to the Robot Imitation Learning research line, whose existing `haptic-robot-learning` slug and directory are retained for URL and repository stability. The Remote Control Demo project remains reserved for MATLAB/LabVIEW material.

## Sources and derivatives

- `videos/so101机械臂操作演示1.mp4` → `so101-teleoperation-overhead-01.mp4`; 720 × 1280, approximately 20.57 seconds.
- `videos/so101机械臂操作演示2.mp4` → `so101-teleoperation-side-02.mp4`; 1280 × 720, approximately 21.13 seconds.
- Both public files live in `public/media/projects/haptic-robot-learning/` and have matching `-poster.webp` assets from the frame at 3 seconds.

The files were moved from `materials/remote-control-demo/videos/` without changing their original names or contents. Sampled frames throughout each clip show hand-guided operation of one arm and motion of the second arm. The website describes this as early leader–follower teleoperation. No learning results, force feedback, precision measurements, pick-and-place success, dates, or research outcomes are asserted.

## Processing

WebM/VP9 alternatives with the same basenames are also provided for broader browser compatibility. These are encoded at CRF 32 with no scaling; MP4 copies remain available as a fallback and direct link. During local verification, the in-app browser crashed when attempting playback with both formats, so interactive playback could not be certified in that browser. File decoding is checked separately; the page uses standard native video controls.

The source video streams are already H.264 at approximately 1 Mbps. The public derivatives copy the video stream without re-encoding, preserve resolution, duration, and motion, remove incidental audio and source metadata, and place MP4 indexing at the beginning for web playback. The original audio remains in the untouched source files. Players use controls, `playsinline`, `preload="none"`, and posters; they do not autoplay.

Reproduce each derivative with FFmpeg (substitute the matching source and public basename):

```sh
ffmpeg -i SOURCE.mp4 -map 0:v:0 -c:v copy -an -map_metadata -1 -movflags +faststart OUTPUT.mp4
ffmpeg -ss 3 -i SOURCE.mp4 -frames:v 1 -c:v libwebp -quality 85 OUTPUT-poster.webp
```

No exact recording date is known. Export metadata and intake date must not be used as a project milestone. These are undated demonstrations in structured project content; future verified updates can be appended normally.
