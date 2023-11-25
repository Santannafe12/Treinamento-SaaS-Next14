import { Billboard } from '@/components/billboard'
import { Carousel } from '@/components/carousel'
import { LesserBillboard } from '@/components/lesser-billboard'
import { GET, GetProducts } from '@/lib/product/actions'

export default async function Home() {
  const generalProducts = await GetProducts()
  // console.log(generalProducts)

  return (
    <div>
      <Billboard />
      <div className='space-y-16'>
        <Carousel products={generalProducts} title='DESTAQUES' />
        <LesserBillboard imageUrl='/climbing.jpg' annoucement='Se desafie mais a cada dia!' sale='SHOP NOW' />
      </div>
    </div>
  )
}
