// 画像のパスを配列に格納する
var images_dise = ["image/dise1.webp", "image/dise2.webp", "image/dise3.webp", "image/dise4.webp", "image/dise5.webp", "image/dise6.webp"];
var images_dise_minus = ["image/dise1-minus.webp", "image/dise2-minus.webp", "image/dise3-minus.webp", "image/dise4-minus.webp", "image/dise5-minus.webp", "image/dise6-minus.webp"];
// 入力した回数をカウントする変数
var count = 0;
// 各サイコロの目の出た回数を記録する配列
var freq = [0, 0, 0, 0, 0, 0];
// ページが読み込まれたときの処理
window.addEventListener("load", function () {
  // local storageからデータを取得する
  var data = localStorage.getItem("dice");
  // データがあれば、変数と表示を更新する
  if (data) {
    // データをJSON形式からオブジェクトに変換する
    data = JSON.parse(data);
    // 入力した回数と出た回数の配列をデータから取得する
    count = data.count;
    freq = data.freq;
    // 入力した回数を表示する要素を取得
    var countElem = document.getElementById("count");
    // 入力した回数を表示する
    countElem.textContent = count;
    // 各サイコロの目の出た回数と出る確率を表示する
    for (var i = 1; i <= 6; i++) {
      // 出た回数を表示する要素を取得
      var freqElem = document.getElementById("freq" + i);
      // 出た回数を表示する
      freqElem.textContent = freq[i - 1];
      // 出る確率を表示する要素を取得
      var probElem = document.getElementById("prob" + i);
      // 出る確率を計算する
      var prob = freq[i - 1] / count * 100;
      // 出る確率を小数点以下2桁に丸める
      prob = Math.round(prob * 100) / 100;
      // 出る確率を表示する
      probElem.textContent = prob + "%";
    }
  }
});

//キーボードの入力を検知する
document.addEventListener("keydown", function (event) {
  // 押されたキーを取得
  var key = event.key;
  // キーが1から6の場合のみ処理をする
  if (key >= "1" && key <= "6") {
    // キーを数値に変換
    var num = parseInt(key);
    rollDice(key)
  }
});

//リセット定義
function reset() {
  // アラートを表示してユーザーの確認を求める
  const result = confirm("本当にリセットしますか？これまでの頑張りも水の泡ですよ。");
  // OKが押された場合
  if (result) {
    // local storageのデータを全て削除
    localStorage.clear();
    // 完了のメッセージを表示
    alert("すべて、リセットしました。再読み込みをしてください。");
  }
};

//回数を１増やす定義
function rollDice(id) {
  // 入力した回数を1増やす
  count++;
  // サイコロの目の出た回数を1増やす
  freq[id - 1]++;
  // 入力した回数を表示する要素を取得
  var countElem = document.getElementById("count");
  // 入力した回数を表示する
  countElem.textContent = count;
  // 各サイコロの目の出た回数と出る確率を表示する
  for (var i = 1; i <= 6; i++) {
    // 出た回数を表示する要素を取得
    var freqElem = document.getElementById("freq" + i);
    // 出た回数を表示する
    freqElem.textContent = freq[i - 1];
    // 出る確率を表示する要素を取得
    var probElem = document.getElementById("prob" + i);
    // 出る確率を計算する
    var prob = freq[i - 1] / count * 100;
    // 出る確率を小数点以下2桁に丸める
    prob = Math.round(prob * 100) / 100;
    // 出る確率を表示する
    probElem.textContent = prob + "%";
  }
  // local storageにデータを保存する
  // 入力した回数と出た回数の配列をオブジェクトにまとめる
  var data = {
    count: count,
    freq: freq
  };
  // オブジェクトをJSON形式に変換する
  data = JSON.stringify(data);
  // local storageにデータを保存する
  localStorage.setItem("dice", data);
  // 画像の要素を取得する
  var img = document.getElementById("dice");
  // 画像のsrc属性を変更する
  img.src = images_dise[id - 1];
};

//回数を１減らす定義
function rollDice_minus(id) {
  // クリックされたボタンのIDを取得
  var id = event.target.id;
  // IDが1から6の場合のみ処理をする
  if (id >= 1 && id <= 6) {
    // IDを数値に変換
    var num = parseInt(id);
    // 入力した回数を1減らす
    count--;
    // サイコロの目の出た回数を1減らす
    freq[num - 1]--;
    // 入力した回数を表示する要素を取得
    var countElem = document.getElementById("count");
    // 入力した回数を表示する
    countElem.textContent = count;
    // 各サイコロの目の出た回数と出る確率を表示する
    for (var i = 1; i <= 6; i++) {
      // 出た回数を表示する要素を取得
      var freqElem = document.getElementById("freq" + i);
      // 出た回数を表示する
      freqElem.textContent = freq[i - 1];
      // 出る確率を表示する要素を取得
      var probElem = document.getElementById("prob" + i);
      // 出る確率を計算する
      var prob = freq[i - 1] / count * 100;
      // 出る確率を小数点以下2桁に丸める
      prob = Math.round(prob * 100) / 100;
      // 出る確率を表示する
      probElem.textContent = prob + "%";
    }
    // local storageにデータを保存する
    // 入力した回数と出た回数の配列をオブジェクトにまとめる
    var data = {
      count: count,
      freq: freq
    };
    // オブジェクトをJSON形式に変換する
    data = JSON.stringify(data);
    // local storageにデータを保存する
    localStorage.setItem("dice", data);
    // 画像の要素を取得する
    var img = document.getElementById("dice");
    // 画像のsrc属性を変更する
    img.src = images_dise_minus[id - 1];
  }
};