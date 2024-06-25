import {
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
  TiktokLogo,
  PinterestLogo,
} from '@phosphor-icons/react/dist/ssr'

function SocialLinks() {
  return (
    <ul className="flex gap-2">
      <li>
        <a href="#" title="Acesse nosso Instagram">
          <span className="inline-block rounded-md border border-zinc-500 p-1.5">
            <InstagramLogo width={16} height={16} />
          </span>
        </a>
      </li>
      <li>
        <a href="#" title="Acesse nosso Facebook">
          <span className="inline-block rounded-md border border-zinc-500 p-1.5">
            <FacebookLogo width={16} height={16} />
          </span>
        </a>
      </li>
      <li>
        <a href="#" title="Converse conosco no WhatsApp">
          <span className="inline-block rounded-md border border-zinc-500 p-1.5">
            <WhatsappLogo width={16} height={16} />
          </span>
        </a>
      </li>
      <li>
        <a href="#" title="Acesse nosso Tiktok">
          <span className="inline-block rounded-md border border-zinc-500 p-1.5">
            <TiktokLogo width={16} height={16} />
          </span>
        </a>
      </li>
      <li>
        <a href="#" title="Acesse nosso Pinterest">
          <span className="inline-block rounded-md border border-zinc-500 p-1.5">
            <PinterestLogo width={16} height={16} />
          </span>
        </a>
      </li>
    </ul>
  )
}

function CopyrightInfo() {
  return (
    <div className="text-right text-sm font-light">
      <p>
        <span>maribe arquitetura</span> • todos os direitos reservados &copy;
        2024
      </p>
      <p>
        feito com 🧡 por <span>marcos tavares</span>
      </p>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-zinc-500 px-10 py-5">
      <SocialLinks />
      <CopyrightInfo />
    </footer>
  )
}
