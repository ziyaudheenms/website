import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMedium,
  IconBrandX,
  IconFile,
} from "@tabler/icons-react"
import Icon from "../style/icon"
import Profile from "../style/profile"

function Header() {
  const socialLinks = [
    { label: "GitHub", href: "https://github.com/ziyaudheenms", icon: IconBrandGithub },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/ziyaudheen-ms-b73a75337/", icon: IconBrandLinkedin },
    { label: "Medium", href: "https://medium.com/@ziyaudheenms", icon: IconBrandMedium },
    { label: "X", href: "https://x.com/ziyaudheenms", icon: IconBrandX },
  ]

  return (
    <header className="w-full items-start justify-between py-7 sm:py-9">
      <div className="flex items-center gap-3 sm:gap-4">
        <Profile />
        <div className="min-w-0">
          <h1 className="font-sans text-2xl font-medium tracking-wide text-foreground sm:text-3xl">
            Ziyaudheen M S
          </h1>
          <div className="-ml-1.5 mt-1 flex items-center gap-1">
            {socialLinks.map(({ label, href, icon: SocialIcon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="rounded-lg p-1.5 text-muted-foreground transition-colors duration-200 hover:bg-muted/60 hover:text-foreground"
              >
                <SocialIcon className="size-5" stroke={1.8} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="my-6 text-base leading-relaxed tracking-wide text-muted-foreground sm:text-lg sm:leading-normal">
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
        <p className="text-base leading-relaxed tracking-wide text-muted-foreground sm:text-lg sm:leading-normal">
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
