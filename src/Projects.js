// src/Projects.js
function Projects() {
  return (
    <div>
      <h2>制作物</h2>
      <div>
        <h3>🎯 おみくじアプリ</h3>
        <p>Reactで作ったシンプルなおみくじアプリです。</p>
        <p>ボタンを押すと、ランダムで結果が表示されます。</p>
        <p>💻 使用技術：React, JavaScript, CSS</p>
        {/* スクリーンショット画像を追加したい場合は↓のコメントアウトを使ってね */}
        {/* <img src="omikuji.png" alt="おみくじアプリのスクリーンショット" width="300" /> */}
        {/* GitHub リンクやデモURLがあれば↓ */}
        <p>
          🔗 <a href="https://github.com/ユーザー名/omikuji-app" target="_blank" rel="noreferrer">GitHub リポジトリ</a>
        </p>
      </div>
    </div>
  );
}

export default Projects;
