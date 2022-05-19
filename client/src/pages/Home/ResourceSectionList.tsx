import {useEffect, useRef} from "react"
import styled from "styled-components"
import {Paragraph, Title} from "../../components/Text/Text"
import useApiFetch from "../../hooks/useApiFetch"
import resourceService from "../../services/resourceService"
import constants from "../../utils/constants";
import RouteDropDownMenu from "../../components/Resource/RouteDropDownMenu";
import useDetectOutsideClick from "../../hooks/useDetectOutsideClick";
import {ResourceItem, ResourceItems} from "../../components/Resource/ResourceItem";
import useResource from "../../hooks/useResource";


const ResourceSectionWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 50%;
`


const ResourceSectionList = () => {
    const { resources } = useResource()
    const selectedResourceRoutes = useRef(null);
    const dropdownRef = useRef(null)
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const handleOnResourceClick = (resourceName) => {
        window.open(constants.baseUrl + `${resourceName}`, "_blank")
    }
    const handleOnResourceEnter = (routes) => {
        selectedResourceRoutes.current = routes
        setIsActive(!isActive)
    }
    return <ResourceSectionWrapper>
        <Title>Resources</Title>
        <Paragraph>Many Resources for free testing!</Paragraph>
        <ResourceItems>
            {resources && resources.map(({name: resourceName, count, ...rest}, index) => {
                return <ResourceItem key={index}>
                    <a  onClick={() => handleOnResourceClick(resourceName)}
                       onMouseEnter={() => handleOnResourceEnter(rest.routes)}>
                        {resourceName}
                    </a>
                    <p>{count} {resourceName.slice(1)}</p>
                </ResourceItem>
            })}
        </ResourceItems>
        <RouteDropDownMenu ref={dropdownRef} active={isActive} routes={selectedResourceRoutes.current}/>

    </ResourceSectionWrapper>
}

export default ResourceSectionList