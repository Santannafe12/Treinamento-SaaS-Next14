import { Featured } from '@/components/featured'
import { HeroSection } from '@/components/hero-section'
import { NavigationTop } from '@/components/navigation-top'
import { OtherProducts } from '@/components/other-products'
import { createProduct, getFeaturedProducts, getGeneralProducts } from '@/lib/actions'

export default async function Home() {
  const featuredProducts = await getFeaturedProducts()
  const generalProducts = await getGeneralProducts()

  return (
    <div>

      {/* <HeroSection /> */}

      <NavigationTop />

      <Featured featured={featuredProducts} />

      <OtherProducts otherProducts={generalProducts} />

      {/* <div>
        <form action={createProduct} className='text-black'>
          <input placeholder='title' name='title' />
          <input placeholder='content' name='content' />
          <input placeholder='price' name='price' />
          <button type='submit'>Criar</button>
        </form>
      </div> */}
    </div>
  )
}
