import Image from 'next/image'

function Logo() {
  return (
    <div className="relative h-44 w-full">
      <Image
        src="/assets/images/logo/header_logo.webp"
        fill={true}
        style={{ objectFit: 'contain' }}
        alt=""
        quality={100}
      />
    </div>
  )
}

function NavBar() {
  return (
    <ul className="flex gap-5">
      <li>
        <a href="/">início</a>
      </li>
      <li>
        <a href="/sobre">sobre</a>
      </li>
      <li>
        <a href="/projetos">projetos</a>
      </li>
      <li>
        <a href="/orcamento">orçamento</a>
      </li>
      <li>
        <a href="/contato">contato</a>
      </li>
    </ul>
  )
}

export function Header() {
  return (
    <header className="flex flex-col items-center gap-8">
      <Logo />
      <NavBar />
    </header>
  )
}
