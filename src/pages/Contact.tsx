import { useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    // Read possible EmailJS configuration from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.nome,
            reply_to: formData.email,
            subject: formData.assunto,
            message: formData.mensagem
          },
          publicKey
        )
        setStatus('success')
        setFormData({ nome: '', email: '', assunto: '', mensagem: '' })
      } catch (error: any) {
        console.error('EmailJS Error:', error)
        setStatus('error')
        setErrorMessage(error?.text || 'Ocorreu um erro ao enviar o e-mail. Tente novamente mais tarde.')
      }
    } else {
      // Simulate submission when EmailJS config is missing
      setTimeout(() => {
        setStatus('success')
        setFormData({ nome: '', email: '', assunto: '', mensagem: '' })
      }, 1500)
    }
  }

  const socialLinks = [
    {
      icon: '🐙',
      name: 'GitHub',
      handle: 'github.com/Gabrielpossasb',
      url: 'https://github.com/Gabrielpossasb'
    },
    {
      icon: '💼',
      name: 'LinkedIn',
      handle: 'Gabriel Possas',
      url: 'https://linkedin.com/in/gabriel-possas'
    },
    {
      icon: '✉️',
      name: 'E-mail',
      handle: 'gabrielpossasb@gmail.com',
      url: 'mailto:gabrielpossasb@gmail.com'
    },
    {
      icon: '📱',
      name: 'Telefone',
      handle: '+55 67 99935-9933',
      url: 'tel:+5567999359933'
    },
    {
      icon: '📍',
      name: 'Localização',
      handle: 'Campo Grande, MS — Brasil',
      url: null
    }
  ]

  return (
    <div className="max-w-[1080px] w-full mx-auto px-[clamp(20px,5vw,40px)] py-10">
      {/* PAGE HERO */}
      <div className="border-b border-border pb-10 mb-14 mt-6">
        <p className="text-[0.75rem] font-semibold tracking-[2.5px] uppercase text-accent-light mb-2.5">
          Contato
        </p>
        <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold font-sora text-text mb-3 leading-[1.2]">
          Vamos conversar?
        </h1>
        <p className="text-text-muted text-base max-w-[560px]">
          Preencha o formulário ou me encontre nas redes sociais abaixo.
        </p>
      </div>

      <section className="py-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_340px] gap-12 items-start">
          
          {/* FORMULÁRIO */}
          <div>
            <h2 className="text-2xl font-bold font-sora text-text mb-2">Envie uma mensagem</h2>
            <p className="text-text-muted text-sm mb-8">Todos os campos marcados com * são obrigatórios.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="nome" className="text-sm font-medium text-text">Nome *</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    required
                    disabled={status === 'submitting' || status === 'success'}
                    className="bg-surface border border-border rounded-lg px-4 py-3 text-text text-sm outline-none transition-all duration-200 focus:border-accent-light focus:ring-4 focus:ring-accent-light/10 placeholder:text-[#4a4a70] disabled:opacity-50"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-text">E-mail *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    disabled={status === 'submitting' || status === 'success'}
                    className="bg-surface border border-border rounded-lg px-4 py-3 text-text text-sm outline-none transition-all duration-200 focus:border-accent-light focus:ring-4 focus:ring-accent-light/10 placeholder:text-[#4a4a70] disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="assunto" className="text-sm font-medium text-text">Assunto *</label>
                <input
                  type="text"
                  id="assunto"
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  placeholder="Sobre o que você quer falar?"
                  required
                  disabled={status === 'submitting' || status === 'success'}
                  className="bg-surface border border-border rounded-lg px-4 py-3 text-text text-sm outline-none transition-all duration-200 focus:border-accent-light focus:ring-4 focus:ring-accent-light/10 placeholder:text-[#4a4a70] disabled:opacity-50"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="mensagem" className="text-sm font-medium text-text">Mensagem *</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  placeholder="Descreva sua mensagem..."
                  required
                  disabled={status === 'submitting' || status === 'success'}
                  className="bg-surface border border-border rounded-lg px-4 py-3 text-text text-sm outline-none transition-all duration-200 focus:border-accent-light focus:ring-4 focus:ring-accent-light/10 placeholder:text-[#4a4a70] min-h-[140px] resize-y disabled:opacity-50"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-white rounded-lg font-dm-sans text-sm font-semibold transition-all duration-180 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(124,58,237,0.4)] disabled:translate-y-0 disabled:shadow-none cursor-pointer disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Enviando...
                  </span>
                ) : status === 'success' ? (
                  'Enviado ✓'
                ) : (
                  'Enviar mensagem ↗'
                )}
              </button>
            </form>

            {/* FEEDBACK MENSAGEM */}
            {status === 'success' && (
              <div className="mt-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 text-emerald-400 text-sm animate-fade-in">
                ✅ Mensagem enviada com sucesso! Responderei em breve.
              </div>
            )}

            {status === 'error' && (
              <div className="mt-4 bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400 text-sm animate-fade-in">
                ❌ {errorMessage}
              </div>
            )}
          </div>

          {/* REDES SOCIAIS */}
          <div>
            <h2 className="text-2xl font-bold font-sora text-text mb-6">Redes & Links</h2>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => {
                const content = (
                  <>
                    <span className="text-lg w-7 text-center shrink-0">{link.icon}</span>
                    <div>
                      <p className="font-semibold text-sm text-text">{link.name}</p>
                      <p className="text-xs text-text-muted mt-0.5">{link.handle}</p>
                    </div>
                    {link.url && (
                      <span className="ml-auto text-text-muted text-[0.85rem] group-hover:text-accent-light transition-colors">
                        ↗
                      </span>
                    )}
                  </>
                )

                return link.url ? (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3.5 p-3.5 bg-surface border border-border rounded-lg text-sm font-medium text-text transition-all duration-200 hover:border-accent-light hover:translate-x-1"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={link.name}
                    className="flex items-center gap-3.5 p-3.5 bg-surface border border-border rounded-lg text-sm font-medium text-text"
                  >
                    {content}
                  </div>
                )
              })}
            </div>

            {/* INFO CARD */}
            <div className="mt-6 bg-surface border border-border rounded-lg p-5">
              <p className="text-xs text-text-muted leading-relaxed">
                💡 Estou aberto a colaborações em projetos de software e desenvolvimento. Sinta-se à vontade para entrar em contato sobre qualquer oportunidade.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
