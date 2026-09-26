const fs = require('fs');
const path = require('path');

const bundlePath = path.join(__dirname, '..', 'assets', 'index-mGGyI97A.js');
const originalContent = fs.readFileSync(bundlePath, 'utf8');

// The React, Framer Motion, Lenis runtime is the first 385200 characters
const runtimePrefix = originalContent.substring(0, 385200);

// Safe, descriptive, non-conflicting variable names
const appCode = `
;const weddingData = window.WEDDING_DATA || {},
  coupleData = weddingData.couple || {},
  weddingEventData = weddingData.wedding || {},
  venueData = weddingData.venue || {},
  verseData = weddingData.verse || weddingData.religious || {},
  imagesData = weddingData.images || {},
  musicData = weddingData.music || {};

const ft = {
  groom: coupleData.groom ?? weddingData.groom ?? "Durgesh",
  bride: coupleData.bride ?? weddingData.bride ?? "Tripti",
  groomFull: coupleData.groomFull ?? weddingData.groomFull ?? "Durgesh Pratap Singh",
  brideFull: coupleData.brideFull ?? weddingData.brideFull ?? "Tripti Singh",
  groomParents: coupleData.groomParents ?? weddingData.groomParents ?? "Together with their cherished families",
  brideParents: coupleData.brideParents ?? weddingData.brideParents ?? "With the loving blessings of family and elders",
  hashtag: coupleData.hashtag ?? weddingData.hashtag ?? "#DurgeshWedsTripti",
  monogram: coupleData.monogram ?? weddingData.monogram ?? "D · T",
  familySign: coupleData.familySign ?? "With love & blessings, the Singh families",
  dateISO: weddingEventData.dateISO ?? weddingData.dateISO ?? "2026-12-03T19:00:00+05:30",
  dateLabel: weddingEventData.dateLabel ?? weddingData.dateLabel ?? "Thursday, 3rd December 2026",
  timeLabel: weddingEventData.timeLabel ?? weddingData.timeLabel ?? "Wedding at 7:00 PM onwards",
  venue: {
    name: venueData.name ?? "Awadh Castle",
    address: venueData.address ?? "Awadh Castle (Haldi, Sangeet & Wedding) • Hotel Holiday Heights (Engagement)",
    mapsQuery: venueData.mapsQuery ?? "Awadh Castle",
    mapsUrl: venueData.mapsUrl ?? "https://maps.app.goo.gl/4cXmFXDzBceqM5ZH9?g_st=ic"
  },
  venues: weddingData.venues ?? [
    {
      id: "holiday-heights",
      name: "Hotel Holiday Heights",
      role: "Engagement Venue",
      events: "Engagement Ceremony • 17 October 2026 (11:00 AM onwards)",
      mapsUrl: "https://maps.app.goo.gl/QkwJTDuG6zYTm3Wd8?g_st=ic",
      mapsQuery: "Hotel Holiday Heights",
      mapsEmbed: "https://maps.google.com/maps?q=Hotel+Holiday+Heights&output=embed"
    },
    {
      id: "awadh-castle",
      name: "Awadh Castle",
      role: "Wedding Functions Venue",
      events: "Haldi & Sangeet (2 Dec) • Wedding Ceremony (3 Dec)",
      mapsUrl: "https://maps.app.goo.gl/4cXmFXDzBceqM5ZH9?g_st=ic",
      mapsQuery: "Awadh Castle",
      mapsEmbed: "https://maps.google.com/maps?q=Awadh+Castle&output=embed"
    }
  ],
  verse: {
    sanskrit: verseData.sanskrit ?? "॥ ॐ श्री गणेशाय नमः ॥",
    shloka: verseData.shloka ?? "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ । निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥",
    arabic: verseData.sanskrit ?? verseData.arabic ?? "॥ ॐ श्री गणेशाय नमः ॥",
    text: verseData.text ?? "With joy in our hearts and the blessings of our families, we invite you to celebrate the wedding ceremonies of Tripti & Durgesh as we begin our forever together."
  },
  events: weddingData.events ?? [
    {
      id: "engagement",
      name: "Engagement",
      category: "Ring Ceremony",
      date: "Saturday, 17th October 2026",
      dayLabel: "Saturday",
      dayNum: "17",
      monthLabel: "October 2026",
      time: "11:00 AM onwards",
      venue: "Hotel Holiday Heights",
      mapsUrl: "https://maps.app.goo.gl/QkwJTDuG6zYTm3Wd8?g_st=ic",
      note: "An auspicious celebration marking the joyful beginning of our journey together."
    },
    {
      id: "haldi",
      name: "Haldi",
      category: "Auspicious Turmeric Ritual",
      date: "Wednesday, 2nd December 2026",
      dayLabel: "Wednesday",
      dayNum: "02",
      monthLabel: "December 2026",
      time: "1:00 PM onwards",
      venue: "Awadh Castle",
      mapsUrl: "https://maps.app.goo.gl/4cXmFXDzBceqM5ZH9?g_st=ic",
      note: "A vibrant ritual of auspicious turmeric, love, sunshine, and joyful laughter."
    },
    {
      id: "sangeet",
      name: "Sangeet",
      category: "Musical Night of Celebrations",
      date: "Wednesday, 2nd December 2026",
      dayLabel: "Wednesday",
      dayNum: "02",
      monthLabel: "December 2026",
      time: "7:00 PM onwards",
      venue: "Awadh Castle",
      mapsUrl: "https://maps.app.goo.gl/4cXmFXDzBceqM5ZH9?g_st=ic",
      note: "An enchanting evening of music, dance, celebrations, and festive rhythms."
    },
    {
      id: "wedding",
      name: "Wedding (Shubh Vivah)",
      category: "Sacred Vows & Pheras",
      date: "Thursday, 3rd December 2026",
      dayLabel: "Thursday",
      dayNum: "03",
      monthLabel: "December 2026",
      time: "7:00 PM onwards",
      venue: "Awadh Castle",
      mapsUrl: "https://maps.app.goo.gl/4cXmFXDzBceqM5ZH9?g_st=ic",
      note: "The sacred Phere, holy vows around the sacred fire, and celebration of union."
    }
  ],
  program: weddingData.program ?? [
    { name: "Engagement Ceremony", time: "17 Oct · 11:00 AM", venue: "Hotel Holiday Heights" },
    { name: "Haldi Ceremony", time: "02 Dec · 1:00 PM", venue: "Awadh Castle" },
    { name: "Sangeet Night", time: "02 Dec · 7:00 PM", venue: "Awadh Castle" },
    { name: "Baraat & Reception", time: "03 Dec · 7:00 PM", venue: "Awadh Castle" },
    { name: "Sacred Pheras & Vows", time: "03 Dec · 10:00 PM", venue: "Awadh Castle" }
  ],
  sections: weddingData.sections ?? { events: !0, venues: !0, photos: !0, countdown: !0, music: !0 },
  music: {
    audio: musicData.audio ?? "./editable/assets/music.mp3",
    title: musicData.title ?? "Navrai Majhi",
    film: musicData.film ?? "English Vinglish",
    youtube: musicData.youtube ?? "https://youtu.be/hEHNef66HT0?si=Own9VAlh1cS3f_qE",
    autoplayOnOpen: musicData.autoplayOnOpen ?? !0
  },
  photos: weddingData.photos ?? [
    {
      src: "./editable/assets/couple-photo.jpg",
      caption: "Tripti & Durgesh",
      subtitle: "Two hearts, one soul, starting our forever together"
    }
  ],
  images: {
    couple: imagesData.couple ?? "./editable/assets/layer-couple.png",
    background: imagesData.background ?? "./editable/assets/layer-01-background.png",
    shadows: imagesData.shadows ?? "./editable/assets/layer-02-shadows.png",
    groom: imagesData.groom ?? "./editable/assets/layer-03-groom.png",
    bride: imagesData.bride ?? "./editable/assets/layer-04-bride.png",
    bouquet: imagesData.bouquet ?? "./editable/assets/layer-05-bouquet.png",
    heroComposite: imagesData.heroComposite ?? "./editable/assets/hero-composite.jpg",
    couplePhoto: imagesData.couplePhoto ?? "./editable/assets/couple-photo.jpg"
  }
};

const vM = (customDateISO, customVenueName, customAddress) => {
  const dISO = customDateISO || ft.dateISO;
  const vName = customVenueName || ft.venue.name;
  const vAddr = customAddress || ft.venue.address;
  const n = new Date(dISO),
    a = new Date(n.getTime() + 300 * 60 * 1e3),
    l = u => u.toISOString().replace(/[-:]|\\.\\d{3}/g, "").slice(0, 15) + "Z";
  return \`https://calendar.google.com/calendar/render?\${new URLSearchParams({
    action: "TEMPLATE",
    text: \`\${ft.bride} weds \${ft.groom}\`,
    dates: \`\${l(n)}/\${l(a)}\`,
    details: \`\${vName} — \${vAddr}. \${ft.hashtag}\`,
    location: \`\${vName}, \${vAddr}\`
  }).toString()}\`;
};

const xM = (customDateISO, customVenueName, customAddress) => {
  const dISO = customDateISO || ft.dateISO;
  const vName = customVenueName || ft.venue.name;
  const vAddr = customAddress || ft.venue.address;
  const n = new Date(dISO),
    a = new Date(n.getTime() + 300 * 60 * 1e3),
    l = d => d.toISOString().replace(/[-:.]/g, "").slice(0, 15) + "Z",
    o = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//InviteStory//Wedding//EN",
      "BEGIN:VEVENT",
      \`UID:\${Date.now()}@invitestory\`,
      \`DTSTAMP:\${l(new Date)}\`,
      \`DTSTART:\${l(n)}\`,
      \`DTEND:\${l(a)}\`,
      \`SUMMARY:\${ft.bride} weds \${ft.groom}\`,
      \`DESCRIPTION:\${vName} — \${vAddr}\`,
      \`LOCATION:\${vName}\\\\, \${vAddr}\`,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\\r\\n"),
    u = new Blob([o], { type: "text/calendar;charset=utf-8" }),
    f = URL.createObjectURL(u),
    h = document.createElement("a");
  h.href = f;
  h.download = \`\${ft.bride}-\${ft.groom}-wedding.ics\`;
  h.click();
  URL.revokeObjectURL(f);
};

const SM = \`https://www.google.com/maps?q=\${encodeURIComponent(ft.venue.mapsQuery)}&output=embed\`;
const bM = ft.venue.mapsUrl || \`https://www.google.com/maps/dir/?api=1&destination=\${encodeURIComponent(ft.venue.mapsQuery)}\`;

const Zc = [0.65, 0, 0.35, 1];

function TM({ onOpening: n, onOpened: a }) {
  const [l, o] = E.useState(!1);
  const u = () => {
    if (!l) {
      o(!0);
      n();
      setTimeout(() => {
        a();
      }, 1200);
    }
  };
  return z.jsxs(st.div, {
    className: "fixed inset-0 z-50 overflow-hidden cursor-pointer",
    onClick: u,
    exit: { opacity: 0 },
    transition: { duration: 0.45 },
    children: [
      z.jsx(st.div, {
        className: "absolute inset-y-0 left-0 w-1/2 overflow-hidden",
        style: { background: "linear-gradient(110deg, #efe6d8 0%, #f6f0e6 45%, #ebe2d4 100%)" },
        animate: l ? { x: "-105%" } : { x: 0 },
        transition: { duration: 1.35, delay: 0.25, ease: Zc },
        children: z.jsx("div", {
          className: "absolute inset-0 opacity-40 mix-blend-multiply",
          style: {
            backgroundImage: \`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E")\`
          }
        })
      }),
      z.jsx(st.div, {
        className: "absolute inset-y-0 right-0 w-1/2 overflow-hidden",
        style: { background: "linear-gradient(250deg, #efe6d8 0%, #f6f0e6 45%, #ebe2d4 100%)" },
        animate: l ? { x: "105%" } : { x: 0 },
        transition: { duration: 1.35, delay: 0.25, ease: Zc },
        onAnimationComplete: () => l && a(),
        children: z.jsx("div", {
          className: "absolute inset-0 opacity-40 mix-blend-multiply",
          style: {
            backgroundImage: \`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E")\`
          }
        })
      }),
      z.jsx(st.div, {
        className: "pointer-events-none absolute inset-y-0 left-1/2 w-16 -translate-x-1/2",
        style: {
          background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.75), transparent)",
          filter: "blur(8px)"
        },
        initial: { opacity: 0, scaleX: 0.15 },
        animate: l ? { opacity: [0, 1, 0], scaleX: [0.15, 1.4, 2.4] } : { opacity: 0.35, scaleX: 0.4 },
        transition: { duration: 1.35, delay: 0.25, ease: Zc }
      }),
      z.jsxs(st.div, {
        className: "absolute inset-0 z-10 flex flex-col items-center justify-center px-8 text-center",
        animate: l ? { opacity: 0, scale: 0.96, filter: "blur(6px)" } : { opacity: 1, scale: 1, filter: "blur(0px)" },
        transition: { duration: 0.5 },
        children: [
          z.jsx(st.p, {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.15, duration: 0.7 },
            className: "font-display text-[11px] uppercase tracking-[0.42em] text-[#6e6256]",
            children: "An invitation"
          }),
          z.jsxs(st.h2, {
            initial: { opacity: 0, y: 18 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.28, duration: 0.9, ease: [0.22, 1, 0.36, 1] },
            className: "mt-4 font-script text-5xl text-[#1a1814] sm:text-6xl",
            children: [ft.groom, " & ", ft.bride]
          }),
          z.jsx(st.p, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.5, duration: 0.7 },
            className: "mt-3 max-w-xs font-display text-base italic leading-relaxed text-[#5c5146]",
            children: "Open gently — a celebration awaits"
          }),
          z.jsxs(st.button, {
            type: "button",
            onClick: u,
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.65, duration: 0.7 },
            whileHover: { scale: 1.04, y: -2 },
            whileTap: { scale: 0.97 },
            className: "group mt-10 inline-flex items-center gap-3 rounded-full border border-[#1a1814]/15 bg-[#1a1814] px-7 py-3.5 text-[11px] uppercase tracking-[0.28em] text-[#f6f0e6] shadow-[0_16px_40px_rgba(40,30,20,0.18)] transition-[box-shadow] duration-500 ease-out hover:shadow-[0_22px_55px_rgba(40,30,20,0.3)]",
            children: [
              "Open invitation",
              z.jsx(st.span, {
                className: "flex h-7 w-7 items-center justify-center rounded-full bg-white/10",
                animate: { x: [0, 3, 0] },
                transition: { duration: 1.6, repeat: 1 / 0, ease: "easeInOut" },
                children: "→"
              })
            ]
          })
        ]
      })
    ]
  });
}

const EM = { x: 0, y: 0, scroll: 0, velocity: 0 };
function wM(n = !0) {
  const a = E.useRef({ x: 0, y: 0 }),
    l = E.useRef({ x: 0, y: 0 }),
    o = E.useRef({ x: 0, y: 0 }),
    u = E.useRef(0),
    [f, h] = E.useState(EM);
  return (
    E.useEffect(() => {
      if (!n || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const y = w => {
          a.current.x = (w.clientX / window.innerWidth) * 2 - 1;
          a.current.y = (w.clientY / window.innerHeight) * 2 - 1;
        },
        p = () => {
          u.current = window.scrollY;
        },
        g = w => {
          if (w.gamma == null || w.beta == null) return;
          const b = Math.max(-1, Math.min(1, w.gamma / 28)),
            R = Math.max(-1, Math.min(1, (w.beta - 45) / 35));
          Math.abs(a.current.x) < 0.05 &&
            Math.abs(a.current.y) < 0.05 &&
            ((a.current.x = b * 0.55), (a.current.y = R * 0.45));
        };
      let v = 0;
      const S = () => {
        (l.current.x += (a.current.x - l.current.x) * 0.08), (l.current.y += (a.current.y - l.current.y) * 0.08);
        const b = l.current.x - o.current.x,
          R = l.current.y - o.current.y,
          C = Math.min(1, Math.hypot(b, R) * 18);
        (o.current.x = l.current.x), (o.current.y = l.current.y);
        const L = Math.min(1.4, u.current / Math.max(1, window.innerHeight));
        h({ x: l.current.x, y: l.current.y * 0.88 + Math.min(1, L) * 0.42, scroll: L, velocity: C });
        v = requestAnimationFrame(S);
      };
      return (
        window.addEventListener("pointermove", y, { passive: !0 }),
        window.addEventListener("scroll", p, { passive: !0 }),
        window.addEventListener("deviceorientation", g, { passive: !0 }),
        p(),
        (v = requestAnimationFrame(S)),
        () => {
          cancelAnimationFrame(v);
          window.removeEventListener("pointermove", y);
          window.removeEventListener("scroll", p);
          window.removeEventListener("deviceorientation", g);
        }
      );
    }, [n]),
    f
  );
}

function Cn(n, a, l) {
  const o = l?.invert ? -1 : 1,
    u = n.x * a * 34 * o,
    f = n.y * a * 22 * o + (l?.scrollY ?? 0) * n.scroll * 80,
    h = (l?.rotate ?? 0) * n.x * o,
    d = (l?.scale ?? 1) * (1 + n.scroll * a * 0.04);
  return {
    transform: \`translate3d(\${u.toFixed(2)}px, \${f.toFixed(2)}px, 0) rotate(\${h.toFixed(3)}deg) scale(\${d.toFixed(4)})\`
  };
}

function hh(n = 8) {
  const a = E.useRef(null),
    [l, o] = E.useState({ transform: "perspective(900px) rotateX(0deg) rotateY(0deg)" });
  return (
    E.useEffect(() => {
      const u = a.current;
      if (!u || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      let h = 0,
        d = 0,
        y = 0,
        p = 0,
        g = 0;
      const v = b => {
          const R = u.getBoundingClientRect();
          (d = ((b.clientX - R.left) / R.width) * 2 - 1), (y = ((b.clientY - R.top) / R.height) * 2 - 1);
        },
        S = () => {
          (d = 0), (y = 0);
        },
        w = () => {
          (p += (d - p) * 0.1),
            (g += (y - g) * 0.1),
            o({ transform: \`perspective(900px) rotateX(\${(-g * n).toFixed(2)}deg) rotateY(\${(p * n).toFixed(2)}deg)\` }),
            (h = requestAnimationFrame(w));
        };
      return (
        u.addEventListener("pointermove", v),
        u.addEventListener("pointerleave", S),
        (h = requestAnimationFrame(w)),
        () => {
          cancelAnimationFrame(h);
          u.removeEventListener("pointermove", v);
          u.removeEventListener("pointerleave", S);
        }
      );
    }, [n]),
    { ref: a, style: l }
  );
}

function AM({ count: n = 14 }) {
  const a = E.useMemo(
    () =>
      Array.from({ length: n }, (l, o) => ({
        id: o,
        left: (o * 17 + 7) % 100,
        delay: (o % 9) * 0.7,
        duration: 11 + (o % 6) * 1.4,
        size: 6 + (o % 5) * 2,
        drift: 18 + (o % 4) * 10,
        opacity: 0.18 + (o % 5) * 0.06,
        rotate: (o % 2 === 0 ? 1 : -1) * (20 + (o % 5) * 12)
      })),
    [n]
  );
  return z.jsx("div", {
    className: "pointer-events-none fixed inset-0 z-[8] overflow-hidden",
    "aria-hidden": !0,
    children: a.map(l =>
      z.jsx(
        "span",
        {
          className: "absolute top-[-10%] rounded-[40%_60%_55%_45%] bg-[#1a1814]",
          style: {
            left: \`\${l.left}%\`,
            width: l.size,
            height: l.size * 1.35,
            opacity: l.opacity,
            animation: \`petal-fall \${l.duration}s linear \${l.delay}s infinite\`,
            "--drift": \`\${l.drift}px\`,
            "--spin": \`\${l.rotate}deg\`
          }
        },
        l.id
      )
    )
  });
}

function MM({ x: n, y: a }) {
  return z.jsx(st.div, {
    className: "pointer-events-none absolute z-[6] h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl",
    "aria-hidden": !0,
    animate: { left: \`\${50 + n * 28}%\`, top: \`\${42 + a * 22}%\` },
    transition: { type: "spring", stiffness: 60, damping: 18, mass: 0.6 },
    style: {
      background:
        "radial-gradient(circle, rgba(255,255,255,0.45) 0%, rgba(255,248,236,0.12) 45%, transparent 70%)"
    }
  });
}

const CM = Array.from({ length: 26 }, (n, a) => ({
  id: a,
  left: 8 + ((a * 37) % 84),
  top: 12 + ((a * 53) % 72),
  size: 1.5 + (a % 5) * 0.7,
  delay: (a % 9) * 0.28,
  duration: 2.6 + (a % 6) * 0.4
}));

function RM() {
  const n = E.useRef(null),
    a = wM(!0),
    [l, o] = E.useState(!1),
    { scrollYProgress: u } = ch({ target: n, offset: ["start start", "end start"] }),
    f = Hs(Dn(u, [0, 1], [0, 140]), { stiffness: 90, damping: 26 }),
    h = Hs(Dn(u, [0, 1], [1, 0.92]), { stiffness: 90, damping: 26 }),
    d = Dn(u, [0, 0.75], [1, 0.15]),
    y = Hs(Dn(u, [0, 1], [0, -70]), { stiffness: 90, damping: 26 }),
    p = Dn(u, [0, 0.55], [1, 0]),
    g = Dn(u, [0, 1], [0.35, 0.85]),
    v = sM\`linear-gradient(to bottom, rgba(243,237,227,\${g}), transparent 40%, rgba(243,237,227,0.95))\`,
    S = E.useMemo(
      () => ({
        bg: Cn(a, 0.1, { scale: 1.1, scrollY: 0.35 }),
        glow: Cn(a, 0.22, { scrollY: 0.2 }),
        shadows: Cn(a, 0.38, { scrollY: 0.55 }),
        groom: Cn(a, 0.55, { rotate: 0.55, scrollY: 0.4 }),
        bride: Cn(a, 0.72, { rotate: -0.65, scrollY: 0.55 }),
        couple: Cn(a, 0.62, { scrollY: 0.7 }),
        sparks: Cn(a, 1.35, { scrollY: 1.1 }),
        title: Cn(a, 0.18, { invert: !0, scrollY: -0.2 })
      }),
      [a]
    ),
    w = 0.55 + a.velocity * 0.9;
  return z.jsxs("section", {
    ref: n,
    className: "relative flex min-h-[115dvh] flex-col overflow-hidden",
    onPointerEnter: () => o(!0),
    onPointerLeave: () => o(!1),
    children: [
      z.jsx("div", { className: "pointer-events-none absolute inset-0 bg-[#f3ede3]" }),
      z.jsx("div", {
        className: "pointer-events-none absolute inset-[-10%] will-change-transform",
        style: S.bg,
        children: z.jsx("img", {
          src: ft.images.background,
          alt: "",
          className: "h-full w-full object-cover opacity-90",
          draggable: !1
        })
      }),
      z.jsx(MM, { x: a.x, y: a.y }),
      z.jsxs(st.div, {
        className: "pointer-events-none absolute inset-x-0 bottom-0 top-[16%] z-[1] mx-auto w-full max-w-[440px] sm:max-w-[480px]",
        style: { y: f, scale: h, opacity: d },
        children: [
          z.jsx("div", {
            className: "absolute inset-0 will-change-transform",
            style: S.glow,
            children: z.jsx("div", {
              className: "absolute left-1/2 top-[38%] h-[70%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full",
              style: {
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.62) 0%, rgba(255,250,242,0.22) 42%, transparent 70%)",
                animation: "halo-breathe 5.5s ease-in-out infinite"
              }
            })
          }),
          z.jsx("div", {
            className: "absolute inset-0 will-change-transform opacity-60 mix-blend-multiply",
            style: S.shadows,
            children: z.jsx("img", {
              src: ft.images.shadows,
              alt: "",
              className: "absolute bottom-0 left-1/2 h-[65%] w-auto max-w-none -translate-x-1/2 object-contain opacity-45",
              draggable: !1
            })
          }),
          z.jsx(st.div, {
            className: "absolute inset-0 will-change-transform",
            style: S.groom,
            initial: { opacity: 0, x: -32 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: 0.55, duration: 1.35, ease: [0.22, 1, 0.36, 1] },
            children: z.jsx("img", {
              src: ft.images.groom,
              alt: "",
              className: "absolute bottom-[1%] left-1/2 h-[92%] w-auto max-w-none -translate-x-[54%] object-contain opacity-[0.14] blur-[0.4px]",
              draggable: !1
            })
          }),
          z.jsx(st.div, {
            className: "absolute inset-0 will-change-transform",
            style: S.bride,
            initial: { opacity: 0, x: 32 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: 0.7, duration: 1.35, ease: [0.22, 1, 0.36, 1] },
            children: z.jsx("img", {
              src: ft.images.bride,
              alt: "",
              className: "absolute bottom-[1%] left-1/2 h-[92%] w-auto max-w-none -translate-x-[44%] object-contain opacity-[0.12] blur-[0.4px]",
              draggable: !1
            })
          }),
          z.jsx(st.div, {
            className: "absolute inset-0 z-[2] will-change-transform",
            style: S.couple,
            initial: { opacity: 0, y: 44, scale: 0.96 },
            animate: { opacity: 1, y: 0, scale: 1 },
            transition: { delay: 0.35, duration: 1.5, ease: [0.22, 1, 0.36, 1] },
            children: z.jsxs("div", {
              className: "absolute bottom-0 left-1/2 h-[96%] w-[92%] max-w-[92%] -translate-x-1/2",
              children: [
                z.jsx("img", {
                  src: ft.images.couple,
                  alt: \`\${ft.brideFull} and \${ft.groomFull}\`,
                  className: "h-full w-full object-contain drop-shadow-[0_28px_50px_rgba(60,45,30,0.16)]",
                  style: { animation: "waltz-sway-inner 7.5s ease-in-out infinite" },
                  draggable: !1
                }),
                z.jsx("div", {
                  className: \`pointer-events-none absolute inset-0 overflow-hidden \${l ? "opacity-100" : "opacity-40"}\`,
                  style: {
                    maskImage: \`url(\${ft.images.couple})\`,
                    WebkitMaskImage: \`url(\${ft.images.couple})\`,
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center bottom",
                    WebkitMaskPosition: "center bottom"
                  },
                  children: z.jsx("span", {
                    className: "absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/35 to-transparent",
                    style: { animation: "dress-shimmer 3.8s ease-in-out infinite" }
                  })
                })
              ]
            })
          }),
          z.jsx(st.div, {
            className: "absolute inset-0 z-[3] will-change-transform",
            style: Cn(a, 1.05, { rotate: 1.1, scale: 1.03 + a.velocity * 0.05, scrollY: 0.95 }),
            initial: { opacity: 0, y: 22 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 1.1, duration: 1.1, ease: [0.22, 1, 0.36, 1] },
            children: z.jsx("img", {
              src: ft.images.bouquet,
              alt: "",
              className: "absolute bottom-[16%] right-[-2%] w-[28%] max-w-[120px] opacity-95 drop-shadow-[0_12px_24px_rgba(40,30,20,0.18)]",
              style: { animation: "pearl-drift 5.8s ease-in-out infinite" },
              draggable: !1
            })
          }),
          z.jsx("div", {
            className: "absolute inset-0 z-[4] will-change-transform",
            style: S.sparks,
            "aria-hidden": !0,
            children: CM.map(b =>
              z.jsx(
                "span",
                {
                  className: "absolute rounded-full bg-white",
                  style: {
                    left: \`\${b.left}%\`,
                    top: \`\${b.top}%\`,
                    width: b.size,
                    height: b.size,
                    opacity: w,
                    boxShadow: \`0 0 \${6 + a.velocity * 10}px rgba(255,255,255,\${0.7 + a.velocity * 0.3})\`,
                    animation: \`sparkle \${b.duration}s ease-in-out \${b.delay}s infinite\`
                  }
                },
                b.id
              )
            )
          })
        ]
      }),
      z.jsx(st.div, { className: "pointer-events-none absolute inset-0 z-[5]", style: { background: v } }),
      z.jsx("div", { className: "pointer-events-none absolute inset-x-0 top-0 z-[5] h-36 bg-gradient-to-b from-[#f3ede3] to-transparent" }),
      z.jsx(st.div, {
        className: "relative z-10 mx-auto flex w-full max-w-lg flex-1 flex-col items-center px-6 pt-[min(10svh,5.5rem)] text-center",
        style: { y, opacity: p },
        children: z.jsxs("div", {
          className: "flex w-full flex-col items-center will-change-transform",
          style: S.title,
          children: [
            z.jsx(st.p, {
              initial: { opacity: 0, y: 12, letterSpacing: "0.55em" },
              animate: { opacity: 1, y: 0, letterSpacing: "0.42em" },
              transition: { delay: 0.2, duration: 1.1, ease: [0.22, 1, 0.36, 1] },
              className: "font-display text-[11px] uppercase text-[#6e6256]",
              children: "Together with their families"
            }),
            z.jsxs(st.h1, {
              initial: { opacity: 0, y: 22 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.4, duration: 1.05, ease: [0.22, 1, 0.36, 1] },
              className: "mt-4 font-script leading-[0.95] text-[#1a1814]",
              style: { fontSize: "clamp(3.4rem, 14vw, 5.6rem)" },
              children: [
                z.jsx(st.span, {
                  className: "inline-block",
                  whileHover: { y: -3, transition: { duration: 0.35 } },
                  children: ft.groom
                }),
                z.jsx("span", {
                  className: "mx-2 inline-block font-script text-[0.55em] text-[#8a7a68]",
                  children: "&"
                }),
                z.jsx(st.span, {
                  className: "inline-block",
                  whileHover: { y: -3, transition: { duration: 0.35 } },
                  children: ft.bride
                })
              ]
            }),
            z.jsx(st.div, {
              initial: { scaleX: 0, opacity: 0 },
              animate: { scaleX: 1, opacity: 1 },
              transition: { delay: 0.75, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              className: "mt-5 h-px w-28 origin-center bg-gradient-to-r from-transparent via-[#1a1814]/35 to-transparent"
            }),
            z.jsx(st.p, {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.9, duration: 0.9 },
              className: "mt-4 font-display text-lg tracking-wide text-[#3d342c] sm:text-xl",
              children: ft.dateLabel
            }),
            z.jsx(st.p, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 1.05, duration: 0.8 },
              className: "mt-1 text-[11px] uppercase tracking-[0.32em] text-[#7a6d60]",
              children: ft.timeLabel
            })
          ]
        })
      }),
      z.jsxs(st.button, {
        type: "button",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 1.6 },
        onClick: () => window.scrollTo({ top: window.innerHeight * 0.85, behavior: "smooth" }),
        className: "relative z-10 mb-8 flex flex-col items-center gap-2 text-[#7a6d60] transition-colors hover:text-[#1a1814]",
        "aria-label": "Scroll to invitation details",
        children: [
          z.jsx("span", { className: "text-[10px] uppercase tracking-[0.38em]", children: "Scroll" }),
          z.jsx("span", {
            className: "block h-8 w-px bg-gradient-to-b from-[#1a1814]/45 to-transparent",
            style: { animation: "scroll-pulse 2.2s ease-in-out infinite" }
          })
        ]
      })
    ]
  });
}

function dh({ children: n, className: a = "", speed: l = 0.12 }) {
  const o = E.useRef(null),
    { scrollYProgress: u } = ch({ target: o, offset: ["start end", "end start"] }),
    f = Dn(u, [0, 1], [l * 80, l * -80]),
    h = Hs(f, { stiffness: 80, damping: 24, restDelta: 0.01 });
  return z.jsx(st.div, { ref: o, className: a, style: { y: h }, children: n });
}

function zn({ children: n, delay: a = 0, className: l = "" }) {
  return z.jsx(st.div, {
    className: l,
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: !0, margin: "-70px" },
    transition: { duration: 0.9, delay: a, ease: [0.22, 1, 0.36, 1] },
    children: n
  });
}

function u0({ children: n, className: a = "", stagger: l = 0.08 }) {
  return z.jsx(st.div, {
    className: a,
    initial: "hidden",
    whileInView: "show",
    viewport: { once: !0, margin: "-60px" },
    variants: { hidden: {}, show: { transition: { staggerChildren: l } } },
    children: n
  });
}

const Pc = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
};

function DM() {
  const n = ft.verse.text.split(" ");
  return z.jsxs("section", {
    className: "relative overflow-hidden px-6 py-28",
    children: [
      z.jsx("div", {
        className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1a1814]/12 to-transparent"
      }),
      z.jsx(dh, {
        speed: 0.22,
        className: "pointer-events-none absolute -right-8 top-10 opacity-[0.07] sm:right-8",
        children: z.jsx("img", { src: ft.images.bouquet, alt: "", className: "w-40 rotate-12 sm:w-52" })
      }),
      z.jsxs(zn, {
        className: "mx-auto flex max-w-md flex-col items-center text-center",
        children: [
          z.jsx(st.p, {
            initial: { opacity: 0, y: 12 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            className: "font-display text-base font-semibold tracking-widest text-[#8a724d] sm:text-lg",
            children: ft.verse.sanskrit || ft.verse.arabic
          }),
          ft.verse.shloka &&
            z.jsx(st.p, {
              initial: { opacity: 0, y: 10 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: !0 },
              transition: { delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              className: "mt-2 font-display text-[13px] italic leading-relaxed text-[#7a6d60]",
              children: ft.verse.shloka
            }),
          z.jsx(st.div, {
            initial: { scaleX: 0 },
            whileInView: { scaleX: 1 },
            viewport: { once: !0 },
            transition: { delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            className: "mt-8 h-px w-20 origin-center bg-gradient-to-r from-transparent via-[#1a1814]/25 to-transparent"
          }),
          z.jsx(u0, {
            className: "mt-8 flex flex-wrap justify-center gap-x-1.5 gap-y-1",
            stagger: 0.035,
            children: n.map((a, l) =>
              z.jsx(
                st.span,
                {
                  variants: Pc,
                  className: "font-display text-[1.35rem] leading-[1.55] text-[#2c261f] sm:text-[1.5rem]",
                  children: a
                },
                \`\${a}-\${l}\`
              )
            )
          }),
          z.jsxs(u0, {
            className: "mt-10 flex flex-col gap-1.5 text-center",
            stagger: 0.12,
            children: [
              z.jsx(st.p, {
                variants: Pc,
                className: "text-[12px] font-medium uppercase tracking-[0.3em] text-[#4a4036]",
                children: ft.familySign || "With love & blessings, the Singh families"
              }),
              z.jsx(st.p, {
                variants: Pc,
                className: "text-[10px] uppercase tracking-[0.25em] text-[#8a7a68]",
                children: ft.brideParents
              })
            ]
          })
        ]
      })
    ]
  });
}

function c0(n) {
  const a = Math.max(0, n - Date.now());
  return {
    days: Math.floor(a / 864e5),
    hours: Math.floor((a % 864e5) / 36e5),
    mins: Math.floor((a % 36e5) / 6e4),
    secs: Math.floor((a % 6e4) / 1e3)
  };
}

function zM({ value: n }) {
  const a = String(n).padStart(2, "0");
  return z.jsx("span", {
    className: "relative inline-block h-[1.15em] overflow-hidden align-bottom",
    children: z.jsx(u1, {
      mode: "popLayout",
      initial: !1,
      children: z.jsx(
        st.span,
        {
          initial: { y: 16, opacity: 0 },
          animate: { y: 0, opacity: 1 },
          exit: { y: -16, opacity: 0 },
          transition: { duration: 0.32, ease: [0.22, 1, 0.36, 1] },
          className: "inline-block tabular-nums",
          children: a
        },
        a
      )
    })
  });
}

function OM({ label: n, value: a, delay: l }) {
  const { ref: o, style: u } = hh(7);
  return z.jsxs(st.div, {
    ref: o,
    style: u,
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: !0 },
    transition: { delay: l, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    whileHover: { y: -4 },
    className:
      "rounded-[1.35rem] bg-[rgba(26,24,20,0.03)] px-2 py-5 ring-1 ring-[rgba(26,24,20,0.08)] transition-shadow duration-500 hover:shadow-[0_18px_40px_rgba(60,45,30,0.1)]",
    children: [
      z.jsx("p", { className: "font-display text-3xl text-[#1a1814] sm:text-4xl", children: z.jsx(zM, { value: a }) }),
      z.jsx("p", { className: "mt-2 text-[9px] uppercase tracking-[0.28em] text-[#7a6d60]", children: n })
    ]
  });
}

function NM() {
  const n = new Date(ft.dateISO).getTime(),
    [a, l] = E.useState(() => c0(n));
  E.useEffect(() => {
    const u = window.setInterval(() => l(c0(n)), 1e3);
    return () => window.clearInterval(u);
  }, [n]);
  const o = [
    { label: "Days", value: a.days },
    { label: "Hours", value: a.hours },
    { label: "Mins", value: a.mins },
    { label: "Secs", value: a.secs }
  ];
  return z.jsx("section", {
    className: "relative px-6 py-20",
    children: z.jsxs(zn, {
      className: "mx-auto max-w-lg text-center",
      children: [
        z.jsx("p", { className: "text-[11px] uppercase tracking-[0.4em] text-[#8a7a68]", children: "Counting the moments" }),
        z.jsx("h2", { className: "mt-3 font-script text-5xl text-[#1a1814]", children: "Until the Wedding" }),
        z.jsx("div", {
          className: "mt-10 grid grid-cols-4 gap-3 sm:gap-4",
          children: o.map((u, f) => z.jsx(OM, { label: u.label, value: u.value, delay: f * 0.07 }, u.label))
        })
      ]
    })
  });
}

// Individual Event Card with 3D tilt and dedicated Google Maps link
function EventCard({ event, index }) {
  const { ref: a, style: l } = hh(6);
  return z.jsxs(st.div, {
    ref: a,
    style: l,
    whileHover: { y: -6 },
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    className:
      "relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-[#fffaf4]/85 p-6 sm:p-8 text-center shadow-[0_24px_65px_rgba(60,45,30,0.08)] ring-1 ring-[rgba(26,24,20,0.08)] transition-all duration-500",
    children: [
      z.jsx("div", { className: "pointer-events-none absolute inset-3 rounded-[1.55rem] ring-1 ring-[rgba(26,24,20,0.06)]" }),
      z.jsx("span", {
        "aria-hidden": !0,
        className:
          "pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-500 hover:opacity-100",
        style: { animation: "dress-shimmer 4.5s ease-in-out infinite" }
      }),
      z.jsxs("div", {
        className: "relative z-10 flex flex-col items-center",
        children: [
          event.category &&
            z.jsx("span", {
              className:
                "mb-3 inline-block rounded-full bg-[#1a1814]/5 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.25em] text-[#7a6d60]",
              children: event.category
            }),
          z.jsx("p", { className: "text-[11px] uppercase tracking-[0.38em] text-[#8a7a68]", children: event.dayLabel }),
          z.jsx(st.p, {
            initial: { scale: 0.85, opacity: 0 },
            whileInView: { scale: 1, opacity: 1 },
            viewport: { once: !0 },
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            className: "mt-1 font-display text-7xl font-medium leading-none text-[#1a1814] sm:text-8xl",
            children: event.dayNum
          }),
          z.jsx("p", { className: "mt-2 font-display text-lg tracking-[0.16em] text-[#4a4036] sm:text-xl", children: event.monthLabel }),
          z.jsx("div", { className: "mx-auto mt-5 h-px w-16 bg-[#1a1814]/15" }),
          z.jsx("h3", { className: "mt-5 font-script text-4xl text-[#1a1814] sm:text-5xl", children: event.name }),
          z.jsx("p", { className: "mt-2 font-display text-xl font-medium text-[#2c261f]", children: event.time }),
          z.jsxs("p", {
            className: "mt-2 flex items-center justify-center gap-1.5 text-[13px] font-medium tracking-wide text-[#6e6256]",
            children: [
              z.jsx(qM, { size: 14, className: "text-[#8a7a68]" }),
              event.venue
            ]
          }),
          event.note &&
            z.jsx("p", {
              className: "mx-auto mt-4 max-w-xs font-display text-sm italic leading-relaxed text-[#6e6256]",
              children: event.note
            })
        ]
      }),
      event.mapsUrl &&
        z.jsx("div", {
          className: "relative z-10 mt-6 pt-2",
          children: z.jsxs(st.a, {
            href: event.mapsUrl,
            target: "_blank",
            rel: "noreferrer",
            whileHover: { y: -2, scale: 1.02 },
            whileTap: { scale: 0.98 },
            className:
              "inline-flex items-center justify-center gap-2 rounded-full border border-[#1a1814]/15 bg-[#1a1814]/5 px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#2c261f] transition-all hover:bg-[#1a1814] hover:text-[#f6f0e6]",
            children: [
              z.jsx(XM, { size: 12 }),
              "Directions & Map ↗"
            ]
          })
        })
    ]
  });
}

function VM() {
  return z.jsxs("section", {
    className: "relative overflow-hidden px-6 py-24",
    children: [
      z.jsx(dh, {
        speed: 0.18,
        className: "pointer-events-none absolute -left-10 top-24 opacity-[0.06]",
        children: z.jsx("img", { src: ft.images.couple, alt: "", className: "w-56 -scale-x-100 sm:w-72" })
      }),
      z.jsxs(zn, {
        className: "mb-16 flex flex-col items-center gap-3 text-center",
        children: [
          z.jsx("span", { className: "text-[11px] uppercase tracking-[0.4em] text-[#8a7a68]", children: "Auspicious Celebrations" }),
          z.jsx("h2", { className: "font-script text-5xl text-[#1a1814] sm:text-6xl", children: "Wedding Ceremonies" }),
          z.jsx("p", {
            className: "max-w-md font-display text-sm italic text-[#6e6256]",
            children: "Please join us as we celebrate each blessed function in chronological joy"
          }),
          z.jsx("div", { className: "h-px w-24 bg-gradient-to-r from-transparent via-[#1a1814]/25 to-transparent" })
        ]
      }),
      z.jsx("div", {
        className: "mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2",
        children: ft.events.map((e, idx) =>
          z.jsx(
            zn,
            { delay: idx * 0.1, children: z.jsx(EventCard, { event: e, index: idx }) },
            e.id || e.name
          )
        )
      }),
      z.jsxs("div", {
        className: "relative mx-auto mt-20 max-w-sm",
        children: [
          z.jsx("p", { className: "mb-8 text-center text-[11px] uppercase tracking-[0.4em] text-[#8a7a68]", children: "The schedule unfolds" }),
          z.jsxs("div", {
            className: "relative",
            children: [
              z.jsx(st.div, {
                className: "absolute bottom-2 left-[5px] top-2 w-px origin-top bg-gradient-to-b from-[#1a1814]/30 via-[#1a1814]/15 to-transparent",
                initial: { scaleY: 0 },
                whileInView: { scaleY: 1 },
                viewport: { once: !0 },
                transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] }
              }),
              z.jsx("div", {
                className: "flex flex-col gap-6",
                children: ft.program.map((o, u) =>
                  z.jsxs(
                    st.div,
                    {
                      initial: { opacity: 0, x: -16 },
                      whileInView: { opacity: 1, x: 0 },
                      viewport: { once: !0, margin: "-40px" },
                      transition: { delay: 0.15 + u * 0.09, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
                      whileHover: { x: 4 },
                      className: "flex cursor-default items-start gap-4 pl-1",
                      children: [
                        z.jsx(st.span, {
                          className: "mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#1a1814]/70 ring-4 ring-[#f3ede3]",
                          initial: { scale: 0 },
                          whileInView: { scale: 1 },
                          viewport: { once: !0 },
                          transition: { delay: 0.2 + u * 0.09, type: "spring", stiffness: 320, damping: 18 }
                        }),
                        z.jsxs("div", {
                          className: "flex flex-1 flex-col gap-0.5",
                          children: [
                            z.jsxs("div", {
                              className: "flex items-baseline justify-between gap-3",
                              children: [
                                z.jsx("p", { className: "font-display text-lg text-[#2c261f]", children: o.name }),
                                z.jsx("p", { className: "shrink-0 text-[11px] uppercase tracking-[0.18em] text-[#7a6d60]", children: o.time })
                              ]
                            }),
                            o.venue &&
                              z.jsx("p", { className: "text-[11px] tracking-wide text-[#8a7a68]", children: o.venue })
                          ]
                        })
                      ]
                    },
                    o.name
                  )
                )
              })
            ]
          })
        ]
      })
    ]
  });
}

const LM = n => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  _M = n => n.replace(/^([A-Z])|[\\s-_]+(\\w)/g, (a, l, o) => (o ? o.toUpperCase() : l.toLowerCase())),
  f0 = n => {
    const a = _M(n);
    return a.charAt(0).toUpperCase() + a.slice(1);
  },
  R1 = (...n) => n.filter((a, l, o) => Boolean(a && typeof a === "string" && a.trim() !== "") && o.indexOf(a) === l).join(" ").trim(),
  jM = n => {
    for (const a in n) if (a.startsWith("aria-") || a === "role" || a === "title") return !0;
  };

var BM = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

const HM = E.forwardRef(
  ({ color: n = "currentColor", size: a = 24, strokeWidth: l = 2, absoluteStrokeWidth: o, className: u = "", children: f, iconNode: h, ...d }, y) =>
    E.createElement(
      "svg",
      {
        ref: y,
        ...BM,
        width: a,
        height: a,
        stroke: n,
        strokeWidth: o ? (Number(l) * 24) / Number(a) : l,
        className: R1("lucide", u),
        ...(!f && !jM(d) && { "aria-hidden": "true" }),
        ...d
      },
      [...h.map(([p, g]) => E.createElement(p, g)), ...(Array.isArray(f) ? f : [f])]
    )
);

const mh = (n, a) => {
  const l = E.forwardRef(({ className: o, ...u }, f) =>
    E.createElement(HM, { ref: f, iconNode: a, className: R1(\`lucide-\${LM(f0(n))}\`, \`lucide-\${n}\`, o), ...u })
  );
  return (l.displayName = f0(n)), l;
};

const UM = [
  ["path", { d: "M16 19h6", key: "xwg31i" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M19 16v6", key: "tddt3s" }],
  ["path", { d: "M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5", key: "1glfrc" }],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }]
];
const h0 = mh("calendar-plus", UM);

const YM = [
  ["path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0", key: "1r0f0z" }],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const qM = mh("map-pin", YM);

const GM = [["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]];
const XM = mh("navigation", GM);

// Individual Venue Card rendering map embed and direct directions link
function SingleVenueCard({ venueItem, index }) {
  const { ref: a, style: l } = hh(5);
  return z.jsxs(st.div, {
    className: "flex flex-col gap-5 rounded-[2rem] bg-[#fffaf4]/70 p-6 sm:p-8 shadow-[0_20px_50px_rgba(60,45,30,0.06)] ring-1 ring-[rgba(26,24,20,0.08)]",
    children: [
      z.jsxs("div", {
        className: "flex flex-col items-center gap-1.5 text-center",
        children: [
          venueItem.role &&
            z.jsx("span", {
              className: "inline-block rounded-full bg-[#1a1814]/5 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.25em] text-[#8a7a68]",
              children: venueItem.role
            }),
          z.jsx("h3", { className: "font-display text-2xl text-[#1a1814] sm:text-3xl", children: venueItem.name }),
          z.jsxs("p", {
            className: "flex items-center justify-center gap-1.5 text-[12px] text-[#5c5146]",
            children: [
              z.jsx(qM, { size: 14, className: "text-[#8a7a68]" }),
              venueItem.events || venueItem.name
            ]
          })
        ]
      }),
      venueItem.mapsEmbed &&
        z.jsx(st.div, {
          ref: a,
          style: l,
          className: "overflow-hidden rounded-[1.5rem] shadow-[0_16px_40px_rgba(60,45,30,0.08)] ring-1 ring-[rgba(26,24,20,0.08)]",
          whileHover: { scale: 1.01 },
          transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
          children: z.jsx("iframe", {
            title: \`Map for \${venueItem.name}\`,
            src: venueItem.mapsEmbed,
            className: "h-56 w-full saturate-[0.85] contrast-[1.02] sm:h-64",
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade"
          })
        }),
      z.jsxs(st.a, {
        href: venueItem.mapsUrl,
        target: "_blank",
        rel: "noreferrer",
        whileHover: { y: -2, scale: 1.015 },
        whileTap: { scale: 0.98 },
        className:
          "group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#1a1814] px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.25em] text-[#f6f0e6] shadow-[0_12px_32px_rgba(40,30,20,0.2)] transition-all",
        children: [
          z.jsx("span", {
            "aria-hidden": !0,
            className: "pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent",
            style: { animation: "sweep 3.6s ease-in-out infinite" }
          }),
          z.jsx(XM, { size: 14 }),
          \`Navigate to \${venueItem.name}\`,
          z.jsx("span", {
            className:
              "flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-px",
            children: "↗"
          })
        ]
      })
    ]
  });
}

function kM() {
  return z.jsxs("section", {
    className: "relative px-6 py-24",
    children: [
      z.jsxs(zn, {
        className: "mb-14 flex flex-col items-center gap-3 text-center",
        children: [
          z.jsx("span", { className: "text-[11px] uppercase tracking-[0.4em] text-[#8a7a68]", children: "Where & When" }),
          z.jsx("h2", { className: "font-script text-5xl text-[#1a1814] sm:text-6xl", children: "The Venues" }),
          z.jsx("p", {
            className: "max-w-md font-display text-sm italic text-[#6e6256]",
            children: "Interactive directions & locations for our Engagement & Wedding ceremonies"
          }),
          z.jsx("div", { className: "h-px w-24 bg-gradient-to-r from-transparent via-[#1a1814]/25 to-transparent" })
        ]
      }),
      z.jsx("div", {
        className: "mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2",
        children: ft.venues.map((v, idx) =>
          z.jsx(
            zn,
            { delay: idx * 0.12, children: z.jsx(SingleVenueCard, { venueItem: v, index: idx }) },
            v.id || v.name
          )
        )
      }),
      z.jsxs(zn, {
        delay: 0.2,
        className: "mx-auto mt-12 flex max-w-md flex-col items-center gap-4 text-center",
        children: [
          z.jsx("p", { className: "text-[10px] uppercase tracking-[0.3em] text-[#8a7a68]", children: "Add dates to your calendar" }),
          z.jsxs("div", {
            className: "grid w-full grid-cols-2 gap-3",
            children: [
              z.jsxs(st.a, {
                href: vM(),
                target: "_blank",
                rel: "noreferrer",
                whileHover: { y: -2 },
                whileTap: { scale: 0.97 },
                className:
                  "flex items-center justify-center gap-2 rounded-full border border-[#1a1814]/12 bg-white/50 px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-[#2c261f] transition-all hover:border-[#1a1814]/25 hover:bg-white/80",
                children: [z.jsx(h0, { size: 14 }), " Google Cal"]
              }),
              z.jsxs(st.button, {
                type: "button",
                onClick: () => xM(),
                whileHover: { y: -2 },
                whileTap: { scale: 0.97 },
                className:
                  "flex items-center justify-center gap-2 rounded-full border border-[#1a1814]/12 bg-white/50 px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-[#2c261f] transition-all hover:border-[#1a1814]/25 hover:bg-white/80",
                children: [z.jsx(h0, { size: 14 }), " Apple / ICS"]
              })
            ]
          })
        ]
      })
    ]
  });
}

// Dedicated Couple Photos Section preserving natural photograph
function PM_Photos() {
  const photo = (ft.photos && ft.photos[0]) || {
    src: "./editable/assets/couple-photo.jpg",
    caption: "Tripti & Durgesh",
    subtitle: "Two hearts, one soul, starting our forever together"
  };
  const { ref: a, style: l } = hh(5);

  return z.jsxs("section", {
    className: "relative overflow-hidden px-6 py-24",
    children: [
      z.jsx("div", {
        className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1a1814]/12 to-transparent"
      }),
      z.jsxs(zn, {
        className: "mb-14 flex flex-col items-center gap-3 text-center",
        children: [
          z.jsx("span", { className: "text-[11px] uppercase tracking-[0.4em] text-[#8a7a68]", children: "Moments of Love" }),
          z.jsx("h2", { className: "font-script text-5xl text-[#1a1814] sm:text-6xl", children: "The Happy Couple" }),
          z.jsx("div", { className: "h-px w-24 bg-gradient-to-r from-transparent via-[#1a1814]/25 to-transparent" })
        ]
      }),
      z.jsx(zn, {
        delay: 0.1,
        children: z.jsxs(st.div, {
          ref: a,
          style: l,
          className:
            "mx-auto max-w-sm sm:max-w-md overflow-hidden rounded-[2.5rem] bg-[#fffaf4]/90 p-4 sm:p-5 shadow-[0_30px_80px_rgba(60,45,30,0.12)] ring-1 ring-[#1a1814]/10 transition-transform duration-500",
          whileHover: { y: -4, scale: 1.01 },
          children: [
            z.jsx("div", {
              className: "relative aspect-[3/4] w-full overflow-hidden rounded-[2rem] bg-[#eadecd]",
              children: z.jsx("img", {
                src: photo.src,
                alt: photo.caption || \`\${ft.brideFull} & \${ft.groomFull}\`,
                className: "h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105",
                loading: "lazy"
              })
            }),
            z.jsxs("div", {
              className: "flex flex-col items-center gap-1.5 px-4 pb-4 pt-6 text-center",
              children: [
                z.jsx("h3", {
                  className: "font-script text-4xl text-[#1a1814] sm:text-5xl",
                  children: photo.caption || \`\${ft.bride} & \${ft.groom}\`
                }),
                z.jsx("p", {
                  className: "text-[11px] uppercase tracking-[0.3em] text-[#7a6d60]",
                  children: \`\${ft.brideFull} & \${ft.groomFull}\`
                }),
                photo.subtitle &&
                  z.jsx("p", {
                    className: "mt-2 font-display text-sm italic text-[#6e6256]",
                    children: photo.subtitle
                  })
              ]
            })
          ]
        })
      })
    ]
  });
}

// Floating Luxury Background Music Player Widget
function MusicFloatingWidget({ audioRef, isPlaying, onTogglePlay }) {
  return z.jsxs("div", {
    className: "fixed bottom-6 right-6 z-50 flex items-center gap-2",
    children: [
      z.jsxs(st.button, {
        type: "button",
        onClick: onTogglePlay,
        whileHover: { scale: 1.06, y: -2 },
        whileTap: { scale: 0.94 },
        className:
          "group relative flex h-14 items-center gap-3 rounded-full border border-white/20 bg-[#1a1814]/90 px-4 py-2 text-[#f3ede3] shadow-[0_16px_36px_rgba(20,15,10,0.35)] backdrop-blur-md transition-all duration-300 hover:bg-[#1a1814]",
        "aria-label": isPlaying ? "Pause wedding music" : "Play wedding music",
        title: isPlaying ? "Pause: Navrai Majhi" : "Play: Navrai Majhi",
        children: [
          isPlaying &&
            z.jsx("span", {
              className:
                "pointer-events-none absolute -inset-1 rounded-full border border-[#d4af37]/40 opacity-75",
              style: { animation: "halo-breathe 2.8s ease-in-out infinite" }
            }),
          z.jsxs("div", {
            className: \`flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm \${isPlaying ? "text-[#d4af37]" : "text-[#f3ede3]"}\`,
            children: [
              isPlaying
                ? z.jsx("span", {
                    className: "inline-block text-base",
                    style: { animation: "spin 5s linear infinite" },
                    children: "𝄞"
                  })
                : z.jsx("span", { className: "ml-0.5 text-xs", children: "▶" })
            ]
          }),
          z.jsxs("div", {
            className: "flex flex-col text-left pr-2",
            children: [
              z.jsx("span", {
                className: "text-[9px] font-semibold uppercase tracking-[0.22em] text-[#d4af37]",
                children: isPlaying ? "Now Playing" : "Wedding Song"
              }),
              z.jsx("span", {
                className: "max-w-[100px] truncate text-[11px] font-medium text-[#f6f0e6]",
                children: ft.music?.title || "Navrai Majhi"
              })
            ]
          }),
          isPlaying &&
            z.jsxs("div", {
              className: "flex items-end gap-[3px] h-3.5 mr-1",
              children: [
                z.jsx("span", { className: "w-[2px] bg-[#d4af37] rounded-full h-full animate-pulse" }),
                z.jsx("span", { className: "w-[2px] bg-[#d4af37] rounded-full h-2/3 animate-pulse", style: { animationDelay: "0.2s" } }),
                z.jsx("span", { className: "w-[2px] bg-[#d4af37] rounded-full h-4/5 animate-pulse", style: { animationDelay: "0.4s" } })
              ]
            })
        ]
      })
    ]
  });
}

function KM() {
  const [n, a] = E.useState(!1),
    l = async () => {
      try {
        await navigator.clipboard.writeText(ft.hashtag), a(!0), setTimeout(() => a(!1), 1800);
      } catch {}
    };
  return z.jsxs("footer", {
    className: "relative overflow-hidden px-6 pb-20 pt-24",
    children: [
      z.jsx("div", {
        className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1a1814]/12 to-transparent"
      }),
      z.jsx(dh, {
        speed: 0.15,
        className: "pointer-events-none absolute inset-x-0 bottom-0 top-8 opacity-[0.08]",
        children: z.jsx("img", {
          src: ft.images.couple,
          alt: "",
          className: "mx-auto h-full max-w-md object-contain object-bottom"
        })
      }),
      z.jsx("div", {
        className: "relative z-10 mb-10 overflow-hidden py-3",
        children: z.jsx("div", {
          className: "flex w-max whitespace-nowrap",
          style: { animation: "marquee 28s linear infinite" },
          children: [0, 1].map(o =>
            z.jsx(
              "span",
              {
                className: "font-display px-4 text-sm uppercase tracking-[0.36em] text-[#8a7a68]",
                children: Array(5).fill(\`\${ft.hashtag}  ·  \${ft.dateLabel}  ·  \`).join("")
              },
              o
            )
          )
        })
      }),
      z.jsxs(zn, {
        className: "relative z-10 mx-auto flex max-w-sm flex-col items-center gap-5 text-center",
        children: [
          z.jsx("p", {
            className: "font-script text-4xl leading-snug text-[#1a1814] sm:text-5xl",
            children: "We can't wait to celebrate with you"
          }),
          z.jsx("p", {
            className: "text-[11px] uppercase tracking-[0.32em] text-[#7a6d60]",
            children: ft.familySign || "With love & blessings, the Singh families"
          }),
          z.jsx("div", { className: "h-px w-28 bg-[#1a1814]/15" }),
          z.jsx(st.button, {
            type: "button",
            onClick: l,
            whileTap: { scale: 0.96 },
            className: \`rounded-full border px-5 py-2 text-[10px] tracking-[0.2em] transition-colors duration-500 \${
              n ? "border-[#1a1814]/35 bg-[#1a1814]/5 text-[#1a1814]" : "border-[#1a1814]/12 text-[#7a6d60] hover:border-[#1a1814]/25 hover:text-[#2c261f]"
            }\`,
            children: n ? "Copied ✓" : \`\${ft.hashtag} · tap to copy\`
          }),
          z.jsx("a", {
            href: "https://www.instagram.com/invitestory.in/",
            target: "_blank",
            rel: "noreferrer",
            className: "mt-2 text-[10px] uppercase tracking-[0.35em] text-[#8a7a68] transition-colors hover:text-[#1a1814]",
            children: "Follow @invitestory.in on Instagram"
          })
        ]
      })
    ]
  });
}

function QM() {
  const { scrollYProgress: n } = ch(),
    a = Hs(n, { stiffness: 120, damping: 28, restDelta: 0.001 });
  return z.jsx(st.div, {
    className: "fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-[#1a1814]/70",
    style: { scaleX: a }
  });
}

function ZM() {
  const [n, a] = E.useState("closed");
  const [isPlaying, setIsPlaying] = E.useState(!1);
  const audioRef = E.useRef(null);

  // Initialize Lenis smooth scrolling
  E.useEffect(() => {
    const l = new gM({ lerp: 0.085, smoothWheel: !0 });
    let o = 0;
    const u = f => {
      l.raf(f);
      o = requestAnimationFrame(u);
    };
    return (o = requestAnimationFrame(u)), () => {
      cancelAnimationFrame(o);
      l.destroy();
    };
  }, []);

  // Lock scroll when gate is closed
  E.useEffect(() => {
    document.body.style.overflow = n === "open" ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [n]);

  // Audio start trigger on opening
  const handleOpenInvitation = () => {
    a("opening");
    setTimeout(() => {
      a("open");
    }, 1000);
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(!0))
        .catch(err => {
          console.warn("Autoplay deferred until explicit click:", err);
          setIsPlaying(!1);
        });
    }
  };

  const handleToggleAudio = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(!0))
        .catch(e => console.error("Playback failed:", e));
    } else {
      audioRef.current.pause();
      setIsPlaying(!1);
    }
  };

  return z.jsxs("main", {
    className: "relative min-h-[100dvh] bg-[#f3ede3] text-[#1a1814]",
    children: [
      z.jsx("audio", {
        ref: audioRef,
        src: ft.music?.audio || "./editable/assets/music.mp3",
        loop: !0,
        preload: "auto",
        onPlay: () => setIsPlaying(!0),
        onPause: () => setIsPlaying(!1)
      }),
      z.jsx(QM, {}),
      n === "open" && z.jsx(AM, { count: 16 }),
      z.jsxs(st.div, {
        initial: { scale: 1.04, opacity: 0.92 },
        animate: { scale: n === "closed" ? 1.04 : 1, opacity: 1 },
        transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1] },
        children: [
          z.jsx(RM, {}),
          z.jsx(DM, {}),
          z.jsx(NM, {}),
          z.jsx(VM, {}),
          z.jsx(kM, {}),
          z.jsx(PM_Photos, {}),
          z.jsx(KM, {})
        ]
      }),
      n === "open" &&
        z.jsx(MusicFloatingWidget, {
          audioRef,
          isPlaying,
          onTogglePlay: handleToggleAudio
        }),
      z.jsx(u1, {
        children:
          n !== "open" &&
          z.jsx(TM, {
            onOpening: handleOpenInvitation,
            onOpened: () => a("open")
          })
      })
    ]
  });
}

function PM() {
  return z.jsx(ZM, {});
}

ob.createRoot(document.getElementById("root")).render(
  z.jsx(E.StrictMode, { children: z.jsx(O2, { children: z.jsx(PM, {}) }) })
);
`;

const finalBundle = runtimePrefix + appCode;
fs.writeFileSync(bundlePath, finalBundle, 'utf8');
console.log('Final bundle written successfully. Total size:', finalBundle.length);
