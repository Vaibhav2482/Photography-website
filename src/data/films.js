import filmMadhuraAnkit from "../assets/video/films/film-madhura-ankit.mp4";
import filmMadhuraAnkitPoster from "../assets/video/films/film-madhura-ankit-poster.jpg";
import filmPrasadSayali from "../assets/video/films/film-prasad-sayali.mp4";
import filmPrasadSayaliPoster from "../assets/video/films/film-prasad-sayali-poster.jpg";
import weddingBeachVideo from "../assets/video/hero-wedding-beach.mp4";
import weddingBeachPoster from "../assets/video/hero-wedding-beach-poster.jpg";
import portraitParkVideo from "../assets/video/hero-portrait-park.mp4";
import portraitParkPoster from "../assets/video/hero-portrait-park-poster.jpg";
import fashionJewelryVideo from "../assets/video/hero-fashion-jewelry.mp4";
import fashionJewelryPoster from "../assets/video/hero-fashion-jewelry-poster.jpg";

export const films = [
  {
    video: filmPrasadSayali,
    poster: filmPrasadSayaliPoster,
    title: "Prasad & Sayali",
    description: "A quiet, close-up film built from stolen glances and small gestures.",
    aspectClass: "aspect-[4/5]",
  },
  {
    video: filmMadhuraAnkit,
    poster: filmMadhuraAnkitPoster,
    title: "Madhura & Ankit",
    description: "The grand entrance — sparklers, family, and a walk down the aisle.",
    aspectClass: "aspect-[4/5]",
  },
  {
    video: weddingBeachVideo,
    poster: weddingBeachPoster,
    title: "A Beachside Ceremony",
    description: "A sunset ceremony shot beachside — coverage built around ambient light and the sound of the tide.",
    aspectClass: "aspect-video",
  },
  {
    video: portraitParkVideo,
    poster: portraitParkPoster,
    title: "Portrait in the Park",
    description: "Editorial detail work — the kind of close, patient coverage that a wide shot can't replace.",
    aspectClass: "aspect-video",
  },
  {
    video: fashionJewelryVideo,
    poster: fashionJewelryPoster,
    title: "The Details",
    description: "The small things worth slowing down for — jewelry, fabric, and light.",
    aspectClass: "aspect-video",
  },
];
