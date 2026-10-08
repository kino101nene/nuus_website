import type { Locale } from "./routes";

type HomeCopy = {
  title: string;
  description: string;
  heroLabel: string;
  heroVideoAlt: string;
  scrollLabel: string;
  selectedWorkLabel: string;
  exhibitionLabel: string;
  mediaArtLabel: string;
  videoGameLabel: string;
  viewMore: string;
  realCopyLinkLabel: string;
  realCopyImageAlt: string;
  jijitsuLinkLabel: string;
  jijitsuImageAlt: string;
  rabbitLinkLabel: string;
  rabbitImageAlt: string;
  comingSoonLabel: string;
  comingSoon: string;
};

export const homeCopy = {
  ja: {
    title: "Nuus",
    description: "本質と現象にN軸をもって作品を作るクリエイティブ集団、Nuus。",
    heroLabel: "Nuus introduction",
    heroVideoAlt: "Nuusのイントロ映像",
    scrollLabel: "Selected workへ移動",
    selectedWorkLabel: "Selected work",
    exhibitionLabel: "EXHIBTION",
    mediaArtLabel: "MEDIA ART",
    videoGameLabel: "VIDEO GAME",
    viewMore: "View more",
    realCopyLinkLabel: "REAL_copyの詳細を見る",
    realCopyImageAlt: "REAL_copy — project documentation",
    jijitsuLinkLabel: "jijitsuの詳細を見る",
    jijitsuImageAlt: "jijitsu — exhibition documentation",
    rabbitLinkLabel: "rabbit, habbit, kubidの詳細を見る",
    rabbitImageAlt: "rabbit, habbit, kubid — film still",
    comingSoonLabel: "Video Game project coming soon",
    comingSoon: "Coming soon"
  },
  // DRAFT TRANSLATION: English SEO description and accessibility wording need editorial review.
  en: {
    title: "Nuus",
    description: "Nuus is a creative collective making work that approaches essence and phenomena from an N-axis perspective.",
    heroLabel: "Nuus introduction",
    heroVideoAlt: "Nuus introduction film",
    scrollLabel: "Go to selected work",
    selectedWorkLabel: "Selected work",
    exhibitionLabel: "EXHIBITION",
    mediaArtLabel: "MEDIA ART",
    videoGameLabel: "VIDEO GAME",
    viewMore: "View more",
    realCopyLinkLabel: "View the REAL_copy project",
    realCopyImageAlt: "REAL_copy project documentation",
    jijitsuLinkLabel: "View the jijitsu project",
    jijitsuImageAlt: "jijitsu exhibition documentation",
    rabbitLinkLabel: "View the rabbit, habbit, kubid project",
    rabbitImageAlt: "Still from rabbit, habbit, kubid",
    comingSoonLabel: "Video game project coming soon",
    comingSoon: "Coming soon"
  }
} satisfies Record<Locale, HomeCopy>;
