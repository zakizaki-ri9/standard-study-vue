
// #appがDOMとして読み込み完了したらVueインスタンスを生成するため、
// "DOMContentLoaded"のイベントを待つ
var app;
document.addEventListener("DOMContentLoaded", () => {
    app = new Vue({
        el: "#app",
        data: {
            message: "Hello Vue.js !!",
            list: ["apple", "orange", "grape"],
            show: true,
            text2: {
                type: "textbox",
                value: "sample"
            }
        },
        methods: {
            addItemClick: function() {
                this.list.push("newItem" + (this.list.length + 1))
            },
            switchItemClick: function(index) {
                this.$set(this.list, index, this.list[index] === "apple" ? "melon" : "apple")
            }
        }
    })
})
