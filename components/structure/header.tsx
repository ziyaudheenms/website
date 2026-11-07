import { IconBrandGithub, IconBrandMedium, IconCapProjecting, IconFile } from "@tabler/icons-react"
import Icon from "../style/icon"
import Profile from "../style/profile"

function Header() {
  return (
    <header className=" w-full justify-between py-7 items-start ">
      <div className="mb-7 flex items-center gap-4">
        <Profile />
        <h1 className="font-sans text-3xl font-medium tracking-wide text-foreground">
          Ziyaudheen M S
        </h1>
      </div>
      <p className=" text-lg tracking-wide text-muted-foreground my-7">
        I am a software engineer solving problems by building thoughtful, useful products. I enjoy exploring new technologies and sharing what I learn through 
        
        <Icon
        link="https://medium.com/@ziyaudheenms"
        previewImage="/medium.png"
        backgroundColor="#000000"
        icon={<IconBrandMedium className="size-6 text-white" />}
        label="writing"
      />. 
      
      I’m language-agnostic, treating tools and languages as instruments, and can adapt quickly to any stack, architecture, or ecosystem the problem demands.
      </p>
        <p className=" text-lg tracking-wide text-muted-foreground">
          Exploring AI and its applications in 
          
           <Icon
        link="https://github.com/ziyaudheenms"
        previewImage="/github.png"
        backgroundColor="#8B5CF6"
        icon={<IconBrandGithub className="size-6 text-white" />}
        label="software development"
      />
          
          
          
          , I am passionate about leveraging AI to enhance user experiences and streamline development processes. Building 
          <Icon
          link="https://lush-harbor-uw0q.deployhtml.com/"
          previewImage="/filebox.png"
          backgroundColor="#FF0000"
          icon={<IconFile className="size-6 text-white" />}
          label="File Box"
        /> 
        
        file storage system with agentic capabilities.
        </p>
    </header>
  )
}

export default Header
