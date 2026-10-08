import type { Locale } from "./routes";

type ConceptParagraph = { before: string; emphasis?: string; after?: string };
type RabbitCopy = {
  title: string;
  seoTitle: string;
  description: string;
  heroVideoAlt: string;
  heroParagraphs: readonly ConceptParagraph[];
  visitorGalleryLabel: string;
  visitorVideoAltPrefix: string;
  conceptHeadingLines: readonly [string, string];
  conceptParagraphs: readonly ConceptParagraph[];
  filmVideoAltPrefix: string;
  rabbitBehindAlt: string;
  nextKicker: string;
  nextAction: string;
  nextLinkLabel: string;
};

export const rabbitCopy: Record<Locale, RabbitCopy> = {
  ja: {
    title: "rabbit, habbit, kubid",
    seoTitle: "rabbit, habbit, kubid — Nuus",
    description: "USAGIたちの言語を通じた世界の再構築を描く映像作品「rabbit, habbit, kubid」。",
    heroVideoAlt: "rabbit, habbit, kubidのループ映像",
    heroParagraphs: [
      { before: "映画、「rabbit, habbit, kubid」ではUSAGIの言語＝世界の再構築のプロセスが描かれる。USAGIたちの紡ぐ言葉は単なるコミュニケーンツールではなく、世界そのものを形づくる枠組みである。" }
    ],
    visitorGalleryLabel: "来場者の記録",
    visitorVideoAltPrefix: "来場者の記録",
    conceptHeadingLines: ["「見る」存在でありながら、", "いつの間にか「見られる」存在となる。"],
    conceptParagraphs: [
      { before: "侵入者たちが荒らしていったこの空間は、USAGIたちの映画「rabbit, habbit, kubid」に登場する場所であり、彼らの棲家である。" }
    ],
    filmVideoAltPrefix: "rabbit, habbit, kubid — 映像断片",
    rabbitBehindAlt: "白い服とウサギ耳の二人がベッドに座る後ろ姿",
    nextKicker: "他の作品",
    nextAction: "Check now",
    nextLinkLabel: "REAL_copy プロジェクトを見る"
  },
  // DRAFT TRANSLATION: review the conceptual language and the meaning of "USAGI" before publication.
  en: {
    title: "rabbit, habbit, kubid",
    seoTitle: "rabbit, habbit, kubid | Nuus",
    description: "rabbit, habbit, kubid is a film about how the USAGI reconstruct their world through language.",
    heroVideoAlt: "Looping film from rabbit, habbit, kubid",
    heroParagraphs: [
      { before: "The film \"rabbit, habbit, kubid\" explores how the USAGI reconstruct their world through language." },
      { before: "For the USAGI, language is more than a tool for communication. It is the very framework through which their world takes shape." }
    ],
    visitorGalleryLabel: "Visitor documentation",
    visitorVideoAltPrefix: "Visitor documentation",
    conceptHeadingLines: ["While watching,", "you become the one being watched"],
    conceptParagraphs: [
      { before: "Intruders have left this space in disarray. It is a setting in the USAGI film rabbit, habbit, kubid, and the place they call home." }
    ],
    filmVideoAltPrefix: "rabbit, habbit, kubid film fragment",
    rabbitBehindAlt: "Two figures in white with rabbit ears seen from behind on a bed",
    nextKicker: "Other work",
    nextAction: "Check now",
    nextLinkLabel: "View the REAL_copy project"
  }
};
