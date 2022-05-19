import React, {useState} from "react"
import styled from "styled-components"
import useApiFetch from "../../hooks/useApiFetch"
import resourceService from "../../services/resourceService"
import Button from "../Button/Button"
import RenderIf from "../Render/RenderIf"
import SyntaxLoading from "../Syntax/SyntaxLoading"
import SyntaxViewer from "../Syntax/SyntaxViewer"
import useResource from "../../hooks/useResource";
import useTryCode from "../../hooks/useTryCode";


const Container = styled.div`
  width: 100%;
  max-width: 600px;
`


const TryCode = React.memo(() => {
    const {data, tryCodeRoutePath, fetchTryCode, loading} = useTryCode()
    const [render, setRender] = useState(false)
    const onCLick = () => {
        setRender(true)
        fetchTryCode()
    }
    const fetchIp = `${document.location.toString().slice(0, -1)}${tryCodeRoutePath}`
    return <Container>
        <SyntaxViewer language="javascript" data={tryCodeRoutePath && `fetch('${fetchIp}')
            .then(res=>res.json())
            .then(console.log) `}/>
        <Button onClick={onCLick}>Try it</Button>
        <RenderIf render={render}>
            <SyntaxLoading isLoading={loading}>
                <SyntaxViewer data={data}/>
            </SyntaxLoading>
        </RenderIf>
    </Container>
})


export default TryCode