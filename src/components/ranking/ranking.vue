<template>
    <div class="ranking_web">
        <com_title title_name="超然美二代"></com_title>
        <div class="content_wrap">
            <div class="ranking_con">
                <div class="btn_wrap">
                    <span class="btn btn_active ">战队排行</span>
                    <span class="btn">个人排行</span>
                </div>
                <div class="team_wrap active">
                    <team_item v-for="(item,index) in team_rank" :key="index"
                            :team_name="item.name" 
                            :border_img="img_base_url+'/no'+(index+1)+'.png'" 
                            :ordinal_img="img_base_url+'/no'+(index+1)+'.jpg'" 
                            :team_img="item.filepath">
                    </team_item>
                </div>
                <div class="personal_wrap">
                    <per_item v-for="(item,index) in mem_rank" :key="index"
                            :per_name="item.name" 
                            :poll="item.point" 
                            :sort_num="_add0(index+1)" 
                            :on_off="on_off"
                            :head_img="item.filepath">
                    </per_item>
                    <div class="load_more">
                        <span><i class="iconfont icon-fresh-4"></i>&nbsp;加载更多</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import common from "@/common/js/common.js";
import com_title from "@/components/title/title";
import team_item from "@/components/index/team_item";
import per_item from "@/components/index/per_item";
import more from "@/components/index/more";
import axios from "axios";
let page = 1;
export default {
    components : {
        com_title,
        team_item,
        per_item,
    },
    created () {
        this._get_ranking();
    },
    mounted () {
        this._btn_touch();
        this._get_more();
    },
    data () {
        return{
            img_base_url : common.img_base_url,
            rank_arr : [],
            team_rank : [],
            mem_rank : [],
            more_icon : "",
            on_off : "off",
        }
    },
    methods : {
        _btn_touch(){
            var btn = document.querySelectorAll(".btn");
            var team_wrap = document.querySelector(".team_wrap");
            var personal_wrap = document.querySelector(".personal_wrap");
            btn.forEach((el,index)=>{
                // console.log(el)
                el.addEventListener("touchstart",()=>{
                btn.forEach(el=>{
                    el.classList.remove("btn_active");
                    team_wrap.classList.remove("active");
                    personal_wrap.classList.remove("active");
                })
                el.classList.add("btn_active");
                if(index === 0){
                    team_wrap.classList.add("active");
                }
                if(index === 1){
                    personal_wrap.classList.add("active");
                }
                })
            })
        },
        _get_ranking(){
            axios.post(common.ranking)
            .then(res=>{
                // console.log(res);
                this.team_rank = res.data.data.team_rank;
                this.mem_rank = res.data.data.mem_rank;
            }).then(()=>{
                common.num_chagne(this.mem_rank);
                this.mem_rank.forEach(el=>{
                    // console.log(el);
                    if(el.point == 0){
                        return;
                    }else{
                        this.on_off = "on";
                    }
                })
            })
        },
        _add0(index){
            // index++;
            if(index < 10){
                return '0'+index;
            }else{
                return index;
            }
        },
        _add_data () {
            page ++;
            axios.post(common.more_ranking,{
                ispaging : 1,
                page : page
            }).then(res=>{
                // console.log(res.data.data);
                res.data.data.info.forEach(el=>{
                    this.mem_rank.push(el);
                })
                // console.log(this.mem_rank);
                this.more_icon.classList.remove("rotate");
            })
        },
        _get_more () {
            let more_wrap = document.querySelector(".load_more span");
            this.more_icon = document.querySelector(".load_more i");
            more_wrap.addEventListener("click",()=>{
                this.more_icon.classList.add("rotate");
                this._add_data();
            })
        }
    }
}
</script>

<style lang="scss">
@import "~@/common/scss/common.scss";
.ranking_web{
    @include web_reset;
    .content_wrap{
        @include web_next;
        padding-top: r(50px);
        .ranking_con{
            width: 100%;
            padding: 0 r(40px);
            .btn_wrap{
                width: 100%;
                border: 1px solid #fff;
                border-radius: r(5px);
                font-size: 0;
                margin-bottom: r(40px);
                .btn{
                    display: inline-block;
                    width: 50%;
                    text-align: center;
                    line-height: r(80px);
                    color: #461d7d;
                    font-size: r(30px);
                }
                .btn_active{
                    background-color: #fff;
                    color: #df29ae;
                }
            }
            .team_wrap,.personal_wrap{
            display: none;
            }
            .personal_wrap{
                @include get_more;
            }
            .team_wrap{
            width: 100%; 
            }
            .active{
            display: block;
            }
        }
        .test_btn{
            height: r(30px);
            background-color: #fff;
        }
        
    }
}

</style>
