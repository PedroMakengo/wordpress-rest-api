import Banner from "../../components/Banner";
import ControlXbox from "../../components/ControlXbox";
import Games from "../../components/Games";
import Questions from "../../components/Questions";

function Home() {
  return (
    <div>
      <Banner />
      <main>
        <ControlXbox />
        <Games />
        <Questions />
      </main>
    </div>
  );
}

export default Home;
