/*
  Style direction: Field Notes Club — contemporary athletic-club editorial.
  This page uses deep ink green, warm cream, Court Orange, DM Serif Display + Manrope,
  field-line motifs, asymmetrical briefing layouts, and calm utility-first motion.
*/

import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  ExternalLink,
  Languages,
  MapPin,
  Menu,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  X,
} from "lucide-react";

const GOOGLE_FORM_URL: string = "";
const FALLBACK_HERO = "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=85";
const FALLBACK_RACKET = "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1000&q=85";
const FALLBACK_TEAM = "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1000&q=85";
const FALLBACK_TABLE = "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=85";

const specialties = [
  {
    label: "球拍運動",
    title: "乒乓波 · 網球 · 羽毛球",
    image: "/manus-storage/coachmatch-racket-sports_803d8b27.jpg",
    note: "按程度、場地與訓練目標配對",
    fallback: FALLBACK_RACKET,
  },
  {
    label: "球類運動",
    title: "足球 · 籃球 · 排球",
    image: "/manus-storage/coachmatch-team-sports_9eebcd32.jpg",
    note: "由入門到比賽，清楚交代你的強項",
    fallback: FALLBACK_TEAM,
  },
  {
    label: "技術打磨",
    title: "乒乓波專項教學",
    image: "/manus-storage/coachmatch-table-tennis_ec994294.jpg",
    note: "教練式細節，連接真正合適的學生",
    fallback: FALLBACK_TABLE,
  },
];

const steps = [
  {
    number: "01",
    title: "留下你的教練資料",
    text: "告訴我們你教甚麼、在哪裡教，以及平日哪段時間可以接學生。",
  },
  {
    number: "02",
    title: "收到合適需求",
    text: "我們按照運動項目、程度、地區與時間，先做一次精準配對。",
  },
  {
    number: "03",
    title: "完成第一次介紹",
    text: "學生的第一個月費用由平台處理，首堂完成後扣除一次性介紹費，再支付餘額給你。",
  },
];

const coachTags = ["乒乓波", "網球", "足球", "跑步", "游泳", "普拉提"];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.title = "CoachMatch｜讓合適的學生找到你";
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <div className="min-h-screen overflow-hidden bg-[var(--paper)] text-[var(--ink)]">
      <div className="topline">
        <div className="container flex items-center justify-between gap-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--paper)]">
          <span>CoachMatch · 運動導師配對</span>
          <span className="hidden sm:inline-flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--orange)]" />
            現正招募教練
          </span>
        </div>
      </div>

      <header className="site-header">
        <div className="container flex h-[76px] items-center justify-between gap-8">
          <a href="#top" className="brand-lockup" aria-label="CoachMatch 首頁">
            <span className="brand-mark" aria-hidden="true">
              <img src="/manus-storage/coachmatch-mark_04b91c64.png" alt="" onError={(event) => { event.currentTarget.style.display = "none"; event.currentTarget.parentElement?.classList.add("mark-fallback"); }} /><span className="mark-lines" aria-hidden="true" />
            </span>
            <span>
              <span className="brand-name">CoachMatch</span>
              <span className="brand-subtitle">Athletic talent intake</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="主選單">
            <a href="#why" className="nav-link">點解加入</a>
            <a href="#specialties" className="nav-link">專長項目</a>
            <a href="#apply" className="nav-link">登記資料</a>
          </nav>

          <a href="#apply" className="button button-dark hidden md:inline-flex">
            <span>填寫教練資料</span>
            <ArrowUpRight size={15} strokeWidth={2.4} />
          </a>

          <button
            className="menu-trigger md:hidden"
            type="button"
            aria-label={mobileOpen ? "關閉選單" : "打開選單"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {mobileOpen && (
          <div className="mobile-menu md:hidden">
            <a href="#why" onClick={closeMenu}>點解加入</a>
            <a href="#specialties" onClick={closeMenu}>專長項目</a>
            <a href="#apply" onClick={closeMenu}>登記資料 <ArrowUpRight size={15} /></a>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-field-line" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy reveal-up">
              <div className="eyebrow"><span className="eyebrow-rule" /> 教練招募 brief 01</div>
              <h1>
                你教得好，<br />
                <em>讓合適的學生</em><br />
                找到你。
              </h1>
              <p className="hero-lede">
                CoachMatch 連接有清晰運動目標的學生，與真正有專長、有時間教人的導師。留下你的資料，下一位合適的學生可能就在等你。
              </p>
              <div className="hero-actions">
                <a href="#apply" className="button button-orange">
                  開始登記 <ArrowUpRight size={16} strokeWidth={2.5} />
                </a>
                <a href="#how-it-works" className="text-link">
                  了解流程 <ArrowDownRight size={16} />
                </a>
              </div>
              <div className="hero-trust-row">
                <span><ShieldCheck size={16} /> 資料只作配對用途</span>
                <span><Sparkles size={16} /> 一次登記，等合適介紹</span>
              </div>
            </div>

            <div className="hero-visual reveal-up reveal-delay-1">
              <div className="hero-image-frame">
                <img
                  src={FALLBACK_HERO}
                  data-generated-src="/manus-storage/coachmatch-hero-reference_2ef95f5d.jpg"
                  alt="運動教練站在戶外球場旁"
                />
                <div className="hero-image-caption">
                  <span className="caption-kicker">Match note / 001</span>
                  <span>專長 × 時間 × 地區</span>
                </div>
              </div>
              <div className="coach-dossier">
                <div className="dossier-heading">
                  <span>教練資料卡</span>
                  <span className="dossier-status"><span /> OPEN</span>
                </div>
                <div className="dossier-name">你的專長，值得被看見。</div>
                <div className="dossier-tags">
                  {coachTags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="dossier-meta">
                  <span><MapPin size={13} /> 服務地區</span>
                  <span><Clock3 size={13} /> 可教時段</span>
                </div>
              </div>
              <div className="floating-stamp">FIELD<br />READY</div>
            </div>
          </div>
          <div className="hero-bottom-note container">
            <span>01 / 教練資料登記</span>
            <span className="line" />
            <span>由人工篩選，連接真實需求</span>
          </div>
        </section>

        <section id="why" className="why-section section-pad">
          <div className="container why-grid">
            <div className="section-intro">
              <div className="eyebrow"><span className="eyebrow-rule" /> Why CoachMatch</div>
              <h2>少啲搵客，<br /><em>多啲教學。</em></h2>
              <p>我們先理解你的專長與空檔，再將你介紹給有相應需要的學生。你不用經營一個複雜的網上店，只需要做好你最擅長的事。</p>
              <a href="#apply" className="arrow-link">留下你的資料 <ChevronRight size={17} /></a>
            </div>
            <div className="benefit-list">
              <article className="benefit-row">
                <div className="benefit-icon"><Users size={20} /></div>
                <div>
                  <span className="row-index">01 / 精準需求</span>
                  <h3>學生講清楚想學甚麼</h3>
                  <p>從運動項目、程度到地點與時段，減少來回溝通，讓第一次介紹更有方向。</p>
                </div>
              </article>
              <article className="benefit-row">
                <div className="benefit-icon"><Trophy size={20} /></div>
                <div>
                  <span className="row-index">02 / 一次介紹</span>
                  <h3>不用長期抽佣</h3>
                  <p>成功介紹後只收一次 $600 介紹費；首堂完成後支付餘額，之後由你直接管理學生。</p>
                </div>
              </article>
              <article className="benefit-row">
                <div className="benefit-icon"><CalendarDays size={20} /></div>
                <div>
                  <span className="row-index">03 / 時間由你定</span>
                  <h3>只接你有空的時段</h3>
                  <p>清楚提交平日、週末、早晚及可服務地區，配對前先以你的實際安排為準。</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="specialties" className="specialties-section section-pad">
          <div className="container">
            <div className="section-heading-row">
              <div>
                <div className="eyebrow eyebrow-light"><span className="eyebrow-rule" /> What you coach</div>
                <h2 className="light-heading">你嘅場地，<br /><em>你嘅專長。</em></h2>
              </div>
              <p className="section-side-note">不論你教緊球拍、球類、體能，<br />或者一項你獨有的運動技能，<br />都可以先留下資料。</p>
            </div>
            <div className="specialty-grid">
              {specialties.map((specialty, index) => (
                <article className={`specialty-card specialty-card-${index + 1}`} key={specialty.title}>
                  <div className="specialty-image-wrap">
                    <img src={specialty.fallback} data-generated-src={specialty.image} alt={`${specialty.title} 教練教學場景`} />
                    <span className="specialty-number">0{index + 1}</span>
                  </div>
                  <div className="specialty-card-copy">
                    <span className="card-label">{specialty.label}</span>
                    <h3>{specialty.title}</h3>
                    <p>{specialty.note}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="tag-rail" aria-label="其他可登記專長">
              <span className="tag-rail-label">其他專長</span>
              {coachTags.map((tag) => <span className="outline-tag" key={tag}>{tag}</span>)}
              <span className="outline-tag outline-tag-muted">+ 其他運動</span>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="steps-section section-pad">
          <div className="container">
            <div className="steps-heading">
              <div className="eyebrow"><span className="eyebrow-rule" /> How it works</div>
              <h2>三步，將空檔變成<br /><em>下一個教學機會。</em></h2>
            </div>
            <div className="steps-grid">
              {steps.map((step) => (
                <article className="step-card" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <span className="step-check"><Check size={15} /></span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="apply" className="apply-section section-pad">
          <div className="apply-stamp" aria-hidden="true">COACH<br />INTAKE</div>
          <div className="container apply-grid">
            <div className="apply-intro">
              <div className="eyebrow eyebrow-light"><span className="eyebrow-rule" /> Coach intake / 01</div>
              <h2 className="light-heading">準備好，<br /><em>留低你嘅資料。</em></h2>
              <p>填寫大約需要 3–5 分鐘。資料只用於教練配對及聯絡，提交後我們會先了解你的專長，再在有合適需求時與你聯絡。</p>
              <div className="apply-bullets">
                <span><Check size={15} /> 你的運動專長與教學程度</span>
                <span><Check size={15} /> 可教日期、時段及服務地區</span>
                <span><Check size={15} /> 聯絡方式及基本合作資料</span>
              </div>
            </div>
              <div className="form-shell field-sheet">
              <div className="form-shell-top">
                <span className="form-index">第 01 步</span>
                <span className="form-time"><Clock3 size={14} /> 約 3–5 分鐘</span>
              </div>
              {GOOGLE_FORM_URL ? (
                <iframe
                  title="CoachMatch 教練資料登記表格"
                  src={`${GOOGLE_FORM_URL}${GOOGLE_FORM_URL.includes("?") ? "&" : "?"}embedded=true`}
                  className="google-form-frame"
                  loading="lazy"
                />
              ) : (
                <div className="form-placeholder">
                  <div className="form-placeholder-icon"><ExternalLink size={22} /></div>
                  <span className="form-placeholder-label">Google Form embed</span>
                  <h3>你的登記表格會喺呢度出現</h3>
                  <p>將 Google Form 的「嵌入 HTML」內網址放入頁面設定，即可直接喺這裡收集教練資料。</p>
                  <div className="form-fields-preview">
                    <span>姓名／稱呼</span>
                    <span>擅長運動項目</span>
                    <span>可教時間與地區</span>
                  </div>
                  <a href="https://docs.google.com/forms/" target="_blank" rel="noreferrer" className="button button-orange button-full">
                    開啟 Google Forms <ExternalLink size={15} />
                  </a>
                </div>
              )}
              <div className="form-shell-bottom">
                <ShieldCheck size={15} /> 你的資料只會用於 CoachMatch 配對聯絡
              </div>
            </div>
          </div>
        </section>

        <section className="closing-section">
          <div className="container closing-inner">
            <div className="eyebrow"><span className="eyebrow-rule" /> Ready when you are</div>
            <h2>有專長，就有<br /><em>下一場好課。</em></h2>
            <a href="#apply" className="button button-dark">登記成為教練 <ArrowUpRight size={16} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="brand-lockup footer-brand">
            <span className="brand-mark" aria-hidden="true"><img src="/manus-storage/coachmatch-mark_04b91c64.png" alt="" onError={(event) => { event.currentTarget.style.display = "none"; event.currentTarget.parentElement?.classList.add("mark-fallback"); }} /><span className="mark-lines" aria-hidden="true" /></span>
            <span><span className="brand-name">CoachMatch</span><span className="brand-subtitle">Athletic talent intake</span></span>
          </div>
          <div className="footer-note">運動導師配對 · 香港<br />讓合適的學生找到你。</div>
          <div className="footer-links">
            <a href="#apply">教練資料登記 <ArrowUpRight size={14} /></a>
            <a href="mailto:hello@coachmatch.hk">聯絡我們 <ArrowUpRight size={14} /></a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 CoachMatch</span>
          <span className="footer-line" />
          <span>Built for coaches who teach with intent.</span>
        </div>
      </footer>
    </div>
  );
}
