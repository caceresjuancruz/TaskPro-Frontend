import { truncateString } from '@/lib/utils'
import { LayoutProps } from '@/types'
import { Button } from '@nextui-org/button'
import { User } from '@nextui-org/user'
import Image from 'next/image'

export default async function RootLayout({ children }: LayoutProps) {
  return (
    <section className='py-24'>
      <div className='container'>
        <div className='mb-6 flex items-center justify-between border-b-2 border-gray-50 pb-2'>
          <h1 className='text-3xl font-bold'>
            <span className='max-md:hidden'>TaskPro</span>🎯
          </h1>
          <div className='flex gap-2'>
            <User
              name='User'
              description={truncateString('caceresjuan.dev@gmail.com')}
              avatarProps={{
                src: '/assets/images/userplaceholder.jpg'
              }}
            />
            <Button
              isIconOnly
              color='default'
              variant='light'
              aria-label='Logout'
            >
              <Image
                src={'/assets/icons/logout.svg'}
                unoptimized
                alt='Logout'
                height={20}
                width={20}
              />
            </Button>
          </div>
        </div>
        {children}
      </div>
    </section>
  )
}
