export default function Resume() {
  const education = [
    {
      date: '2024 — presente',
      title: 'Bacharelado em Sistemas de Informação',
      subtitle: 'Universidade Federal de Mato Grosso do Sul — UFMS · Campo Grande, MS',
      description: 'Cursando disciplinas de Fundamentos Matemáticos, Organização de Computadores, Banco de Dados, Inteligência Artificial e Interação Humano-Computador.',
      tags: ['OC', 'IHC', 'IA', 'BD', 'FMC']
    },
    {
      date: '2019 — 2021',
      title: 'Ensino Médio Técnico em Redes de Computadores',
      subtitle: 'Escola do SESI / SENAI · Campo Grande, MS',
      description: 'Formação técnica com foco em redes de computadores, infraestrutura e suporte técnico, onde nasceu meu interesse por tecnologia e programação.'
    }
  ]

  const experience = [
    {
      date: '08/2025 — 03/2026',
      title: 'Técnico em Manutenção de Celulares e Computadores',
      subtitle: 'ConsertaSmart',
      description: 'Manutenção e suporte técnico em celulares, tablets, notebooks e computadores: troca de telas e baterias, diagnósticos, formatação, instalação de sistemas operacionais, manutenção preventiva e corretiva, além de atendimento ao cliente.'
    },
    {
      date: '09/2023 — 05/2025',
      title: 'Operador de Caixa',
      subtitle: 'Lojas Daury',
      description: 'Único desenvolvedor do projeto: criei do zero um app mobile interno de treinamento e gestão de colaboradores em React Native, TypeScript e Firebase. Como caixa: controle de caixa, conferência de valores, gestão de crediários e fechamento financeiro diário das unidades.',
      tags: ['React Native', 'TypeScript', 'Firebase']
    },
    {
      date: '06/2022 — 12/2022',
      title: 'Desenvolvedor de Software',
      subtitle: 'Erickson Martinez Consultoria',
      description: 'Desenvolvimento e manutenção de sistemas, incluindo um site para gerenciamento de atividades de um restaurante e uma plataforma que transformava apresentações em páginas web estilizadas, em vez de PDFs.'
    }
  ]

  const personalProjects = [
    {
      icon: '🤖',
      title: 'JARVIS — Assistente Pessoal com IA',
      github: 'https://github.com/Gabrielpossasb/jarvis-whatsapp',
      description: 'Assistente que recebe texto, áudio, imagem ou PDF e devolve dado organizado. Gerencia tarefas, lançamentos financeiros, estoque da loja e a rotina acadêmica: matérias, provas e atividades. Acessível pelo WhatsApp e por interface web.',
      tags: ['Node.js', 'PostgreSQL', 'React', 'LLM']
    },
    {
      icon: '💬',
      title: 'Motor de Atendimento',
      github: 'https://github.com/Gabrielpossasb/MOTOR_DE_ATENDIMENTO_POR_IA',
      description: 'Atendimento automatizado por WhatsApp para comércio local, com painel de operação: taxa de resolução, custo por resposta, lacunas na base de conhecimento e fila de handoff para atendente humano.',
      tags: ['Node.js', 'LLM', 'WhatsApp API']
    },
    {
      icon: '🍊',
      title: 'Polpa Santa Helena',
      github: 'https://github.com/Gabrielpossasb/Polpa_Santa_Helena',
      demo: 'https://polpasantahelena.com.br',
      description: 'Catálogo online de uma distribuidora de polpas de fruta, com pedido direto pelo WhatsApp. Inclui pipeline próprio de processamento de imagens em Node com sharp.',
      tags: ['React 19', 'TypeScript', 'Tailwind 4', 'Vite']
    },
    {
      icon: '🎬',
      title: 'Resumidor de Vídeo com IA',
      github: 'https://github.com/Gabrielpossasb/RESUMIDOR_DE_VIDEO',
      description: 'Transforma vídeo longo em resumo estruturado: busca a legenda, divide em blocos, resume cada bloco com um modelo leve e consolida com um modelo mais forte, reduzindo custo de token sem perder o contexto do todo.',
      tags: ['Node.js', 'LLM', 'Pipeline']
    },
    {
      icon: '💼',
      title: 'Portfólio Pessoal',
      demo: 'https://portfolio-gabrielpossasb.vercel.app',
      description: 'Portfólio profissional desenvolvido em React com TypeScript e TailwindCSS, hospedado na Vercel com deploy contínuo via GitHub.',
      tags: ['React', 'TypeScript', 'TailwindCSS']
    }
  ]

  const skills = [
    { icon: '🌐', title: 'Frontend', items: 'React, TypeScript, TailwindCSS, HTML5, CSS3' },
    { icon: '📱', title: 'Mobile', items: 'React Native, TypeScript, Firebase' },
    { icon: '⚙️', title: 'Backend', items: 'Node.js, Express, Python, REST APIs' },
    { icon: '🗄️', title: 'Banco de Dados', items: 'PostgreSQL, Supabase, Firebase, SQL' },
    { icon: '☁️', title: 'DevOps / Cloud', items: 'Git, GitHub, Railway, Vercel, deploy contínuo' },
    { icon: '🤖', title: 'IA & Automação', items: 'RAG, Tool Calling, OpenAI API, automação de processos' }
  ]

  return (
    <div className="max-w-[1080px] w-full mx-auto px-[clamp(20px,5vw,40px)] py-10">
      {/* PAGE HERO */}
      <div className="border-b border-border pb-10 mb-14 mt-6 flex justify-between items-end flex-wrap gap-5">
        <div>
          <p className="text-[0.75rem] font-semibold tracking-[2.5px] uppercase text-accent-light mb-2.5">
            Currículo
          </p>
          <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold font-sora text-text leading-[1.2]">
            Realizações Acadêmicas<br />e Profissionais
          </h1>
        </div>
        <a
          href="/Gabriel_Possas_Curriculo_Dev.pdf"
          download="Gabriel_Possas_Curriculo_Dev.pdf"
          className="inline-flex items-center gap-2 px-5 py-3 border border-border hover:border-accent-light hover:text-accent-light bg-transparent text-text rounded-lg font-dm-sans text-sm font-semibold transition-all duration-180 cursor-pointer"
        >
          ⬇ Baixar PDF
        </a>
      </div>

      {/* FORMAÇÃO */}
      <section className="py-6 mb-12">
        <p className="text-[0.75rem] font-semibold tracking-[2.5px] uppercase text-accent-light mb-2.5">
          Formação
        </p>
        <h2 className="text-2xl font-bold font-sora text-text mb-9">Educação</h2>
        <div className="relative pl-7 before:content-[''] before:absolute before:left-[7px] before:top-2 before:bottom-0 before:w-[2px] before:bg-border">
          {education.map((item) => (
            <div key={item.title} className="relative mb-9 last:mb-0 before:content-[''] before:absolute before:left-[-24px] before:top-1.5 before:w-2.5 before:h-2.5 before:rounded-full before:bg-accent before:border-2 before:border-bg before:ring-2 before:ring-accent">
              <p className="text-[0.78rem] text-accent-light font-semibold tracking-wider mb-1">
                {item.date}
              </p>
              <p className="text-base font-bold text-text mb-1">{item.title}</p>
              <p className="text-[0.875rem] text-text-muted mb-2">{item.subtitle}</p>
              <p className="text-[0.875rem] text-text-muted leading-relaxed mb-3">
                {item.description}
              </p>
              {item.tags && (
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="inline-block px-2.5 py-0.5 bg-white/5 text-text-muted rounded-full text-[0.72rem] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <hr className="border-t border-border my-12" />

      {/* EXPERIÊNCIA PROFISSIONAL */}
      <section className="py-6 mb-12">
        <p className="text-[0.75rem] font-semibold tracking-[2.5px] uppercase text-accent-light mb-2.5">
          Experiência
        </p>
        <h2 className="text-2xl font-bold font-sora text-text mb-9">Experiência Profissional</h2>
        <div className="relative pl-7 before:content-[''] before:absolute before:left-[7px] before:top-2 before:bottom-0 before:w-[2px] before:bg-border">
          {experience.map((item) => (
            <div key={item.title} className="relative mb-9 last:mb-0 before:content-[''] before:absolute before:left-[-24px] before:top-1.5 before:w-2.5 before:h-2.5 before:rounded-full before:bg-accent before:border-2 before:border-bg before:ring-2 before:ring-accent">
              <p className="text-[0.78rem] text-accent-light font-semibold tracking-wider mb-1">
                {item.date}
              </p>
              <p className="text-base font-bold text-text mb-1">{item.title}</p>
              <p className="text-[0.875rem] text-text-muted mb-2">{item.subtitle}</p>
              <p className="text-[0.875rem] text-text-muted leading-relaxed mb-3">
                {item.description}
              </p>
              {item.tags && (
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="inline-block px-2.5 py-0.5 bg-white/5 text-text-muted rounded-full text-[0.72rem] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <hr className="border-t border-border my-12" />

      {/* PROJETOS PESSOAIS */}
      <section className="py-6 mb-12">
        <p className="text-[0.75rem] font-semibold tracking-[2.5px] uppercase text-accent-light mb-2.5">
          Projetos
        </p>
        <h2 className="text-2xl font-bold font-sora text-text mb-9">Projetos Pessoais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {personalProjects.map((project) => (
            <div
              key={project.title}
              className="bg-surface border border-border rounded-card p-6 flex flex-col gap-3.5 transition-all duration-200 hover:border-accent-light/45 hover:-translate-y-[3px]"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-[1.6rem]">{project.icon}</span>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.8rem] text-text-muted border border-border rounded-md px-2.5 py-1 transition-all duration-180 hover:text-accent-light hover:border-accent-light"
                    >
                      GitHub ↗
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.8rem] text-text-muted border border-border rounded-md px-2.5 py-1 transition-all duration-180 hover:text-accent-light hover:border-accent-light"
                    >
                      Ver site ↗
                    </a>
                  )}
                </div>
              </div>

              <div className="flex-grow">
                <h3 className="text-[1.05rem] font-bold text-text mb-1.5 font-sora">{project.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="inline-block px-3 py-1 bg-accent-dim text-accent-light rounded-full text-[0.75rem] font-semibold tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-t border-border my-12" />

      {/* COMPETÊNCIAS (HABILIDADES TÉCNICAS) */}
      <section className="py-6 mb-12">
        <p className="text-[0.75rem] font-semibold tracking-[2.5px] uppercase text-accent-light mb-2.5">
          Competências
        </p>
        <h2 className="text-2xl font-bold font-sora text-text mb-9">Habilidades Técnicas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="bg-surface border border-border rounded-card p-6 flex flex-col gap-2 transition-all duration-200 hover:border-accent-light"
            >
              <p className="text-[1.4rem]">{skill.icon}</p>
              <h3 className="text-base font-bold text-text font-sora">{skill.title}</h3>
              <p className="text-[0.85rem] text-text-muted leading-relaxed">{skill.items}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-t border-border my-12" />

      {/* IDIOMAS & COMPETÊNCIAS */}
      <section className="py-6 pb-20">
        <p className="text-[0.75rem] font-semibold tracking-[2.5px] uppercase text-accent-light mb-2.5">
          Outras Informações
        </p>
        <h2 className="text-2xl font-bold font-sora text-text mb-9">Idiomas & Competências</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-surface border border-border rounded-card p-6 flex flex-col gap-3">
            <h3 className="text-base font-bold text-text font-sora">Idiomas</h3>
            <p className="text-[0.85rem] text-text-muted">Português — Fluente</p>
            <p className="text-[0.85rem] text-text-muted">Inglês — Intermediário</p>
          </div>
          <div className="bg-surface border border-border rounded-card p-6 flex flex-col gap-3">
            <h3 className="text-base font-bold text-text font-sora">Competências</h3>
            <div className="flex flex-wrap gap-2">
              {['Raciocínio Lógico', 'Comprometimento', 'Rápido Aprendizado', 'Trabalho em Equipe', 'Proatividade', 'Organização'].map((item) => (
                <span key={item} className="inline-block px-2.5 py-0.5 bg-white/5 text-text-muted rounded-full text-[0.72rem] font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
