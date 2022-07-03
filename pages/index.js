import MainBody from '../Components/MainBody';
import Head from 'next/head'
import Nav from '../Components/Nav'
import { StyledContainer } from '../Components/Styles/Container.style';
import { StyledGlobal } from '../Components/Styles/Global';
import BarChart from '../Components/Chart';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <StyledGlobal />
      <Nav />
      <StyledContainer>
        <MainBody />
        <BarChart />
      </StyledContainer>
    </>
  )
}
