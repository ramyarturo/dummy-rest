import styled from "styled-components";



const StyledSyntaxLoading = styled.div`
       width: 100%;
       min-height: 50px;
       padding: 10px 20px;
       border-radius: 5px;
       background-color: #2b2b2b;
       color: #fff;
       text-align: center;
`


const SyntaxLoading = ({ isLoading = false, children = null }) => {

    if (isLoading) {
        return <StyledSyntaxLoading>
            Loading...
        </StyledSyntaxLoading>
    }

    return children
}

export default SyntaxLoading