import { Billboard } from '@/components/billboard'
import { Carousel } from '@/components/carousel'
import { CategoriesCarousel } from '@/components/categories-carousel'
import { LesserBillboard } from '@/components/lesser-billboard'
import { getFeaturedProducts } from '@/lib/products/actions'

export default async function Home() {
  const featuredProducts = await getFeaturedProducts()

  return (
    <div>
      <Billboard />
      <div className='space-y-16'>
        <Carousel products={featuredProducts} title='DESTAQUES' />
        <LesserBillboard imageUrl='/climbing.jpg' annoucement='Se desafie mais a cada dia!' sale='EXPLORAR' />
        <CategoriesCarousel products={featuredProducts} title='NAVEGUE POR CATEGORIAS' />
      </div>
    </div>
  )
}
