import { Hero } from "./components/hero/Index";
import { OurWorking } from "./components/how-we-work/Index";
import { JoinUs } from "./components/join-us/Index";
import { Navbar } from "./components/navbar/Navbar";
import { Services } from "./components/services/Index";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="h-auto px-5 md:px-10 lg:px-32 xl:px-32">
        <Hero />
        <div className="px-4">
          <JoinUs />
          <Services />
          <OurWorking />
        </div>
      </main>
    </>
  );
}
