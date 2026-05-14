"use client";

import { useRef, useState } from "react";
import { PlayCircle } from "@/components/icons";

type Tile = {
  poster: string;
  src: string;
  caption: string;
  badge?: string;
};

const tiles: Tile[] = [
  {
    poster: "/images/thumbs/6cd173a0016e45f4bf6645fd64a5ded9.thumbnail.0000000000.jpg",
    src: "/videos/ugc-1.mp4",
    caption: "Ohhhh Lem, oh Lem, oh Lem...",
  },
  {
    poster: "/images/thumbs/b8df15e3934740d5b8fdc822673792c7.thumbnail.0000000000.jpg",
    src: "/videos/ugc-2.mp4",
    caption: "It makes throbbing motions...",
  },
  {
    poster: "/images/thumbs/898e92513a664b10a191cac737e4e6de.thumbnail.0000000000.jpg",
    src: "/videos/ugc-3.mp4",
    caption: "It is beautiful, it is wonderful",
  },
  {
    poster: "/images/thumbs/c6131e25558f4852ba469c24dc5d32b2.thumbnail.0000000000.jpg",
    src: "/videos/ugc-4.mp4",
    caption: "She looks innocent… but she's about to get zesty.",
    badge: "She looks innocent",
  },
];

export function UGCGrid() {
  const [playing, setPlaying] = useState<{ [idx: number]: boolean }>({});
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const togglePlay = (idx: number) => {
    const video = videoRefs.current[idx];
    if (!video) return;
    if (playing[idx]) {
      video.pause();
      setPlaying((prev) => ({ ...prev, [idx]: false }));
    } else {
      void video.play();
      setPlaying((prev) => ({ ...prev, [idx]: true }));
    }
  };

  return (
    <section className="bg-[#FCF7ED] py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {tiles.map((tile, idx) => {
          const isPlaying = playing[idx] === true;
          return (
            <div key={tile.src}>
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-black">
                <video
                  ref={(el) => {
                    videoRefs.current[idx] = el;
                  }}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  poster={tile.poster}
                  src={tile.src}
                />
                {tile.badge ? (
                  <span className="absolute top-3 left-3 bg-[#FF30CC] text-white text-xs font-display font-semibold px-3 py-1 rounded-full">
                    {tile.badge}
                  </span>
                ) : null}
                {!isPlaying ? (
                  <button
                    type="button"
                    onClick={() => togglePlay(idx)}
                    className="absolute inset-0 flex items-center justify-center"
                    aria-label="Play video"
                  >
                    <PlayCircle className="w-14 h-14 text-white drop-shadow-lg" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => togglePlay(idx)}
                    className="absolute inset-0"
                    aria-label="Pause video"
                  />
                )}
              </div>
              <p className="font-body italic text-[14px] text-[#1a1a1a] mt-3 text-center">
                &ldquo;{tile.caption}&rdquo;
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
