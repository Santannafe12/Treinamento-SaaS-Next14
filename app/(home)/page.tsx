import { Billboard } from '@/components/billboard'
import { Carousel } from '@/components/carousel'
import { CategoriesCarousel } from '@/components/categories-carousel'
import { LesserBillboard } from '@/components/lesser-billboard'
import { getCategories } from '@/lib/categories/action'
import { getFeaturedProducts } from '@/lib/products/actions'

export default async function Home() {
  const featuredProducts = await getFeaturedProducts()
  const categories = await getCategories()

  return (
    <div>
      <Billboard />
      <div className='space-y-16'>
        <Carousel products={featuredProducts} title='DESTAQUES' />
        <LesserBillboard imageUrl='/climbing.jpg' annoucement='Se desafie mais a cada dia!' sale='EXPLORAR' />
        <CategoriesCarousel categories={categories} title='NAVEGUE POR CATEGORIAS' />
      </div>
    </div>
  )
}
