import "./styles.css";

const onclicikAdd = () => {
  // テキストボックスの値を取得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div作成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  console.log(div);
  // // 未完了リストに追加
  document.getElementById("incompleate-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onclicikAdd());
