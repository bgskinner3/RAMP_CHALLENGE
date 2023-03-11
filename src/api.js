export default async function getData() {
  /**
   * logic to get url in step one
   */

  // const response = await fetch(
  //   "https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge"
  // );

  // const str = await response.text();
  // let temp = document.createElement("div");
  // temp.innerHTML = str;
  // let pTag = temp.querySelectorAll("section");
  // const regex_selector = new RegExp(11);
  // const regex_main = new RegExp(22);
  // const regex_article = new RegExp(33 + ".+");
  // let url = "";
  // for (const selector of pTag) {
  //   const main = selector.querySelector("main");
  //   const article = main.querySelector("article");
  //   const pValue = article.querySelector("p");
  //   const selector_has_number = regex_selector.test(
  //     selector.getAttribute("id")
  //   );
  //   const main_has_number = regex_main.test(main.getAttribute("id"));
  //   const article_has_number = regex_article.test(article.getAttribute("id"));

  //   if (selector_has_number && main_has_number && article_has_number) {
  //     url += pValue.getAttribute("value");
  //   }
  // }

  const return_url =
    "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/756e73";

  const get_english_word = await fetch(return_url).then((response) =>
    response.text()
  );

  return get_english_word;
}
