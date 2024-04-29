interface AboutSectionProps {
  title: string
  description: string
}

export function AboutSection({ title, description }: AboutSectionProps) {
  return (
    <div className="text-white pb-8">
      <h2 className="text-5xl uppercase font-bold my-6 lg:text-7xl lg:my-8">
        {title}
      </h2>
      <p className="text-white/80">{description}</p>
    </div>
  )
}
