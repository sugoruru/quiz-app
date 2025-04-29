const prefecturalCapital: {
  id: string;
  question: string;
  answer1: { name: string; point: number }; // 答え
  answer2: { name: string; point: number }; // それ以外
  answer3: { name: string; point: number }; // それ以外
  answer4: { name: string; point: number }; // それ以外
}[] = [
  {
    id: "1",
    question:
      "競技プログラミングのハンドルネーム「tourist」として知られる人物の本名はどれでしょう？",
    answer1: {
      name: "ゲンナジー・ウラジーミロヴィチ・コロトケビッチ",
      point: 10,
    },
    answer2: { name: "セルゲイ・アレクサンドロヴィチ・カラセフ", point: 0 },
    answer3: { name: "イリヤ・ミハイロヴィチ・ニコライエフ", point: 0 },
    answer4: { name: "高橋・S・直大", point: 0 },
  },
  {
    id: "2",
    question: "touristは何人でしょう？",
    answer1: { name: "ベラルーシ人", point: 10 },
    answer2: { name: "日本人", point: 0 },
    answer3: { name: "ラトビア人", point: 0 },
    answer4: { name: "人類では無い", point: 0 },
  },
  {
    id: "3",
    question: "touristのhighestはいくつでしょう？(220/8/9時点)",
    answer1: { name: "4229", point: 10 },
    answer2: { name: "4231", point: 0 },
    answer3: { name: "4310", point: 0 },
    answer4: { name: "1729", point: 0 },
  },
  {
    id: "4",
    question: "touristの誕生日はいつでしょう？",
    answer1: { name: "1994年9月25日", point: 10 },
    answer2: { name: "1918年5月4日", point: 0 },
    answer3: { name: "1992年2月6日", point: 0 },
    answer4: { name: "1997年6月13日", point: 0 },
  },
  {
    id: "5",
    question: "touristの大学はどこでしょう？",
    answer1: {
      name: "サンクトペテルブルク国立情報技術・機械・光学大学",
      point: 10,
    },
    answer2: { name: "ゴメリ州立大学", point: 0 },
    answer3: { name: "マサチューセッツ工科大学", point: 0 },
    answer4: { name: "高卒", point: 0 },
  },
  {
    id: "6",
    question: "touristがIOIに初出場したのは何歳でしょう？",
    answer1: { name: "11歳", point: 10 },
    answer2: { name: "9歳", point: 0 },
    answer3: { name: "16歳", point: 0 },
    answer4: { name: "3歳", point: 0 },
  },
  {
    id: "7",
    question: "touristのX(旧Twitter)IDは何でしょう？",
    answer1: { name: "que_tourist", point: 10 },
    answer2: { name: "set_tourist", point: 0 },
    answer3: { name: "map_tourist", point: 0 },
    answer4: { name: "vec_tourist", point: 0 },
  },
  {
    id: "8",
    question: "touristの好きなスポーツは何でしょう？",
    answer1: { name: "サッカーと卓球", point: 10 },
    answer2: { name: "野球とバスケットボール", point: 0 },
    answer3: { name: "サッカーとバスケットボール", point: 0 },
    answer4: { name: "バスケットボールと卓球", point: 0 },
  },
  {
    id: "9",
    question: "touristが獲得した、IOIでの連続金メダル記録は何回でしょう？",
    answer1: { name: "6回", point: 10 },
    answer2: { name: "3回", point: 0 },
    answer3: { name: "4回", point: 0 },
    answer4: { name: "8回", point: 0 },
  },
  {
    id: "10",
    question:
      "touristが獲得した、Google Code Jamでの連続金メダルは何回でしょう？",
    answer1: { name: "7回", point: 10 },
    answer2: { name: "3回", point: 0 },
    answer3: { name: "4回", point: 0 },
    answer4: { name: "8回", point: 0 },
  },
];

export default prefecturalCapital;
