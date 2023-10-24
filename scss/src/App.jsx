import CilcularProgress from "../componets/CirculaProgress/CircularProgress";
import "./app.scss";

function App() {
  return (
    <>
      <nav>nav</nav>
      <aside>aside</aside>
      <main>
        <CilcularProgress value={25} />
        <CilcularProgress value={60} />
        <CilcularProgress value={95} />
      </main>
    </>
  );
}

export default App;
