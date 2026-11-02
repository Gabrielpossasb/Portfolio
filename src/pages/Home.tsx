import { Link } from 'react-router-dom'

export default function Home() {
  const projects = [
    {
      icon: '🍊',
      logo: '/projects/polpa.png',
      title: 'Polpa Santa Helena',
      description: 'Catálogo online de uma distribuidora de polpas de fruta, com pedido direto pelo WhatsApp. Inclui pipeline próprio de processamento de imagens em Node com sharp.',
      github: 'https://github.com/Gabrielpossasb/Polpa_Santa_Helena',
      demo: 'https://polpasantahelena.com.br',
      tags: ['React 19', 'TypeScript', 'Tailwind 4', 'Vite']
    },
    {
      icon: '🤖',
      logo: '/projects/jarvis.png',
      title: 'JARVIS — Assistente Pessoal com IA',
      description: 'Assistente que recebe texto, áudio, imagem ou PDF e devolve dado organizado. Gerencia tarefas, lançamentos financeiros, estoque da loja e a rotina acadêmica: matérias, provas e atividades. Acessível pelo WhatsApp e por interface web.',
      github: 'https://github.com/Gabrielpossasb/jarvis-whatsapp',
      demo: null,
      tags: ['Node.js', 'PostgreSQL', 'React', 'LLM', 'Railway']
    },
    {
      icon: '💬',
      logo: null,
      title: 'Motor de Atendimento',
      description: 'Atendimento automatizado por WhatsApp para comércio local, com painel de operação: taxa de resolução, custo por resposta, lacunas na base de conhecimento e fila de handoff para atendente humano.',
      github: 'https://github.com/Gabrielpossasb/MOTOR_DE_ATENDIMENTO_POR_IA',
      demo: null,
      tags: ['Node.js', 'LLM', 'WhatsApp API', 'Painel web']
    },
    {
      icon: '🎬',
      logo: null,
      title: 'Resumidor de Vídeo com IA',
      description: 'Transforma vídeo longo em resumo estruturado: busca a legenda, divide em blocos, resume cada bloco com um modelo leve e consolida com um modelo mais forte, reduzindo custo de token sem perder o contexto do todo.',
      github: 'https://github.com/Gabrielpossasb/RESUMIDOR_DE_VIDEO',
      demo: null,
      tags: ['Node.js', 'LLM', 'Pipeline', 'YouTube API']
    }
  ]

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden py-16 px-4">
        {/* Background Radial Glow */}
        <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-radial from-accent-light/10 to-transparent pointer-events-none rounded-full blur-3xl" />
        
        <div className="max-w-[1080px] w-full mx-auto px-[clamp(20px,5vw,40px)]">
          <div className="relative max-w-[720px]">
            <p className="text-[0.9rem] font-semibold tracking-[2px] uppercase text-accent-light mb-4">
              👋 Olá, eu sou
            </p>
            <h1 className="text-[clamp(2.4rem,5.5vw,4rem)] font-extrabold mb-5 leading-[1.1] font-sora">
              Gabriel<br />
              <span className="bg-gradient-to-r from-accent-light to-blue-400 bg-clip-text text-transparent">
                Possas
              </span>
            </h1>
            <p className="text-[1.15rem] text-text-muted max-w-[520px] mb-8 leading-relaxed">
              Desenvolvedor Front-End e Mobile, estudante de Sistemas de Informação na UFMS.
              Apaixonado por construir soluções web e mobile completas, do front-end ao back-end.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-12">
              <Link
                to="/curriculo"
                className="inline-flex items-center gap-2 px-5 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-dm-sans text-sm font-semibold transition-all duration-180 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(124,58,237,0.4)]"
              >
                Ver Currículo
              </Link>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 px-5 py-3 border border-border hover:border-accent-light hover:text-accent-light bg-transparent text-text rounded-lg font-dm-sans text-sm font-semibold transition-all duration-180"
              >
                Entrar em Contato
              </Link>
            </div>

            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'TypeScript', 'React', 'React Native', 'Node.js', 'Python'].map((tag) => (
                <span key={tag} className="inline-block px-3 py-1 bg-accent-dim text-accent-light rounded-full text-[0.75rem] font-semibold tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="bg-surface py-20 px-4">
        <div className="max-w-[1080px] w-full mx-auto px-[clamp(20px,5vw,40px)]">
          <p className="text-[0.75rem] font-semibold tracking-[2.5px] uppercase text-accent-light mb-2.5">
            Projetos
          </p>
          <h2 className="text-3xl font-bold font-sora text-text mb-10">O que tenho construído</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-bg border border-border rounded-card p-6 flex flex-col gap-3.5 transition-all duration-200 hover:border-accent-light/45 hover:-translate-y-[3px]"
              >
                <div className="flex items-start justify-between gap-3">
                  {project.logo ? (
                    <img
                      src={project.logo}
                      alt=""
                      className="w-9 h-9 object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <span className="text-[1.6rem]">{project.icon}</span>
                  )}
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.8rem] text-text-muted border border-border rounded-md px-2.5 py-1 transition-all duration-180 hover:text-accent-light hover:border-accent-light"
                    >
                      GitHub ↗
                    </a>
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
                  <p className="text-[1.05rem] font-bold text-text mb-1.5 font-sora">{project.title}</p>
                  <p className="text-sm text-text-muted leading-relaxed">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="inline-block px-2.5 py-0.5 bg-white/5 text-text-muted rounded-full text-[0.72rem] font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
