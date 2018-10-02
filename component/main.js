
var app;
document.addEventListener("DOMContentLoaded", () => {

    Vue.component('message-component', {
        template: '<div><input type="text" v-model="message.model"></input><p>{{ previewMessage() }}</p></div>',
        data: function() {
            return {
                message: {
                    init: 'Hello Vue.js',
                    model: ''
                }
            }
        },
        methods: {
            previewMessage: function() {
                return this.message.model === '' ? this.message.init : this.message.model
            }
        }
    })

    app = new Vue({
        el: "#app"
    })
})
