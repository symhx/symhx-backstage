<template>
    <div ref="base-wrap" class="diy-wrap" @mousemove="drag" @mouseup="dragend">
        <div>
            <div class="controls-left">
                <ul>
                    <li :key="item.label" v-for="(item,index) in tabType">
                        <div class="tabTitle">
                            <span>{{item.label}}</span>
                        </div>
                        <ul class="tab-item">
                            <li :ref="'ref' + ((index * 100) +idx)" @mousedown="dragstart" :key="li.assign" v-for="(li,idx) in item.itemList" class="ui-draggable">
                                <a :id="li.id" href="#" @dragstart="noDrag">
                                    <i class="iconfont" :class="li.icon"></i>
                                    <span class="field-name">{{li.label}}</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li id="backup-li" class="backup-li">{{text}}</li>
                </ul>
            </div>
            <div ref="view-box" id="middle" class="view-middle">
                <ul ref="drop-ul-wrap">
                </ul>
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
                position: {
                    clientWidth: 0,
                    clientHeight: 0,
                    offsetX: 0,
                    offsetY: 0
                },
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
                ],
                moveLi: false,
                down: false,
                clientWidth: 0,
                clientHeight: 0,
                clientX: 0,
                clientY: 0
            }
        },
        mounted() {
            this.computingPositioning();
        },
        created() {
        },
        methods: {
            computingPositioning () {
                this.position.clientWidth = this.$refs['drop-ul-wrap'].clientWidth;
                this.position.clientHeight = 40;
                this.position.offsetX = this.$refs['view-box'].offsetLeft;
                this.position.offsetY = (this.$refs['drop-ul-wrap'].clientHeight-20) + this.$refs['view-box'].offsetTop;
            },
            moveType(id,object) {
                // console.log(object.clientWidth)
                // console.log(object.clientHeight)
                let li = document.createElement("li")
                li.setAttribute("class", "ui-draggable ui-draggable-dragging");
                li.setAttribute("ref", "ui-draggable");
                li.setAttribute("ondragstart", "return false");
                li.style.position = 'absolute';
                li.style.left= object.clientX +'px';
                li.style.top= object.clientY +'px';
                li.style.width = '96px';
                li.style.height = '72px';
                let a = document.createElement("a");
                a.setAttribute("class", "btn-field field-checked btn-field-helper");
                a.setAttribute("title", "适用于填写简短的文字内容，身份证号、银行卡号、工号等请使用“证件号/卡号”字段。");
                a.setAttribute("href", "#");
                let i = document.createElement("i");
                i.setAttribute("class","iconfont icondanhangwenben")
                let span = document.createElement("span");
                span.setAttribute("class","filed-name")
                let text = document.createTextNode("单行文本");
                span.appendChild(text);
                a.appendChild(i);
                a.appendChild(span);
                li.appendChild(a);
                this.$refs['base-wrap'].appendChild(li);
                this.moveLi = true;
            },
            // 禁止拖拽
            noDrag(e) {
                e.preventDefault();
            },
            // 拖拽开始
            dragstart(e) {
                this.clientX = e.offsetLeft;
                this.clientY = e.offsetTop;
                console.log(this.clientX)
                console.log(this.clientY)
                this.clientWidth = e.target.offsetWidth;
                this.clientHeight = e.target.offsetHeight;
                e.target.parentNode.classList.add('active');
                this.down = true;
            },
            // 拖拽
            drag(e) {
                if (this.down) {
                    if (this.$refs['base-wrap'].lastChild.nodeName === 'DIV' && !this.moveLi) {
                        this.moveType(e.target.id,e);
                    } else {
                        this.$refs['base-wrap'].lastChild.style.left = e.clientX - this.clientWidth / 2 + 'px';
                        this.$refs['base-wrap'].lastChild.style.top = e.clientY - this.clientHeight / 2 + 'px';
                    }
                    if (e.clientY > this.position.offsetY && e.clientY < this.position.offsetY + this.position.clientHeight && e.clientX > this.position.offsetX && e.clientX < this.position.offsetX + this.position.clientWidth) {
                        if (document.getElementsByClassName("portlet-placeholder").length === 0) {
                            let li = document.createElement("li");
                            li.setAttribute("class", "portlet-placeholder field default");
                            li.style.height = '71px';
                            li.style.width = '100%';
                            this.$refs['drop-ul-wrap'].appendChild(li);
                        }
                    } else {
                        let dom = document.getElementsByClassName("portlet-placeholder");
                        if (dom.length > 0) {
                            this.$refs['drop-ul-wrap'].removeChild(document.getElementsByClassName("portlet-placeholder")[0]);
                        }
                    }
                }
            },
            // 拖拽结束
            dragend(e) {
                this.down = false;
                let dom = document.getElementsByClassName("portlet-placeholder");
                if (dom.length > 0) {
                    this.$refs['drop-ul-wrap'].removeChild(document.getElementsByClassName("portlet-placeholder")[0]);
                }
                if (e.clientY > this.position.offsetY && e.clientY < this.position.offsetY + this.position.clientHeight && e.clientX > this.position.offsetX && e.clientX < this.position.offsetX + this.position.clientWidth) {
                    let element = document.createElement("li");
                    let text = document.createTextNode("Hi there and greetings!");
                    element.appendChild(text);
                    this.$refs['drop-ul-wrap'].appendChild(element);
                    this.position.offsetY = (this.$refs['drop-ul-wrap'].clientHeight-20) + this.$refs['view-box'].offsetTop;
                }
                e.target.parentNode.classList.remove('active');
                // this.$refs['base-wrap'].removeChild(this.$refs['base-wrap'].lastChild)
                console.log(this.clientX)
                console.log(this.clientY)
                this.$refs['base-wrap'].lastChild.clientX = this.clientX
                this.$refs['base-wrap'].lastChild.clientY = this.clientY
                this.moveLi = false;
            },
            // 进入目标框
            dragenter(e) {
                e.preventDefault();
            },
            // 在目标框移动
            dragover(e) {
                e.preventDefault();
                // e.dataTransfer.dropEffect = 'move';
            },
            // 离开放置区
            dragleave(e) {
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
    ul,li{
        list-style: none;
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
        width: 320px;
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
        padding: 20px 0;
    }
    .tab-item>li{
        float: left;
        width: 33.33%;
        text-align: center;
        background: #ffffff;
        position: relative;
        display: inline-block;
    }
    .tab-item>li>a{
        display: block;
        padding: 10px 5px 12px;
        cursor: pointer;
        position: relative;
    }
    .tab-item>li>a::after{
        content: "";
        display: inline-block;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
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
        position: relative;
        padding: 0 0 20px;
        background: #ffffff;
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
    .ui-draggable-dragging {
        text-align: center;
        z-index: 10;
        border-radius: 4px;
        box-shadow: 0 0 4px 0 rgba(5, 20, 51, 0.2);
        background: #fff;
    }
    .ui-draggable-dragging a {
        display: block;
        padding: 14px 5px 10px;
        color: #2e73ff;
    }
    .ui-draggable-dragging a i {
        font-size: 20px;
    }
    .ui-draggable-dragging a span {
        display: block;
        padding-top: 6px;
        font-size: 14px;
    }
</style>
