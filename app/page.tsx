'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const navItems = [
  ['Company', '#company'],
  ['Services', '#services'],
  ['Standards', '#standards'],
  ['Coverage', '#coverage'],
  ['Contact', '#contact'],
]

const services = [
  {
    no: '01',
    label: 'Ship Agency',
    title: 'Disciplined port agency for reliable vessel calls.',
    text: 'We support owners, managers, charterers and ship operators with port call coordination, protective agency, crew change, vessel husbandry and transparent disbursement handling. Every call is managed through clear communication, local control and accountable execution.',
    image: '/images/ship-agency/agency-01.jpg',
    items: [
      'Port call coordination',
      'Protective agency',
      'Crew change and husbandry',
      'Transparent disbursement handling',
    ],
  },
  {
    no: '02',
    label: 'Marine Logistics',
    title: 'Time-critical logistics with door-to-deck control.',
    text: 'Urgent spares, technical cargo and bonded materials are coordinated through responsive customs handling, regional delivery planning and dependable berth, port or anchorage execution. Our marine logistics service is designed to reduce uncertainty and keep operations moving.',
    image: '/images/marine-logistics/logistics-01.jpg',
    items: [
      'Urgent spares delivery',
      'Door-to-deck coordination',
      'Customs clearance support',
      'Regional warehousing coordination',
    ],
  },
  {
    no: '03',
    label: 'Ship Supply',
    title: 'Reliable supply support for daily vessel operations.',
    text: 'From ship provisions to technical consumables, we deliver quality-controlled stores and supply support with practical sourcing discipline and vessel-focused execution. This includes bonded stores, deck stores, engine stores and cabin requirements.',
    image: '/images/ship-supply/supply-01.jpg',
    items: [
      'Fresh and bonded provisions',
      'Deck, engine and cabin stores',
      'Technical consumables',
      'Quality-controlled sourcing',
    ],
  },
  {
    no: '04',
    label: 'Technical Engineering',
    title: 'Asset maintenance and class compliance to minimize downtime.',
    text: 'We support superintendents with certified dry-docking management, technical repairs, and turnkey engineering upgrades. From class-approved underwater services (CCTV & hull cleaning) to mandatory safety inspections (FFE/LSA), our technical interventions guard your vessel’s operational continuity.',
    image: '/images/ship-repair/repair-01.jpg',
    items: [
      'Technical repairs & dry-docking management',
      'Class-approved underwater CCTV & hull cleaning',
      'Mandatory FFE / LSA annual safety inspections',
      'IACS class standard compliance (ABS, DNV, LR, CCS)',
    ],
  },
]

const standards = [
  {
    no: '01',
    title: 'Clear Response',
    text: 'Every operational request is handled with ownership, timely follow-up and a defined next step.',
  },
  {
    no: '02',
    title: 'Controlled Execution',
    text: 'Port-side actions are coordinated through verified updates, local knowledge and disciplined handover.',
  },
  {
    no: '03',
    title: 'Transparent Costs',
    text: 'Disbursement handling and supplier coordination are managed with accountable records and clear reporting.',
  },
  {
    no: '04',
    title: 'Repeatable Reliability',
    text: 'Trust is built through consistent performance across vessel calls, logistics movements and supply delivery.',
  },
]

const locations = [
  ['Qingdao', 'Northern China port support and operating base.'],
  ['Shanghai', 'Central coordination serving Yangtze River ports and ports south of the river.'],
  ['Hong Kong', 'Commercial connection and regional vessel support.'],
  ['Singapore', 'International network linkage and marine service corridor.'],
]

export default function Page() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const headerLight = scrolled || menuOpen

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F5F0E8] text-[#17324A] antialiased">
      {/* Header —— 顶级极简美学：去除了REQUEST按钮，菜单完美向右边界绝对对齐 */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          headerLight
            ? 'border-b border-[#17324A]/10 bg-[#F5F0E8]/95 shadow-[0_18px_55px_rgba(23,50,74,0.05)] backdrop-blur-xl'
            : 'border-b border-white/10 bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1480px] items-center justify-between px-5 sm:px-6 md:h-[82px] md:px-10 xl:px-14">
          <a href="#home" className="group flex items-center gap-[4px]" aria-label="Transocean Shipping Services homepage">
            <Image
              src="/logo/logo-mark.png"
              alt="Transocean"
              width={40}
              height={40}
              priority
              className="mr-[-1px] h-[36px] w-[36px] shrink-0 object-contain md:h-[38px] md:w-[38px]"
            />
            <div className="flex flex-col leading-none">
              <span className={`text-[10.5px] font-extrabold uppercase tracking-[0.13em] md:text-[11px] ${headerLight ? 'text-[#17324A]' : 'text-white'}`}>
                Transocean
              </span>
              <span className={`mt-[3px] text-[7.8px] font-semibold uppercase tracking-[0.1em] md:text-[8.2px] ${headerLight ? 'text-[#6F7D89]' : 'text-white/62'}`}>
                Shipping Services
              </span>
            </div>
          </a>

          {/* 五个主菜单右对齐 */}
          <nav className="hidden items-center gap-8 xl:flex" aria-label="Main navigation">
            {navItems.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className={`text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors ${
                  headerLight ? 'text-[#17324A]/66 hover:text-[#17324A]' : 'text-white/72 hover:text-white'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className={`flex h-11 w-11 items-center justify-center border xl:hidden ${
              headerLight ? 'border-[#17324A]/18' : 'border-white/30 bg-white/[0.03]'
            }`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="relative h-4 w-5">
              <span className={`absolute left-0 top-0 h-px w-5 transition-all ${headerLight ? 'bg-[#17324A]' : 'bg-white'} ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`absolute left-0 top-[7px] h-px w-5 transition-all ${headerLight ? 'bg-[#17324A]' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 top-[14px] h-px w-5 transition-all ${headerLight ? 'bg-[#17324A]' : 'bg-white'} ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>

        <div className={`overflow-hidden transition-all duration-300 xl:hidden ${menuOpen ? 'max-h-[520px] border-t border-[#17324A]/10' : 'max-h-0'}`}>
          <div className="bg-[#F5F0E8]/98 px-5 py-5 backdrop-blur-xl sm:px-6 md:px-10">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[#17324A]/10 py-4 text-[12px] font-bold uppercase tracking-[0.16em] text-[#17324A]/76"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero —— 极致纯净空旷版：底部的01-04网格已被连根洗净，实现真正的国际顶级留白感 */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-[#10273D]"
      >
        <video
src="/videos/hero.mp4"
  autoPlay
  muted
  loop
  playsInline
  webkit-playsinline="true"
  preload="auto"
  className="absolute inset-0 h-full w-full object-cover opacity-[0.74]"
/>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(217,180,122,0.10),transparent_34%),linear-gradient(90deg,rgba(16,39,61,0.95),rgba(16,39,61,0.68)_42%,rgba(16,39,61,0.18))]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#10273D]/30 via-transparent to-[#10273D]/66" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-[#F5F0E8]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1480px] items-end px-5 pb-24 pt-32 sm:px-6 md:px-10 md:pb-32 xl:px-14">
          <div className="w-full">
            <div className="max-w-[1120px]">
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#D9B47A] md:text-[11px]">
                Ship Agency · Marine Logistics · Ship Supply · Technical Engineering
              </p>

              <h1 className="mt-6 max-w-[1120px] text-[44px] font-semibold leading-[0.93] tracking-[-0.06em] text-white sm:text-[60px] md:text-[86px] xl:text-[108px]">
                Reliable marine services for vessel operations.
              </h1>

              <p className="mt-7 max-w-[760px] text-[16px] leading-[1.9] text-white/78 md:text-[18px]">
                Transocean supports owners, managers, charterers and ship operators
                with disciplined ship agency, marine logistics, ship supply and
                technical engineering support across China, Hong Kong and Singapore.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#services"
                  className="inline-flex min-h-[52px] items-center justify-center bg-white px-8 text-[11px] font-bold uppercase tracking-[0.17em] text-[#17324A] transition-all hover:bg-[#F5F0E8]"
                >
                  Explore Services
                </a>

                <a
                  href="#contact"
                  className="inline-flex min-h-[52px] items-center justify-center border border-white/30 px-8 text-[11px] font-bold uppercase tracking-[0.17em] text-white transition-all hover:border-white/60 hover:bg-white/10"
                >
                  Contact Operations
                </a>
              </div>
            </div>
            {/* 01-04 底部网格及上层分割线已被彻底连根移除，交还给大气的视觉呼吸节奏 */}
          </div>
        </div>
      </section>

      {/* Company —— 黄金紧凑咬合间距（py-12 md:py-16），彻底消灭由于两屏叠加导致的空洞感 */}
      <section
        id="company"
        className="scroll-mt-24 bg-[#F5F0E8] px-5 py-12 sm:px-6 md:px-10 md:py-16 xl:px-14"
      >
        <div className="mx-auto max-w-[1480px]">
          <div className="border-t border-[#17324A]/12 pt-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#9B7447]">
              Company
            </p>

            <div className="mt-8 grid gap-8 xl:grid-cols-12 xl:gap-12">
              <div className="xl:col-span-7">
                <h2 className="max-w-[920px] text-[36px] font-semibold leading-[1.02] tracking-[-0.052em] md:text-[58px] xl:text-[70px]">
                  Built for port operations that require clarity, speed and accountability.
                </h2>
              </div>

              <div className="xl:col-span-5">
                <p className="max-w-[620px] text-[16px] leading-[1.92] text-[#526574] md:text-[17px]">
                  Marine operations rarely wait for ideal conditions. Our role is
                  to help ship owners, ship managers, charterers and vessel operators
                  move through port requirements with reliable communication, local
                  control and practical execution.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-6 xl:grid-cols-12 xl:items-stretch">
            <div className="xl:col-span-8">
              <div className="overflow-hidden bg-[#17324A] shadow-[0_30px_90px_rgba(23,50,74,0.12)]">
                <Image
                  src="/images/company/company-01.jpg"
                  alt="Port operations and vessel support"
                  width={1400}
                  height={860}
                  priority={false}
                  className="h-[320px] w-full object-cover md:h-[560px] xl:h-[660px]"
                />
              </div>
            </div>

            <div className="xl:col-span-4">
              <div className="flex h-full flex-col justify-between bg-[#ECE3D6] p-7 md:p-10 xl:p-12">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#9B7447]">
                    Our Position
                  </p>

                  <h3 className="mt-8 text-[25px] font-semibold leading-[1.25] tracking-[-0.035em] md:text-[34px]">
                    An operating layer between vessel requirements and local port realities.
                  </h3>

                  <p className="mt-6 text-[15px] leading-[1.86] text-[#526574]">
                    We combine local marine service execution with international
                    reporting discipline, helping reduce uncertainty during port
                    calls, logistics movements and supply operations.
                  </p>
                </div>

                <ul className="mt-10 grid gap-4 border-t border-[#17324A]/12 pt-7">
                  {[
                    'Local port execution',
                    'International reporting discipline',
                    'Operational ownership',
                    'Transparent cost handling',
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#B88A52]" />
                      <span className="text-[14px] leading-[1.72] text-[#526574]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="scroll-mt-24 bg-white px-5 py-12 sm:px-6 md:px-10 md:py-16 xl:px-14"
      >
        <div className="mx-auto max-w-[1480px]">
          <div className="border-t border-[#17324A]/12 pt-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#9B7447]">
              Services
            </p>

            <div className="mt-8 grid gap-8 xl:grid-cols-12 xl:gap-16">
              <div className="xl:col-span-7">
                <h2 className="max-w-[900px] text-[36px] font-semibold leading-[1.02] tracking-[-0.052em] md:text-[58px] xl:text-[70px]">
                  Integrated marine services for vessel support.
                </h2>
              </div>

              <div className="xl:col-span-5">
                <p className="max-w-[620px] text-[16px] leading-[1.92] text-[#526574] md:text-[17px]">
                  Our service structure connects ship agency, marine logistics, ship
                  supply and technical engineering into one disciplined operating system,
                  minimizing handover gaps across technical and port operations.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 space-y-20 md:space-y-24">
            {services.map((service, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <article key={service.no} className="border-t border-[#17324A]/12 pt-8">
                  <div className="grid gap-8 xl:grid-cols-12 xl:gap-12">
                    <div className={`xl:col-span-7 ${isEven ? 'xl:order-2' : ''}`}>
                      <Image
                        src={service.image}
                        alt={service.label}
                        width={1200}
                        height={780}
                        className="h-[310px] w-full object-cover md:h-[480px] xl:h-[580px]"
                      />
                    </div>

                    <div className="flex flex-col justify-between xl:col-span-5">
                      <div>
                        <div className="flex items-center gap-4">
                          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#9B7447]">
                            {service.no}
                          </span>
                          <span className="h-px w-12 bg-[#17324A]/16" />
                          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#6F7D89]">
                            {service.label}
                          </span>
                        </div>

                        <h3 className="mt-7 text-[31px] font-semibold leading-[1.06] tracking-[-0.045em] md:text-[48px]">
                          {service.title}
                        </h3>

                        <p className="mt-6 text-[16px] leading-[1.9] text-[#526574]">
                          {service.text}
                        </p>
                      </div>

                      <ul className="mt-10 grid gap-4 border-t border-[#17324A]/12 pt-7 sm:grid-cols-2 xl:grid-cols-1">
                        {service.items.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#B88A52]" />
                            <span className="text-[14px] leading-[1.72] text-[#34495C]">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section
        id="standards"
        className="scroll-mt-24 bg-[#EAF0F2] px-5 py-12 sm:px-6 md:px-10 md:py-16 xl:px-14"
      >
        <div className="mx-auto max-w-[1480px]">
          <div className="border-t border-[#17324A]/12 pt-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#9B7447]">
              Operating Standards
            </p>

            <div className="mt-8 grid gap-8 xl:grid-cols-12 xl:gap-12">
              <div className="xl:col-span-7">
                <h2 className="max-w-[920px] text-[36px] font-semibold leading-[1.02] tracking-[-0.052em] md:text-[58px] xl:text-[70px]">
                  Service discipline built around response, control and trust.
                </h2>
              </div>

              <div className="xl:col-span-5">
                <p className="max-w-[620px] text-[16px] leading-[1.92] text-[#526574] md:text-[17px]">
                  Good marine service is not only about availability. It also
                  depends on reporting discipline, cost clarity, operational ownership
                  and repeatable execution across every vessel touchpoint.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {standards.map((item) => (
              <article
                key={item.no}
                className="flex min-h-[250px] flex-col justify-between border border-[#17324A]/10 bg-white p-7 shadow-[0_18px_40px_rgba(23,50,74,0.04)] md:p-8"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#9B7447]">
                    {item.no}
                  </p>
                  <h3 className="mt-6 text-[24px] font-semibold leading-[1.2] tracking-[-0.03em]">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-8 text-[15px] leading-[1.84] text-[#526574]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section
        id="coverage"
        className="scroll-mt-24 bg-[#17324A] px-5 py-12 text-white sm:px-6 md:px-10 md:py-16 xl:px-14"
      >
        <div className="mx-auto max-w-[1480px]">
          <div className="border-t border-white/12 pt-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D9B47A]">
              Coverage
            </p>

            <div className="mt-8 grid gap-8 xl:grid-cols-12 xl:gap-12">
              <div className="xl:col-span-7">
                <h2 className="max-w-[920px] text-[36px] font-semibold leading-[1.02] tracking-[-0.052em] md:text-[58px] xl:text-[70px]">
                  Positioned across key marine and commercial gateways.
                </h2>
              </div>

              <div className="xl:col-span-5">
                <p className="max-w-[620px] text-[16px] leading-[1.92] text-white/72 md:text-[17px]">
                  Our operating footprint connects major China port support with
                  regional commercial links in Hong Kong and Singapore, helping
                  clients manage local execution with broader visibility.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {locations.map(([name, desc], index) => (
              <article
                key={name}
                className="border border-white/12 bg-white/[0.04] p-7 backdrop-blur-sm md:p-8"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#D9B47A]">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-5 text-[26px] font-semibold tracking-[-0.03em]">
                  {name}
                </h3>
                <p className="mt-4 text-[15px] leading-[1.8] text-white/68">
                  {desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 bg-[#F5F0E8] px-5 py-12 sm:px-6 md:px-10 md:py-16 xl:px-14"
      >
        <div className="mx-auto max-w-[1480px]">
          <div className="grid gap-8 xl:grid-cols-12 xl:gap-12">
            <div className="xl:col-span-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#9B7447]">
                Contact
              </p>

              <h2 className="mt-8 max-w-[880px] text-[36px] font-semibold leading-[1.02] tracking-[-0.052em] md:text-[58px] xl:text-[70px]">
                Discuss your next port call, logistics movement or vessel supply requirement.
              </h2>

              <p className="mt-8 max-w-[700px] text-[16px] leading-[1.92] text-[#526574] md:text-[17px]">
                If you need ship agency, marine logistics, ship supply or broader
                vessel operational support, we can help you coordinate the next step
                with clarity, speed and practical local execution.
              </p>
            </div>

            <div className="xl:col-span-5">
              <div className="border border-[#17324A]/10 bg-white p-7 shadow-[0_18px_50px_rgba(23,50,74,0.06)] md:p-10">
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9B7447]">
                      Operational Inquiries (24/7)
                    </p>
                    <a
                      href="mailto:agency@transocean-hub.com"
                      className="mt-2 block text-[18px] font-semibold text-[#17324A] hover:underline break-all"
                    >
                      agency@transocean-hub.com
                    </a>
                  </div>

                  <div className="border-t border-[#17324A]/10 pt-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9B7447]">
                      Executive Direct Line
                    </p>
                    <a
                      href="mailto:eric.hu@tosagency.cn"
                      className="mt-2 block text-[18px] font-semibold text-[#17324A] hover:underline break-all"
                    >
                      eric.hu@tosagency.cn
                    </a>
                    <p className="mt-2 text-[14px] leading-[1.7] text-[#526574]">
                      Direct channel to senior management for critical oversight, international compliance governance, and unresolved local port performance.
                    </p>
                  </div>
                </div>

                <a
                  href="mailto:agency@transocean-hub.com"
                  className="mt-8 inline-flex min-h-[52px] w-full items-center justify-center bg-[#17324A] px-6 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-[#10273D]"
                >
                  Request Operational Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
<footer className="bg-[#10273D] px-5 py-10 text-white sm:px-6 md:px-10 xl:px-14">
        <div className="mx-auto flex max-w-[1480px] flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-end">
          <div className="flex flex-col gap-2 md:items-end">
            <p className="text-[12px] tracking-[0.08em] text-white/56">
              © 2026 Transocean Shipping Services. All rights reserved.
            </p>
            <p className="text-[12px] tracking-[0.08em] text-white/42">
              Ship Agency · Marine Logistics · Ship Supply · Technical Engineering
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}