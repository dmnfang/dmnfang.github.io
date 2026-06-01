import './App.css'

const FRONTEND_PRODUCTS = [
  { name: 'Cardbox',        desc: 'A collection of flashcard games for the classroom',         icon: 'ti-cards',        iconClass: 'icon-cardbox',      href: 'hiroba.ca/cardbox/' },
  { name: 'Momotaro',       desc: 'A unit review game',                                        icon: 'ti-sword',        iconClass: 'icon-momotaro',     href: 'https://hiroba.ca/momotaro-v2/' },
  { name: 'Lucky Card Game',desc: 'A companion app to the Lucky Card physical card game',       icon: 'ti-star',         iconClass: 'icon-luckycard',    href: 'https://hiroba.ca/luckycard/' },
  { name: 'Flashcount',     desc: 'An app for practicing counting',                             icon: 'ti-123',          iconClass: 'icon-flashcount',   href: 'hiroba.ca/flashcount/' },
  { name: 'Sky Clock',      desc: 'A sky-based clock for teaching the time',                   icon: 'ti-clock',        iconClass: 'icon-skyclock',     href: 'https://hiroba.ca/skyclock/' },
  { name: 'Date Flash',     desc: 'A flashcard app for months, dates and holidays',             icon: 'ti-calendar',     iconClass: 'icon-dateflash',    href: 'https://hiroba.ca/dateflash/' },
  { name: 'Quiz Hub',       desc: 'A collection of classroom quiz games',                       icon: 'ti-layout-grid',  iconClass: 'icon-schedulequiz', href: 'https://hiroba.ca/quiz-hub/' },
  { name: 'Sign Hunt',      desc: 'A signature collecting challenge app',                       icon: 'ti-user-search',  iconClass: 'icon-teacherhunt',  href: '#' },
]

const BACKEND_PRODUCTS = [
  { name: 'Library',        desc: 'An editable collection of images and content for all tools', icon: 'ti-photo',        iconClass: 'icon-library',      href: 'https://dmnfang.github.io/library/' },
  { name: 'Hako',           desc: 'An ALT scheduling and lesson building app',                  icon: 'ti-calendar',     iconClass: 'icon-hako',         href: '#' },
]

function ProductCard({ product }) {
  return (
    <a className="product-card" href={product.href}>
      <div className={`product-icon ${product.iconClass}`}>
        <i className={`ti ${product.icon}`} />
      </div>
      <div className="product-info">
        <span className="product-name">{product.name}</span>
        <span className="product-desc">{product.desc}</span>
      </div>
    </a>
  )
}

function Section({ title, subtitle, products }) {
  return (
    <div className="mega-card">
      <div className="mega-card-header">
        <div className="section-title">{title}</div>
        <div className="section-subtitle">{subtitle}</div>
      </div>
      <div className="mega-card-body">
        <div className="product-grid">
          {products.map(p => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="page">
      <div className="site-title">Hiroba</div>
      <Section
        title="ALT Front-end"
        subtitle="Student-facing classroom tools"
        products={FRONTEND_PRODUCTS}
      />
      <Section
        title="ALT Back-end"
        subtitle="Manage what your kids are learning"
        products={BACKEND_PRODUCTS}
      />
    </div>
  )
}

export default App