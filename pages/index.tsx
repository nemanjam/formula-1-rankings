import type { NextPage } from 'next';
import Head from 'next/head';
import { dehydrate, QueryClient } from '@tanstack/react-query'

import Button from 'components/Button';
import Section from 'components/Section';
import Table from 'components/Table';
import Header from 'components/Header';

import useTeams from 'hooks/useTeams';

import { getTeams } from 'hooks/useTeams'
import { getRangeArray } from 'utils';

// start at 11am

const Home: NextPage = () => {

  // api key is invalid...
  // const { data, isLoading } = useTeams();
  // console.log('data', data)

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container flex w-full flex-1 flex-col items-center px-20 text-left bg-neutral-100 border border-black">
        {/* hero image */}
        <Header />

        {/* tabs */}
        <Section title="Seasons">
          <div className="flex gap-2 flex-wrap">
            {getRangeArray(2012, 2022).map(season => 
              <Button key={season}>{season}</Button>
            )}
          </div>  
        </Section>

        {/* table section*/}
        <Section title="Rankings">
          <Table /> 
        </Section>
      </main>
    </div>
  )
}

export async function getServerSideProps1() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['teams'], () => getTeams())

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Home
