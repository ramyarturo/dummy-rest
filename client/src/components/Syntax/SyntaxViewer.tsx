import styled, { css } from "styled-components"
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';

import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import React from "react";
SyntaxHighlighter.registerLanguage('json', json);


interface Props {
    data: any,
    language?: 'json' | 'javascript'
}
const SyntaxViewer: React.FC<Props> = ({ data, language = 'json' }) => {
    let code = data
    if (language === 'json') {
        code = JSON.stringify(data, undefined, 1)
    }
    return <SyntaxHighlighter customStyle={{
        borderRadius: "5px",
        width: "100%",
        height: "100%",
    }} wrapLongLines language={language} style={darcula}>
        {code}
    </SyntaxHighlighter>

}

export default SyntaxViewer