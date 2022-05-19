import styled from 'styled-components'
import TryCode from '../../components/TryCode/TryCode'
import ResourceSectionList from './ResourceSectionList'
import HeroSection from "./HeroSection";
import { Title } from '../../components/Text/Text'

const HomeContainer = styled.main`
  width: 80%;
  min-height: 100vh;
  padding-top: 70px;
  margin: 0 auto;
`
const SampleSectionWrapper = styled.section`
  width: 100%;
  margin-top: 20px;
`


const HomePage = () => {
  return <HomeContainer>
    <HeroSection/>
    <SampleSectionWrapper>
      <Title>Try Sample Code</Title>
      <TryCode />
    </SampleSectionWrapper>
    <ResourceSectionList />
  </HomeContainer>

}

export default HomePage