import { useState, useEffect } from 'react'

export default function Typewriter({ texts = [], typingSpeed = 70, deletingSpeed = 30, pauseDuration = 1500 }) {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // determine longest line length (account for potential newlines) so layout doesn't jump
  const maxLength = texts.reduce((max, t) => {
    const lines = t.split('\n')
    const longest = lines.reduce((m, l) => Math.max(m, l.length), 0)
    return Math.max(max, longest)
  }, 0)

  // Typing and deleting effect
  useEffect(() => {
    if (texts.length === 0) return

    const currentText = texts[textIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          // Full text typed, pause then start deleting
          setTimeout(() => {
            setIsDeleting(true)
          }, pauseDuration)
        }
      } else {
        // Deleting phase
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          // Text fully deleted, move to next text or loop
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration])

  // span with inline-block and minWidth based on maxLength ensures
  // the paragraph containing the typewriter keeps a constant width.
  // `whitespace-pre-wrap` allows newline characters to force breaks on smaller screens.
  return (
    <span
      className="inline-block whitespace-pre-wrap"
      style={{ minWidth: `${maxLength}ch` }}
    >
      {displayText}
    </span>
  )
}
