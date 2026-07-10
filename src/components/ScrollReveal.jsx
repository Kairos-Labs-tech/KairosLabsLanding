'use client'
import { useEffect, useRef } from 'react'

export function ScrollReveal({ children, className = '', stagger = false, tag: Tag = 'div', ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (!('IntersectionObserver' in window)) return

    const rect = el.getBoundingClientRect()
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0

    // Elements already in the viewport skip animation to avoid flash
    if (alreadyVisible) return

    if (stagger) el.setAttribute('data-stagger', '')
    else el.classList.add('reveal')

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in')
          io.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -56px 0px', threshold: 0 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={className} {...props}>
      {children}
    </Tag>
  )
}
