export default function Footer() {
  return (
    <footer className="container-editorial relative mt-24 border-t border-border pt-8 pb-10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-[14px] text-slate">SASE at UW–Madison</p>
        <a
          href="mailto:sase@rso.wisc.edu"
          className="text-[14px] text-slate transition-colors duration-300 hover:text-ink"
        >
          sase@rso.wisc.edu
        </a>
        <p className="text-[14px] text-slate">
          © {new Date().getFullYear()} — Madison, Wisconsin
        </p>
      </div>
    </footer>
  );
}
