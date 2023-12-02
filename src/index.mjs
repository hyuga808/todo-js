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

  // button(完了)タグ作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親にあるdivタグの完了・削除ボタンを未完了リストから削除
    const completeTarget = completeButton.closest("div");
    completeTarget.removeChild(completeButton);
    completeTarget.removeChild(deleteButton);
    // 戻すボタンを追加
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    completeTarget.appendChild(returnButton);
    // 完了したtodoリストに追加する
    document.getElementById("complete-list").appendChild(completeTarget);
  });

  // button(削除)タグ作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親にあるdivタグを未完了リストから削除
    const deleteTarget = deleteButton.closest("div");
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onclicikAdd());
