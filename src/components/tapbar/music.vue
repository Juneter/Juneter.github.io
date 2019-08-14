<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src="../../images/iu.jpg" alt />
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../images/iu11.jpg" alt />
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../../images/iu22.jpg" alt />
            </mt-swipe-item>
        </mt-swipe>
        <div class="musicListBox">
            <ul class="musicList">
                <li v-for="item in $store.state.musicList" :key="item.id" @click="play(item)" :class="item.src == $store.state.audio.src ? 'playing': ''">
                    <span class="musicName"> {{ item.name }}</span>-----
                    <span class="singer">{{ item.artists[0].name }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    created() {
    },
    mounted(){
    },
    methods:{
        play(music){
            if(music.src == document.getElementById('musicObj').src){
                return
            }
            document.getElementById('musicObj').pause()
            this.$store.commit('pause')
            this.$store.commit('getSong',music);
            document.getElementById('musicObj').play()
            this.$store.commit('Playing')
            console.log(music)
        }
    }
};
</script>

<style lang="less" scoped>
@import '../../style/font.css';

@media screen and (min-width: 320px) {
    .mint-swipe {
        height: 170px;
    }
}
@media screen and (min-width: 600px) {
    .mint-swipe {
        height: 300px;
    }
}
@media screen and (min-width: 900px) {
    .mint-swipe {
        height: 500px;
    }
}

.mint-swipe {
    padding: 0 10px;
    img {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
    }
}

.musicPlayBox {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(206, 202, 202);
    // background-color: #999;
    .musicPic {
        width: 10%;
        border-radius: 50%;
        img {
            width: 100%;
        }
    }
    .musicInfo {
        display: flex;
        justify-content: center;
        text-align: center;
        flex-direction: column;
        p {
            margin: 0;
        }
    }
}
.musicListBox {
    ul {
        list-style: none;
        cursor: pointer;
        li {
            font-size: 12px;
            padding-left: 20px;
            height: 32px;
            line-height: 32px;
            border-bottom: 1px solid #e9e9e9;
            display: flex;
            justify-content: flex-start;
            white-space: nowrap;
            overflow: hidden;
            align-items: center;
            .musicName {
                color: #333;
            }
            .singer {
                font-size: 8px;
                color: #666;
            }
        }
        .playing {
            font-size: 13px;
            padding-left: 30px;
            font-weight: bold;
            color: #dd5353;
            .musicName,.singer{
                color: #dd5353;
            }
        }
    }
}
</style>


