import Section1 from '@/components/Section1'
import Section2 from '@/components/Section2'
import Section3 from '@/components/Section3'
import Section4 from '@/components/Section4'
import Section5 from '@/components/Section5'
import Section6 from '@/components/Section6'
import Section7 from '@/components/Section7'

const page = () => {
  return (
    <main>
      <Section1 />
      <Section2 />
      <div className='py-7 hidden md:block'><Section3 /></div>
      <Section6 />
      <Section4 />
      <div className='block md:hidden'><Section7 /></div>
      <Section5 />
    </main>
  )
}

export default page