import {Paragraph} from "../../components/Text/Text";
import Button from "../../components/Button/Button";
import styled from "styled-components";
import constants from "../../utils/constants";

const HeroSectionWrapper = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
`

const IntroWrapper = styled.div`
  margin: auto;
  text-align: center;
`

export default function HeroSection() {
    const handleOnClick = () => {
       window.open(constants.githubRepoUrl,"_blank")
    }
    return <HeroSectionWrapper>
        <IntroWrapper>
            <Paragraph>Free fake API for testing</Paragraph>
            <Button onClick={handleOnClick}>View on Github</Button>
        </IntroWrapper>
    </HeroSectionWrapper>
}