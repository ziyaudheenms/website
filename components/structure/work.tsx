"use client"

import { IconCloudComputing, IconFile3d, IconNetwork, IconRobotFace } from "@tabler/icons-react"
import { useState } from "react"

import Project from "../style/project"

function Work() {
  const [openProject, setOpenProject] = useState<string | null>("pulsegrid-1")

  const toggleProject = (id: string) => {
    setOpenProject((current) => (current === id ? null : id))
  }

  return (
    <section className="w-full py-9">
      <h1 className="font-sans text-lg font-medium tracking-wide text-foreground sm:text-xl">
        Things What I Do
      </h1>

      <Project
        id="pulsegrid-1"
        icon={<IconNetwork className="size-6 text-white" stroke={2} />}
        title="PulseGrid"
        caption="Be Updated With Following Digital Minimalism"
        image="/github.png"
        description="Your one-stop solution to stay updated in a fast-pacing world—giving you a clear picture of what's happening, every 8 hours. Digital Minimalism followed information aggregator platform you need."
        link="https://github.com/ziyaudheenms/PulseGrid"
        color="#d80205"
        isOpen={openProject === "pulsegrid-1"}
        onToggle={toggleProject}
      />
      <Project
        id="filebox"
        icon={<IconFile3d className="size-6 text-white" stroke={2} />}
        title="File Box"
        caption="Cloud File Storage With End to End Encryption"
        image="/filebox.png"
        description="FileBox is an Software that deals with the cloud storage of files.High-performance cloud storage and collaboration software for modern needs. Sync, share, and manage your assets in one place."
        link="shy-maple-ebmu.deployhtml.com/"
        color="#0021fc"
        isOpen={openProject === "filebox"}
        onToggle={toggleProject}
      />
      <Project
        id="cloudCanvas"
        icon={<IconCloudComputing className="size-6 text-white" stroke={2} />}
        title="Cloud Canvas"
        caption="Ultimate solution for non techies to transform your media"
        image="/claudCanvas.png"
        description="Complex transformations with generative AI for media is made easy for common people with Our Platform CLAUDCANVAS. It's a platform through which we can perform various types of transformations we need using the capabilities we provide through AI. Through CLAUDCANVAS we can perform what ever changes we need in our images , videos and audios."
        link="https://landing-claudcanvas.vercel.app/"
        color="#fc4f00"
        isOpen={openProject === "cloudCanvas"}
        onToggle={toggleProject}
      />
      <Project
        id="pulsegrid-4"
        icon={<IconRobotFace className="size-6 text-white" stroke={2} />}
        title="Parlez AI"
        caption="Get Ultimate Interview Practice & filter out with contineous evaluation"
        image="/parlezAI.png"
        description="introducing a virtual interviewer powered by LLM so that to get a great knowledge based interviewer. Since this is a virtual interviewer you can practice any interviews as much as you need with the complete seriousness of the job , because we will provide the virtual interviewer with the job descriptions and other details."
        link="https://www.youtube.com/watch?v=l2oSWCDAIa4"
        color="#000"
        isOpen={openProject === "pulsegrid-4"}
        onToggle={toggleProject}
      />
    </section>
  )
}

export default Work
