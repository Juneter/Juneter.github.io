<template>
    <div class="app-content">
        <div class="nav-top">
            <router-link to="/music">音乐</router-link>
            <router-link to="/One">聆听</router-link>
        </div>
        <transition>
            <router-view></router-view>
        </transition>
        <div class="musicPlayBox">
            <audio @error="errMsg" @ended="nextPlay" ref="audioObj" :src="$store.state.audio.src" id="musicObj" autoplay></audio>
            <div
                class="musicPic"
                :class="{ musicPicRun: $store.state.playing }"
            >
                <img :src="$store.state.audio.pic" alt="" />
            </div>
            <div class="musicInfo">
                <p class="musicTitle">{{ $store.state.audio.name }}</p>
                <p class="singer">{{ $store.state.audio.singer }}</p>
            </div>
            <div class="control">
                <i class="icon-prev" @click="prevPlay"></i>
                <i
                    :class="$store.state.playing ? 'icon-puase' : 'icon-play'"
                    @click="togglePlay"
                ></i>
                <i class="icon-next" @click="nextPlay"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
    data() {
        return {};
    },
    created () {
        this.getMusicList();
    },
    mounted() {
    },
    methods: {
        getMusicList() {
            this.$store.dispatch('getMusicList');
        },
        togglePlay() {
            if (this.$store.state.playing) {
                document.getElementById('musicObj').pause();
                this.$store.commit('pause');
            } else {
                document.getElementById('musicObj').play();
                this.$store.commit('Playing');
            }
        },
        prevPlay() {
            this.$store.commit('prevPlay');
            this.$store.commit('Playing');
        },
        nextPlay() {
            this.$store.commit('nextPlay');
            this.$store.commit('Playing');
        },
        errMsg() {
            if (!document.getElementById('musicObj').currentSrc) {
                return;
            }
            Toast({
                message: '歌曲加载失败,请尝试播放其他歌曲。',
                duration: '1000'
            });
            this.$store.commit('pause');
        }
    }
};
</script>

<style lang="less">
@font-face {
    font-family: "icomoon";
    src: url("../src/fonts/icomoon.eot?n79j95");
    src: url("../src/fonts/icomoon.eot?n79j95#iefix")
            format("embedded-opentype"),
        url("../src/fonts/icomoon.ttf?n79j95") format("truetype"),
        url("../src/fonts/icomoon.woff?n79j95") format("woff"),
        url("../src/fonts/icomoon.svg?n79j95#icomoon") format("svg");
    font-weight: normal;
    font-style: normal;
}

[class^="icon-"],
[class*=" icon-"] {
    font-family: "icomoon" !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.app-content {
    padding-top: 45px;
    padding-bottom: 45px;
    overflow-x: hidden;
    .nav-top {
        border-top: 1px solid #818181;
        height: 45px;
        width: 100%;
        text-align: center;
        padding: 0 50px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 1;
        webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.85);
        font-size: 14px;
        box-shadow: 0px -18px 50px 0px rgb(22, 22, 22);
        background-color: #c62f2f;
        box-sizing: border-box;
        a {
            color: rgb(255, 255, 255);
        }
        .router-link-exact-active {
            font-size: 20px;
            font-weight: bold;
            color: rgb(255, 255, 255);
        }
    }
    .musicPlayBox {
        height: 45px;
        width: 100%;
        position: fixed;
        bottom: 0;
        z-index: 1;
        background-color: #f5f3f3;
        border-top: 1px solid #57555560;
        display: flex;
        justify-content: space-between;
        padding: 0 20px;
        box-sizing: border-box;
        box-shadow: 0px 18px 30px 1px rgb(90, 90, 90);
        align-items: center;
        .musicPic {
            animation: rotate-animation 10s infinite linear;
            width: 35px;
            border-radius: 50%;
            overflow: hidden;
            animation-play-state: paused;
            -webkit-animation-play-state: paused;
        }
        .musicPicRun {
            animation-play-state: running;
            -webkit-animation-play-state: running;
        }
        @keyframes rotate-animation {
            0% {
                transform: rotate(0deg);
            }
            50% {
                transform: rotate(180deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
        .musicInfo {
            text-align: center;
            .musicTitle {
                font-size: 12px;
                color: #252222;
            }
            .singer {
                font-size: 8px;
                color: #797878;
            }
        }
        .control {
            align-items: center;
            display: flex;
        }
        i {
            color: #616060;
            margin: 5px;
            font-size: 17px;
        }
        .icon-play::before {
            content: "\e62d";
            font-size: 30px;
        }
        .icon-puase::before {
            content: "\e62c";
            font-size: 30px;
        }
        .icon-next::before {
            content: "\e7ff";
            font-size: 20px;
        }
        .icon-prev::before {
            content: "\e800";
            font-size: 20px;
        }
    }
}
.v-enter {
    opacity: 0;
    transform: translateX(100%);
}
.v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
}
.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}
</style>


