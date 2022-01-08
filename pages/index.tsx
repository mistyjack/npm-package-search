import type { NextPage } from 'next';
import Head from 'next/head';
import RepositoriesList from '../src/components/RepositoriesList';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Search NPM Packages</title>
        <meta name="description" content="Search NPM Packages" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <RepositoriesList />
      </main>
    </div>
  );
};

export default Home;
