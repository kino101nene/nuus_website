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
    title: "Nuus（ヌース） | クリエイティブ集団",
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
    realCopyImageAlt: "木のテーブルに置かれたバナナ、皿、フォークの造形物と、壁の白黒模様",
    jijitsuLinkLabel: "jijitsuの詳細を見る",
    jijitsuImageAlt: "海の映像が投影された暗い展示室と床の透明な箱",
    rabbitLinkLabel: "rabbit, habbit, kubidの詳細を見る",
    rabbitImageAlt: "夕暮れの草原で、ベッドのそばにいるウサギの仮面をつけた二人",
    comingSoonLabel: "Video Game project coming soon",
    comingSoon: "Coming soon"
  },
  // DRAFT TRANSLATION: English SEO description and accessibility wording need editorial review.
  en: {
    title: "Nuus | Creative Collective",
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
    realCopyImageAlt: "Sculpted banana, plate, and fork on a wooden table beneath black-and-white wall markings",
    jijitsuLinkLabel: "View the jijitsu project",
    jijitsuImageAlt: "A dark gallery with a seascape projection and a transparent box on the floor",
    rabbitLinkLabel: "View the rabbit, habbit, kubid project",
    rabbitImageAlt: "Two rabbit-masked figures beside a bed in a field at dusk",
    comingSoonLabel: "Video game project coming soon",
    comingSoon: "Coming soon"
  }
} satisfies Record<Locale, HomeCopy>;
