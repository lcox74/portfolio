<template>
    <div class="split-box">
        <div class="home-avatar">
            <img class="avatar" src="../../avatar.jpg">
        </div>
        <div class="home-content">
            <h1>I'm a Student Computer Scientist</h1>
            <p>As an computer scientist, I apply critical thinking to develop solutions with high quality modular code.</p>
        </div>
    </div>
</template>

<style scoped>

    .split-box {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        margin-left: auto;
        margin-right: auto;

        margin-top: 9rem !important;
        flex-wrap: wrap;

    }

    .home-content {
        width: 100%;
        text-align: center;
    }

    @media (min-width:800px) {
        .split-box {
            flex-wrap: nowrap;
        }

        .home-content {
            text-align: left;
        }
    }

    .avatar {
        display: block;

        width: 25%;
        height: 25%;
        max-width: 400px !important;
        max-height: 400px;
        min-width: 200px;
        min-height: 200px;

        overflow: hidden;

        align-items: center;
        justify-content: center;

        margin-left: auto;
        margin-right: auto;

        flex-shrink: 0;
        
        line-height: 0;
        border-radius: 50%;

        box-shadow: 0px 2px 10px #888;
    }

    

    .home-avatar {
        align-items: center;
        justify-content: center;
    }
</style>