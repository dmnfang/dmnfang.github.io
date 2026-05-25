import './App.css'

const HIROBA_PRODUCTS = [
  { name: 'Library',       desc: 'An editable collection of images and questions for all tools', icon: 'ti-photo',       iconClass: 'icon-library',     href: 'https://dmnfang.github.io/library/'},
  { name: 'Cardbox',       desc: 'A collection of various flashcard games',                      icon: 'ti-cards',       iconClass: 'icon-cardbox',     href: '#' },
  { name: 'Flashcount',    desc: 'An app for practicing counting',                               icon: 'ti-123',         iconClass: 'icon-flashcount',  href: '#' },
  { name: 'Momotaro', desc: 'A unit review app', icon: 'ti-sword', iconClass: 'icon-momotaro', href: 'https://dmnfang.github.io/momotaro-v2/' },
  { name: 'Teacher Hunt',  desc: 'A signature collecting challenge app',                         icon: 'ti-user-search', iconClass: 'icon-teacherhunt', href: '#' },
  { name: 'Hako',          desc: 'An ALT scheduling and lesson building app',                    icon: 'ti-calendar',    iconClass: 'icon-hako',        href: '#' },
  { name: 'Lucky Card Game', desc: 'A companion app to a physical card swapping game',           icon: 'ti-star',        iconClass: 'icon-luckycard',   href: 'https://dmnfang.github.io/luckycard/' },
  { name: 'Sky Clock',     desc: 'A simple clock for teaching the time',                         icon: 'ti-clock',       iconClass: 'icon-skyclock',    href: '#' },
  { name: 'Schedule Quiz', desc: 'A timetable-based day of the week quiz', icon: 'ti-layout-grid', iconClass: 'icon-schedulequiz', href: 'https://dmnfang.github.io/schedule-quiz/' },
]

const OTHER_PRODUCTS = [
  { name: 'Inkdex', desc: 'A scripting tool for comic artists', icon: 'ti-pencil', iconClass: 'icon-inkdex', href: '#' },
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
      <div className="site-title">dmnfang</div>
      <Section
        title="Hiroba"
        subtitle="A suite of educational tools for ALTs"
        products={HIROBA_PRODUCTS}
      />
      <Section
        title="Other Work"
        subtitle="Various other things I made or am making"
        products={OTHER_PRODUCTS}
      />
    </div>
  )
}

export default App