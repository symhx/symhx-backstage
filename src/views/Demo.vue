<template>
    <div class="diy-wrap">
        <div>
            <div class="controls-left">
                <ul>
                    <li :key="item.label" v-for="(item,index) in tabType">
                        <div class="tabTitle">
                            <span>{{item.label}}</span>
                        </div>
                        <ul class="tab-item">
                            <li :ref="'ref' + ((index * 100) +idx)" draggable="true" @dragstart="dragstart($event)" @drag="drag($event)" @dragend="dragend($event)" :key="li.assign" v-for="(li,idx) in item.itemList" class="ui-draggable">
                                <a :id="li.id" href="#">
                                    <i class="iconfont" :class="li.icon"></i>
                                    <span class="field-name">{{li.label}}</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li id="backup-li" class="backup-li">{{text}}</li>
                </ul>
            </div>
            <div id="middle" class="view-middle">
                <ul ref="drop-ul-wrap" draggable="true" @dragenter="dragenter($event)" @dragover="dragover($event)" @dragleave="dragleave($event)" @drop="drop($event)">
                </ul>
                <div style="height: 20px;background: #2e73ff"></div>
<!--                <li ftype="text" class="active" style="display: none;">-->
<!--                    <a id="sl" class="btn-field field-checked" title="适用于填写简短的文字内容，身份证号、银行卡号、工号等请使用“证件号/卡号”字段。" href="#">-->
<!--                        <i class="iconfont"></i>-->
<!--                        <span class="filed-name">单行文本</span>-->
<!--                    </a>-->
<!--                </li>-->
<!--                <li ftype="text" class="ui-draggable ui-draggable-dragging" style="position: absolute; left: 0.469388px; top: 68.8325px;">-->
<!--                    <a id="sl" class="btn-field btn-field-helper" title="适用于填写简短的文字内容，身份证号、银行卡号、工号等请使用“证件号/卡号”字段。" href="#">-->
<!--                        <i class="iconfont"></i>-->
<!--                        <span class="filed-name">单行文本</span>-->
<!--                    </a>-->
<!--                </li>-->
<!--                <li ftype="textarea" class="ui-draggable ui-draggable-dragging" style="position: absolute; left: 93.3402px; top: 68.0242px;">-->
<!--                    <a id="pt" class="btn-field btn-field-helper" title="适用于填写大段文本，如“备注”、“留言”" href="#">-->
<!--                        <i class="iconfont"></i>-->
<!--                        <span class="filed-name">多行文本</span>-->
<!--                    </a>-->
<!--                </li>-->
<!--                <li ftype="number" class="ui-draggable ui-draggable-dragging" style="position: absolute; left: 177.441px; top: 71.7726px;">-->
<!--                    <a id="nb" class="btn-field btn-field-helper" title="适用于填写涉及到数学运算的数字;不适用身份证号、银行卡号、工号等。" href="#">-->
<!--                        <i class="iconfont"></i><span class="filed-name">数字</span>-->
<!--                    </a>-->
<!--                </li>-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Demo",
        data() {
            return{
                position: 0,
                showLi: false,
                text: '',
                tabType: [
                    {
                        label: '通用组件',
                        itemList: [
                            {
                                id: 'sl',
                                icon: 'icondanhangwenben',
                                label: '单行文本',
                                type: 'text',
                                code: 1
                            },
                            {
                                id: 'ml',
                                icon: 'iconwenben',
                                label: '多行文本',
                                type: 'textarea',
                                code: 2
                            },
                            {
                                id: 'nb',
                                icon: 'iconnumber',
                                label: '数字',
                                type: 'number',
                                code: 3
                            },
                            {
                                id: 'sb',
                                icon: 'iconduoxuankuangzu',
                                label: '单选框',
                                type: 'text',
                                code: 4
                            },
                            {
                                id: 'cb',
                                icon: 'iconduoxuankuang',
                                label: '多选框',
                                type: 'textarea',
                                code: 5
                            },
                            {
                                id: 'pd',
                                icon: 'iconxialakuang',
                                label: '下拉框',
                                type: 'number',
                                code: 6
                            },
                            {
                                id: 'mlpd',
                                icon: 'iconbiaodan-duoxiangxialakuang',
                                label: '多级下拉',
                                type: 'text',
                                code: 7
                            },
                            {
                                id: 'cr',
                                icon: 'iconzuhedanxuan',
                                label: '组合单选',
                                type: 'textarea',
                                code: 8
                            },
                            {
                                id: 'fu',
                                icon: 'iconwenjianshangchuan',
                                label: '文件上传',
                                type: 'number',
                                code: 9
                            },
                            {
                                id: 'rq',
                                icon: 'iconriqi',
                                label: '日期',
                                type: 'text',
                                code: 10
                            },
                            {
                                id: 'sj',
                                icon: 'iconshijian',
                                label: '时间',
                                type: 'textarea',
                                code: 11
                            },
                            {
                                id: 'pf',
                                icon: 'iconpingfen2x',
                                label: '评分',
                                type: 'number',
                                code: 12
                            },
                            {
                                id: 'bt',
                                icon: 'iconanniu',
                                label: '按钮',
                                type: 'text',
                                code: 13
                            },
                            {
                                id: 'im',
                                icon: 'icontupian',
                                label: '图片展示',
                                type: 'textarea',
                                code: 14
                            },
                            {
                                id: 'vd',
                                icon: 'iconshipin',
                                label: '视频展示',
                                type: 'number',
                                code: 15
                            },
                            {
                                id: 'vi',
                                icon: 'iconyinpin',
                                label: '音频展示',
                                type: 'text',
                                code: 16
                            },
                            {
                                id: 'td',
                                icon: 'iconmiaoshu',
                                label: '文字描述',
                                type: 'textarea',
                                code: 17
                            },
                            {
                                id: 'pb',
                                icon: 'iconfenye',
                                label: '分页符',
                                type: 'number',
                                code: 18
                            },
                        ]
                    },
                    // {label: '选择组件', itemList: [{label: '单选', type: 'radio', code: 1}]},
                    // {label: '填空题', itemList: [{label: '单选', type: 'radio', code: 1}]},
                    // {label: '分页说明', itemList: [{label: '单选', type: 'radio', code: 1}]},
                    // {label: '矩阵题', itemList: [{label: '单选', type: 'radio', code: 1}]},
                    // {label: '评分题', itemList: [{label: '单选', type: 'radio', code: 1}]},
                    // {label: '高级题型', itemList: [{label: '单选', type: 'radio', code: 1}]}
                ]
            }
        },
        mounted() {
            this.position = this.$refs['drop-ul-wrap'].clientTop + this.$refs['drop-ul-wrap'].clientHeight * 2 + 8;
            console.log(this.position)
        },
        created() {
        },
        methods: {
            // 拖拽开始
            dragstart(e) {
                document.getElementById(e.target.id).parentElement.classList.add('active');
                // console.log(e.screenX);
                // console.log(e.screenY);
                // console.log(e.clientX);
                // console.log(e.clientY);
                // console.log(e.pageX);
                // console.log(e.pageY);
                // console.log(this.$refs[e.target.id][0]);
                e.dataTransfer.setData("id", e.target.id);
            },
            // 拖拽中
            drag(e) {
                if (e.clientY > 8 && e.clientY < this.position) {
                } else {
                }
            },
            // 拖拽结束
            dragend(e) {
                console.log('拖拽结束')
                document.getElementById(e.target.id).parentElement.classList.remove('active');
            },
            // 进入目标框
            dragenter(e) {
                console.log(this.$refs);
                console.log(this.$refs['drop-ul-wrap'].clientTop);
                console.log(this.$refs['drop-ul-wrap'].clientHeight);
                console.log(e.target.clientTop);
                // e.preventDefault();
                // if (document.getElementsByClassName("portlet-placeholder").length === 0) {
                //     let li = document.createElement("li");
                //     li.setAttribute("class", "portlet-placeholder field default");
                //     li.style.height = '71px';
                //     li.style.width = '100%';
                //     this.$refs['drop-ul-wrap'].appendChild(li);
                //     if (this.$refs['drop-ul-wrap'].style.height === ''){
                //         this.$refs['drop-ul-wrap'].style.height = 91 + "px";
                //     } else {
                //         let height = this.$refs['drop-ul-wrap'].style.height.replace("px","")
                //         height = parseInt(height)
                //         this.$refs['drop-ul-wrap'].style.height = (height + 71) + "px"
                //     }
                // }
            },
            // 在目标框移动
            dragover(e) {
                e.preventDefault();
            },
            // 离开放置区
            dragleave(e) {
                console.log(2)
                e.preventDefault();
                if (document.getElementsByClassName("portlet-placeholder").length === 1) {
                    console.log(this.$refs['drop-ul-wrap'].style.height);
                    // if (this.$refs['drop-ul-wrap'].style.height !== "") {
                    //     let height = this.$refs['drop-ul-wrap'].style.height.replace("px","");
                    //     height = parseInt(height)
                    //     if (height > 91) {
                    //         this.$refs['drop-ul-wrap'].style.height = (height - 71) + "px"
                    //     } else {
                    //         this.$refs['drop-ul-wrap'].style.height = "";
                    //     }
                    // }
                    // e.preventDefault();
                    // this.$refs['drop-ul-wrap'].removeChild(document.getElementsByClassName("portlet-placeholder")[0]);
                }
            },
            // 放置
            drop(e) {
                console.log(e.dataTransfer.getData("id"));
                e.preventDefault();
                if (document.getElementsByClassName("portlet-placeholder").length === 1) {
                    e.preventDefault();
                    this.$refs['drop-ul-wrap'].removeChild(document.getElementsByClassName("portlet-placeholder")[0]);
                }
                let element = document.createElement("li");
                let text = document.createTextNode("Hi there and greetings!");
                element.appendChild(text);
                e.target.appendChild(element);
            }
        },
        components: {
        }
    }
</script>
<style>
    .diy-wrap{
        background: #f5f5f5;
        -webkit-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
    }
    .diy-wrap>div{
        display: flex;
        width: 1200px;
        margin-left: auto;
        margin-right: auto;
        padding-top: 8px;
        padding-bottom: 8px;
        height: 100%;
        justify-content: space-between;
    }
    .diy-wrap>div>div:nth-child(1){
        width: 240px;
        padding: 0 0 40px;
        background: #fff;
        box-shadow: 0 0 4px 0 #dfdfdf;
        float: left;
        margin-right: 8px;
        overflow: auto;
    }
    .diy-wrap>div>div:nth-child(2){
        width: 900px;
        height: calc( 100vh - 16px );
        border-radius: 2px;
        border: 1px solid rgba(217,217,217,1);
        padding-bottom: 5px;
        overflow: auto;
        background: #ffffff;
        box-shadow: 0 2px 5px 0 #d9d9d9;
        position: relative;
    }
    .controls-left>ul{
        text-align: left;
    }
    .tab-item{
        display: flex;
        position: relative;
        flex-wrap: wrap;
    }
    .tab-item>li{
        float: left;
        width: 33.33%;
        text-align: center;
        background: #ffffff;
    }
    .tab-item>li>a{
        display: block;
        padding: 10px 5px 12px;
        cursor: pointer;
    }
    .tab-item>li>a:hover {
        color: #2e73ff;
    }
    a {
        text-decoration: none;
        color: #051433;
    }
    .backup-li{
        display: none;
        width: 80px;
        height: 43px;
        box-shadow: 0 0 4px 2px #dedede;
        background: #FFFFFF;
        line-height: 43px;
        text-align: center;
        cursor: pointer;
        color: #c7a480;
    }
    .href{
        display: block;
    }
    .view-middle>ul{
        list-style: none;
        position: relative;
        padding: 0 0 20px;
        background: #a6a6b0;
        display: inline-block;
        width: 100%;
    }
    .view-middle>ul::after{
        display: table;
        content: "";
        clear: both;
    }
    .field{
        position: relative;
        zoom: 1;
        cursor: pointer;
        clear: both;
    }
    .portlet-placeholder {
        border: 1px dashed #2e73ff!important;
        border-radius: 4px;
        height: auto;
        overflow: visible;
        background-color: #fff;
        text-align: center;
        font-size: 2.5em;
        color: #2e73ff;
        padding: 0!important;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        clear: both;
    }
    .active > a{
        color: #2e73ff!important;
    }
    .tabTitle{
        font-family: '微软雅黑', '宋体', serif;
        font-weight: 600;
        background: #f2f3f4;
        font-size: 14px;
        line-height: 48px;
        padding-left: 24px;
    }
    .iconfont{
        margin: 0 6px;
        display: inline-block;
        font-size: 20px;
    }
    .field-name{
        display: block;
        padding-top: 5px;
        font-size: 14px;
        font-family: '微软雅黑', '宋体', serif;
    }
</style>
