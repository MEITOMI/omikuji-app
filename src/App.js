import Profile from './Profile';
import Projects from './Projects'; // ← 追加

function App() {
  return (
    <div>
      <h1>私のポートフォリオへようこそ！</h1>
      <Profile />
      <Projects /> {/* ← 追加 */}
    </div>
  );
}

export default App;
