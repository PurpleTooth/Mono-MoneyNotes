interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: any;
}

export const slides: Slide[] = [
  {
    id: 1,
    title: "Easy to add new transaction",
    subtitle:
      "We alway try to bringsss the best experience to users. Your transactions are recorded as quickly as possible. You will not have any difficulties when you first use MoNo.",
    image: require("../../assets/IllustrationManWithTablet.png"),
  },
  {
    id: 2,
    title: "Track income and expenses",
    subtitle:
      "details tracking transactions visually with the adding images features bills",
    image: require("../../assets/IllustrationManBigEye.png"),
  },
  {
    id: 3,
    title: "Comprehensive Report",
    subtitle:
      "Supports viewing your balance for monthly, income and expenses, debts, loans as well as reports with category.",
    image: require("../../assets/IllustrationGirlSitOnTable.png"),
  },
];

export default slides;
