import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Ruler, ExternalLink } from "lucide-react";
import { useLanguage } from "../i18n/LanguageProvider";

interface TattooPiece {
  id: number;
  image: string;
  title: string;
  style: string;
  duration: string;
  size: string;
  description: string;
}

const tattoos: TattooPiece[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1590246814883-57c511e7ca9d?w=600&q=80",
    title: "Shadow & Light",
    style: "Black & Grey Realism",
    duration: "5 hours",
    size: "Half sleeve",
    description:
      "A striking black and grey realism piece featuring dramatic contrast. Deep blacks seamlessly graduating to the lightest greys, creating depth and dimension that jumps off the skin.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=600&q=80",
    title: "Lion's Gaze",
    style: "Realism",
    duration: "8 hours",
    size: "Full forearm",
    description:
      "Hyper-realistic portrait of a majestic lion. Every hair, every wrinkle was meticulously translated into permanent art using single-pass shading techniques.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?w=600&q=80",
    title: "Botanical Sleeve",
    style: "Fine Line",
    duration: "6 hours",
    size: "Inner forearm",
    description:
      "Delicate botanical illustration with whisper-thin precision lines. A collection of wildflowers, ferns, and organic textures flowing naturally with the arm's contour.",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?w=600&q=80",
    title: "Sailor's Pride",
    style: "Traditional / Old School",
    duration: "3 hours",
    size: "Upper arm",
    description:
      "Bold traditional anchor and ribbon design. Thick lines and vibrant colors that will hold up beautifully for decades — a true classic with modern execution.",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1542359649-6068fbd1d18c?w=600&q=80",
    title: "Midnight Bloom",
    style: "Neo-Traditional",
    duration: "4 hours",
    size: "Thigh",
    description:
      "A neo-traditional floral piece combining bold outlines with rich, jewel-toned color palettes. Dark moody aesthetics with pops of emerald and ruby.",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=600&q=80",
    title: "Geometric Flow",
    style: "Geometric / Dotwork",
    duration: "7 hours",
    size: "Full back",
    description:
      "An intricate sacred geometry mandala design symbolizing balance and universal order. Measured to perfection with absolute symmetry, blending dotwork shading with sharp linework.",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1581780071410-37f754e0dc76?w=600&q=80",
    title: "Phoenix Rising",
    style: "Japanese / Irezumi",
    duration: "12 hours (2 sessions)",
    size: "Full sleeve",
    description:
      "A full Japanese-style phoenix sleeve with traditional wave backgrounds, cherry blossoms, and flowing fire elements. Vibrant reds, oranges, and deep blacks.",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
    title: "The Process",
    style: "Behind The Scenes",
    duration: "Varies",
    size: "In progress",
    description:
      "Behind the scenes — precision meets passion. Every session begins with meticulous preparation in a sterile, Health Canada approved environment.",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1614094082869-cd4e4b2b0e24?w=600&q=80",
    title: "Ornamental Crown",
    style: "Ornamental / Mandala",
    duration: "4 hours",
    size: "Shoulder cap",
    description:
      "An ornamental mandala shoulder piece with intricate lace-like patterns. Symmetrical precision that wraps beautifully around the natural curve of the shoulder.",
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?w=600&q=80",
    title: "Portrait Study",
    style: "Black & Grey Portrait",
    duration: "10 hours (2 sessions)",
    size: "Outer thigh",
    description:
      "A photorealistic portrait rendered entirely in black and grey. Capturing the subtle play of light across features with a level of detail that's indistinguishable from photography.",
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=600&q=80",
    title: "Abstract Ink",
    style: "Abstract / Trash Polka",
    duration: "3 hours",
    size: "Rib cage",
    description:
      "Bold abstract composition combining realistic elements with graphic typography and splatter effects. A high-contrast piece that makes an unforgettable statement.",
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600&q=80",
    title: "Minimalist Script",
    style: "Fine Line / Lettering",
    duration: "1 hour",
    size: "Collarbone",
    description:
      "Elegant fine-line lettering placed delicately along the collarbone. Custom typography designed specifically for this client's body flow and personal meaning.",
  },
];

export default function Portfolio() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<TattooPiece | null>(null);

  return (
    <section id="portfolio" className="relative py-24 lg:py-32 bg-black">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="font-display text-blood text-lg tracking-[0.3em] block mb-3">
            {t("portfolio.tag")}
          </span>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-wide text-white mb-4">
            {t("portfolio.title")}
          </h2>
          <p className="text-ash max-w-xl text-base leading-relaxed">
            {t("portfolio.desc")}
          </p>
        </motion.div>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {tattoos.map((tattoo, i) => (
            <motion.div
              key={tattoo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group cursor-pointer break-inside-avoid"
              onClick={() => setSelected(tattoo)}
            >
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src={tattoo.image}
                  alt={tattoo.title}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ height: "auto" }}
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 flex items-end">
                  <div className="p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-blood text-[10px] tracking-widest uppercase font-medium">
                      {tattoo.style}
                    </span>
                    <h3 className="font-display text-xl text-white tracking-wide mt-1">
                      {tattoo.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1.5 text-stone text-xs">
                      <span className="flex items-center gap-1">
                        <Clock size={11} />
                        {tattoo.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Ruler size={11} />
                        {tattoo.size}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* See More CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 flex justify-center"
      >
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-3 border border-white/15 text-bone text-sm tracking-wider uppercase rounded-sm hover:bg-white/5 transition-all duration-300 group"
        >
          {t("portfolio.seeMore")}
          <ExternalLink
            size={14}
            className="text-stone group-hover:text-blood transition-colors"
          />
        </a>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-surface rounded-sm max-w-5xl w-full max-h-[90vh] overflow-y-auto flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/60 rounded-full flex items-center justify-center text-bone hover:text-white hover:bg-black/80 transition-all"
              >
                <X size={20} />
              </button>

              {/* Image */}
              <div className="md:w-3/5">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="md:w-2/5 p-6 lg:p-10 flex flex-col justify-center">
                <span className="text-blood text-xs tracking-widest uppercase font-medium mb-2">
                  {selected.style}
                </span>
                <h3 className="font-display text-3xl lg:text-4xl text-white tracking-wide mb-6">
                  {selected.title}
                </h3>
                <p className="text-ash text-sm leading-relaxed mb-6">
                  {selected.description}
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <span className="text-stone text-xs tracking-wider uppercase">
                      {t("portfolio.duration")}
                    </span>
                    <span className="text-bone text-sm flex items-center gap-2">
                      <Clock size={14} className="text-blood" />
                      {selected.duration}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <span className="text-stone text-xs tracking-wider uppercase">
                      {t("portfolio.size")} / Placement
                    </span>
                    <span className="text-bone text-sm flex items-center gap-2">
                      <Ruler size={14} className="text-blood" />
                      {selected.size}
                    </span>
                  </div>
                </div>
                <a
                  href="#booking"
                  onClick={() => setSelected(null)}
                  className="w-full text-center px-6 py-3 bg-blood text-white text-sm tracking-wider uppercase rounded-sm hover:bg-red-700 transition-all duration-300 shadow-lg shadow-blood/20"
                >
                  {t("portfolio.bookSimilar")}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
