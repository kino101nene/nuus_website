import type { Locale } from "./routes";

type SocialImage = { path: string; alt: Record<Locale, string> };

export const socialImages: Record<string, SocialImage> = {
  "": {
    path: "/og/home.jpg",
    alt: {
      ja: "ベッドのそばに立つウサギの仮面をつけた人物",
      en: "A rabbit-masked figure standing beside a bed"
    }
  },
  who: {
    path: "/og/home.jpg",
    alt: {
      ja: "ベッドのそばに立つウサギの仮面をつけた人物",
      en: "A rabbit-masked figure standing beside a bed"
    }
  },
  "what/real-copy": {
    path: "/og/real-copy.jpg",
    alt: {
      ja: "木のテーブルに置かれたバナナ、皿、フォーク",
      en: "A banana, plate, and fork on a wooden table"
    }
  },
  "what/jijitsu": {
    path: "/og/jijitsu.jpg",
    alt: {
      ja: "海の映像が投影された暗い展示室と透明な箱",
      en: "A dark exhibition room with a seascape projection and transparent box"
    }
  },
  "what/rabbit": {
    path: "/og/rabbit.jpg",
    alt: {
      ja: "夕暮れの草原でベッドのそばにいるウサギの仮面をつけた二人",
      en: "Two rabbit-masked figures beside a bed in a field at dusk"
    }
  }
};
