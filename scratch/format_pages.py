import os
from docx import Document
import re
import json

def parse_docx(path):
    doc = Document(path)
    sections = []
    current_title = ''
    current_content = []
    
    for p in doc.paragraphs:
        text = p.text.strip()
        if not text: continue
        
        is_bullet = p.style.name.startswith('List') or 'Bullet' in p.style.name or (p._p.pPr is not None and p._p.pPr.numPr is not None)
        
        if not is_bullet and re.match(r'^\d+\.\s', text) and len(text) < 100:
            if current_title or current_content:
                sections.append({'title': current_title, 'content': '\n'.join(current_content)})
            current_title = text
            current_content = []
        else:
            if not current_title:
                if 'PRIVACY POLICY' in text or 'TERMS OF' in text or 'Effective' in text or 'Updated' in text or 'LLP' in text and not '1.' in current_title:
                    pass
                else:
                    if not current_title:
                        current_title = 'Introduction'
            
            if is_bullet or text.startswith('- '):
                t = text if text.startswith('- ') else '- ' + text
                current_content.append(t)
            else:
                if re.match(r'^\d+\.\d+\s', text) and len(text) < 100:
                    current_content.append(f'\n**{text}**')
                else:
                    current_content.append(text)
    
    if current_title or current_content:
        sections.append({'title': current_title, 'content': '\n'.join(current_content)})
        
    return sections

def generate_tsx(sections, title, desc, icon_name, is_privacy=True):
    sections_js = '[\n'
    for i, s in enumerate(sections):
        if not s['title']: continue
        content = s['content'].replace('\"', '\\\"').replace('`', '\\`')
        t = s['title'].replace('\"', '\\\"')
        sections_js += f'  {{\n    id: "sec-{i}",\n    title: "{t}",\n    content: `{content}`\n  }},\n'
    sections_js += ']'

    other_link = '/terms' if is_privacy else '/privacy-policy'
    other_label = 'Terms of Use' if is_privacy else 'Privacy Policy'
    
    return f"""import type {{ Metadata }} from "next"
import Link from "next/link"
import Image from "next/image"
import {{ ArrowLeft, Mail, MapPin, Globe }} from "lucide-react"

export const metadata: Metadata = {{
  title: "{title} — SYLVEDHA LLP",
  description: "{desc}",
}}

const sections = {sections_js}

function RichText({{ text }}: {{ text: string }}) {{
  const lines = text.split("\\n")
  const elements: any[] = []
  let inList = false
  let listItems: any[] = []
  let ulCount = 0

  const flushList = () => {{
    if (inList && listItems.length > 0) {{
      elements.push(
        <ul key={{`ul-${{ulCount++}}`}} className="list-disc list-outside ml-6 space-y-3 text-white/80 marker:text-[#BFF202] mb-6">
          {{listItems}}
        </ul>
      )
      listItems = []
      inList = false
    }}
  }}

  lines.forEach((line, i) => {{
    if (!line.trim()) {{
      flushList()
      return
    }}

    const isListItem = line.trim().startsWith("- ")
    
    if (isListItem) {{
      inList = true
      const content = line.replace("- ", "").trim()
      const parts = content.split(/\\*\\*(.*?)\\*\\*/g)
      const rendered = parts.map((part, j) =>
        j % 2 === 1 ? <strong key={{j}} className="font-bold text-[#BFF202]">{{part}}</strong> : <span key={{j}}>{{part.replace(/'/g, "'")}}</span>
      )
      listItems.push(<li key={{`li-${{i}}`}} className="pl-2 leading-relaxed">{{rendered}}</li>)
    }} else {{
      flushList()
      const parts = line.split(/\\*\\*(.*?)\\*\\*/g)
      const rendered = parts.map((part, j) =>
        j % 2 === 1 ? <strong key={{j}} className="font-bold text-[#BFF202]">{{part}}</strong> : <span key={{j}}>{{part.replace(/'/g, "'")}}</span>
      )
      elements.push(
        <p key={{`p-${{i}}`}} className="leading-relaxed mb-6 last:mb-0 text-white/80">
          {{rendered}}
        </p>
      )
    }}
  }})
  
  flushList()

  return <div className="text-base sm:text-lg">{{elements}}</div>
}}

export default function Page() {{
  return (
    <div className="min-h-screen bg-[#011A17] text-white/80">
      <header className="sticky top-0 z-50 border-b border-[#BFF202]/10 bg-[#011A17]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
          <Link href="/" className="flex items-center gap-3 group">
            <ArrowLeft className="size-5 text-white/50 transition-transform group-hover:-translate-x-1" />
            <div className="relative h-12 w-[160px]">
              <Image src="/images/logo-horizontal-dark-green.webp" alt="Sylvedha" fill sizes="160px" className="object-contain" />
            </div>
          </Link>
          <Link href="{other_link}" className="text-sm font-bold uppercase tracking-[0.15em] text-white/40 hover:text-[#BFF202] transition-colors">
            {other_label}
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-[#BFF202]/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#BFF202]/10 blur-[120px]" />
          <div className="absolute -right-40 -bottom-40 h-[400px] w-[400px] rounded-full bg-[#3A7717]/20 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-5 py-24 sm:px-8 sm:py-32">
          <h1 className="font-heading text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <div className="mt-8 flex flex-wrap items-center gap-6 text-base text-white/50">
            <span>Effective Date: <span className="text-[#BFF202]/80">19 July 2026</span></span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span>Last Updated: <span className="text-[#BFF202]/80">19 July 2026</span></span>
            <span className="hidden sm:inline text-white/20">|</span>
            <span>LLP ID: <span className="text-[#BFF202]/80">ACX-4015</span></span>
          </div>
        </div>
      </section>

      <nav className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#BFF202]/50 mb-6">Contents</p>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {{sections.filter(s => s.title !== 'Introduction').map((s) => (
            <a key={{s.id}} href={{`#${{s.id}}`}} className="flex items-center gap-3 rounded-lg px-4 py-3 text-base text-white/70 hover:bg-[#BFF202]/5 hover:text-[#BFF202] transition-colors line-clamp-1 truncate">
              <span className="h-px w-4 shrink-0 bg-[#BFF202]/30" />
              {{s.title}}
            </a>
          ))}}
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-5 pb-24 sm:px-8">
        <div className="space-y-20">
          {{sections.map((s) => (
            <section key={{s.id}} id={{s.id}} className="scroll-mt-32">
              {{s.title !== 'Introduction' && (
                <h2 className="font-heading text-3xl font-bold text-white mb-8 pb-4 border-b border-[#BFF202]/10">
                  {{s.title}}
                </h2>
              )}}
              <RichText text={{s.content}} />
            </section>
          ))}}
        </div>
      </main>

      <footer className="border-t border-[#BFF202]/10 bg-black/40">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex items-start gap-4 group">
              <Mail className="size-6 text-[#BFF202] mt-0.5 shrink-0 transition-transform group-hover:scale-110" />
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#BFF202]/50 mb-2">Email</p>
                <a href="mailto:info@sylvedha.com" className="text-base text-white/90 hover:text-[#BFF202] transition-colors">info@sylvedha.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <Globe className="size-6 text-[#BFF202] mt-0.5 shrink-0 transition-transform group-hover:scale-110" />
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#BFF202]/50 mb-2">Website</p>
                <Link href="/" className="text-base text-white/90 hover:text-[#BFF202] transition-colors">sylvedha.com</Link>
              </div>
            </div>
            <div className="flex items-start gap-4 group">
              <MapPin className="size-6 text-[#BFF202] mt-0.5 shrink-0 transition-transform group-hover:scale-110" />
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#BFF202]/50 mb-2">Office</p>
                <p className="text-base text-white/70 leading-relaxed">Incubation Centre, Third Floor, PG Block, MITE, Moodabidri, Mangaluru, Karnataka — 574225</p>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-wrap items-center gap-5 text-sm text-white/40">
            <p>&copy; {{new Date().getFullYear()}} Sylvedha LLP. All rights reserved.</p>
            <span className="text-[#BFF202]/30">|</span>
            <Link href="/privacy-policy" className="hover:text-[#BFF202] transition-colors">Privacy Policy</Link>
            <span className="text-[#BFF202]/30">|</span>
            <Link href="/terms" className="hover:text-[#BFF202] transition-colors">Terms of Use & Sale</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}}
"""

priv = parse_docx(r'Sylvedha Privacy Policy.docx')
terms = parse_docx(r'Terms of Use and Sale.docx')

with open(r'app\privacy-policy\page.tsx', 'w', encoding='utf-8') as f:
    f.write(generate_tsx(priv, 'Privacy Policy', 'Sylvedha LLP Privacy Policy', 'Shield', True))

with open(r'app\terms\page.tsx', 'w', encoding='utf-8') as f:
    f.write(generate_tsx(terms, 'Terms of Use and Sale', 'Sylvedha LLP Terms of Use and Sale', 'Scale', False))
