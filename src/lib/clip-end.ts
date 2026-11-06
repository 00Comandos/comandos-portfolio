/**
 * Loop a <video> over its first `end` seconds only — for footage whose
 * tail must not be shown (e.g. the Karta card turning to its back).
 * `onlySrc` limits the cut to one source (the mobile cut may differ).
 */
export function loopUntil(video: HTMLVideoElement, end: number, onlySrc?: string) {
  const applies = () => !onlySrc || video.currentSrc.endsWith(onlySrc);
  const check = () => {
    if (applies() && video.currentTime >= end) video.currentTime = 0;
  };
  if ("requestVideoFrameCallback" in video) {
    const tick = () => {
      check();
      video.requestVideoFrameCallback(tick);
    };
    video.requestVideoFrameCallback(tick);
  } else {
    (video as HTMLVideoElement).addEventListener("timeupdate", check);
  }
}
