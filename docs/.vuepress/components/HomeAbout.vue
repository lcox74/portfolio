<template>
    <div class="about-me">
        <div class="about-me-text">
            <h4>About Me</h4>
            <p>
                I enjoy learning new systems and concepts, then writing my own version in my preferred languages of C and C++. Systems I've enjoyed learning so far are Game Engines, Web Servers, Graphics Libraries, Text Editors and Emulators.
                Currently I have 4 years of professional experience as a software developer, doing freelancing, full stack web development and DevOps. On the other hand, I have 10+ years of doing programming as a hobby refining my skills in the craft.
                <br>
                <br>
                My programming language of choice depends on the context of the project. Ideally I would like to do everything in C++ or C, but depending on the project I will happily write in Python, C#, Javascript or PHP. 
                <br>
                <br>
                I've redesigned my site to use VuePress which will allow me to use markdown in the site. The reason I did this is because I want to do dev blogs on my projects and I enjoy writing in markdown due to how good it looks and how fast/easy it is to write it.
                All my projects will be avaliable on github (a table of all my projects are below).
            </p>
        </div>
        <div class="about-me-flags">
            <div>
                <svg class="svg-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></svg>
                <p>Software Developer,<br>National Advice Solutions</p>
            </div>
            <div>
                <svg class="svg-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path></svg>
                <p>3rd Year,<br> Bachelor of Computer Science,<br>The University of Queensland</p>
            </div>
            <div>
                <svg class="svg-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
                <p>Gold Coast, Queensland,<br>Australia</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .svg-icon {
        display: inline-block;
        width: 1em;
        height: 1em;
        flex-shrink: 0;
        fill: currentColor;
        font-size: 1.5rem;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 400;
        line-height: 1.43;
        letter-spacing: 0.01071em;
        -moz-user-select: none;
        transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }

    .about-me {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin: 0;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
    }
    @media (min-width:800px) {
        .about-me {
            flex-wrap: nowrap;
        }
    }

    .about-me-text {
        max-width: 500px;
        margin-top: 5px;
        margin-bottom: 0px;
        font-size: 1rem;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 400;
        line-height: 1.5;
        letter-spacing: 0.00938em;
    }

    .about-me-text h4 {
        margin-bottom: 15px;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-size: 2.125rem;
        line-height: 1.235;
        letter-spacing: 0.00735em;
    }

    .about-me-flags {
        padding-top: 40px;
        padding-left: 40px;
        margin: 0;
        box-sizing: border-box;
    }

    .about-me-flags div {
        flex-wrap: nowrap;
        width: 100%;
        display: flex;
        box-sizing: border-box;
    }

    .about-me-flags div svg {
        margin: 0;
        box-sizing: border-box;
    }

    .about-me-flags div p {
        color: rgba(0, 0, 0, 0.54);
        padding-left: 25px;
        margin: 0;
        margin-bottom: 16px;
        box-sizing: border-box;
        font-size: 1rem;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 400;
        line-height: 1.5;
        letter-spacing: 0.00938em;
    }
</style>