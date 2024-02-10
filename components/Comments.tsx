'use client'

import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button'

interface CommentsProps {
  comments: any[]
}

const Comments = ({ comments }: CommentsProps) => {
  return (
    <>
      <h3 className='text-lg font-semibold'>Comments</h3>
      <div className='flex items-center gap-4'>
        <Input
          type='text'
          variant='bordered'
          placeholder='Make a comment'
          className='lg:w-1/4'
          size='sm'
          radius='full'
        />
        <Button size='sm' radius='full'>
          Comment
        </Button>
      </div>
    </>
  )
}

export default Comments
