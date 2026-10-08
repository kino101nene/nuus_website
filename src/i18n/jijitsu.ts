import type { Locale } from "./routes";

type SegmentedParagraph = { before: string; emphasis?: string; after?: string };
type JijitsuCopy = {
  title: string;
  seoTitle: string;
  description: string;
  roomImageAlt: string;
  heroParagraphs: readonly SegmentedParagraph[];
  roomGalleryLabel: string;
  visitorRecordAltPrefix: string;
  featureHeadingLines: readonly [string, string];
  featureParagraphs: readonly string[];
  wantedParagraphs: readonly string[];
  dreamParagraphs: readonly string[];
  wantedImageAltPrefix: string;
  dreamImageAlts: readonly [string, string, string, string];
  conceptHeading: string;
  conceptParagraphs: readonly SegmentedParagraph[];
  nextKicker: string;
  nextAction: string;
  nextLinkLabel: string;
};

export const jijitsuCopy: Record<Locale, JijitsuCopy> = {
  ja: {
    title: "jijitsu",
    seoTitle: "jijitsu — Nuus",
    description: "USAGIたちの住処を辿る体験型展示、jijitsu。",
    roomImageAlt: "ロフトとキッチンのある部屋に置かれた植物と白い布で覆われた物体",
    heroParagraphs: [
      { before: "このこじんまりとした空間には、キッチン、トイレ、ロフトが備わり、一見すると誰でも住めそうなアパートの一室のように見える。しかし、部屋の半分には白い布で覆われた土台のようなものが佇み、まず座る場所が見当たらない。" },
      {
        before: "床には土ごと置かれた植物、牛乳らしきものが入った瓶、彫刻のように形作られた粘土が点在し、",
        emphasis: "生活感がありながらも、どこか異様な気配が漂う。"
      }
    ],
    roomGalleryLabel: "jijitsu visitor records",
    visitorRecordAltPrefix: "jijitsu visitor record",
    featureHeadingLines: ["もし、あなたが", "ここに住むとしたら？"],
    featureParagraphs: [
      "来場者には、「かつてUSAGIたちという存在が住処としていたとされる空間の痕跡」が再構築されたものであると説明される。",
      "そして、こう問いかけられる。",
      "「もし、あなたがここに住むとしたら？ ここを自分なりに快適に過ごすとしたら、何をするか？」",
      "USAGIたちが残した\"らしき\"ものの用途や意味は明かされず、それらはただ、そこにある。"
    ],
    wantedParagraphs: [
      "「Wanted Criminals」 は、指名手配写真のもつフィクション性を再解釈し、デジタル処理を施して新たな文脈に置き換えたポスターシリーズである。",
      "本作では、犯罪者の「像」として機能する指名手配写真をデータとして分解し、ランダムな改変を加えることで、視覚的な明確さを揺るがし、写真が持つ意味や役割を変容させている。",
      "こうして再構築されたポスターは、求人広告やプロモーションビジュアルといった異なるフォーマットへと組み替えられ、元の写真が持っていた機能や権威を逸脱していく。",
      "情報がどのように操作され、異なる文脈の中で受容されるのか。本作は、視覚的な信頼性とその流動性を探る試みである。"
    ],
    dreamParagraphs: [
      "USAGIたちが記録していたとされる「夢の地図」。それは言葉と図形が交錯し、論理的な説明を拒む断片的な記録である。",
      "ここに描かれているのは、場所なのか、記憶なのか、それとも誰かの想像の産物なのか。見る者は、その解釈を委ねられ、自らの物語を紡ぐことになる。",
      "夢とは、語られることで形を成し、共有されることで新たな意味を持つ「Dream Mapping」は、その流動性を可視化する試みである。"
    ],
    wantedImageAltPrefix: "Wanted Criminals —",
    dreamImageAlts: [
      "写真や文字を重ねた三枚の半透明なコラージュ",
      "部屋を見下ろした写真の手前に並ぶ手書きの封筒",
      "道路に立つオレンジ色の犬を映した画面",
      "床に積まれた土と、そばに置かれた小さな箱"
    ],
    conceptHeading: "自実を考える",
    conceptParagraphs: [
      { before: "来場者は、その空間にあるものを観察し、触れ、試しながら、自分なりの解釈や物語を生み出していく。" },
      { before: "ここにあるものは、かつて存在したものなのか、それとも今ここで生まれたものなのか。\nその答えを決めるのは、ここにいる一人ひとりの視点と体験である。" },
      {
        before: "フィクションとは、",
        emphasis: "再構築された現実",
        after: "であり、そこに触れることで生まれる新たな認識こそが、自分自身の「自実（Self-reality）」となる。"
      }
    ],
    nextKicker: "他の作品",
    nextAction: "Check now",
    nextLinkLabel: "rabbit, habbit, kubid プロジェクトを見る"
  },
  // DRAFT TRANSLATION: review "Self-reality", the status of the USAGI traces, and the chapter descriptions.
  en: {
    title: "jijitsu",
    seoTitle: "jijitsu | Nuus",
    description: "jijitsu is an experiential installation tracing the home of the USAGI.",
    roomImageAlt: "A room with a loft and kitchen, plants, and objects covered in white cloth",
    heroParagraphs: [
      { before: "This compact room has a kitchen, toilet, and loft. At first glance, it could be an apartment anyone might live in. Yet half the room is occupied by blocks covered in white cloth, and the space doesn't seem designed for comfortable living." },
      {
        before: "Plants with their soil, a bottle of what looks like milk, and sculpted clay are scattered across the floor. The room feels lived in, yet ",
        emphasis: "something about it is strangely unsettling."
      }
    ],
    roomGalleryLabel: "Visitor documentation from jijitsu",
    visitorRecordAltPrefix: "jijitsu visitor record",
    featureHeadingLines: ["What if you", "lived here?"],
    featureParagraphs: [
      "You are told that this room is a reconstruction of what was once believed to be the USAGI's home.",
      "You are asked:",
      "If you were to live here, what would you do to make this place comfortable in your own way?",
      "What did these objects mean to the USAGI? How did they use them?",
      "The objects offer no answers. They are simply there, watching you ponder."
    ],
    wantedParagraphs: [
      "Wanted Criminals reinterprets the fiction held in mugshots. Digital processing places these images in new contexts as a series of posters.",
      "The mugshot, once a fixed image of a criminal, is broken into data and altered at random. Its visual certainty begins to waver, along with its meaning and function.",
      "The reconstructed images are recast as job ads and promotional visuals, slipping beyond the authority of the originals.",
      "How is information manipulated and received in a new context? The work tests the credibility of images and how easily it shifts."
    ],
    dreamParagraphs: [
      "The dream mapping, said to have been kept by the USAGI, are fragmentary records where words and shapes cross paths and resist explanation.",
      "Do they describe a place, a memory, or someone's invention? Viewers are left to interpret them and form their own stories.",
      "Dreams take shape when told and change when shared. Dream Mapping makes that fluidity visible."
    ],
    wantedImageAltPrefix: "Wanted Criminals:",
    dreamImageAlts: [
      "Three translucent collages layered over photographs and text",
      "Handwritten envelopes in front of an overhead photograph of a room",
      "A screen showing an orange dog standing on a road",
      "A pile of soil on the floor beside a small box"
    ],
    conceptHeading: "Reality vs Self-reality",
    conceptParagraphs: [
      { before: "Visitors observe, touch, and test the things in the room, creating their own readings and stories." },
      { before: "Did these things exist before, or did they come into being here? Each person's perspective and experience shapes the answer." },
      {
        before: "Fiction is ",
        emphasis: "reconstructed reality",
        after: ". What we come to know by touching it becomes our own Self-reality, jijitsu."
      }
    ],
    nextKicker: "Other work",
    nextAction: "Check now",
    nextLinkLabel: "View the rabbit, habbit, kubid project"
  }
};
