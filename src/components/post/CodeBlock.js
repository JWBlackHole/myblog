// import React, { useState, useEffect } from 'react';


import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { coy } from "react-syntax-highlighter/dist/styles/prism";
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


function CodeBlock({ node, inline, className, children, ...props }) {
    const hasLang = /language-(\w+)/.exec(className || "");
    const language = hasLang?hasLang[1]:'';
    // console.log(hasLang);

    return (
        <SyntaxHighlighter wrapLines={true} showLineNumbers={true} language={language} style={atomDark}>
            {children}
        </SyntaxHighlighter>
    );
}

export default CodeBlock;
