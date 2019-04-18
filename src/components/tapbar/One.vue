<template>
    <div class="OneBox">
        <div class="OneWord">
            <h3>{{ OneWord }}</h3>
            <span>------{{ OneWordFrom }}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            OneWord: "",
            OneWordFrom: "",
            OneWordFlag: false
        };
    },
    created() {
        this.getOneWord();
    },
    methods: {
        getOneWord() {
            this.axios.get("https://v1.hitokoto.cn").then(response => {
                this.OneWord = response.data.hitokoto;
                this.OneWordFrom = response.data.from;
                if (this.OneWordFlag == false) {
                    setInterval(() => {
                        this.getOneWord();
                    }, 5000);
                    this.OneWordFlag = true;
                }
            });
        }
    }
};
</script>

<style lang="less" scoped>
.OneBox {
    min-height: 550px;
    background: url(../../images/oneBackground.jpg) no-repeat 100% fixed;
    background-size: cover;
    .OneWord {
        text-align: center;
        padding: 30% 20px 0 20px;
        opacity: 0.7;
        color: rgb(238, 232, 232);
        h3 {
            margin: 0;
        }
    }
}
</style>
