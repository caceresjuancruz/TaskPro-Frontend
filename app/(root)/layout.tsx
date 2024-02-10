import { LayoutProps } from '@/types'

export default async function RootLayout({ children }: LayoutProps) {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='mb-6 border-b-2 border-gray-50 pb-2 text-3xl font-bold'>
          TaskPro🎯
        </h1>
        {children}
      </div>
    </section>
  )
}
