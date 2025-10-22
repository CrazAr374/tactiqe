import React from 'react'

type Props = {
  emoji: string
  title: string
  desc: string
}

export default function BadgeCard({ emoji, title, desc }: Props) {
  return (
    <div className="p-4 rounded-lg bg-secondary/10 border border-border backdrop-blur-sm text-center">
      <div className="text-3xl">{emoji}</div>
      <h4 className="font-semibold mt-2">{title}</h4>
      <p className="text-xs text-muted-foreground mt-1">{desc}</p>
    </div>
  )
}
