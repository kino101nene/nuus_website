import type { Locale } from "./routes";

type RealCopyCopy = {
  title: string;
  description: string;
  detailsLabel: string;
  yearLabel: string;
  placeLabel: string;
  creditLabel: string;
  desktopExperience: readonly string[];
  mobileExperience: readonly string[];
  galleryLabel: string;
  galleryImageAlt: string;
  filmAlt: string;
  conceptImageAlt: string;
  conceptLabel: string;
  concept: readonly string[];
  nextKicker: string;
  nextAction: string;
  nextLinkLabel: string;
};

export const realCopyCopy = {
  ja: {
    title: "REAL_copy — Nuus",
    description: "VRと現実の境界を問い直すインスタレーション、REAL_copy。",
    detailsLabel: "作品情報",
    yearLabel: "YEAR",
    placeLabel: "PLACE",
    creditLabel: "CREDIT",
    desktopExperience: [
      "来場者は作品を見ないままVRゴーグルを装着する。",
      "目の前に現れるのは、木の壁、枯山水の庭、テーブルと椅子、そして巨大な木の箱。",
      "箱の中へ進むと壁一面に映像が流れ、中央の穴を覗くとさらに別の映像が現れる。",
      "",
      "VRを外すと、そこには先ほどの世界の痕跡が残されている。木屑や設計図、皿、フォーク、バナナ——VRの中にあったものが、少し違う姿で現実にも存在している。"
    ],
    mobileExperience: [
      "来場者は作品を見ないままVRゴーグルを装着する。",
      "目の前に現れるのは、木の壁、枯山水の庭、テーブルと椅子、そして巨大な木の箱。",
      "箱の中へ進むと壁一面に映像が流れ、中央の穴を覗くとさらに別の映像が現れる。",
      "",
      "VRを外すと、そこには先ほどの世界の痕跡が残されている。木屑や設計図、皿、フォーク、バナナ",
      "VRの中にあったものが、少し違う姿で現実にも存在している。"
    ],
    galleryLabel: "REAL_copy 映像・展示記録",
    galleryImageAlt: "REAL_copy 展示記録",
    filmAlt: "REAL_copy — プロジェクト映像",
    conceptImageAlt: "REAL_copyのルームオーバービュー",
    conceptLabel: "五感を分解する",
    concept: [
      "REAL_copy は、VRと現実を重ね合わせ、その境界を曖昧にするインスタレーションである。",
      "",
      "視覚だけでなく、触覚・嗅覚・聴覚までを共有しながら、「何を現実として認識しているのか」を問い直す。"
    ],
    nextKicker: "他の作品",
    nextAction: "Check now",
    nextLinkLabel: "jijitsu プロジェクトを見る"
  },
  // Desktop and mobile line breaks are separate to preserve the existing composition.
  en: {
    title: "REAL_copy — Nuus",
    description: "REAL_copy is an installation that explores the boundary between VR and physical reality.",
    detailsLabel: "Project details",
    yearLabel: "YEAR",
    placeLabel: "PLACE",
    creditLabel: "CREDIT",
    desktopExperience: [
      "You put on a VR headset before seeing the actual space.",
      "Wooden walls. A karesansui garden. A table with a banana, a plate, and... is that a fork?",
      "You walk through a wall. What's this giant box? There's a hole in the middle. What happens if you look inside?",
      "You take off the headset.",
      "The walls are gone. But the room feels strangely familiar. The table is still there. So are the banana, the plate, and the fork.",
      "Were they always there?"
    ],
    mobileExperience: [
      "You put on a VR headset before seeing the actual space.",
      "Wooden walls. A karesansui garden. A table with a banana, a plate, and... is that a fork?",
      "You walk through a wall. What's this giant box? There's a hole in the middle. What happens if you look inside?",
      "You take off the headset.",
      "The walls are gone. But the room feels strangely familiar. The table is still there. So are the banana, the plate, and the fork.",
      "Were they always there?"
    ],
    galleryLabel: "REAL_copy film and exhibition documentation",
    galleryImageAlt: "REAL_copy exhibition photograph",
    filmAlt: "REAL_copy project film",
    conceptImageAlt: "Overview of the REAL_copy installation space",
    conceptLabel: "Separating the senses",
    concept: [
      "REAL_copy overlays VR and physical space, blurring the boundary between them.",
      "",
      "By sharing not only sight but also touch, smell, and sound, it asks what makes reality real."
    ],
    nextKicker: "Other work",
    nextAction: "Check now",
    nextLinkLabel: "View the jijitsu project"
  }
} satisfies Record<Locale, RealCopyCopy>;
