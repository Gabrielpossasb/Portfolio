export default function Footer() {
  return (
    <footer className="border-t border-border py-7 px-[clamp(20px,6vw,80px)] text-center text-[0.83rem] text-text-muted">
      <p>
        © {new Date().getFullYear()} Gabriel Possas · Campo Grande, MS · Atividade A3 — IHC · UFMS · Desenvolvido com React, TS e TailwindCSS
      </p>
    </footer>
  )
}
