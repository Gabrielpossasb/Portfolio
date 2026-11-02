export default function About() {
  const skills = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactnative/reactnative-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' }
  ]

  const interests = [
    { name: 'Inteligência Artificial', icon: '🧠' },
    { name: 'Desenvolvimento Web', icon: '🌐' },
    { name: 'Automação', icon: '📊' },
    { name: 'Jogos & Gamificação', icon: '🎮' },
    { name: 'Open Source', icon: '📂' },
    { name: 'Computação Científica', icon: '🔬' }
  ]

  return (
    <div className="max-w-[1080px] w-full mx-auto px-[clamp(20px,5vw,40px)] py-10">
      {/* PAGE HERO */}
      <div className="border-b border-border pb-10 mb-14 mt-6">
        <p className="text-[0.75rem] font-semibold tracking-[2.5px] uppercase text-accent-light mb-2.5">
          Sobre mim
        </p>
        <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold font-sora text-text mb-3 leading-[1.2]">
          Quem sou eu
        </h1>
        <p className="text-text-muted text-base max-w-[560px]">
          Desenvolvedor, estudante e empreendedor de Campo Grande, MS.
        </p>
      </div>

      {/* APRESENTAÇÃO */}
      <section className="py-6 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-14 items-start">
          <div className="flex flex-col items-center gap-4">
            <div className="w-[180px] h-[180px] rounded-full bg-surface border border-border flex items-center justify-center">
              <span className="font-sora text-[3.4rem] font-bold text-accent-light tracking-tight">GP</span>
            </div>
            <div className="text-center">
              <p className="font-bold text-base text-text">Gabriel Possas</p>
              <p className="text-xs text-text-muted mt-1">Desenvolvedor Front-End e Mobile</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold font-sora text-text mb-5">Minha história</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              Sou <strong>Gabriel Abraão Possas Borges</strong>, desenvolvedor em Campo Grande, MS. Minha formação começou no ensino médio técnico em <strong>Redes de Computadores</strong>, na Escola do SESI / SENAI, onde o contato com infraestrutura me levou à programação.
            </p>
            <p className="text-text-muted leading-relaxed mb-4">
              Estudo programação desde 2019. Com o tempo me direcionei ao desenvolvimento front-end, com foco em <strong>React.js, TypeScript e Next.js</strong>.
            </p>
            <p className="text-text-muted leading-relaxed">
              Hoje curso o bacharelado em <strong>Sistemas de Informação na UFMS</strong>, iniciado em 2024, e desenvolvo projetos próprios que incluem assistentes com IA e sistemas web e mobile. Busco uma oportunidade para contribuir em projetos reais e iniciar minha trajetória profissional.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-t border-border my-12" />

      {/* HABILIDADES TÉCNICAS */}
      <section className="py-6 mb-12">
        <p className="text-[0.75rem] font-semibold tracking-[2.5px] uppercase text-accent-light mb-2.5">
          Habilidades
        </p>
        <h2 className="text-2xl font-bold font-sora text-text mb-10">Stack técnica</h2>
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3.5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-surface border border-border rounded-lg p-4 flex flex-col items-center gap-2.5 text-center text-xs font-semibold transition-all duration-200 hover:border-accent-light hover:-translate-y-0.5"
            >
              <img src={skill.icon} alt={skill.name} className="w-9 h-9" />
              <span className="text-text">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-t border-border my-12" />

      {/* INTERESSES */}
      <section className="py-6 pb-20">
        <p className="text-[0.75rem] font-semibold tracking-[2.5px] uppercase text-accent-light mb-2.5">
          Interesses
        </p>
        <h2 className="text-2xl font-bold font-sora text-text mb-8">O que me move</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {interests.map((interest) => (
            <div
              key={interest.name}
              className="bg-surface border border-border rounded-lg p-4 flex flex-col items-center text-center text-xs font-semibold transition-all duration-200 hover:border-accent-light"
            >
              <div className="text-[1.6rem] mb-2">{interest.icon}</div>
              <span className="text-text leading-tight">{interest.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
