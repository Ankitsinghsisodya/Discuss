import PostList from '@/components/posts/post-list';
import PostCreateForm from '@/components/posts/PostcreateForm';
import { fetchPostByTopicSlug } from '@/lib/query/post';
import React from 'react'

type TopicShowPageProps = {
  params: Promise<{ slug: string }>
}
const TopicShowPage: React.FC<TopicShowPageProps> = async ({ params }) => {
  const slug = (await params).slug;
  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
      <div className='col-span-3'>
        <h1 className='font-bold text-2xl mb-2'>
          {slug}
          <PostList fetchData={() => fetchPostByTopicSlug(slug)} />
        </h1>
      </div>
      <div>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  )
}

export default TopicShowPage
