
var app;
document.addEventListener("DOMContentLoaded", () => {

    Vue.component('message-component', {
        template: '<div><input type="text" v-model="message.model"></input><p>{{ previewMessage() }}</p></div>',
        data: function() {
            return {
                message: {
                    model: ''
                }
            }
        },
        props: ['message.init'],
        methods: {
            previewMessage: function() {
                return this.message.model === '' ? this.message.init : this.message.model
            }
        }
    })

    Vue.component('parent-component', {
        template: '<message-component></message-component>',
        data: function() {
            return {
                message: {
                    init: 'Hello Vue.js!!'
                }
            }
        }
    })

    app = new Vue({
        el: "#app"
    })
})
