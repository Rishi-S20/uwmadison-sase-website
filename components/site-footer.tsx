import { Mail, MessageCircle } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-4 md:px-6 py-12">
      <div className="mx-auto max-w-[1600px] flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
            SASE <span className="text-muted-foreground">· UW–Madison</span>
          </span>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">
            A founding chapter of the Society of Asian Scientists and
            Engineers.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <a
            href="mailto:hello@sase-uwmadison.org"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            hello@sase-uwmadison.org
          </a>
          <a
            href="#get-involved"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Join our group chat
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-[1600px] mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} SASE at UW–Madison. Founding chapter of{" "}
        <span className="text-foreground">SASE National</span>.
      </div>
    </footer>
  )
}
