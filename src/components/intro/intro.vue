<template>
    <div class="intro_web">
        <com_title></com_title>
        <div class="content_wrap">
            <div class="text_wrap">
                <span>【我最闪耀】美业接班人论坛暨美二代领袖大赛是
【钱浅弟子班】为美容行业的优秀接班人提供一个展现领导力、影响力以及绽放自我的舞台。通过这个比赛树立行业正能量，让更多的美二代领袖崭露头角，形成更好的先锋示范带头作用，推动美业持续健康积极发展。</span>
            </div>
            <div class="text_wrap">
                <span>美二代同时也是创二代，集结了企业的优秀接班人，职业经理人以及美一代的继承者们。他们都有着共同的目标，为企业的未来发展，为家族的繁荣兴旺而拼搏、奋斗</span>
            </div>
            <div class="text_wrap">
                <span>美业教父钱浅老师言传身教，结合二十载的从业经验全力倾注在美二代接班人的教育之上，秉承着大美业接班人成功事业传承的使命，钱浅老师开设了【钱浅弟子班】</span>
                <div class="img_wrap"><img :src="img_base_url+'/intro01.jpg'"></div>
                <span>【钱浅弟子班】是针对美业创二代开设的事业接班人最高级定制进修班，来求学的都是未来顶尖企业的接班人或总裁，是美业未来的新血液和希望！“古之学者必有师，师者，所以传道授业解惑也”。未来的行业发展不能固步自封，墨守成规，弟子班学员都希望在钱浅老师身上能学到新的思维方式与创新模式，未来带领自己的家族企业持续成长与超越。</span>
            </div>
            <div class="img_wrap"><img :src="img_base_url+'/intro02.jpg'"></div>
            <div class="text_wrap">
                <span>【钱浅弟子班】是中国美业含金量最高的课堂。一方面帮助美二代学会构建立体思维与打造超级领导力，另一方面让美二代在【我最闪耀】领袖大赛中，挥洒青春和智慧，尽情展现领袖风采。美二代领袖大赛的初衷是希望弘扬美业精神，让美业精神得以传承。</span>
            </div>
            <div class="img_wrap"><img :src="img_base_url+'/intro03.jpg'"></div>
            <div class="text_wrap">
                <span>首届【我最闪耀】美二代领袖大赛在短短15天时间里获得超百万的投票数，近80万的直播关注，顿时撬动了整个美业。比赛当天，迎来了1200位美业人在这里齐聚，只为一睹领袖风采。40位世家学子斗智斗勇、唇枪舌战、摩拳擦掌、浑身解数，只为美业未来传承而战。
美业精神，让美业精神得以传承。</span>
            </div>
            <div class="text_wrap">
                <span>今年的【我最闪耀】美业接班人论坛暨美二代领袖大赛即将在羊城闪耀开启！</span>
            </div>
            <div class="img_wrap s_m"><img :src="img_base_url+'/start_mentor.jpg'"></div>
            <div class="text_wrap last">
                <span>为了释放骄阳般的青春活力！</span>
                <span>为了我们最初的梦想！</span>
                <span>为了美业的新时代！</span>
                <span>风云再起，英雄辈出，少年强则国强，少年兴则行业兴！</span>
                <span>阵容强大升级，战况一触即发，你不容错过！</span>
            </div>
            <div class="img_wrap"><img :src="img_base_url+'/intro04.jpg'"></div>
        </div>
    </div>
</template>

<script>
import common from "@/common/js/common";
import com_title from "@/components/title/title";
export default {
    components : {
        com_title,
    },
    created () {
        common.title_change("活动简介");
    },
    data () {
        return {
            img_base_url : common.img_base_url
        }
    }
}
</script>

<style lang="scss">
@import "~@/common/scss/common.scss";
.intro_web{
    @include web_reset;
    .title{
        background-color: rgba($color: #87608f, $alpha: 0.5);
    }
    .content_wrap{
        @include web_next;
        background: url(#{$img_base_url}/bg04.jpg);
        background-size: 100%;
        background-repeat: no-repeat;
        padding: r(426px) r(40px) r(36px);
        .text_wrap{
            font-size: r(26px);
            line-height: r(48px);
            text-indent: 2em;
            color: #af97d5;
        }
        .img_wrap{
            width: 100%;
            overflow: hidden;
            margin: r(20px) 0;
            img{
                width: 100%;
                display: block;
            }
        }
        .s_m{
            margin-bottom: r(32px);
        }
        .last{
            text-indent: 0;
            margin-bottom: r(30px);
            span{
                display: block;
            }
        }
    }
}
</style>
