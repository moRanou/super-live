<template>
    <div class="ad_web">
        <com_title></com_title>
        <div class="content_wrap">
            <div class="ad_img">
                <img v-for="(item,index) in ad_data" :key="index" :src="item">
            </div>
            <div class="form_wrap">
                <div class="title_wrap">
                    <div class="left_wrap">
                        <span>联系我们：</span>
                        <span>4008-591-123</span>
                    </div>
                    <div class="right_wrap">
                        <img :src="img_base_url+'/phone.png'">
                    </div>
                </div>
                <form id="form_data">
                    <div class="form_title"><span>-&nbsp;咨询留言&nbsp;-</span></div>
                    <label>
                        <span>姓名</span>
                        <input type="text" name="name" v-model="form_data.name" placeholder="请输入您的名字">
                    </label>
                    <label>
                        <span>电话</span>
                        <input type="text" name="phone" v-model="form_data.phone" placeholder="请输入您的手机号码">
                    </label>
                    <label>
                        <span>公司</span>
                        <input type="text" name="ent" v-model="form_data.ent" placeholder="请留下您的联系地址">
                    </label>
                    <input type="submit" value="提交">
                </form>
            </div>
        </div>
        <div class="success_post">
            <span>提交成功</span>
        </div>
    </div>
</template>

<script>
import common from "@/common/js/common";
import com_title from "@/components/title/title";
import axios from "axios";
export default {
    name: "ad",
    components : {
        com_title,
    },
    created () {
        this.form_data.cr_img_id = this.$route.params.id;
        this._get_data();
        common.title_change("广告洽谈");
    },
    mounted () {
        this.test();
    },
    data () {
        return {
            ad_action : common.ad_action,
            img_base_url : common.img_base_url,
            form_data : {
                cr_img_id : 3
            },
            ad_data : []
        }
    },
    methods : {
        _get_data () {
            axios.post(common.ad_data,{
                id : this.form_data.cr_img_id
            }).then(res=>{
                // console.log(res);
                this.ad_data = res.data.data.desc_img;
            })
        },
        test(){
            form_data.addEventListener("submit",e=>{
                e.preventDefault();
                // console.log(this.form_data);
                this.submit_fn();
            })
        },
        submit_fn(){
            axios.post(common.ad_action,this.form_data)
            .then(res=>{
                // console.log(res);
                var success_post = document.querySelector(".success_post");
                if(res.data.status && res.data.status == 1){
                    var input = document.querySelectorAll("input");
                    success_post.classList.add("success");
                    input.forEach((el,index)=>{
                        if(index != 3){
                            el.value = "";
                        }
                    })
                    this.form_data = {cr_img_id : 3}
                    setTimeout(function(){
                        success_post.classList.remove("success");
                    },2000)
                }else{
                    success_post.innerText = res.data.info;
                    success_post.classList.add("success");
                    setTimeout(function(){
                        success_post.classList.remove("success");
                    },2000)
                    setTimeout(()=>{
                        success_post.innerText = "提交成功";
                    },3000)
                }
            })
        }
    }
}
</script>

<style lang="scss">
@import "~@/common/scss/common.scss";
.ad_web{
    @include web_reset;
    .content_wrap{
        @include web_next;
        padding-top: 0;
        .ad_img{
            width: 100%;
            min-height: r(500px);
            margin-bottom: r(60px);
            img{
                width: 100%;
                display: block;
            }
        }
        .form_wrap{
            width: 100%;
            .title_wrap{
                margin: 0 auto;
                padding: r(40px) r(30px);
                display: flex;
                width: 84.2%;
                justify-content: space-between;
                align-content: center;
                background-color: #17093e;
                margin-bottom: r(62px);
                .left_wrap{
                    span{
                        display: block;
                        &:first-child{
                            color: #8f82bc;
                            font-size: r(24px);
                            line-height: r(30px);
                        }
                        &:last-child{
                            color: #00ffff;
                            font-size: r(40px);
                            line-height: r(48px);
                        }
                    }
                }
                .right_wrap{
                    width: r(90px);
                    height: r(72px);
                    overflow: hidden;
                    img{
                        display: block;
                        width: 100%;
                    }
                }
            }
            form{
                width: 84.2%;
                margin: 0 auto;
                padding-bottom: r(20px);
                .form_title{
                    text-align: center;
                    margin-bottom: r(40px);
                    color: $item_title_color;
                    font-size: r(36px);
                }
                label{
                    display: block;
                    margin-bottom: r(40px);
                    span{
                        font-size: r(26px);
                        color: #8f7ea1;
                    }
                    span,input{
                        display: block;
                    }
                    input{
                        width: 100%;
                        font-size: r(30px);
                        line-height: r(70px);
                        color: $item_title_color;
                        border-bottom: 1px solid #897a99;
                        &:-moz-placeholder{
                            color: #453e5d;
                        }
                        &:-ms-input-placeholder{
                            color: #453e5d;
                        }
                        &::-moz-placeholder{
                            color: #453e5d;
                        }
                        &::-webkit-input-placeholder{
                            color: #453e5d;
                        }
                    }
                }
                input[type="submit"]{
                    display: block;
                    width: 100%;
                    height: r(88px);
                    line-height: r(88px);
                    text-align: center;
                    font-size: r(34px);
                    color: #0b0d3d;
                    background-color: #00ffff;
                }
            }
        }
    }
    .success_post{
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        width: r(200px);
        height: r(100px);
        line-height: r(100px);
        background-color: #00ffff;
        color: #0b0d3d;
        font-size: r(24px);
        text-align: center;
        opacity: 0;
        transition: all .5s;
    }
    .success{
        opacity: 1;
    }
}
</style>
