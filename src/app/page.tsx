import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hello from my app week 2,  mi variable de entorno es: {process.env.NEXT_PUBLIC_HELLO}
    </main>
  )
}
