import React, { Fragment } from "react";
import styled, { injectGlobal } from "styled-components";

import Auth from "components/Auth";
import Layout from "styles/layout";

injectGlobal`
* {  padding: 0; margin: 0; min-width: 0; }
body { font: 14px/1.4 sans-serif; color: #666;}

a {
    color: inherit;
    text-decoration: none;
}

input,
textarea {
    font-family: inherit;
}

button {
    background: none;
    border: 0 none;
    cursor: pointer;
    color: inherit;
}

*:focus,
*:active {
    outline: none;
}

header {
    color: #fff;
}

img {
    vertical-align: top;
    max-width: 100%;
}

ol,
ul,
li {
    list-style: none;
}

em,
strong,
dfn {
    font-style: normal;
    font-weight: 700;
}

fieldset,
img {
    border: 0 none;
}

.ButtonWrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.wrap {
    width: 1000px;
    margin: 0 auto;
}
.alignCenter {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

@keyframes hue {
    from {
        -webkit-filter: hue-rotate(0deg);
    }
    to {
        -webkit-filter: hue-rotate(-360deg);
    }
}
`;

const App = props => {
  //사용되는 props정의

  return <Layout />;
};

export default App;
