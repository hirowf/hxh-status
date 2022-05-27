import Image from 'next/image'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import { DateTime } from 'luxon'

export async function getStaticProps() {
  // const supabaseAdmin = createClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  //   process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  // )

  // Temporary workround
  const data = [
    {
      name: 'Yoshiro Togashi',
      href: 'https://twitter.com/Un4v5s8bgsVk9Xp/status/1528987173927522304/photo/1',
      username: '@Un4v5s8bgsVk9Xp',
      imageSrc:
        'https://pbs.twimg.com/media/FTgNunjVsAAYY09?format=jpg&name=large',
      time: '3:32 AM · May 24, 2022',
    },
    {
      name: 'Yoshiro Togashi',
      href: 'https://twitter.com/Un4v5s8bgsVk9Xp/status/1529260655236091904/photo/1',
      username: '@Un4v5s8bgsVk9Xp',
      imageSrc:
        'https://pbs.twimg.com/media/FTkGdX7UAAA7ogl?format=jpg&name=large',
      time: '12:17 AM · May 26, 2022',
    },
    {
      name: 'Yoshiro Togashi',
      href: 'https://twitter.com/Un4v5s8bgsVk9Xp/status/1529663083605397504/photo/1',
      username: '@Un4v5s8bgsVk9Xp',
      imageSrc:
        'https://pbs.twimg.com/media/FTp0dzGUEAAo0QN?format=jpg&name=large',
      time: '9:38 PM · May 24, 2022',
    },
    {
      name: 'Yoshiro Togashi',
      href: 'https://twitter.com/Un4v5s8bgsVk9Xp/status/1530022135413952512/photo/1',
      username: '@Un4v5s8bgsVk9Xp',
      imageSrc:
        'https://pbs.twimg.com/media/FTu7BZjUsAAS1xJ?format=jpg&name=large',
      time: '12:04 AM · May 27, 2022',
    },
  ]
  return {
    props: {
      images: data,
    },
  }
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Image = {
  id: number
  href: string
  imageSrc: string
  name: string
  username: string
  time: string
}

export default function Gallery({ images }: { images: Image[] }) {
  // diff days between 26, november 2018 until now
  const [days, setDays] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const lastRelease = DateTime.fromISO('2018-11-26')
  const date1 = new Date('11/26/2018')
  const date2 = new Date().getTime()
  const diffTime = Math.abs(date1.getTime() - date2)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  console.log(diffTime + ' milliseconds')
  console.log(diffDays + ' days')
  console.log(lastRelease.toFormat('dd/MM/yyyy'))

  return (
    <>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mb-14">
          <h1 className="text-9xl font-extrabold">HUNTER x HUNTER</h1>
          <p className="text-right">status</p>
          <div className="flex w-[500px]">
            <Image src="/quot.png" width="3340" height="269" />
          </div>

          <div className="mt-8">
            <span className="mb-14 text-2xl font-medium">
              Latest TOGASHI images from his twitter profile
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {images.map((image) => (
            <BlurImage key={image.id} image={image} />
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 divide-y">
          <div></div>
          <div></div>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-6 divide-x sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1 xl:gap-x-8">
          <div className="flex grid grid-cols-1 flex-row gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"></div>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <div>
              <span className="font-bod mt-10 text-2xl">
                Latest volume released:
              </span>
              <div className="mt-10 cursor-pointer">
                <a href="">
                  <Image src="/last_volu.jpeg" width="385" height="604" />
                </a>
              </div>
            </div>
            <div>
              <span className="font-bod  text-2xl ">
                Last chapter released:
              </span>
              <h1 className="mt-10 text-7xl font-bold">390</h1>
            </div>
            <div>
              <span className="font-bod text-2xl ">
                Day since the last chapter:
              </span>
              <h1 className="mt-10 text-7xl font-bold ">{diffDays}</h1>
            </div>
            <div>
              <span className="font-bod text-2xl">Last released:</span>
              <h1 className="mt-10 text-4xl font-bold">
                {lastRelease.toFormat('LLL dd, yyyy')}
              </h1>
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 divide-y">
          <div></div>
          <div></div>
        </div>
        <div className="mt-14">
          <h1 className="mb-14 text-2xl font-medium">
            HUNTER×HUNTER Hiatus Chart
          </h1>
          <Image src="/hiatus-chart.png" width="2302" height="1398" />
          <p>Chart source: hiatus-hiatus.github.io</p>
        </div>
      </div>
      <footer className="flex items-center justify-center border p-4">
        made with&nbsp;
        <span role="img" aria-label="heart">
          ❤️
        </span>
        &nbsp; by &nbsp;
        <a
          className="text-blue-500 hover:text-blue-700"
          href="https://twitter.com/hirowf"
          target="_blank"
        >
          @hirowf
        </a>
      </footer>
    </>
  )
}

function BlurImage({ image }: { image: Image }) {
  const [isLoading, setLoading] = useState(true)

  return (
    <a href={image.href} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <Image
          alt=""
          src={image.imageSrc}
          layout="fill"
          objectFit="cover"
          className={cn(
            'duration-700 ease-in-out group-hover:opacity-75',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{image.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{image.username}</p>
      <p className="mt-1 text-sm text-gray-600">{image.time}</p>
    </a>
  )
}
