'use client'
import { useState } from 'react'
import { ScrollReveal } from '@/components/ScrollReveal'

function VideoEmbed({ src, title }) {
  const isYoutube = src.includes('youtube.com') || src.includes('youtu.be')
  const embedSrc = isYoutube
    ? src.replace('watch?v=', 'embed/').replace('youtu.be/', 'www.youtube.com/embed/')
    : src

  return (
    <div
      style={{
        position: 'relative',
        paddingBottom: '56.25%',
        height: 0,
        background: 'var(--ink-raised)',
        border: '1px solid var(--hairline)',
      }}
    >
      <iframe
        src={embedSrc}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          border: 'none',
        }}
      />
    </div>
  )
}

export function ProductMediaGallery({ items }) {
  const [lightbox, setLightbox] = useState(null)
  if (!items || items.length === 0) return null

  const images = items.filter(i => i.type === 'image')
  const videos = items.filter(i => i.type === 'video')

  return (
    <ScrollReveal
      tag="section"
      style={{
        paddingBlock: 'clamp(44px, 7vh, 84px)',
        borderTop: '1px solid var(--hairline)',
      }}
    >
      <p className="eyebrow" style={{ marginBottom: '1.6em' }}>
        <span className="greek">ΜΕΣΑ</span> &mdash; Media
      </p>

      {videos.length > 0 && (
        <div style={{ display: 'grid', gap: '2em', marginBottom: images.length > 0 ? '2.4em' : 0 }}>
          {videos.map((v, i) => (
            <div key={i}>
              {v.caption && (
                <p
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '.72rem',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: 'var(--parchment-dim)',
                    marginBottom: '.6em',
                  }}
                >
                  {v.caption}
                </p>
              )}
              <VideoEmbed src={v.src} title={v.caption || `Video ${i + 1}`} />
            </div>
          ))}
        </div>
      )}

      {images.length > 0 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.2em',
          }}
        >
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(img)}
              style={{
                all: 'unset',
                cursor: 'zoom-in',
                display: 'block',
                border: '1px solid var(--hairline)',
                overflow: 'hidden',
                background: 'var(--ink-raised)',
              }}
              aria-label={img.caption || `Screenshot ${i + 1}`}
            >
              <img
                src={img.src}
                alt={img.caption || ''}
                loading="lazy"
                style={{ width: '100%', display: 'block', objectFit: 'cover', aspectRatio: '16/9' }}
              />
              {img.caption && (
                <p
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '.68rem',
                    letterSpacing: '.06em',
                    color: 'var(--parchment-dim)',
                    padding: '8px 12px',
                    borderTop: '1px solid var(--hairline)',
                  }}
                >
                  {img.caption}
                </p>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.caption || 'Image'}
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 100,
            background: 'rgba(16,10,18,.92)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(20px, 5vw, 60px)',
            cursor: 'zoom-out',
          }}
        >
          <img
            src={lightbox.src}
            alt={lightbox.caption || ''}
            style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain', display: 'block' }}
          />
          {lightbox.caption && (
            <p
              style={{
                position: 'absolute',
                bottom: 'clamp(12px, 3vh, 28px)',
                left: '50%',
                transform: 'translateX(-50%)',
                fontFamily: 'var(--mono)',
                fontSize: '.75rem',
                letterSpacing: '.08em',
                color: 'var(--parchment-dim)',
                whiteSpace: 'nowrap',
              }}
            >
              {lightbox.caption}
            </p>
          )}
        </div>
      )}
    </ScrollReveal>
  )
}
