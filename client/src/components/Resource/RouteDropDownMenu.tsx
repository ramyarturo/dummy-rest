import styled, {css} from "styled-components";
import React, {forwardRef, useRef} from "react";
import {ResourceItem, ResourceItems} from "./ResourceItem";
import {Paragraph, Title} from "../Text/Text";
import constants from "../../utils/constants";
import {Route} from "../../types/resource";


const DropDownContainer = styled.div`
  position: absolute;
  max-width: 700px;
  min-height: 200px;
  border-radius: 8px;
  top: 20px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  opacity: 0;
  visibility: hidden;
  background-color: #ffffff;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);

  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  ${({open}: any) => open && css`
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  `};
`
const DropdownWrapper = styled.div`
  padding: 20px;
`
const RouteItems = styled(ResourceItems)`
  max-width: 100%;
  gap: 20px;
  flex-direction: column;
`
const RouteItem = styled(ResourceItem)`

  @media (max-width: 580px) {
    flex-direction: column;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
`
const RouteItemPath = styled.a`

`
const RouteItemComment = styled.p`
  color: #a3a3a3;
`

interface Props {
    active: boolean,
    routes: Route[]
}

const RouteDropDownMenu = forwardRef<any, Props>(({active, routes}, ref) => {

    const onRouteClick = (routePath) => {
        window.open(constants.baseUrl + `${routePath}`, "_blank")

    }
    // @ts-ignore
    return <DropDownContainer ref={ref} open={active}>
        <DropdownWrapper>
            <Title>Routes</Title>
            <Paragraph>Routes from this resource only GET and POST currently supported!</Paragraph>
            <RouteItems>
                {active && routes.map(({path, method, description}, index) => {

                    return <RouteItem key={index}>
                        <p>{method}</p>
                        <RouteItemPath onClick={() => onRouteClick(path)}>
                            {path}
                        </RouteItemPath>
                        <RouteItemComment>//{description}</RouteItemComment>
                    </RouteItem>
                })}
            </RouteItems>
        </DropdownWrapper>
    </DropDownContainer>

})
export default RouteDropDownMenu