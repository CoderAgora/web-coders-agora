// LAYOUTS
import { Section } from 'layout/Section'
import { BlogLayout } from 'layout/BlogLayout'

// COMPONENTS
import { Post } from 'components/blog/Post'
import { Postfeature } from 'components/blog/Postfeature'
import { Header } from 'components/Header'

// MOCKUP DATA
import { POSTS } from 'data/posts'
import { CATEGORIES } from 'data/categories'

export default function Blog () {
  const getPosts = () => {
    return POSTS.map((post, i) => {
      return i === 0 ? <Postfeature key={i} post={post} /> : <Post key={i} post={post} />
    })
  }

  const getCategories = () => {
    return CATEGORIES.map(({ title }, i) => { return <p className='text-ca-text-black hover:text-ca-main-agora' key={i}>{title}</p> })
  }

  return (
    <Section>
      <Header height={80} width={80} className='mb-6 lg:px-16 py-4' desc='Comunidad del copon' />
      <BlogLayout>
        {/* BLOG POSTS */}
        <div className='posts grid grid-cols-2 '>
          {getPosts()}
        </div>

        <div className='ml-10 categories'>
          <h5 className='mb-5 text-ca-text-black '>Categories</h5>
          {getCategories()}
        </div>
      </BlogLayout>
    </Section>
  )
}
