import Head from 'next/head'
import Nav from '../Components/Nav'
import { StyledContainer } from '../Components/Styles/Container.style';
import { StyledGlobal } from '../Components/Styles/Global';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <StyledGlobal />
      <Nav />
      <StyledContainer>

      </StyledContainer>
    </>
  )
}
