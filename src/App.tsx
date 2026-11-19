import { useEffect, useState } from "react"
import { Category, categories, powerFilters, PowerFilter, Product, ProductImage, products } from "./data/products"
import { UsedProduct, usedProducts } from "./data/usedProducts"

type IconName = "arrow" | "menu" | "close" | "chevron" | "zap" | "route" | "comfort" | "leaf" | "play"
function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <path d="M5 12h14M14 7l5 5-5 5" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    chevron: <path d="m6 9 6 6 6-6" />,
    zap: <path d="M13 2 4.5 13h7L11 22l8.5-12h-7L13 2Z" />,
    route: (
      <>
        <circle cx="6" cy="18" r="2.5" />
        <circle cx="18" cy="6" r="2.5" />
        <path d="M8.5 18h2.75a2 2 0 0 0 0-4h-.5a2 2 0 0 1 0-4H15.5" />
      </>
    ),
    comfort: (
      <path d="M7 12V5a2 2 0 0 1 4 0v5M11 10V4a2 2 0 0 1 4 0v7M15 10V6a2 2 0 0 1 4 0v8c0 5-3 8-7 8h-1c-3 0-5-1-7-4l-2-3a2 2 0 0 1 3-2l2 2" />
    ),
    leaf: (
      <>
        <path d="M20 4C12 4 5 7.5 5 14c0 3 2 5 5 5 6.5 0 10-7 10-15Z" />
        <path d="M4 21c3-5 7-8 12-11" />
      </>
    ),
    play: <path d="m9 6 10 6-10 6V6Z" />,
  }
  return (
    <svg
      aria-hidden="true"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a className={`logo ${light ? "is-light" : ""}`} href="#inicio" aria-label="Muuv Sorocaba — início">
      <img src={light ? "/muuvLogoFull.png" : "/muuvLogoFull_Black.png"} alt="Muuv Electric Motors" />
    </a>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false),
    [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(scrollY > 24)
    fn()
    addEventListener("scroll", fn, { passive: true })
    return () => removeEventListener("scroll", fn)
  }, [])
  useEffect(() => {
    document.body.classList.toggle("menu-open", open)
    return () => document.body.classList.remove("menu-open")
  }, [open])
  const links = [
    ["Início", "#inicio"],
    ["Modelos", "#modelos"],
    ["Seminovos", "#seminovos"],
    ["Sobre a Muuv", "#sobre"],
    ["Oficina", "#oficina"],
    ["Dúvidas", "#duvidas"],
    ["Contato", "#contato"],
  ]
  return (
    <header className={`navbar ${scrolled || open ? "is-solid" : ""}`}>
      <div className="nav-inner">
        <Logo light={!scrolled && !open} />
        <nav
          className={`nav-links ${open ? "is-open" : ""}`}
          aria-label="Navegação principal"
        >
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="button primary nav-cta"
            href="#contato"
            onClick={() => setOpen(false)}
          >
            Fale com um especialista
          </a>
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <img
        className="hero-image"
        src="https://images.unsplash.com/photo-1737471409263-f923c6b53275?auto=format&fit=crop&w=2000&q=88"
        alt="Pessoa conduzindo uma scooter em uma rua urbana"
        fetchPriority="high"
      />
      <div className="hero-overlay" />
      <div className="hero-content shell">
        <p className="eyebrow">Mobilidade elétrica · Sorocaba</p>
        <h1 id="hero-title">
          Sua cidade.
          <br />
          <em>Seu <i>ritmo</i>.</em>
        </h1>
        <p className="hero-copy">
          Descubra uma nova forma de se movimentar com liberdade, presença e a
          energia certa para o seu dia.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#modelos">
            Explorar modelos <Icon name="arrow" />
          </a>
          <a className="button ghost" href="#sobre">
            Conheça a Muuv
          </a>
        </div>
      </div>
      <div className="hero-index" aria-hidden="true">
        <span>01</span>
        <i />
        <small>Mobilidade que move</small>
      </div>
    </section>
  )
}

const benefits = [
  [
    "zap",
    "01",
    "1 ano de garantia",
    "Cobertura para motor, controladora e bateria, conforme as condições de garantia do produto.",
  ],
  [
    "route",
    "02",
    "Primeira revisão gratuita",
    "A primeira revisão é gratuita e deve ser realizada em até 8 meses após a compra.",
  ],
  [
    "comfort",
    "03",
    "6 meses de cobertura estrutural",
    "Cobertura de 6 meses para a parte estrutural do veículo, conforme os termos aplicáveis.",
  ],
  [
    "leaf",
    "04",
    "Frete grátis na região",
    "Entrega gratuita em Sorocaba e região. Consulte a equipe para confirmar a disponibilidade para seu endereço.",
  ],
] as const
function Benefits() {
  return (
    <section className="benefits section shell" id="beneficios">
      <div className="section-heading">
        <p className="eyebrow">Benefícios Muuv</p>
        <h2>
          Sua experiência vai
          <br />
          além da <em>compra.</em>
        </h2>
        <p className="benefits-intro">
          Mais tranquilidade, cuidado e praticidade para acompanhar você na sua mobilidade elétrica.
        </p>
      </div>
      <div className="benefit-grid">
        {benefits.map(([icon, number, title, text]) => (
          <article className="benefit-card" key={title}>
            <span>{number}</span>
            <div className="benefit-icon">
              <Icon name={icon} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
      <div className="benefit-service">
        <div className="benefit-service-mark"><Icon name="comfort" /></div>
        <div>
          <p className="eyebrow">Um cuidado a mais</p>
          <h3>Mais tranquilidade nos primeiros seis meses.</h3>
          <p>
            Durante os primeiros 6 meses, a mão de obra para determinados serviços de troca de peças que não estejam cobertas pela garantia é gratuita, conforme as condições aplicáveis. Consulte a equipe Muuv para confirmar os serviços incluídos.
          </p>
        </div>
        <a className="text-button" href="https://wa.me/5515998299220?text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20a%20garantia%20e%20os%20benef%C3%ADcios%20da%20Muuv." target="_blank" rel="noreferrer">
          Consulte as condições <Icon name="arrow" />
        </a>
      </div>
    </section>
  )
}

function ProductDetails({
  product,
  close,
  eyebrow,
  extraSpecs = [],
  contactMessage,
}: {
  product: Product
  close: () => void
  /** Texto acima do nome. Padrão: categoria do produto. */
  eyebrow?: string
  /** Linhas adicionais exibidas antes da ficha técnica (ex.: dados do seminovo). */
  extraSpecs?: string[]
  /** Mensagem do WhatsApp. Padrão: interesse no produto. */
  contactMessage?: string
}) {
  const gallery: ProductImage[] = product.images?.length
    ? product.images
    : [{ src: product.image, alt: product.alt }]
  const [activeImage, setActiveImage] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [zoomed, setZoomed] = useState(false)
  const hasMultipleImages = gallery.length > 1
  const currentImage = gallery[activeImage] ?? gallery[0]

  const goToImage = (index: number) => {
    setActiveImage((index + gallery.length) % gallery.length)
  }

  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (zoomed) setZoomed(false)
        else close()
      }
      if (hasMultipleImages && e.key === "ArrowRight") goToImage(activeImage + 1)
      if (hasMultipleImages && e.key === "ArrowLeft") goToImage(activeImage - 1)
    }
    addEventListener("keydown", key)
    document.body.classList.add("modal-open")
    return () => {
      removeEventListener("keydown", key)
      document.body.classList.remove("modal-open")
    }
  }, [close, activeImage, hasMultipleImages, zoomed])

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null || !hasMultipleImages) return
    const distance = touchStart - touchEnd
    if (Math.abs(distance) > 45) goToImage(activeImage + (distance > 0 ? 1 : -1))
    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <div className="modal-backdrop" onMouseDown={close}>
      <section
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          type="button"
          onClick={close}
          aria-label="Fechar detalhes"
        >
          <Icon name="close" />
        </button>
        <div
          className={`modal-image ${hasMultipleImages ? "has-gallery" : "single-image"}`}
          onTouchStart={(e) => setTouchStart(e.changedTouches[0]?.clientX ?? null)}
          onTouchMove={(e) => setTouchEnd(e.changedTouches[0]?.clientX ?? null)}
          onTouchEnd={handleTouchEnd}
        >
          <button className="modal-image-zoom" type="button" onClick={() => setZoomed(true)} aria-label="Ampliar imagem do produto">
            <span aria-hidden="true">⤢</span>
          </button>
          <img key={currentImage.src} src={currentImage.src} alt={currentImage.alt} onClick={() => setZoomed(true)} aria-label="Ampliar imagem do produto" />
          {currentImage.color && <span className="gallery-color">{currentImage.color}</span>}
          {hasMultipleImages && (
            <>
              <button className="gallery-arrow gallery-prev" type="button" onClick={() => goToImage(activeImage - 1)} aria-label="Foto anterior">
                <span aria-hidden="true">‹</span>
              </button>
              <button className="gallery-arrow gallery-next" type="button" onClick={() => goToImage(activeImage + 1)} aria-label="Próxima foto">
                <span aria-hidden="true">›</span>
              </button>
              <div className="gallery-pagination" aria-label={`Foto ${activeImage + 1} de ${gallery.length}`}>
                {gallery.map((item, index) => (
                  <button
                    key={`${item.src}-${index}`}
                    type="button"
                    className={index === activeImage ? "is-active" : ""}
                    onClick={() => goToImage(index)}
                    aria-label={`Ver foto ${index + 1}`}
                    aria-pressed={index === activeImage}
                  />
                ))}
              </div>
              <span className="gallery-count">{activeImage + 1} / {gallery.length}</span>
            </>
          )}
        </div>
        <div className="modal-copy">
          <p className="eyebrow">{eyebrow ?? product.category}</p>
          <h2 id="modal-title">{product.name}</h2>
          <p>{product.description}</p>
          <ul>
            {extraSpecs.map((x) => (
              <li key={x}>{x}</li>
            ))}
            {product.powerW !== null && <li>Potência: {product.powerW} W</li>}
            {product.autonomy && <li>Autonomia: {product.autonomy}</li>}
            {product.maxSpeed && <li>Velocidade máxima: {product.maxSpeed}</li>}
            {product.battery && <li>Bateria: {product.battery}</li>}
            {product.chargingTime && <li>Tempo de recarga: {product.chargingTime}</li>}
            {product.weight && <li>Peso: {product.weight}</li>}
            {product.maxLoad && <li>Carga máxima: {product.maxLoad}</li>}
            {product.highlights.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
          {product.manualUrl?.trim() && (
            <a
              className="manual-link"
              href={product.manualUrl.trim()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir manual do produto ${product.name} em uma nova aba`}
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6M8 13h8M8 17h8" />
              </svg>
              <span>Baixar manual do produto</span>
            </a>
          )}
          <a className="button primary" href={`https://wa.me/5515998299220?text=${encodeURIComponent(contactMessage ?? `Olá! Gostaria de saber mais sobre o produto ${product.name}.`)}`} target="_blank" rel="noreferrer">
            Falar com a equipe <Icon name="arrow" />
          </a>
        </div>
      </section>
      {zoomed && (
        <div className="image-zoom-backdrop" onMouseDown={(e) => { e.stopPropagation(); setZoomed(false) }} role="dialog" aria-modal="true" aria-label="Imagem ampliada do produto">
          <button type="button" className="image-zoom-close" onClick={() => setZoomed(false)} aria-label="Fechar imagem ampliada"><Icon name="close" /></button>
          {currentImage.color && <span className="zoom-gallery-color">{currentImage.color}</span>}
          {hasMultipleImages && (
            <>
              <button type="button" className="zoom-gallery-arrow zoom-gallery-prev" onMouseDown={(e) => e.stopPropagation()} onClick={() => goToImage(activeImage - 1)} aria-label="Foto anterior"><span aria-hidden="true">‹</span></button>
              <button type="button" className="zoom-gallery-arrow zoom-gallery-next" onMouseDown={(e) => e.stopPropagation()} onClick={() => goToImage(activeImage + 1)} aria-label="Próxima foto"><span aria-hidden="true">›</span></button>
              <div className="zoom-gallery-pagination" aria-label={`Foto ${activeImage + 1} de ${gallery.length}`}>
                {gallery.map((item, index) => (
                  <button key={`${item.src}-${index}`} type="button" className={index === activeImage ? "is-active" : ""} onMouseDown={(e) => e.stopPropagation()} onClick={() => goToImage(index)} aria-label={`Ver foto ${index + 1}`} aria-pressed={index === activeImage} />
                ))}
              </div>
              <span className="zoom-gallery-count">{activeImage + 1} / {gallery.length}</span>
            </>
          )}
          <img
            key={currentImage.src}
            src={currentImage.src}
            alt={currentImage.alt}
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => setTouchStart(e.changedTouches[0]?.clientX ?? null)}
            onTouchMove={(e) => setTouchEnd(e.changedTouches[0]?.clientX ?? null)}
            onTouchEnd={handleTouchEnd}
          />
        </div>
      )}
    </div>
  )
}
function ProductShowcase() {
  const [category, setCategory] = useState<(typeof categories)[number]>("Todos os produtos")
  const [power, setPower] = useState<PowerFilter>("Todas as potências")
  const [selected, setSelected] = useState<Product | null>(null)
  const visible = products.filter((p) => {
    const categoryMatch = category === "Todos os produtos" || p.category === (category as Category)
    const powerMatch = power === "Todas as potências"
      || (power === "Até 800 W" && p.powerW !== null && p.powerW <= 800)
      || (power === "801 a 1000 W" && p.powerW !== null && p.powerW >= 801 && p.powerW <= 1000)
      || (power === "Acima de 1000 W" && p.powerW !== null && p.powerW > 1000)
      || (power === "Potência não informada" && p.powerW === null)
    return categoryMatch && powerMatch
  })
  const clearFilters = () => { setCategory("Todos os produtos"); setPower("Todas as potências") }
  return (
    <section className="products-section section" id="modelos">
      <div className="shell">
        <div className="product-heading">
          <div className="section-heading">
            <p className="eyebrow">Coleção Muuv</p>
            <h2>Encontre sua próxima<br />forma de <em>se mover.</em></h2>
          </div>
          <p>Explore scooters, e-bikes, patinetes e triciclos elétricos. Filtre por categoria e potência do motor.</p>
        </div>
        <div className="product-filters" aria-label="Filtros de produtos">
          <div className="filters" role="group" aria-label="Filtrar por categoria">
            {categories.map((x) => (
              <button key={x} type="button" className={category === x ? "is-active" : ""} aria-pressed={category === x} onClick={() => setCategory(x)}>{x}</button>
            ))}
          </div>
          <label className="power-filter">
            <span>Potência do motor</span>
            <select value={power} onChange={(e) => setPower(e.target.value as PowerFilter)}>
              {powerFilters.map((x) => <option key={x} value={x}>{x}</option>)}
            </select>
          </label>
        </div>
        <p className="results-count" aria-live="polite">{visible.length} {visible.length === 1 ? "modelo encontrado" : "modelos encontrados"}</p>
        {visible.length > 0 ? <div className="product-grid">
          {visible.map((p) => (
            <article className="product-card" key={p.id}>
              <div className="product-image is-clickable" onClick={() => setSelected(p)}>
                <img src={p.image} alt={p.alt} loading="lazy" />
                <span>{p.powerW === null ? "Potência sob consulta" : `${p.powerW} W`}</span>
                {p.availability === "Aguardando reposição" && <span className="product-status">Aguardando reposição</span>}
              </div>
              <div className="product-body">
                <div className="product-title-line"><p>{p.category}</p><h3>{p.name}</h3></div>
                <p className="product-note">{p.description}</p>
                {p.availability === "Aguardando reposição"}
                <button className="text-button" type="button" onClick={() => setSelected(p)}>Ver detalhes <Icon name="arrow" /></button>
                <a href={`https://wa.me/5515998299220?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre o produto ${p.name}.`)}`} target="_blank" rel="noreferrer">Consultar disponibilidade</a>
              </div>
            </article>
          ))}
        </div> : <div className="products-empty"><h3>Nenhum modelo encontrado</h3><p>Não há produtos cadastrados com essa combinação de filtros.</p><button className="button primary" type="button" onClick={clearFilters}>Limpar filtros</button></div>}
        <p className="disclaimer">Consulte a equipe Muuv para confirmar disponibilidade, cores e especificações. A classificação e a dispensa de CNH/emplacamento dependem das características de cada veículo e da legislação aplicável; confirme antes da compra.</p>
      </div>
      {selected && <ProductDetails product={selected} close={() => setSelected(null)} />}
    </section>
  )
}

const usedSpecs = (p: UsedProduct) =>
  [
    `Estado de conservação: ${p.condition}`,
    p.year ? `Ano: ${p.year}` : null,
    p.mileageKm != null ? `Quilometragem: ${p.mileageKm.toLocaleString("pt-BR")} km` : null,
    p.batteryHealth ? `Bateria: ${p.batteryHealth}` : null,
    p.usedWarranty ? `Garantia do seminovo: ${p.usedWarranty}` : null,
    "Preço: sob consulta",
  ].filter((x): x is string => x !== null)

const usedContactMessage = (p: UsedProduct) => `Olá! Gostaria de saber mais sobre o seminovo ${p.name}${p.year ? ` (${p.year})` : ""}.`

function UsedProductShowcase() {
  const [category, setCategory] = useState<(typeof categories)[number]>("Todos os produtos")
  const [selected, setSelected] = useState<UsedProduct | null>(null)
  // Só mostra as categorias que têm seminovos cadastrados.
  const usedCategories = categories.filter((c) => c === "Todos os produtos" || usedProducts.some((p) => p.category === c))
  const visible = usedProducts.filter((p) => category === "Todos os produtos" || p.category === (category as Category))
  const notifyHref = `https://wa.me/5515998299220?text=${encodeURIComponent("Olá! Gostaria de ser avisado quando houver seminovos disponíveis na Muuv.")}`
  return (
    <section className="used-section section" id="seminovos" aria-labelledby="used-title">
      <div className="shell">
        <div className="product-heading">
          <div className="section-heading">
            <p className="eyebrow">Seminovos Muuv</p>
            <h2 id="used-title">Seu próximo modelo<br />pode ser <em>seminovo.</em></h2>
          </div>
          <p>Modelos seminovos selecionados pela equipe Muuv. Consulte estado de conservação, quilometragem e condições de cada veículo.</p>
        </div>
        {usedProducts.length > 0 ? (
          <>
            {usedCategories.length > 2 && (
              <div className="filters" role="group" aria-label="Filtrar seminovos por categoria">
                {usedCategories.map((x) => (
                  <button key={x} type="button" className={category === x ? "is-active" : ""} aria-pressed={category === x} onClick={() => setCategory(x)}>{x}</button>
                ))}
              </div>
            )}
            <p className="results-count" aria-live="polite">{visible.length} {visible.length === 1 ? "seminovo encontrado" : "seminovos encontrados"}</p>
            <div className="product-grid">
              {visible.map((p) => {
                const status = p.status ?? "Disponível"
                const meta = [p.year, p.mileageKm != null ? `${p.mileageKm.toLocaleString("pt-BR")} km` : null, p.powerW !== null ? `${p.powerW} W` : null].filter(Boolean)
                return (
                  <article className={`product-card used-card ${status === "Vendido" ? "is-sold" : ""}`} key={p.id}>
                    <div className="product-image is-clickable" onClick={() => setSelected(p)}>
                      <img src={p.image} alt={p.alt} loading="lazy" />
                      <span>Estado: {p.condition}</span>
                      {status !== "Disponível" && <span className="product-status">{status}</span>}
                    </div>
                    <div className="product-body">
                      <div className="product-title-line"><p>{p.category} · Seminovo</p><h3>{p.name}</h3></div>
                      {meta.length > 0 && <p className="used-meta">{meta.join(" · ")}</p>}
                      <p className="product-note">{p.description}</p>
                      <p className="used-price is-on-request">Preço sob consulta</p>
                      <button className="text-button" type="button" onClick={() => setSelected(p)}>Ver detalhes <Icon name="arrow" /></button>
                      {status !== "Vendido" && <a href={`https://wa.me/5515998299220?text=${encodeURIComponent(usedContactMessage(p))}`} target="_blank" rel="noreferrer">Consultar disponibilidade</a>}
                    </div>
                  </article>
                )
              })}
            </div>
          </>
        ) : (
          <div className="products-empty used-empty">
            <p className="eyebrow">Em breve</p>
            <h3>Novos seminovos chegando</h3>
            <p>No momento não há seminovos disponíveis. Fale com a equipe e seja avisado quando chegar um modelo que combine com você.</p>
            <a className="button primary" href={notifyHref} target="_blank" rel="noreferrer">Quero ser avisado <Icon name="arrow" /></a>
          </div>
        )}
        <p className="disclaimer">Seminovos são vendidos no estado em que se encontram, conforme avaliação informada. Consulte a equipe Muuv para confirmar histórico, garantia e condições de cada unidade.</p>
      </div>
      {selected && (
        <ProductDetails
          product={selected}
          close={() => setSelected(null)}
          eyebrow={`${selected.category} · Seminovo`}
          extraSpecs={usedSpecs(selected)}
          contactMessage={usedContactMessage(selected)}
        />
      )}
    </section>
  )
}

function About() {
  return (
    <section className="about section" id="sobre">
      <div className="shell about-grid">
        <div className="about-collage">
          <img
            src="muuvStorefront_BW.jpg"
            alt="Faixada da loja Muuv Sorocaba"
            loading="lazy"
          />
          <div className="about-badge" aria-label="Muuv">
            <img src="/muuvLogoSquare.png" alt="Muuv" loading="lazy" />
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">A experiência Muuv</p>
          <h2>
            Mais do que chegar.
            <br />É como você <em>chega.</em>
          </h2>
          <p className="lead">
            A Muuv Sorocaba reúne scooters elétricas e e-bikes para quem busca
            uma nova forma de se movimentar pela cidade.
          </p>
          <p>
            Aqui, você pode conhecer diferentes opções de mobilidade elétrica,
            receber orientação para escolher o veículo ideal e contar com uma
            oficina especializada em manutenção de scooters elétricas e e-bikes
            de diversas marcas.
          </p>
          <div className="about-highlights" aria-label="Diferenciais da Muuv">
            <article>
              <span>01</span>
              <div>
                <h3>Mobilidade elétrica</h3>
                <p>Scooters e e-bikes para diferentes rotinas e estilos de vida.</p>
              </div>
            </article>
            <article>
              <span>02</span>
              <div>
                <h3>Oficina especializada</h3>
                <p>Manutenção de scooters elétricas, e-bikes e patinetes, inclusive de outras marcas.</p>
              </div>
            </article>
            <article>
              <span>03</span>
              <div>
                <h3>Atendimento próximo</h3>
                <p>Converse com a equipe para conhecer as opções e esclarecer suas dúvidas.</p>
              </div>
            </article>
          </div>
          <a className="text-button" href="#contato">
            Conheça nossa loja <Icon name="arrow" />
          </a>
        </div>
      </div>
    </section>
  )
}


function Workshop() {
  return (
    <section className="workshop section" id="oficina" aria-labelledby="workshop-title">
      <div className="shell workshop-grid">
        <div className="workshop-media" role="img" aria-label="Área reservada para vídeo da oficina Muuv">
          <img src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1400&q=85" alt="Imagem ilustrativa provisória de uma oficina" loading="lazy" />
          <div className="workshop-media-overlay"><span className="workshop-play"><Icon name="play" /></span><span>Vídeo da oficina em breve</span></div>
        </div>
        <div className="workshop-copy">
          <p className="eyebrow">Oficina Muuv</p>
          <h2 id="workshop-title">Mobilidade elétrica também é <em>cuidado.</em></h2>
          <p>Na Muuv, o cuidado com a mobilidade vai além da escolha do veículo. Nossa oficina oferece serviços de manutenção para scooters elétricas, e-bikes e patinetes de diferentes marcas, com foco no cuidado, na segurança e no bom funcionamento de cada veículo.</p>
          <a className="button primary" href="https://wa.me/5515998299220?text=Ol%C3%A1%21%20Acessei%20o%20site%20da%20Muuv%20Sorocaba%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20oficina." target="_blank" rel="noreferrer">Fale com nossa oficina <Icon name="arrow" /></a>
        </div>
      </div>
    </section>
  )
}

const faq = [
  [
    "Como escolher o modelo ideal?",
    "A escolha depende do trajeto, frequência de uso, necessidade de espaço e categoria do veículo. A equipe Muuv te ajudará a fazer a melhor escolha de acordo com a sua necessidade.",
  ],
  [
    "Qual é a autonomia e como funciona a recarga?",
    "Autonomia, tempo de recarga e tipo de bateria variam conforme o modelo e as condições de uso. Consulte sempre a ficha técnica oficial ou alguém da nossa equipe.",
  ],
  [
    "Como funciona a manutenção?",
    "(falar sobre como funciona a BRC)",
  ],
  [
    "Quais são os benefícios e a garantia?",
    "Os produtos contam com 1 ano de garantia para motor, controladora e bateria, além de 6 meses para a parte estrutural. A primeira revisão é gratuita e deve acontecer em até 8 meses da compra. Durante os primeiros 6 meses, há mão de obra gratuita para determinados serviços de troca de peças fora da garantia, conforme as condições aplicáveis. Consulte a equipe para confirmar os termos do seu modelo.",
  ],
  [
    "Quais são as formas de pagamento?",
    "As condições comerciais ainda não foram fornecidas. Fale com a equipe para receber informações atualizadas.",
  ],
  [
    "É necessário CNH, emplacamento ou licenciamento?",
    "As exigências dependem da classificação e características de cada veículo e da regulamentação vigente. Confirme a categoria do modelo e consulte os órgãos oficiais de trânsito ou alguém da nossa equipe.",
  ],
]
function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="faq section shell" id="duvidas">
      <div className="faq-intro">
        <p className="eyebrow">Perguntas frequentes</p>
        <h2>
          Informação para
          <br />
          escolher <em>melhor.</em>
        </h2>
        <p>
          Respostas responsáveis para dúvidas comuns. Informações específicas
          sempre devem ser confirmadas para cada modelo.
        </p>
      </div>
      <div className="accordion">
        {faq.map(([q, a], i) => (
          <article className={open === i ? "is-open" : ""} key={q}>
            <button
              type="button"
              aria-expanded={open === i}
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <span>{String(i + 1).padStart(2, "0")}</span>
              {q}
              <Icon name="chevron" />
            </button>
            <div className="answer">
              <p>{a}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function JourneyContact() {
  return (
      <section className="contact-panel" id="contato">
        <div className="shell contact-grid">
          <div>
            <p className="eyebrow">Vamos conversar?</p>
            <h2>
              Pronto para mudar
              <br />o seu <em>ritmo?</em>
            </h2>
          </div>
          <div className="contact-copy">
            <div className="contact-details">
              <div>
                <span>WhatsApp</span>
                <a href="https://wa.me/5515998299220" target="_blank" rel="noreferrer">
                  (15) 99829-9220 <Icon name="arrow" />
                </a>
              </div>
              <div>
                <span>Instagram</span>
                <a href="https://www.instagram.com/muuv_sorocaba/" target="_blank" rel="noreferrer">
                  @muuv_sorocaba <Icon name="arrow" />
                </a>
              </div>
              <div>
                <span>Horários de atendimento</span>
                <p>Segunda a sexta: 09h às 19h<br />Sábado: 10h às 15h</p>
              </div>
              <div>
                <span>Endereço</span>
                <p>Av. Eugênio Bernardi, 403 - Parque Bela Vista,<br />Votorantim - SP, 18110-560</p>
              </div>
            </div>
            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.746616548657!2d-47.4685547244124!3d-23.541614178813386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c58a6baea67b59%3A0x806944e21c8182e0!2sAv.%20Eug%C3%AAnio%20Bernardi%2C%20403%20-%20Jardim%20Maria%20Jose%2C%20Votorantim%20-%20SP%2C%2018110-560!5e0!3m2!1spt-BR!2sbr!4v1791618674425!5m2!1spt-BR!2sbr"
                title="Localização da Muuv Sorocaba no Google Maps"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className="contact-directions" aria-label="Opções de navegação até a Muuv">
              <a
                className="directions-button directions-waze"
                href="https://ul.waze.com/ul?place=ChIJCfmij6f1xZQRDAAu2UnxsXg&ll=-23.54161420%2C-47.46597980&navigate=yes&utm_campaign=live_map&utm_source=waze_website&utm_medium=lm_share_location"
                target="_blank"
                rel="noopener noreferrer"
              >
                Como chegar pelo Waze <Icon name="arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}
function Footer() {
  return (
    <footer>
      <div className="shell footer-grid">
        <div className="footer-brand">
          <Logo light />
          <p>
            Mobilidade elétrica com liberdade, design e propósito para Sorocaba.
          </p>
        </div>
        <div>
          <strong>Navegue</strong>
          <a href="#inicio">Início</a>
          <a href="#modelos">Modelos</a>
          <a href="#seminovos">Seminovos</a>
          <a href="#sobre">Sobre</a>
          <a href="#oficina">Oficina</a>
          <a href="#duvidas">Dúvidas</a>
        </div>
        <div>
          <strong>Atendimento</strong>
          <a href="#contato">Fale com a equipe</a>
          <a href="https://wa.me/5515998299220" target="_blank" rel="noreferrer">WhatsApp: (15) 99829-9220</a>
          <a href="https://www.instagram.com/muuv_sorocaba/" target="_blank" rel="noreferrer">Instagram: @muuv_sorocaba</a>
        </div>
        <div>
          <strong>Visite</strong>
          <a href="https://www.google.com/maps/dir/?api=1&destination=-23.541614,-47.468555" target="_blank" rel="noopener noreferrer">Av. Eugênio Bernardi, 403 - Parque Bela Vista, Votorantim - SP, 18110-560</a>
          <a className="footer-waze-link" href="https://waze.com/ul?ll=-23.541614,-47.468555&navigate=yes" target="_blank" rel="noopener noreferrer">Como chegar pelo Waze →</a>
          <span>Seg - Sex: 09h - 19h</span>
          <span>Sáb: 10h - 15h</span>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Muuv Sorocaba.</span>
        <span>Mobilidade elétrica · Sorocaba e região</span>
      </div>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    // Trata links internos de forma explícita para evitar navegação/reload
    // inesperado na primeira interação, inclusive no menu mobile.
    const handleInternalNavigation = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return

      const link = target.closest<HTMLAnchorElement>('a[href^="#"]')
      if (!link || event.defaultPrevented || event.button !== 0 ||
          event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const hash = link.getAttribute("href")
      if (!hash || hash === "#") return

      const destination = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (!destination) return

      event.preventDefault()
      if (window.location.hash !== hash) {
        window.history.pushState(null, "", hash)
      }
      destination.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    document.addEventListener("click", handleInternalNavigation)
    return () => document.removeEventListener("click", handleInternalNavigation)
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <ProductShowcase />
        <UsedProductShowcase />
        <About />
        <Workshop />
        <JourneyContact />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
