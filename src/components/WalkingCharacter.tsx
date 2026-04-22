import { useEffect, useState } from "react";

const SPRITE_URL =
  "https://ik.imagekit.io/xeft3ktqa/platformer_character_sprites_-_basic_platformer.png";

const FRAME_COUNT = 7;
const FRAME_W = 25; // source px
const FRAME_H = 130; // source px
const SCALE = 0.6; // displayed scale
const DISPLAY_W = FRAME_W * SCALE;
const DISPLAY_H = FRAME_H * SCALE;
const SPEED = 90; // px per second
const FRAME_MS = 110; // animation frame duration

const WalkingCharacter = () => {
  const [frame, setFrame] = useState(0);
  const [x, setX] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);

  // Animate sprite frames
  useEffect(() => {
    const id = window.setInterval(() => {
      setFrame((f) => (f + 1) % FRAME_COUNT);
    }, FRAME_MS);
    return () => window.clearInterval(id);
  }, []);

  // Move character along bottom border
  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      setX((prev) => {
        const max = window.innerWidth - DISPLAY_W;
        let next = prev + dir * SPEED * dt;
        if (next >= max) {
          next = max;
          setDir(-1);
        } else if (next <= 0) {
          next = 0;
          setDir(1);
        }
        return next;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [dir]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-0 z-50"
      style={{
        left: 0,
        transform: `translateX(${x}px)`,
        width: `${DISPLAY_W}px`,
        height: `${DISPLAY_H}px`,
        willChange: "transform",
      }}
    >
      <div
        style={{
          width: `${DISPLAY_W}px`,
          height: `${DISPLAY_H}px`,
          backgroundImage: `url(${SPRITE_URL})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: `-${frame * FRAME_W * SCALE}px 0px`,
          backgroundSize: `${FRAME_W * FRAME_COUNT * SCALE}px ${FRAME_H * SCALE}px`,
          imageRendering: "pixelated",
          transform: `scaleX(${dir})`,
          transformOrigin: "center",
        }}
      />
    </div>
  );
};

export default WalkingCharacter;