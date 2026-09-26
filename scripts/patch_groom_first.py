with open('scripts/build-bundle.js', 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Calendar text
code = code.replace(
    'text: `${ft.bride} weds ${ft.groom}`',
    'text: `${ft.groom} weds ${ft.bride}`'
)
code = code.replace(
    '`SUMMARY:${ft.bride} weds ${ft.groom}`',
    '`SUMMARY:${ft.groom} weds ${ft.bride}`'
)
code = code.replace(
    'h.download = `${ft.bride}-${ft.groom}-wedding.ics`;',
    'h.download = `${ft.groom}-${ft.bride}-wedding.ics`;'
)

# 2. Gate couple names
code = code.replace(
    'children: [ft.bride, " & ", ft.groom]',
    'children: [ft.groom, " & ", ft.bride]'
)

# 3. Illustration alt
code = code.replace(
    'alt: `${ft.brideFull} and ${ft.groomFull}`',
    'alt: `${ft.groomFull} and ${ft.brideFull}`'
)

# 4. Hero couple names (Groom First: Durgesh & Tripti)
# Locate and swap children in st.h1
old_h1_needle = 'children: ft.bride\n                }),\n                z.jsx("span", {\n                  className: "mx-2 inline-block font-script text-[0.55em] text-[#8a7a68]",\n                  children: "&"\n                }),\n                z.jsx(st.span, {\n                  className: "inline-block",\n                  whileHover: { y: -3, transition: { duration: 0.35 } },\n                  children: ft.groom'
new_h1_needle = 'children: ft.groom\n                }),\n                z.jsx("span", {\n                  className: "mx-2 inline-block font-script text-[0.55em] text-[#8a7a68]",\n                  children: "&"\n                }),\n                z.jsx(st.span, {\n                  className: "inline-block",\n                  whileHover: { y: -3, transition: { duration: 0.35 } },\n                  children: ft.bride'

if old_h1_needle in code:
    code = code.replace(old_h1_needle, new_h1_needle)
    print('Hero couple names successfully swapped (Durgesh & Tripti)')
else:
    print('Notice: checking hero couple names structure')

# 5. Photos caption
code = code.replace(
    'alt: photo.caption || `${ft.brideFull} & ${ft.groomFull}`',
    'alt: photo.caption || `${ft.groomFull} & ${ft.brideFull}`'
)
code = code.replace(
    'children: photo.caption || `${ft.bride} & ${ft.groom}`',
    'children: photo.caption || `${ft.groom} & ${ft.bride}`'
)
code = code.replace(
    'children: `${ft.brideFull} & ${ft.groomFull}`',
    'children: `${ft.groomFull} & ${ft.brideFull}`'
)

# 6. Intro Gate safe opening & cursor
old_tm = 'function TM({ onOpening: n, onOpened: a }) {\n  const [l, o] = E.useState(!1);\n  const u = () => {\n    l || (o(!0), n());\n  };\n  return z.jsxs(st.div, {\n    className: "fixed inset-0 z-50 overflow-hidden",'
new_tm = 'function TM({ onOpening: n, onOpened: a }) {\n  const [l, o] = E.useState(!1);\n  const u = () => {\n    if (!l) {\n      o(!0);\n      n();\n      setTimeout(() => {\n        a();\n      }, 1200);\n    }\n  };\n  return z.jsxs(st.div, {\n    className: "fixed inset-0 z-50 overflow-hidden cursor-pointer",\n    onClick: u,'

if old_tm in code:
    code = code.replace(old_tm, new_tm)
    print('TM safe opening timeout and cursor added')
else:
    print('Notice: checking TM structure')

# 7. ZM open invitation safe trigger
old_zm = '  const handleOpenInvitation = () => {\n    a("opening");\n    if (audioRef.current) {'
new_zm = '  const handleOpenInvitation = () => {\n    a("opening");\n    setTimeout(() => {\n      a("open");\n    }, 1000);\n    if (audioRef.current) {'

if old_zm in code:
    code = code.replace(old_zm, new_zm)
    print('handleOpenInvitation safe trigger added')

# 8. PM router fallback
old_pm = 'function PM() {\n  return z.jsxs(o2, {\n    children: [\n      z.jsx(N0, { path: "/", element: z.jsx(ZM, {}) }),\n      z.jsx(N0, { path: "/index.html", element: z.jsx(ZM, {}) }),\n      z.jsx(N0, { path: "*", element: z.jsx(ZM, {}) })\n    ]\n  });\n}'
new_pm = 'function PM() {\n  return z.jsx(ZM, {});\n}'

if old_pm in code:
    code = code.replace(old_pm, new_pm)
    print('PM simplified to direct ZM render')

with open('scripts/build-bundle.js', 'w', encoding='utf-8') as f:
    f.write(code)

print('Updated scripts/build-bundle.js successfully')
