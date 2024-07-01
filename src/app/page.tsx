import Home from "./component/home";
import Navbar from "./navigation/navbar";

export default function Page() {
  return (
    <div>
      <div className="w-full overflow-hidden fixed top-0 list-none">
        <Navbar />
      </div>
      <Home />
    </div>

  );
}
