export default function Help() {
  const tableData = [
    { page: 'Home', originalFile: 'index.html', component: 'Home.tsx', content: 'Introdução, projetos em destaque e atividades IHC do semestre' },
    { page: 'Sobre', originalFile: 'sobre.html', component: 'About.tsx', content: 'História pessoal, habilidades técnicas com ícones e interesses' },
    { page: 'Currículo', originalFile: 'curriculo.html', component: 'Resume.tsx', content: 'Formação acadêmica, experiência profissional e competências técnicas' },
    { page: 'Contato', originalFile: 'contato.html', component: 'Contact.tsx', content: 'Formulário com validação, redes sociais e informações de contato' },
    { page: 'Ajuda', originalFile: 'ajuda.html', component: 'Help.tsx', content: 'Esta página — documentação de design e heurísticas aplicadas' }
  ]

  const colors = [
    { name: 'Background', hex: '#0d0d16', class: 'bg-[#0d0d16] border border-border' },
    { name: 'Surface', hex: '#14142a', class: 'bg-surface' },
    { name: 'Accent (Roxo)', hex: '#7c3aed', class: 'bg-accent' },
    { name: 'Accent Light', hex: '#a78bfa', class: 'bg-accent-light' }
  ]

  const heuristics = [
    {
      num: 1,
      title: 'Visibilidade do Status do Sistema',
      desc: 'O sistema deve sempre informar o usuário sobre o que está acontecendo, fornecendo feedback adequado em tempo razoável.',
      where: 'O item de navegação da página atual é destacado com cor roxa e fundo diferenciado em todas as páginas (Navbar). No formulário de contato, um feedback animado e uma mensagem de confirmação aparecem após o envio da mensagem.'
    },
    {
      num: 2,
      title: 'Correspondência entre o Sistema e o Mundo Real',
      desc: 'O sistema deve falar a linguagem do usuário, usando palavras, frases e conceitos familiares ao usuário, em vez de termos técnicos.',
      where: 'Todo o conteúdo está em português do Brasil. Ícones/emojis universais são usados para representar conceitos (🐙 para GitHub, 📍 para localização, ⬇ para download). Os rótulos do menu são palavras simples e diretas.'
    },
    {
      num: 3,
      title: 'Controle e Liberdade do Usuário',
      desc: 'Usuários frequentemente escolhem funções por engano e precisam de uma "saída de emergência" claramente marcada, sem ter que percorrer um diálogo extenso.',
      where: 'A barra de navegação está fixada no topo (sticky) em todas as páginas, permitindo que o usuário navegue livremente para qualquer seção a qualquer momento, sem precisar usar o botão "voltar" do navegador.'
    },
    {
      num: 4,
      title: 'Consistência e Padrões',
      desc: 'Usuários não devem ter que se perguntar se diferentes palavras, situações ou ações significam a mesma coisa. Siga as convenções da plataforma.',
      where: 'Todas as páginas compartilham o mesmo layout de cabeçalho, rodapé, paleta de cores, tipografia e sistema de espaçamento e cards. O TailwindCSS garante a consistência estilística de toda a aplicação.'
    },
    {
      num: 5,
      title: 'Prevenção de Erros',
      desc: 'Ainda melhor que boas mensagens de erro é um design cuidadoso que previne que problemas ocorram em primeiro lugar.',
      where: 'O formulário de contato usa validação nativa de tipo (HTML5 `required` e `type="email"`), prevenindo envios incompletos ou com formatos incorretos de e-mail antes da submissão.'
    },
    {
      num: 6,
      title: 'Reconhecimento em Vez de Memorização',
      desc: 'Minimize a carga de memória do usuário tornando objetos, ações e opções visíveis. O usuário não deve ter que se lembrar de informações de uma parte da interface para outra.',
      where: 'O menu de navegação com os nomes de todas as páginas está sempre visível no topo da tela. O link ativo está destacado visualmente com fundo roxo leve e letra roxo claro, mostrando a exata localização atual do usuário.'
    },
    {
      num: 7,
      title: 'Flexibilidade e Eficiência de Uso',
      desc: 'Aceleradores, invisíveis para o usuário novato, podem frequentemente acelerar a interação para o usuário experiente, de modo que o sistema possa atender tanto a usuários inexperientes quanto a experientes.',
      where: 'Os botões de CTA rápidos na página Home ("Ver Currículo" e "Entrar em Contato") servem como aceleradores para usuários recorrentes que desejam navegar diretamente para essas seções.'
    },
    {
      num: 8,
      title: 'Estética e Design Minimalista',
      desc: 'Diálogos não devem conter informações irrelevantes ou raramente necessárias. Cada unidade extra de informação compete com as unidades relevantes de informação.',
      where: 'O design é baseado em cores escuras e refinadas com tipografia elegante e espaçamento generoso entre os blocos de conteúdo. Cards organizados mantêm as informações enxutas, sem poluição visual.'
    },
    {
      num: 9,
      title: 'Ajuda para Reconhecer, Diagnosticar e Recuperar Erros',
      desc: 'Mensagens de erro devem ser expressas em linguagem simples, indicar precisamente o problema e sugerir uma solução de forma construtiva.',
      where: 'Mensagens nativas do navegador são usadas no formulário para campos ausentes ou e-mails mal-formados. O botão de download de currículo no formato PDF alerta visualmente o usuário sobre sua indisponibilidade temporária.'
    },
    {
      num: 10,
      title: 'Ajuda e Documentação',
      desc: 'Mesmo que seja melhor que o sistema possa ser usado sem documentação, pode ser necessário fornecer ajuda e documentação. Qualquer informação deve ser fácil de pesquisar.',
      where: 'Esta página cumpre integralmente esta heurística: explica o contexto acadêmico do projeto, documenta a estrutura e navegação e descreve minuciosamente onde cada heurística de Nielsen foi aplicada.'
    }
  ]

  return (
    <div className="max-w-[1080px] w-full mx-auto px-[clamp(20px,5vw,40px)] py-10">
      {/* PAGE HERO */}
      <div className="border-b border-border pb-10 mb-14 mt-6">
        <p className="text-[0.75rem] font-semibold tracking-[2.5px] uppercase text-accent-light mb-2.5">
          Ajuda & Documentação
        </p>
        <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold font-sora text-text mb-3 leading-[1.2]">
          Design, Usabilidade<br />e Heurísticas
        </h1>
        <p className="text-text-muted text-base max-w-[560px]">
          Documentação das decisões de design e das heurísticas de usabilidade aplicadas neste portfólio.
        </p>
      </div>

      {/* VISÃO GERAL */}
      <section className="py-6 mb-12">
        <p className="text-[0.75rem] font-semibold tracking-[2.5px] uppercase text-accent-light mb-2.5">
          Visão Geral
        </p>
        <h2 className="text-2xl font-bold font-sora text-text mb-5">Sobre este projeto</h2>
        <p className="text-text-muted text-base max-w-[680px] leading-relaxed mb-8">
          Este portfólio foi desenvolvido como Atividade A3 da disciplina de <strong className="text-text">Interação Humano-Computador (IHC)</strong> do curso de Sistemas de Informação na UFMS. O objetivo foi construir um protótipo funcional que aplicasse na prática os conceitos de usabilidade, design de interface e experiência do usuário estudados ao longo do semestre.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          <div className="bg-surface border border-border rounded-lg p-3.5 flex items-center gap-3 text-sm font-semibold">
            <span className="w-7 h-7 bg-accent-dim text-accent-light rounded-md flex items-center justify-center font-sora text-xs font-bold shrink-0">5</span>
            <span className="text-text">Páginas criadas</span>
          </div>
          <div className="bg-surface border border-border rounded-lg p-3.5 flex items-center gap-3 text-sm font-semibold">
            <span className="w-7 h-7 bg-accent-dim text-accent-light rounded-md flex items-center justify-center font-sora text-xs font-bold shrink-0">10</span>
            <span className="text-text">Heurísticas aplicadas</span>
          </div>
          <div className="bg-surface border border-border rounded-lg p-3.5 flex items-center gap-3 text-sm font-semibold">
            <span className="w-7 h-7 bg-accent-dim text-accent-light rounded-md flex items-center justify-center font-sora text-xs font-bold shrink-0">3</span>
            <span className="text-text">React, TS e Tailwind</span>
          </div>
          <div className="bg-surface border border-border rounded-lg p-3.5 flex items-center gap-3 text-sm font-semibold">
            <span className="w-7 h-7 bg-accent-dim text-accent-light rounded-md flex items-center justify-center font-sora text-xs font-bold shrink-0">1</span>
            <span className="text-text">Design System</span>
          </div>
        </div>

        <h3 className="text-lg font-bold font-sora text-text mb-4">Estrutura de navegação</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse mt-2">
            <thead>
              <tr className="border-b border-border">
                <th className="bg-surface text-text-muted text-[0.78rem] font-bold tracking-wider uppercase p-3 text-left">Página</th>
                <th className="bg-surface text-text-muted text-[0.78rem] font-bold tracking-wider uppercase p-3 text-left">Componente</th>
                <th className="bg-surface text-text-muted text-[0.78rem] font-bold tracking-wider uppercase p-3 text-left">Origem Legada</th>
                <th className="bg-surface text-text-muted text-[0.78rem] font-bold tracking-wider uppercase p-3 text-left">Conteúdo</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr key={row.page} className="border-b border-border hover:bg-surface/30 transition-colors">
                  <td className="p-3.5 text-sm font-bold text-text">{row.page}</td>
                  <td className="p-3.5 text-sm text-accent-light font-mono">{row.component}</td>
                  <td className="p-3.5 text-sm text-text-muted font-mono">{row.originalFile}</td>
                  <td className="p-3.5 text-sm text-text-muted">{row.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <hr className="border-t border-border my-12" />

      {/* SISTEMA DE DESIGN */}
      <section className="py-6 mb-12">
        <p className="text-[0.75rem] font-semibold tracking-[2.5px] uppercase text-accent-light mb-2.5">
          Sistema de Design
        </p>
        <h2 className="text-2xl font-bold font-sora text-text mb-9">Decisões Visuais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* CORES */}
          <div className="bg-surface border border-border rounded-card p-6">
            <h3 className="text-base font-bold text-text font-sora mb-5">🎨 Paleta de Cores</h3>
            <div className="flex flex-col gap-3">
              {colors.map((color) => (
                <div key={color.name} className="flex items-center gap-3.5 text-sm">
                  <div className={`w-8 h-8 rounded-md shrink-0 ${color.class}`} />
                  <div>
                    <p className="font-semibold text-text">{color.name}</p>
                    <p className="text-xs text-text-muted mt-0.5">{color.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* TIPOGRAFIA */}
          <div className="bg-surface border border-border rounded-card p-6">
            <h3 className="text-base font-bold text-text font-sora mb-5">🔤 Tipografia</h3>
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-sora text-2xl font-bold text-text mb-1">Sora</p>
                <p className="text-xs text-text-muted leading-relaxed">
                  Usada em títulos, cabeçalhos e seções de destaque. Transmite modernidade, peso visual e clareza.
                </p>
              </div>
              <div>
                <p className="font-dm-sans text-lg text-text mb-1">DM Sans</p>
                <p className="text-xs text-text-muted leading-relaxed">
                  Usada em todo o corpo de texto, parágrafos e elementos normais de formulário e botões. Alta legibilidade em fundos escuros.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <hr className="border-t border-border my-12" />

      {/* HEURÍSTICAS DE NIELSEN */}
      <section className="py-6 pb-20">
        <p className="text-[0.75rem] font-semibold tracking-[2.5px] uppercase text-accent-light mb-2.5">
          Usabilidade
        </p>
        <h2 className="text-2xl font-bold font-sora text-text mb-2.5">As 10 Heurísticas de Nielsen</h2>
        <p className="text-text-muted text-sm max-w-[600px] mb-10">
          Cada uma das 10 heurísticas de Nielsen foi mapeada e aplicada nesta migração para React e TailwindCSS.
          Abaixo descrevemos sua aplicabilidade prática neste portfólio.
        </p>

        <div className="flex flex-col gap-6">
          {heuristics.map((h) => (
            <div
              key={h.num}
              className="bg-surface border border-border border-l-4 border-l-accent rounded-r-card p-6 flex flex-col gap-3"
            >
              <div className="w-8 h-8 bg-accent-dim text-accent-light rounded-md flex items-center justify-center font-sora text-sm font-bold shrink-0">
                {h.num}
              </div>
              <div>
                <h3 className="text-base font-bold text-text font-sora mb-1">{h.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed mb-3">{h.desc}</p>
                <div className="bg-bg/60 border border-border/80 rounded-md p-3.5 text-xs leading-relaxed text-text-muted">
                  <strong className="block text-[0.7rem] text-accent-light tracking-wider uppercase font-semibold mb-1">
                    📍 Onde está neste portfólio
                  </strong>
                  {h.where}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
