// src/Projects.js
function Projects() {
  return (
    <div>
      <h2>制作物</h2>

      <div>
        <h3>🎯 おみくじアプリ（JavaScript版）</h3>
        <p>HTML / CSS / JavaScript を使って制作したシンプルなおみくじアプリです。</p>
        <ul>
          <li>名前を入力して「おみくじを引く」ボタンを押すと、ランダムな運勢が表示されます。</li>
          <li>履歴の記録、出た回数の集計表示に対応しています。</li>
          <li>1%の確率で「うんち💩」が出る遊び心もあります。</li>
        </ul>
        <p>💻 使用技術：HTML, CSS, JavaScript</p>
        <p>
          🔗{" "}
          <a href="https://meitomi.github.io/omikuji-only/" target="_blank" rel="noopener noreferrer">
            デモページを見る
          </a>
          <br />
          💻{" "}
          <a href="https://github.com/meitomi/omikuji-only" target="_blank" rel="noopener noreferrer">
            GitHubリポジトリを見る
          </a>
        </p>
      </div>
    </div>
  );
}

export default Projects;
