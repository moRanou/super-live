<template>
    <div class="player_web">
        <com_title title_name="超然美二代"></com_title>
        <div class="player_con">
            <item v-for="(item,index) in team_data" :key="index" 
                    :tutor_name = "item.tutor_name"
                    :team_img="item.tutor_img" :team_name="item.tutor_name" 
                    :team_mem = "item.members"
                    :team_mani="item.watchword">
            </item>
            <!-- <item :team_img="img_base_url+'/team_img.png'"></item>
            <item :team_img="img_base_url+'/team_img.png'"></item>
            <item :team_img="img_base_url+'/team_img.png'"></item>
            <item :team_img="img_base_url+'/team_img.png'"></item> -->
        </div>
        <div class="endnote">
            <span>Copyright&nbsp;©&nbsp;2018&nbsp;美服网.&nbsp;All&nbsp;Rights&nbsp;Reserved.</span>
        </div>
    </div>
</template>

<script>
import common from "@/common/js/common.js";
import com_title from "@/components/title/title";
import item from "@/components/player/item";
import axios from "axios";
export default {
    components : {
        com_title,
        item,
    },
    data () {
        return{
            img_base_url : common.img_base_url,
            team_data : []
        }
    },
    created () {
        this._get_team_info();
        common.title_change("战队阵容");
    },
    mounted () {
        
    },
    methods : {
        more_touch(){
            var more_btn = document.querySelectorAll(".more_wrap .btn_wrap");
            var player_list = document.querySelectorAll(".player_list");
            // console.log(more_btn);
            // console.log(player_list);
            for(let i = 0;i < more_btn.length;i ++){
                more_btn[i].addEventListener("touchend",()=>{
                    // console.log(player_list[i]);
                    if(player_list[i].classList.contains("more_active")){
                        player_list[i].classList.remove("more_active");
                        more_btn[i].parentNode.classList.remove("more_margin");
                        more_btn[i].children[0].innerHTML = "展开";
                        more_btn[i].children[1].classList.remove("arrow_rotate");
                    }else if(player_list[i].children.length > 8){
                        player_list[i].classList.add("more_active");
                        more_btn[i].parentNode.classList.add("more_margin");
                        more_btn[i].children[0].innerHTML = "收起";
                        more_btn[i].children[1].classList.add("arrow_rotate");
                    }
                })
            }
        },
        _get_team_info(){
            axios.post(common.team_info)
            .then(res=>{
                // console.log(res);
                this.team_data = res.data.data;
                // setTimeout(this.more_touch,500);
            }).then(()=>{
                this.more_touch();
                this._mentor_push();
            })
        },
        _mentor_push(){
            var team_img = document.querySelectorAll(".team_img");
            // console.log(team_img);
            team_img.forEach(el=>{
                // console.log(this.team_data)
                this.team_data.forEach(ele=>{
                    if(el.attributes[0].value == ele.tutor_name){
                        el.addEventListener("click",()=>{
                            this.$router.push({path:"/mentor/"+ele.tutor_id})
                        })
                    }
                })
            })
        }
    }
}
</script>

<style lang="scss">
@import "~@/common/scss/common.scss";
.player_web{
    @include web_reset;
    .player_con{
        padding: 0 r(24px);
        @include web_next;
        background: url(#{$img_base_url}/player_bg.jpg);
        background-repeat: no-repeat;
        .play_item:nth-child(even){
            .team_img{
                border-color: $team_color02;
                box-shadow: 0 0 r(18px) 0 $team_color02;
            }
            .name_wrap{
                color: $team_color02;
            }
            .team_mani{
                color: $team_text02;
                border-color: $team_text02;
                .arrow .one{
                    border-bottom-color: $team_text02;
                }
            }
        }
    }
    .endnote{
        padding: r(36px) 0;
        text-align: center;
        font-size: r(18px);
        color: #534c63;
    }
}
</style>
