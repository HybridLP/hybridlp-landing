import About from "../home/components/about"
import Hero from "../home/components/hero"
import Highlights from "../home/components/highlights"
import SharingBriefs from "../home/components/sharingBriefs"
import Testimonials from "../home/components/testimonials"

export default ()=>{
    return (<>
    <Hero />
      <main className="flex flex-col py-0 lg:px-32- bg-inherit text-white">
        <About />
        <SharingBriefs />
        <Highlights />
        <Testimonials/>
      </main>
    </>)
}