import Hero from "../components/layout/Hero"
import Servizi from "./Servizi";
 
function Home() {
  return (
    <>
      <Hero />
       <section className="block md:hidden">
         <Servizi />
       </section>
    </>
  );
}

export default Home
