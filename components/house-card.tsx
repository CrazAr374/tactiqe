import React from 'react'

type Props = {
  title: string
  color: 'red' | 'blue' | 'yellow' | 'green'
  short: string
  desc: string
  letter: string
}

export default function HouseCard({ title, color, short, desc, letter }: Props) {
  const colorClasses = {
    red: 'from-red-50 to-red-100',
    blue: 'from-blue-50 to-blue-100',
    yellow: 'from-yellow-50 to-yellow-100',
    green: 'from-green-50 to-green-100',
  }

  const glowClass = {
    red: 'house-glow-red',
    blue: 'house-glow-blue',
    yellow: 'house-glow-yellow',
    green: 'house-glow-green',
  }

  return (
    <article className={`rounded-2xl p-6 bg-gradient-to-br ${colorClasses[color]} border border-border/60 shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden ${glowClass[color]}`}>
      <div className="absolute -top-6 -right-12 w-56 h-56 opacity-20 rounded-full blur-3xl pointer-events-none" />
      <div className="flex items-start gap-4">
        <div className={`w-16 h-16 rounded-md text-white flex items-center justify-center text-2xl shadow-md ${color === 'red' ? 'bg-red-600' : color === 'blue' ? 'bg-blue-600' : color === 'yellow' ? 'bg-yellow-500' : 'bg-green-700'}`}>{letter}</div>
        <div>
          <h3 className="text-xl font-semibold">{title} <span className="text-sm text-muted-foreground">— {short}</span></h3>
          <p className="text-sm text-muted-foreground mt-2">{desc}</p>
        </div>
      </div>
    </article>
  )
}
