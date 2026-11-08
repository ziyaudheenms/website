import Achivements from "@/components/structure/achivements"
import Experience from "@/components/structure/experience"
import Footer from "@/components/structure/footer"
import Header from "@/components/structure/header"
import Work from "@/components/structure/work"
import Writings from "@/components/structure/writings"

export default function Page() {
  return (
    <main id="top" className="min-h-svh px-4 pb-12 sm:px-10 sm:pb-16">
      <div className="mx-auto flex w-full max-w-[780px] flex-col">
        <Header />

        <hr className="dotted-separator" />

        <Work />
        <hr className="dotted-separator"/>
        <Experience />
        <hr className="dotted-separator"/>
        <Achivements />
        <hr className="dotted-separator"/>
        <Writings />
        <Footer />
       
      </div>


      
    </main>
  )
}
