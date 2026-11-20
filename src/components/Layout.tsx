import {ReactNode, useEffect, useRef, useState} from 'react';
import {ChevronDown, ExternalLink, Menu, X} from 'lucide-react';
import {CLINIC_INFO, TREATMENT_CATEGORIES, TREATMENTS} from '../data/clinicData';
import {buildWhatsAppUrl} from '../utils/aestheticsLogic';

interface LayoutProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  children: ReactNode;
}

export function Layout({currentPath, onNavigate, children}: LayoutProps) {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMegaMenuOpen(false);
    setMobileMenuOpen(false);
  }, [currentPath]);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setMegaMenuOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMegaMenuOpen(false);
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    e.preventDefault();
    onNavigate(path);
  };

  const isActive = (path: string) => {
    if (path === '/') return currentPath === '/';
    return currentPath === path || currentPath.startsWith(`${path}/`);
  };

  const whatsappUrl = buildWhatsAppUrl();

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F4] text-[#292729]">
      {/* Sticky 3-Zone Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#F8F6F4]/95 backdrop-blur-md border-b border-[#29232C]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-14 sm:h-16 flex items-center justify-between gap-4 lg:gap-8">
            {/* Zone 1: Single-line Wordmark */}
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-[#29232C] whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
            >
              {CLINIC_INFO.brandName}
            </a>

            {/* Zone 2: Clean Single-Line Navigation Links */}
            <nav
              aria-label="Primary navigation"
              className="hidden lg:flex items-center gap-6 xl:gap-7 text-[13px] font-medium text-[#292729]/80"
            >
              <a
                href="/"
                onClick={(e) => handleLinkClick(e, '/')}
                className={`whitespace-nowrap shrink-0 py-1 border-b transition-colors ${
                  isActive('/')
                    ? 'text-[#29232C] border-[#A78668]'
                    : 'border-transparent hover:text-[#29232C] hover:border-[#C5A9AD]'
                }`}
              >
                Home
              </a>

              <a
                href="/about"
                onClick={(e) => handleLinkClick(e, '/about')}
                className={`whitespace-nowrap shrink-0 py-1 border-b transition-colors ${
                  isActive('/about')
                    ? 'text-[#29232C] border-[#A78668]'
                    : 'border-transparent hover:text-[#29232C] hover:border-[#C5A9AD]'
                }`}
              >
                About Tracey
              </a>

              {/* Treatments Mega Menu */}
              <div
                ref={megaMenuRef}
                className="relative"
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
              >
                <div className="flex items-center gap-1">
                  <a
                    href="/treatments"
                    onClick={(e) => handleLinkClick(e, '/treatments')}
                    className={`whitespace-nowrap shrink-0 py-1 border-b transition-colors ${
                      isActive('/treatments')
                        ? 'text-[#29232C] border-[#A78668]'
                        : 'border-transparent hover:text-[#29232C] hover:border-[#C5A9AD]'
                    }`}
                  >
                    Treatments
                  </a>
                  <button
                    type="button"
                    aria-expanded={megaMenuOpen}
                    aria-label="Toggle treatments directory menu"
                    onClick={() => setMegaMenuOpen((prev) => !prev)}
                    className="p-1 text-[#292729]/70 hover:text-[#29232C] transition-colors"
                  >
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        megaMenuOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </div>

                {megaMenuOpen && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[760px] max-w-[90vw]">
                    <div className="bg-white border border-[#29232C]/12 shadow-xl p-8">
                      <div className="flex items-baseline justify-between pb-4 mb-5 border-b border-[#29232C]/10">
                        <div>
                          <p className="font-serif text-xl text-[#29232C]">
                            Treatment Directory
                          </p>
                          <p className="text-xs text-[#292729]/65 mt-0.5">
                            Consultation-led aesthetic, skin, and medical tattooing care
                          </p>
                        </div>
                        <a
                          href="/treatments"
                          onClick={(e) => handleLinkClick(e, '/treatments')}
                          className="text-xs font-medium text-[#A78668] hover:text-[#29232C] underline underline-offset-4 whitespace-nowrap"
                        >
                          View all {TREATMENTS.length} treatments
                        </a>
                      </div>

                      <div className="grid grid-cols-3 gap-6">
                        {TREATMENT_CATEGORIES.map((category) => {
                          const catItems = TREATMENTS.filter(
                            (t) => t.categoryId === category.id,
                          ).slice(0, 4);
                          return (
                            <div key={category.id}>
                              <a
                                href={`/treatments?category=${category.id}`}
                                onClick={(e) =>
                                  handleLinkClick(e, `/treatments?category=${category.id}`)
                                }
                                className="block text-xs font-semibold tracking-wider uppercase text-[#A78668] hover:text-[#29232C] mb-2"
                              >
                                {category.shortTitle}
                              </a>
                              <ul className="space-y-1.5">
                                {catItems.map((item) => (
                                  <li key={item.slug}>
                                    <a
                                      href={`/treatments/${item.slug}`}
                                      onClick={(e) =>
                                        handleLinkClick(e, `/treatments/${item.slug}`)
                                      }
                                      className="text-[13px] text-[#292729]/80 hover:text-[#29232C] hover:underline underline-offset-4 block truncate"
                                    >
                                      {item.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="/reviews"
                onClick={(e) => handleLinkClick(e, '/reviews')}
                className={`whitespace-nowrap shrink-0 py-1 border-b transition-colors ${
                  isActive('/reviews')
                    ? 'text-[#29232C] border-[#A78668]'
                    : 'border-transparent hover:text-[#29232C] hover:border-[#C5A9AD]'
                }`}
              >
                Reviews & Results
              </a>

              <a
                href="/price-guide"
                onClick={(e) => handleLinkClick(e, '/price-guide')}
                className={`whitespace-nowrap shrink-0 py-1 border-b transition-colors ${
                  isActive('/price-guide')
                    ? 'text-[#29232C] border-[#A78668]'
                    : 'border-transparent hover:text-[#29232C] hover:border-[#C5A9AD]'
                }`}
              >
                Price Guide
              </a>

              <a
                href="/contact"
                onClick={(e) => handleLinkClick(e, '/contact')}
                className={`whitespace-nowrap shrink-0 py-1 border-b transition-colors ${
                  isActive('/contact')
                    ? 'text-[#29232C] border-[#A78668]'
                    : 'border-transparent hover:text-[#29232C] hover:border-[#C5A9AD]'
                }`}
              >
                Contact
              </a>
            </nav>

            {/* Zone 3: Single Primary Action + Mobile Drawer Toggle */}
            <div className="flex items-center gap-2 shrink-0">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-medium tracking-wide bg-[#29232C] text-white hover:bg-[#3A313E] transition-colors whitespace-nowrap shrink-0"
              >
                Enquire on WhatsApp
              </a>

              <button
                type="button"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-[#29232C] hover:bg-[#29232C]/5 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" aria-hidden="true" />
                ) : (
                  <Menu className="w-5 h-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Drawer Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-[#29232C]/10 bg-[#F8F6F4] px-5 py-6 max-h-[80vh] overflow-y-auto">
              <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
                {[
                  {label: 'Home', path: '/'},
                  {label: 'About Tracey', path: '/about'},
                  {label: 'Treatments', path: '/treatments'},
                  {label: 'Reviews & Results', path: '/reviews'},
                  {label: 'Price Guide', path: '/price-guide'},
                  {label: 'Contact & Consultations', path: '/contact'},
                  {label: 'Privacy & Clinic Terms', path: '/privacy-and-terms'},
                ].map((link) => (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={(e) => handleLinkClick(e, link.path)}
                    className={`py-3 px-2 text-base font-medium border-b border-[#29232C]/8 transition-colors ${
                      isActive(link.path)
                        ? 'text-[#29232C] font-semibold'
                        : 'text-[#292729]/80 hover:text-[#29232C]'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="mt-6 space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-5 py-3 text-sm font-medium bg-[#29232C] text-white hover:bg-[#3A313E] transition-colors"
                >
                  Enquire on WhatsApp ({CLINIC_INFO.whatsappDisplay})
                </a>
                <a
                  href={CLINIC_INFO.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 text-xs text-[#292729]/75 hover:text-[#29232C] underline underline-offset-4"
                >
                  Visit official clinic website
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          )}
      </header>

      {/* Main Page Content */}
      <main className="flex-1">{children}</main>

      {/* Editorial Footer */}
      <footer className="bg-[#29232C] text-[#F8F6F4] border-t border-[#FFFFFF]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-14 lg:py-16">
          <div className="pb-10 mb-10 border-b border-[#FFFFFF]/12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-white">
                {CLINIC_INFO.brandName}
              </p>
              <p className="mt-2 text-sm text-[#C5A9AD]">
                {CLINIC_INFO.locationShort} · Over 40 Years of Industry Experience
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-xs font-medium tracking-wide bg-[#A78668] text-white hover:bg-[#947458] transition-colors whitespace-nowrap self-start md:self-auto"
            >
              Enquire via WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#C5A9AD] mb-4">
                Clinic Address
              </h2>
              <p className="text-sm leading-relaxed text-[#F8F6F4]/85">
                {CLINIC_INFO.address}
              </p>
              <div className="mt-4 space-y-1.5 text-sm">
                <p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F8F6F4]/90 hover:text-white underline underline-offset-4"
                  >
                    WhatsApp: {CLINIC_INFO.whatsappDisplay}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${CLINIC_INFO.email}`}
                    className="text-[#F8F6F4]/90 hover:text-white underline underline-offset-4"
                  >
                    {CLINIC_INFO.email}
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#C5A9AD] mb-4">
                Published Hours
              </h2>
              <ul className="space-y-1.5 text-sm text-[#F8F6F4]/85 tabular-nums">
                {CLINIC_INFO.openingHours.map((row) => (
                  <li key={row.day} className="flex justify-between gap-4 max-w-[230px]">
                    <span>{row.day}</span>
                    <span className="text-[#F8F6F4]/70">{row.hours}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-[#C5A9AD]/85 leading-relaxed">
                Hours as currently published; confirm with Tracey prior to launch.
              </p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#C5A9AD] mb-4">
                Navigation
              </h2>
              <ul className="space-y-2 text-sm text-[#F8F6F4]/85">
                {[
                  {label: 'Home', path: '/'},
                  {label: 'About Tracey', path: '/about'},
                  {label: 'Treatments Catalogue', path: '/treatments'},
                  {label: 'Reviews & Results', path: '/reviews'},
                  {label: 'Price Guide', path: '/price-guide'},
                  {label: 'Contact & Consultations', path: '/contact'},
                  {label: 'Privacy, Compliance & Terms', path: '/privacy-and-terms'},
                ].map((item) => (
                  <li key={item.path}>
                    <a
                      href={item.path}
                      onClick={(e) => handleLinkClick(e, item.path)}
                      className="hover:text-white hover:underline underline-offset-4 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-[#C5A9AD] mb-4">
                Official Clinic Links
              </h2>
              <ul className="space-y-2 text-sm text-[#F8F6F4]/85">
                <li>
                  <a
                    href={CLINIC_INFO.officialWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-white underline underline-offset-4"
                  >
                    Official Website
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href={CLINIC_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-white underline underline-offset-4"
                  >
                    Instagram (@traceyager.aesthetics)
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a
                    href={CLINIC_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 hover:text-white underline underline-offset-4"
                  >
                    Facebook (TraceyAgerAesthetics)
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#FFFFFF]/12 flex flex-col lg:flex-row lg:items-center justify-between gap-4 text-xs text-[#F8F6F4]/70">
            <p className="font-medium text-[#C5A9AD]">
              {CLINIC_INFO.disclosureBanner}
            </p>
            <p>
              Private independent clinic in Alwoodley, North Leeds — not NHS-operated or NHS-endorsed.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
