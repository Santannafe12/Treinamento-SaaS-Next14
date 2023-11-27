import { Billboard } from '@/components/billboard'
import { Carousel } from '@/components/carousel'
import { LesserBillboard } from '@/components/lesser-billboard'
import { getFeaturedProducts } from '@/lib/product/actions'

export default async function Home() {
  const featuredProducts = await getFeaturedProducts()

  return (
    <div>
      <Billboard />
      <div className='space-y-16'>
        <Carousel products={featuredProducts} title='DESTAQUES' />
        <LesserBillboard imageUrl='/climbing.jpg' annoucement='Se desafie mais a cada dia!' sale='SHOP NOW' />
      </div>
    </div>
  )
}
