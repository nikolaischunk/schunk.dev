import me from "@/data/me.json";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="relative pt-48 pb-32 px-6 md:px-12 border-t border-[#1a1a1a]"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16 text-white">
        <div className="flex-1">
          <h2 className="text-[14vw] md:text-[10vw] leading-[0.85] font-black tracking-tighter text-white mb-12 select-none">
            LET&apos;S
            <br />
            TALK.
          </h2>
          <div className="flex flex-col gap-6">
            <a
              href={`mailto:${me.contact.email}`}
              className="text-3xl md:text-4xl font-semibold hover:text-[#78c2ad] transition-all w-fit"
            >
              {me.contact.email}
            </a>
            <p className="text-[#666666] flex items-center gap-2">
              <span className="text-[#888888]">
                <iconify-icon icon="lucide:map-pin" className="text-lg" />
              </span>
              {me.personal.location.label}. Available worldwide.
            </p>
          </div>
        </div>

        <div className="flex gap-4 md:mb-6">
          <a
            href={me.contact.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 border border-[#333333] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all hover:-translate-y-2"
            aria-label="Instagram"
          >
            <iconify-icon icon="lucide:instagram" className="text-xl" />
          </a>
          <a
            href={me.contact.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 border border-[#333333] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all hover:-translate-y-2"
            aria-label="Twitter"
          >
            <iconify-icon icon="lucide:twitter" className="text-xl" />
          </a>
          <a
            href={me.contact.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 border border-[#333333] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all hover:-translate-y-2"
            aria-label="LinkedIn"
          >
            <iconify-icon icon="lucide:linkedin" className="text-xl" />
          </a>
          <a
            href={me.contact.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 border border-[#333333] rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all hover:-translate-y-2"
            aria-label="GitHub"
          >
            <iconify-icon icon="lucide:github" className="text-xl" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-40 pt-10 border-t border-[#111111] flex flex-col md:flex-row justify-between text-[#333333] text-[10px] font-bold uppercase tracking-widest">
        <p>
          © {new Date().getFullYear()} Nikolai Schunk. All rights reserved.
        </p>
        <div className="flex gap-10 mt-6 md:mt-0">
          <a
            href={`mailto:${me.contact.secondary_email}`}
            className="hover:text-[#666666] transition-colors"
          >
            Alternative Contact
          </a>
          <a
            href={me.contact.website}
            className="hover:text-[#666666] transition-colors"
          >
            Main Site
          </a>
        </div>
      </div>
    </footer>
  );
}
