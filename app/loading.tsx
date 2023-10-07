export default function Loading() {
  return (
    <main className="container max-w-screen-lg mx-auto">
      <div className="flex flex-wrap gap-4">
        {Array.from(Array(20).keys()).map((e, index) => (
          <div
            key={index}
            style={{ height: 300 }}
            className="animate-pulse relative p-4 rounded bg-gradient-to-b from-yellow1 to-yellow2 shadow-white shadow-sm text-center text-black hover:scale-102 grow=[0] poke-card"
          />
        ))}
      </div>
    </main>
  )
}
