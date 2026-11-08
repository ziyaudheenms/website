import Job from "../style/job"

function Experience() {
  return (
    <section className="w-full pb-9 pt-9">
      <h1 className="font-sans text-lg font-medium tracking-wide text-foreground sm:text-xl">
        Through Experience I Have
      </h1>
      <div className="pb-1 pt-5">
        <Job
          company="Steyp"
          logo="/steyp.png"
          role="Master Tutor"
          years="2023 - 2026"
          color="#20a04a"
          description="Training 80+ students with the latest technological skills that are emerging in this fast growing world with assigning them with projects and tech sessions for making the students capable to move forward in this fast growing world."
          attachments={[
            {
              title: "Student Projects",
              description: "Technology-focused projects built with students.",
              image: "/github.png",
              link: "https://github.com/ziyaudheenms",
            },
            {
              title: "File Box",
              description: "Cloud storage concepts and project sessions.",
              image: "/filebox.png",
              link: "https://github.com/ziyaudheenms",
            },
            {
              title: "Cloud Canvas",
              description: "Media transformation sessions using AI tools.",
              image: "/claudCanvas.png",
              link: "https://landing-claudcanvas.vercel.app/",
            },
            {
              title: "Parlez AI",
              description: "Interview practice powered by generative AI.",
              image: "/parlezAI.png",
              link: "https://www.youtube.com/watch?v=l2oSWCDAIa4",
            },
          ]}
        />
        <Job
          company="MuLearn UCEK"
          logo="/mulearn.png"
          role="Technical Co-Lead"
          years="2025 - "
          color="#9a3cea"
          description="Worked as a backend developer for the Attendence Managment System building the logic side of the system with error managment observation system with discord, also worked as a full stack dev in the notes ucek project for the latest 2024 scheme notes."
          attachments={[
            {
              title: "AMS",
              description: "Attendance Managment System for college.",
              image: "/ams.png",
              link: "ams.mulearn.uck.ac.in",
            },
            {
              title: "Notes UCK",
              description: "System for getting access to latest notes.",
              image: "/notes.png",
              link: "https://notes.uck.ac.in/",
            },
          ]}
        />
      </div>
    </section>
  )
}

export default Experience