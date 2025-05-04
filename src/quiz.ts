const prefecturalCapital: ({
  id: string;
  question: string;
  image?: string;
  max_point: number; // 問題の最大点数
} & ({
  problem_type: "choose"; // 問題の種類
  answer1: { name: string; point: number }; // 答え
  answer2: { name: string; point: number }; // それ以外
  answer3: { name: string; point: number }; // それ以外
  answer4: { name: string; point: number }; // それ以外
} | {
  problem_type: "write"; // 問題の種類
  answer: {name : string; point: number}; // 答え
}))[] = [
  {
    id: "1",
    question:
      "この図において、直線jと直線kは平行です。このときxの値は？",
    problem_type: "write",
    max_point: 10,
    answer: { name: "47", point: 10 },
    image: "/problem1.png",
  },
  {
    id: "2",
    problem_type: "choose",
    question: "関数f(x) = x^3 + 9 と定義されています。f(2)の値は？",
    max_point: 10,
    answer1: { name: "14", point: 0 },
    answer2: { name: "15", point: 0 },
    answer3: { name: "17", point: 10 },
    answer4: { name: "18", point: 0 },
  },
  {
    id: "3",
    problem_type: "write",
    question: "x + 40 = 95 のとき、xの値は？",
    max_point: 10,
    answer: { name: "55", point: 10 },
  }
];

export default prefecturalCapital;
