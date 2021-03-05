<template>
    <div ref="base-wrap" class="diy-wrap" @mousemove="drag" @mouseup="dragend">
        <div>
            <div class="controls-left">
                <ul>
                    <li :key="item.label" v-for="(item,index) in tabType">
                        <div class="tabTitle">
                            <span>{{item.label}}</span>
                        </div>
                        <ul ref="tab-item" class="tab-item">
                            <li :ref="'ref' + ((index * 100) +idx)" @mousedown="dragstart" :key="li.assign" v-for="(li,idx) in item.itemList" class="ui-draggable">
                                <a :id="li.id" href="#" @dragstart="noDrag" :title="li.title">
                                    <i class="iconfont" :class="li.icon"></i>
                                    <span class="field-name">{{li.label}}</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div ref="view-box" id="middle" class="view-middle">
                <div class="form">
                    <div ref="formHeader" id="formHeader" class="form-header" @click="activePlus">
                        <h2 id="formName">{{form.header.formName ===''?'未命名':form.header.formName}}</h2>
                        <div id="formDesc" class="header-desc-wrap" v-html="form.header.formDesc">
                        </div>
                    </div>
                    <div class="form-body">
                        <div class="no-plug-wrap">
                            <div class="prompt-info">
                                <div class="left-img">
                                    <img @dragstart="noDrag" src="../assets/nomessagen.png" alt="">
                                </div>
                                <div class="right-text">
                                    <div class="paragraph">当前表单暂无内容，你可以</div>
                                    <div class="paragraph">1、<a href="javascript:;" id="showShake" class="link">点击</a>或者拖动左侧组件创建表单，打造属于你的专属表单；</div>
                                    <div class="paragraph">2、点此处跳转至<a class="link" href="javascript:;">模板库</a>，海量模板任你选择，助力高效工作。</div>
                                </div>
                            </div>
                        </div>
                        <ul ref="drop-ul-wrap">
                        </ul>
                    </div>
                    <div class="form-footer">

                    </div>
                </div>
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
            <div id="right" class="right-property-wrap">
                <div class="notice" style="background: #fff;;line-height: 22px;" id="noFieldSelected">
                    <div style="margin: 64px 0 16px ">
                        <img src="../assets/nomessagen.png" @dragstart="noDrag">
                    </div>
                    <div>没有选择字段</div>
                    <p>请在右侧表单选择字段然后在此处编辑属性</p>
                </div>
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
                    offsetY: 0,
                },
                showLi: false,
                text: '1',
                tabType: [
                    {
                        label: '通用组件',
                        itemList: [
                            {
                                id: 'sl',
                                icon: 'icondanhangwenben',
                                label: '单行文本',
                                title: '适用于填写简短的文字内容，身份证号、银行卡号、工号等请使用“证件号/卡号”字段。',
                                type: 'text',
                                code: 1
                            },
                            {
                                id: 'ml',
                                icon: 'iconwenben',
                                label: '多行文本',
                                title: '适用于填写大段文本，如“备注”、“留言”',
                                type: 'textarea',
                                code: 2
                            },
                            {
                                id: 'nb',
                                icon: 'iconnumber',
                                label: '数字',
                                title: '适用于填写涉及到数学运算的数字;不适用身份证号、银行卡号、工号等。',
                                type: 'number',
                                code: 3
                            },
                            {
                                id: 'sb',
                                icon: 'iconduoxuankuangzu',
                                label: '单选框',
                                title: '适用于在少量选项里选一个，如“男/女”',
                                type: 'text',
                                code: 4
                            },
                            {
                                id: 'cb',
                                icon: 'iconduoxuankuang',
                                label: '多选框',
                                title: '适用于在几个选项里选多个，如投票',
                                type: 'textarea',
                                code: 5
                            },
                            {
                                id: 'pd',
                                icon: 'iconxialakuang',
                                label: '下拉框',
                                title: '适用于在非常多的选项里选一个，如省份选择',
                                type: 'number',
                                code: 6
                            },
                            {
                                id: 'mp',
                                icon: 'iconbiaodan-duoxiangxialakuang',
                                label: '多级下拉',
                                title: '适用于展示多级联动，如第一级是饮料，第二级只能选择绿茶、红茶等',
                                type: 'text',
                                code: 7
                            },
                            {
                                id: 'cr',
                                icon: 'iconzuhedanxuan',
                                label: '组合单选',
                                title: '适用于处理批量单选',
                                type: 'textarea',
                                code: 8
                            },
                            {
                                id: 'fu',
                                icon: 'iconwenjianshangchuan',
                                label: '文件上传',
                                title: '适用于收集文件，如简历、照片',
                                type: 'number',
                                code: 9
                            },
                            {
                                id: 'rq',
                                icon: 'iconriqi',
                                label: '日期',
                                title: '适用于选择特定的日期',
                                type: 'text',
                                code: 10
                            },
                            {
                                id: 'sj',
                                icon: 'iconshijian',
                                label: '时间',
                                title: '适用于填写特定的时间',
                                type: 'textarea',
                                code: 11
                            },
                            {
                                id: 'pf',
                                icon: 'iconpingfen2x',
                                label: '评分',
                                title: '适用于评级打分',
                                type: 'number',
                                code: 12
                            },
                            {
                                id: 'bt',
                                icon: 'iconanniu',
                                label: '按钮',
                                title: '适用于跳转链接，电话，邮件及客服',
                                type: 'text',
                                code: 13
                            },
                            {
                                id: 'im',
                                icon: 'icontupian',
                                label: '图片展示',
                                title: '在表单上加入图片，起到宣传产品或美化表单的作用',
                                type: 'textarea',
                                code: 14
                            },
                            {
                                id: 'vd',
                                icon: 'iconshipin',
                                label: '视频展示',
                                title: '在表单上加入视频，可以更加直观的表达自己的意图',
                                type: 'number',
                                code: 15
                            },
                            {
                                id: 'vi',
                                icon: 'iconyinpin',
                                label: '音频展示',
                                title: '在表单上加入音频，可以让产品更加生动',
                                type: 'text',
                                code: 16
                            },
                            {
                                id: 'td',
                                icon: 'iconmiaoshu',
                                label: '文字描述',
                                title: '适用于添加HTML显示元素，如“p,a,span,div”等',
                                type: 'textarea',
                                code: 17
                            },
                            {
                                id: 'pb',
                                icon: 'iconfenye',
                                label: '分页符',
                                title: '手机版表单以此分页符分页显示',
                                type: 'number',
                                code: 18
                            },
                        ]
                    },
                    {
                        label: '选择组件',
                        itemList: [
                            {
                            id: 'pb',
                            icon: 'iconfenye',
                            label: '分页符',
                            type: 'number',
                            code: 18
                            }
                        ]
                    }
                ],
                moveLi: false,
                down: false,
                clientWidth: 0,
                clientHeight: 0,
                clientX: 0,
                clientY: 0,
                startPosition: {
                    x: 0,
                    y: 0
                },
                startCoordinate: {
                    x: 0,
                    y: 0
                },
                currId: 0,
                mouseX: 0,
                mouseY: 0,
                liTemplate: [
                    {id: 'sl', title: '适用于填写简短的文字内容，身份证号、银行卡号、工号等请使用“证件号/卡号”字段。', icon: 'icondanhangwenben', label: '单行文本'},
                    {id: 'ml', title: '适用于填写大段文本，如“备注”、“留言”', icon: 'iconwenben', label: '多行文本'},
                    {id: 'nb', title: '适用于填写涉及到数学运算的数字;不适用身份证号、银行卡号、工号等。', icon: 'iconnumber', label: '数字'},
                    {id: 'sb', title: '适用于在少量选项里选一个，如“男/女”', icon: 'iconduoxuankuangzu', label: '单选框'},
                    {id: 'cb', title: '适用于在几个选项里选多个，如投票', icon: 'iconduoxuankuang', label: '多选框'},
                    {id: 'pd', title: '适用于在非常多的选项里选一个，如省份选择', icon: 'iconxialakuang', label: '下拉框'},
                    {id: 'mp', title: '适用于展示多级联动，如第一级是饮料，第二级只能选择绿茶、红茶等', icon: 'iconbiaodan-duoxiangxialakuang', label: '多级下拉'},
                    {id: 'cr', title: '适用于处理批量单选', icon: 'iconzuhedanxuan', label: '组合单选'},
                    {id: 'fu', title: '适用于收集文件，如简历、照片', icon: 'iconwenjianshangchuan', label: '文件上传'},
                    {id: 'rq', title: '适用于选择特定的日期', icon: 'iconriqi', label: '日期'},
                    {id: 'sj', title: '适用于填写特定的时间', icon: 'iconshijian', label: '时间'},
                    {id: 'pf', title: '适用于评级打分', icon: 'iconpingfen2x', label: '评分'},
                    {id: 'bt', title: '适用于跳转链接，电话，邮件及客服', icon: 'iconanniu', label: '按钮'},
                    {id: 'im', title: '在表单上加入图片，起到宣传产品或美化表单的作用', icon: 'icontupian', label: '图片展示'},
                    {id: 'vd', title: '在表单上加入视频，可以更加直观的表达自己的意图', icon: 'iconshipin', label: '视频展示'},
                    {id: 'vi', title: '在表单上加入音频，可以让产品更加生动', icon: 'iconyinpin', label: '音频展示'},
                    {id: 'td', title: '适用于添加HTML显示元素，如“p,a,span,div”等', icon: 'iconmiaoshu', label: '文字描述'},
                    {id: 'pb', title: '手机版表单以此分页符分页显示', icon: 'iconfenye', label: '分页符'}
                ],
                form: {
                    header: {
                        formName: '',
                        formDesc: '啊'
                    }
                }
            }
        },
        mounted() {
            this.position.clientWidth = this.computingClientWidth;
            this.position.clientHeight = this.computingClientHeight;
            this.position.offsetX = this.computingOffsetX;
            this.position.offsetY = this.computingOffsetY;
        },
        created() {
        },
        computed: {
            computingClientWidth() {
                return this.$refs['drop-ul-wrap'].clientWidth;
            },
            computingClientHeight() {
                return this.$refs['view-box'].offsetTop + this.$refs['formHeader'].offsetHeight + this.$refs['drop-ul-wrap'].offsetTop;
            },
            computingOffsetX() {
                return this.$refs['view-box'].offsetLeft;
            },
            computingOffsetY() {
                return this.$refs['view-box'].offsetTop + this.$refs['formHeader'].offsetHeight + this.$refs['drop-ul-wrap'].offsetTop + 20;
            }
        },
        methods: {
            moveType(id,object) {
                this.liTemplate.forEach(item => {
                    if (item.id === id) {
                        let li = document.createElement("li")
                        li.setAttribute("class", "ui-draggable ui-draggable-dragging");
                        li.setAttribute("ref", "ui-draggable");
                        li.setAttribute("ondragstart", "return false");
                        li.style.position = 'absolute';
                        li.style.left = object.clientX - this.clientX + 4 + 'px';
                        li.style.top = object.clientY - this.clientY - 4 + 'px';
                        li.style.width = '96px';
                        li.style.height = '72px';
                        let a = document.createElement("a");
                        a.setAttribute("class", "btn-field field-checked btn-field-helper");
                        a.setAttribute("title", item.title);
                        a.setAttribute("href", "#");
                        let i = document.createElement("i");
                        i.setAttribute("class", "iconfont " + item.icon)
                        let span = document.createElement("span");
                        span.setAttribute("class", "filed-name")
                        let text = document.createTextNode(item.label);
                        span.appendChild(text);
                        a.appendChild(i);
                        a.appendChild(span);
                        li.appendChild(a);
                        this.$refs['base-wrap'].appendChild(li);
                        this.moveLi = true;
                    }
                });
            },
            // 禁止拖拽
            noDrag(e) {
                e.preventDefault();
            },
            // 拖拽开始
            dragstart(e) {
                // 记录初始位置
                this.startPosition.x = e.target.parentNode.offsetLeft;
                this.startPosition.y = e.target.parentNode.offsetTop;
                this.startCoordinate.x = e.target.parentNode.parentNode.parentNode.offsetLeft + this.startPosition.x;
                this.startCoordinate.y = e.target.parentNode.offsetTop + e.target.parentNode.parentNode.offsetTop;
                // 记录点击位置
                this.clientX = e.offsetX;
                this.clientY = e.offsetY;
                // 记录点击对象宽高
                this.clientWidth = e.target.offsetWidth;
                this.clientHeight = e.target.offsetHeight;
                e.target.parentNode.classList.add('active');
                this.down = true;
            },
            // 拖拽
            drag(e) {
                this.mouseX = e.clientX;
                this.mouseY = e.clientY;
                if (this.down) {
                    if (this.$refs['base-wrap'].lastChild.nodeName === 'DIV' && !this.moveLi) {
                        this.moveType(e.target.id, e);
                        this.currId = e.target.id;
                    } else {
                        this.$refs['base-wrap'].lastChild.style.left = e.clientX - this.clientX + 4 + 'px';
                        this.$refs['base-wrap'].lastChild.style.top = e.clientY - this.clientY - 4 + 'px';
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
                if (this.$refs['base-wrap'].lastChild.localName !== 'li') {
                    return;
                }
                let object = e.target;
                if (e.target.parentNode.localName !== 'li') {
                    object = e.target.parentNode.parentNode
                } else {
                    object = e.target.parentNode
                }
                this.down = false;
                let dom = document.getElementsByClassName("portlet-placeholder");
                // 清除放置区
                if (dom.length > 0) {
                    this.$refs['drop-ul-wrap'].removeChild(document.getElementsByClassName("portlet-placeholder")[0]);
                }
                if (e.clientY > this.position.offsetY && e.clientY < this.position.offsetY + this.position.clientHeight && e.clientX > this.position.offsetX && e.clientX < this.position.offsetX + this.position.clientWidth) {
                    let element = document.createElement("li");
                    let text = document.createTextNode("Hi there and greetings!");
                    element.appendChild(text);
                    this.$refs['drop-ul-wrap'].appendChild(element);
                    this.position.offsetY = (this.$refs['drop-ul-wrap'].clientHeight-20) + this.$refs['view-box'].offsetTop;
                    // 清除样式
                    this.$refs['base-wrap'].removeChild(this.$refs['base-wrap'].lastChild);
                    this.clearActive();
                    return;
                }
                if (this.currId !== 0) {
                    this.clearActive();
                }
                this.moveLi = false;
                let a = object.offsetLeft
                let b = object.offsetTop
                let w =  object.offsetLeft - this.startCoordinate.x;
                let h =  object.offsetTop - this.startCoordinate.y;
                let dw = w / 10;
                let dh = h / 10;
                let time = 0;
                let timer = setInterval(() => {
                    if (time === 10) {
                        clearInterval(timer);
                        // 隐藏
                        setTimeout(() => {
                            this.$refs['base-wrap'].removeChild(this.$refs['base-wrap'].lastChild);
                        }, 50);
                    } else {
                        a = (parseFloat(a).toFixed(1) * 10 - parseFloat(dw).toFixed(1) * 10) / 10;
                        b = (parseFloat(b).toFixed(1) * 10 - parseFloat(dh).toFixed(1) * 10) / 10;
                        this.$refs['base-wrap'].lastChild.style.left = a + 'px';
                        this.$refs['base-wrap'].lastChild.style.top = b + 'px';
                        time += 1;
                    }
                }, 50);
                this.startCoordinate.x = 0;
                this.startCoordinate.y = 0;
            },
            // 清除选中
            clearActive() {
                if (this.currId !== 0) {
                    document.getElementById(this.currId).parentNode.classList.remove('active');
                }
            },
            // 选中组件
            activePlus(e) {
                console.log(e);
                console.log(e.target);
            }
        },
        components: {
        }
    }
</script>
<style>
    .diy-wrap {
        background: #f5f5f5;
        -webkit-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    ul,li{
        list-style: none;
    }
    .diy-wrap>div{
        display: flex;
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
        width: 700px;
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
    .view-middle>.form>.form-body>ul{
        position: relative;
        padding: 0 0 20px;
        background: #a31d1d;
        display: inline-block;
        width: 100%;
    }
    .view-middle>.form>.form-body>ul::after{
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

    /*----------表头----------*/
    .form-header {
        width: 100%;
        min-height: 104px;
        padding: 20px 15px;
        text-align: left;
        font-family: '微软雅黑', '宋体', serif;
        border: 1px dashed transparent;
        position: relative;
    }
    .form-header>h2 {
        font-size: 22px;
        font-weight: normal;
        margin: 0 0 5px;
    }
    .form-header>.header-desc-wrap {
        font-size: 14px;
    }
    .form-header::after {
        content: "";
        display: inline-block;
        width: calc(100% - 30px);
        height: 1px;
        border-bottom: 1px dotted #b3b8c1;
        position: absolute;
        bottom: 20px;
    }
    .form-header:hover{
        border: 1px dashed #2e73ff;
        cursor: pointer;
    }
    /*----------------------------------*/
    .form-body{
        position: relative;
    }
    .no-plug-wrap{
        padding: 60px 0;
    }
    .prompt-info{
        width: 500px;
        margin: 0 auto;
        position: relative;
        display: flex;
        justify-content: space-evenly;
    }
    .link{
        color: #2e73ff;
        text-decoration: none!important;
        font-weight: normal;
    }
    .link:hover{
        color: #5788ff;
        background: linear-gradient(#5788ff,#5788ff) no-repeat;
        background-position: 0 100%;
        background-size: 100% 1px;
    }
    .right-text>.paragraph {
        text-align: left;
        font-size: 14px;
        font-family: '微软雅黑', '宋体', serif;
        line-height: 24px;
    }
    /*-------------right----------------*/
    .right-property-wrap{
        width: 340px;
        box-sizing: border-box;
        background: #fff;
        font-size: 14px;
        font-family: '微软雅黑', '宋体', serif;
    }
    .right-property-wrap p{
        margin: 0;
    }
</style>
