
var app;
document.addEventListener("DOMContentLoaded", () => {
    app = new Vue({
        el: "#app",
        data: {
            list: [],
            current: '',
            topics: [
                { value: 'vue', name: 'Vue.js' },
                { value: 'jQuery', name: 'jQuery' }
            ]
        },
        watch: {
            current: function(val) {
                // GitHubのトピックのリポジトリを検索
                axios.get('https://api.github.com/search/repositories', {
                    params: { q: 'topic:' + val }
                }).then(function(res) {
                    this.list = res.data.items
                }.bind(this))
            }
        }
    })
})
