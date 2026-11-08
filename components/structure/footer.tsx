import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMedium,
  IconBrandX,
} from "@tabler/icons-react"

const socialLinks = [
  { label: "GitHub", href: "https://github.com/ziyaudheenms", icon: IconBrandGithub },
  { label: "X", href: "https://x.com/ziyaudheenms", icon: IconBrandX },
  { label: "Medium", href: "https://medium.com/@ziyaudheenms", icon: IconBrandMedium },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ziyaudheen-ms-b73a75337/", icon: IconBrandLinkedin },
]

function Footer() {
  return (
    <footer className="w-full pt-8">
      <hr className="dotted-separator" />
      <div className="flex flex-col items-center gap-4 py-6 sm:flex-row sm:justify-between sm:gap-0 sm:py-7">
        <nav aria-label="Social links" className="-ml-1.5 flex items-center justify-center gap-1">
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
        </nav>
        <p className="font-mono text-xs text-muted-foreground sm:text-sm">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer
