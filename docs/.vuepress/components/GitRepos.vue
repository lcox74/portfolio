<template>
    <div class="git-repos-table">
        <h1>Projects</h1>
        <table>
            <thead>
                <tr>
                    <th>Repo</th>
                    <th>Description</th>
                    <th>Language</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="repo in repos" :key="repo.id">
                    <td><a :href="repo.html_url">{{repo.name}} {{(repo.fork) ? "[Forked]" : ""}}</a></td>
                    <td>{{repo.description}}</td>
                    <td>{{repo.language}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
const axios = require('axios')

export default {
    data() {
        return {
            repos: []
        }
    },
    beforeMount() {
        axios.get('https://api.github.com/users/lcox74/repos?sort=updated')
            .then(res => {this.$data.repos = res.data})
            .catch(err => {console.log("Here: " + err)});
    }
}
</script>

<style scoped>
    .git-repos-table {
        width: 90%;
        margin-left: 5%;
        margin-right: 0;
    }


</style>