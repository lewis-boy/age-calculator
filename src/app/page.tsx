import AgeCalculator from '@/components/AgeCalculator'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-poppins italic">
      <AgeCalculator />
    </main>
  )
}
