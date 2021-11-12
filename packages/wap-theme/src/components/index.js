// File: /packages/my-first-theme/src/components/index.js

import React from "react"
import { connect, Global, css, styled } from "frontity"
import Link from "@frontity/components/link"
import Switch from "@frontity/components/switch"
import List from "./list"
import Page from "./page"
import Post from "./post"

const Root = ({ state }) => {
    const data = state.source.get(state.router.link)

    return (
        <>
        <Global styles={css`
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            html {
                font-family: system-ui, Verdana, Arial, sans-serif;
                font-size:16px;
                line-height:1.5;
            }
            main {
                text-align:left;
            }
            main > .container {
                max-width:1200px;
                width:80%;
                margin:0 auto;
            }
            h1,h2,h3,h4 {
                line-height:1.7;
            }
            .cols {
                display:flex;
                margin:0 -1.5rem;
            }
            .cols > [class^='col'] {
                padding:1.5rem;
            }
            .col4 {
                width:33.33%
            }
            .col6 {
                width:50%
            }
            .col8 {
                width:66.66%
            }
            .col12 {
                width:100%
            }
        `} />
        <Header>
            <div className="logo">WAP Frontity</div>
            <p>Current URL: {state.router.link}</p>
            <nav>
                <ul>
                    <li><Link link="/">Home</Link></li>
                    <li><Link link="/about/">About</Link></li>
                    <li><Link link="/blog/">Blog</Link></li>
                </ul>
            </nav>
        </Header>
        <main>
            <Switch>
            <List when={data.isArchive} />
            <Post when={data.isPost} />
            <Page when={data.isPage} />
            <Page when={data.isHome} />
            </Switch>
        </main>
        </>
    )
}

export default connect(Root)

const Header = styled.header`
    background-color: #e5edee;
    padding:25px;
    margin:0 0 25px;
`