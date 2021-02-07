<template>
    <div>
        <router-link class="blog-link" v-for="blog in blogs" :to="blog.path">
            <div class="blog-card">
                <h2>{{ blog.title }}</h2>
                <p>{{ blog.frontmatter.description }}</p>
                <div class="tag-holder">
                    <div v-for="tag in blog.frontmatter.tags">
                        <p>{{ tag }}</p>
                    </div>
                </div>
            </div>
        </router-link>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            blogs: []
        }
    },
    mounted() {
        this.$site.pages.forEach(blog => {
            if (blog.frontmatter.type === 'blog') {
                this.$data.blogs.push(blog);
            }
        })
    }
}
</script>

<style scoped>
    .blog-link {
        text-decoration: none;
    }
    .blog-link:hover {
        text-decoration: none !important;
        
    }

    .blog-card {
        color: #2c3e50;
        text-decoration: none;
        padding: 5px;
    }

    .blog-card:hover {
        color: #2c3e50;
        text-decoration: none;
        background-color: #F0F0F0;
    }

    .blog-card h2 {
        border: none;
        margin-top: 5px;
        margin-bottom: 5px;
        text-decoration: none;
    }

    .blog-card p {
        margin: 0px;
        text-decoration: none;
    }

    .tag-holder {
        display: flex;
    }

    .tag-holder p {
        color: #EEE;
        margin: 5px 10px;
        background-color: #1abc9c;
        padding: 2px 10px;
        border-radius: 25px;
    }
    .tag-holder p:first-child {
        margin-left: 0px;
    }

</style>