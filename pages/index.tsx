import { ProjectSection } from './../components/ProjectSection';
import { HeroSection } from './../components/HeroSection';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dylan Reed | Software Engineer Portfolio</title>
        <meta
          name='description'
          content='I’m Dylan Reed, a Canadian software engineer. passion to learn and critical to provide a great ux.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='bg-primary-dark-500 min-h-screen p-6 md:p-16 flex flex-col gap-6 lg:p-20 3xl:px-[72em] overflow-hidden'>
        <HeroSection />
        <ProjectSection />
      </main>
    </div>
  );
};

export default Home;
