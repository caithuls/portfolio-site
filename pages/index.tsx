import Head from 'next/head'
import Image from 'next/image'
import Folds from "../public/folds.png"

export default function Home() {
  return (
    <div className="container px-8 mx-auto max-w-4xl lg:mt-8 lg:mb-8">
      <Head>
        <title>Caitlin Hulsey</title>
        <link rel="icon" href="/folds.png" />
        <meta property="og:image" content={"/folds.png"} />
      </Head>
      <div className="container lg:space-x-5 lg:flex lg:flex-row flex flex-col-reverse text-center">
        <div className="flex-shrink">
            <Image
                src={Folds}
                alt="Drawing"
                priority={true}
                width={400}
                height={400}
                placeholder="blur"
            />
        </div>
        <div className="lg:px-5 pt-5 lg:mt-20">
            <div className="mt-10 font-serif text-gray-800 text-5xl">
              Caitlin Hulsey
            </div>
            <div className="mt-2 text-3xl">
              artist, programmer, writer
            </div>
        </div>
      </div>
    </div>
  )
}