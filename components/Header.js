import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const Header = (props) => {
  const { width, height, className } = props
  const router = useRouter()

  const pathname = router.pathname.substring(1)

  return (
    <div className={`flex px-4 xl:px-0 my-8 mb-20 m-auto max-w-screen-xl ${className && ''}`}>
      <div className='mr-10'>
        <Link href='/'>
          <a>
            <Image src='/img/FlattenedLogo.svg' alt='Coders Agora Logo, it is lovely' width={width} height={height} />
          </a>
        </Link>
      </div>
      {
      pathname
        ? (
          <div>
            <h1 className='inline capitalize align-middle text-ca-black'>
              {pathname}
            </h1>
          </div>
          )
        : <Image src='/img/text-community.svg' alt='coders-agora-text-logo' width={500} height={height} />
      }

    </div>
  )
}
