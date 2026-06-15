export default function About() {
  const skills = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
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
            <div className="w-[180px] h-[180px] rounded-full bg-gradient-to-br from-accent to-indigo-600 flex items-center justify-center text-[4.5rem] border-4 border-border shadow-lg">
              👨‍💻
            </div>
            <div className="text-center">
              <p className="font-bold text-base text-text">Gabriel Possas</p>
              <p className="text-xs text-text-muted mt-0.5">Estudante · Dev</p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold font-sora text-text mb-5">Minha história</h2>
            <p className="text-text-muted leading-relaxed mb-4">
              🙋‍♂️ Olá! Me chamo <strong>Gabriel Abraão Possas Borges</strong>, sou de Campo Grande - MS e tenho 19 anos. Concluí o ensino médio técnico na Escola do Sesi, tendo como curso o de <strong>Técnico em Redes de Computadores</strong>, onde meu contato com infraestrutura despertou minha paixão pela programação.
            </p>
            <p className="text-text-muted leading-relaxed mb-4">
              📚 Desde o primeiro ano me interessei por programação, iniciando meus estudos em 2019 na plataforma da Danki Code, na qual adquiri a certificação do curso de Desenvolvimento de Aplicativos.
            </p>
            <p className="text-text-muted leading-relaxed mb-4">
              💻 Conforme me aprofundava, comecei a ter interesse pelo desenvolvimento front-end e conheci a plataforma Rocketseat, onde concluí as 3 trilhas do bootcamp Discover e, posteriormente, adquiri o Ignite, especializando-me principalmente em <strong>React.js, TypeScript e Next.js</strong>, dentre muitas outras bibliotecas e tecnologias.
            </p>
            <p className="text-text-muted leading-relaxed">
              🎓 Hoje, após muitos projetos práticos desenvolvidos (incluindo assistentes inteligentes com IA e sistemas web/mobile), estou cursando o bacharelado em <strong>Sistemas de Informação na UFMS</strong> (ingresso em 2024) e estou à procura de uma oportunidade de trabalho para colocar meus conhecimentos em prática, colaborar em projetos reais e iniciar minha trajetória profissional!
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
