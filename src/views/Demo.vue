<template>
    <div ref="base-wrap" class="diy-wrap" @mousemove="drag" @mouseup="dragend">
        <div ref="form-header" class="form-header-wrap">
            <div class="left-back">
                <a href="#" title="返回表单列表">
                    <i class="iconfont icon552cc14536532"></i>
                    <span>{{form.header.formName}}</span>
                </a>
            </div>
            <div class="middle-option">
                <ul>
                    <li class="sys-option">
                        <span>编辑</span>
                    </li>
                    <li>
                        <span class="middle line"></span>
                    </li>
                    <li class="sys-option">
                        <span>外观</span>
                    </li>
                    <li>
                        <span class="middle line"></span>
                    </li>
                    <li class="sys-option">
                        <span>设置</span>
                    </li>
                    <li>
                        <span class="middle line"></span>
                    </li>
                    <li class="sys-option">
                        <span>发布</span>
                    </li>
                </ul>
            </div>
            <div class="right-event">
                <a href="#" title="保存" class="btn blue">保存</a>
                <a href="#" title="预览" class="btn wireframe">预览</a>
            </div>
        </div>
        <div class="form-body-wrap">
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
            <div>
                <div ref="view-box" id="middle" class="view-middle">
                    <div class="form">
                        <div ref="formHeader" id="formHeader" class="form-header" @click="activePlus">
                            <div id="formName">{{form.header.formName ===''?'未命名':form.header.formName}}</div>
                            <div id="formDesc" v-if="form.header.formDesc!==''" class="header-desc-wrap" v-html="form.header.formDesc">
                            </div>
                        </div>
                        <div class="form-body">
                            <div v-if="formItem.length===0" class="no-plug-wrap">
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
                            <ul ref="drop-ul-wrap" @mousemove="moveChild" @mouseleave="outChild" @mouseup.prevent="endChild">
                                <li :key="'item'+index" v-for="(item,index) in formItem" :id="item.id" :ref="item.id" @mousedown.prevent="startChild(index,$event)" >
                                    <component :is="item.label"></component>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="form-footer">
                    <span>由苏屿网络提供服务</span>
                    <div>
                        <a href="#">去除logo</a>
                    </div>
                </div>
            </div>
            <div id="right" class="right-property-wrap">
                <div class="notice" style="line-height: 22px;" id="noFieldSelected">
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
    import radio from '../components/form/Radio'
    import checkBox from '../components/form/CheckBox'
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
                        label: '通1用组件',
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
                        label: '通2用组件',
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
                formItem: [
                    {id: '121', label: 'radio'},
                    {id: '232', label: 'checkBox'},
                    {id: '343', label: 'checkBox'},
                    {id: '454', label: 'radio'},
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
                        formName: '表单名称',
                        formDesc: '表单描述'
                    }
                }
            }
        },
        mounted() {
            this.position.clientWidth = this.computingClientWidth;
            this.position.clientHeight = this.computingClientHeight;
            this.position.offsetX = this.computingOffsetX;
            this.position.offsetY = this.computingOffsetY;
            localStorage.clear();
        },
        created() {
        },
        computed: {
            computingClientWidth() {
                return this.$refs['drop-ul-wrap'].clientWidth;
            },
            computingClientHeight() {
                return this.$refs['drop-ul-wrap'].clientHeight;
            },
            computingOffsetX() {
                return this.$refs['view-box'].parentNode.offsetLeft;
            },
            computingOffsetY() {
                return this.$refs['drop-ul-wrap'].clientHeight - 20 + this.$refs['view-box'].parentNode.offsetTop + this.$refs['formHeader'].offsetHeight + this.$refs['drop-ul-wrap'].offsetTop;
            }
        },
        methods: {
            moveType(object) {
                let id = localStorage.getItem("id");
                this.currId = id;
                this.liTemplate.forEach(item => {
                    if (item.id === id) {
                        let li = document.createElement("li")
                        li.setAttribute("class", "ui-draggable ui-draggable-dragging");
                        li.setAttribute("ref", "ui-draggable");
                        li.setAttribute("ondragstart", "return false");
                        li.style.position = 'absolute';
                        li.style.left = object.clientX - this.clientX + 'px';
                        li.style.top = object.clientY - this.clientY + 'px';
                        li.style.width = localStorage.getItem("CLICK_NODE_CLIENT_WIDTH") + 'px';
                        li.style.height = localStorage.getItem("CLICK_NODE_CLIENT_HEIGHT") + 'px';
                        li.style.zIndex = '99';
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
                // 记录宽高
                localStorage.setItem("CLICK_NODE_CLIENT_WIDTH", e.currentTarget.clientWidth);
                localStorage.setItem("CLICK_NODE_CLIENT_HEIGHT", e.currentTarget.clientHeight);

                localStorage.setItem("id", e.currentTarget.firstChild.getAttribute("id"));
                localStorage.setItem("title", e.currentTarget.firstChild.getAttribute("title"));
                let topHeight = this.$refs['form-header'].clientTop * 2 + this.$refs['form-header'].offsetHeight;
                // 记录初始位置
                this.startPosition.x = e.currentTarget.offsetLeft;
                this.startPosition.y = e.currentTarget.offsetTop;
                // 记录点击节点起始坐标
                this.startCoordinate.x = e.currentTarget.offsetLeft;
                this.startCoordinate.y = topHeight + e.currentTarget.offsetTop + e.currentTarget.parentNode.offsetTop;
                // 记录点击位置
                this.clientX = e.clientX - this.startCoordinate.x;
                this.clientY = e.clientY - this.startCoordinate.y;
                // 记录点击对象宽高
                this.clientWidth = e.currentTarget.offsetWidth;
                this.clientHeight = e.currentTarget.offsetHeight;
                e.currentTarget.parentNode.classList.add('active');
                this.down = true;
            },
            // 拖拽
            drag(e) {
                this.mouseX = e.clientX;
                this.mouseY = e.clientY;
                let node = e.target;
                while (node.localName !== 'a' && !this.validField(node.getAttribute("id"))) {
                    node = node.parentNode;
                }
                if (this.down) {
                    if (this.$refs['base-wrap'].lastChild.localName === 'div' && !this.moveLi) {
                        this.moveType(e);
                    } else {
                        this.$refs['base-wrap'].lastChild.style.left = e.clientX - this.clientX + 'px';
                        this.$refs['base-wrap'].lastChild.style.top = e.clientY - this.clientY + 'px';
                    }
                    if (e.clientX > this.position.offsetX && e.clientX < this.position.offsetX + this.position.clientWidth) {
                        this.computedChildNodeRange(e);
                    }
                }
            },
            // 拖拽结束
            dragend(e) {
                this.down = false;
                // 删除
                localStorage.removeItem("CLICK_NODE_CLIENT_WIDTH");
                localStorage.removeItem("CLICK_NODE_CLIENT_HEIGHT");
                if (this.$refs['base-wrap'].lastChild.localName !== 'li') {
                    return;
                }
                let object = e.currentTarget.lastChild
                // 追加元素
                if (this.validField(localStorage.getItem("PLACEHOLDER_CONTAINER"))) {
                    let placeholderContainer = localStorage.getItem("PLACEHOLDER_CONTAINER");
                    // 删除占位
                    this.$refs['drop-ul-wrap'].removeChild(this.$refs['drop-ul-wrap'].childNodes[placeholderContainer])
                    this.formItem.splice(placeholderContainer, 0, {id: '122', label: 'radio'});
                    localStorage.removeItem("PLACEHOLDER_CONTAINER");

                    this.position.offsetY = this.$refs['drop-ul-wrap'].clientHeight - 20 + this.$refs['view-box'].parentNode.offsetTop + this.$refs['formHeader'].offsetHeight + this.$refs['drop-ul-wrap'].offsetTop;
                    // 清除样式
                    this.$refs['base-wrap'].removeChild(this.$refs['base-wrap'].lastChild);
                    this.clearActive();
                    this.moveLi = false;
                    return;
                }
                if (this.currId !== 0) {
                    this.clearActive();
                }
                this.moveLi = false;
                let a = object.offsetLeft
                let b = object.offsetTop
                let w = object.offsetLeft - this.startCoordinate.x;
                let h = object.offsetTop - this.startCoordinate.y;
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
            // 计算子元素宽高
            computedChildNodeRange(e) {
                let topHeight = this.$refs['form-header'].clientTop + this.$refs['form-header'].offsetHeight;
                let formHeaderHeight = this.$refs['formHeader'].offsetHeight;
                let ulTopHeight = this.$refs['drop-ul-wrap'].offsetTop;
                let placeholderHeight = topHeight + formHeaderHeight + ulTopHeight;
                let placeholderContainer = localStorage.getItem("PLACEHOLDER_CONTAINER");
                if (e.clientY > placeholderHeight) {
                    let parentNode = this.$refs['drop-ul-wrap'];
                    let nodes = this.$refs['drop-ul-wrap'].childNodes;
                    nodes.forEach((item,nodeIndex) => {
                        if (!this.validField(item.getAttribute("id"))) {
                            return;
                        }
                        if (e.clientY - placeholderHeight > item.offsetTop && e.clientY - placeholderHeight <= item.offsetTop + item.clientHeight + item.clientTop * 2) {
                            if (e.clientY - placeholderHeight > item.offsetTop + (item.clientHeight + item.clientTop * 2) / 2) {
                                console.log(nodeIndex + '下半部分');
                                if (!this.validField(placeholderContainer)) {
                                    this.insertBefore(parentNode, item.nextElementSibling);
                                    // 设置占位索引
                                    localStorage.setItem("PLACEHOLDER_CONTAINER", (nodeIndex + 1) + '');
                                    this.changeTempNodeIndex(0);
                                } else {
                                    let tempNode = parentNode.childNodes[placeholderContainer];
                                    if (tempNode.nextElementSibling === item) {
                                        // 删除临时占位节点
                                        parentNode.removeChild(parentNode.childNodes[placeholderContainer])
                                        // 索引下移
                                        this.insertBefore(parentNode, item.nextElementSibling);
                                        this.changeTempNodeIndex(-1);
                                    }
                                }
                            } else {
                                console.log(nodeIndex + '上半部分');
                                // 上半截
                                if (!this.validField(placeholderContainer)) {
                                    this.insertBefore(parentNode,item);
                                    // 设置占位索引
                                    localStorage.setItem("PLACEHOLDER_CONTAINER", nodeIndex + '');
                                    this.changeTempNodeIndex(0);
                                } else {
                                    let tempNode = parentNode.childNodes[placeholderContainer];
                                    if (this.validField(tempNode.previousElementSibling)) {
                                        if (tempNode.previousElementSibling === item) {
                                            // 删除临时占位节点
                                            parentNode.removeChild(parentNode.childNodes[placeholderContainer]);
                                            // 索引下移
                                            this.insertBefore(parentNode, item);
                                            this.changeTempNodeIndex(1);
                                        }
                                    }
                                }
                            }
                        }
                    });
                }
            },
            // 清除选中
            clearActive() {
                if (this.currId !== 0) {
                    document.getElementById(this.currId).parentNode.classList.remove('active');
                }
            },
            // 选中组件
            activePlus(e) {
                console.log(e.currentTarget);
            },
            // 点击按下元素
            startChild(index, e) {
                let enableDrag = localStorage.getItem("ENABLE_DRAG");
                if (this.validField(enableDrag)) {
                    return;
                }
                localStorage.setItem("ENABLE_MOVE_FLAG", "1");
                // 存储当前节点索引
                localStorage.setItem("CURRENT_NODE_INDEX", index);
                // 存储当前节点ID
                localStorage.setItem("CURRENT_NODE_ID", e.currentTarget.getAttribute("id"));
                localStorage.setItem("PARENT_NODE_IN_X", e.currentTarget.offsetLeft + ''); // 父元素中元素X坐标
                localStorage.setItem("PARENT_NODE_IN_Y", e.currentTarget.offsetTop + '');  // 父元素中元素Y坐标
                localStorage.setItem("PARENT_NODE_MOUSE_IN_X", (e.offsetX + e.currentTarget.offsetLeft) + "")  // 父元素中鼠标X;
                localStorage.setItem("PARENT_NODE_MOUSE_IN_Y", (e.offsetY + e.currentTarget.offsetTop) + "") // 父元素中鼠标Y;

                localStorage.setItem("CURRENT_NODE_MOUSE_X", e.offsetX + '');
                localStorage.setItem("CURRENT_NODE_MOUSE_Y", (e.offsetY + e.target.offsetTop) + '');
            },
            // 点击按上元素
            endChild: function (e) {
                let enableDrag = localStorage.getItem("ENABLE_DRAG");
                if (this.validField(enableDrag)) {
                    return;
                }
                localStorage.removeItem("ENABLE_MOVE_FLAG");
                //删除插入盒子标识
                let liNode = e.target;
                if (liNode.localName === 'ul'){
                    return;
                }
                while (liNode.localName !== 'li') {
                    liNode = liNode.parentNode;
                }
                if (null !== localStorage.getItem("PLACEHOLDER_CONTAINER")) {
                    let index = parseInt(localStorage.getItem("PLACEHOLDER_CONTAINER"));
                    let parent = e.currentTarget;
                    let tempNode = parent.childNodes[index];
                    let moveNodeTop = localStorage.getItem("CURRENT_MOVE_NODE_TOP");
                    let moveNodeLeft = localStorage.getItem("CURRENT_MOVE_NODE_LEFT");

                    let offsetX, offsetY;
                    let currLiX = parseInt(moveNodeLeft) - tempNode.offsetLeft;
                    let currLiY = parseInt(moveNodeTop) - (tempNode.offsetTop + tempNode.clientTop) + 13
                    let dx = currLiX;
                    let dy = currLiY;
                    let dw = dx / 10;
                    let dh = dy / 10;
                    let time = 0;
                    let timer = setInterval(() => {
                        if (time === 10) {
                            clearInterval(timer);
                            let curr = this.$refs[localStorage.getItem("CURRENT_NODE_ID")];
                            if (null !== curr && undefined !== curr) {
                                curr[0].style.position = 'relative';
                                curr[0].style.zIndex = '99';
                                curr[0].style.width = '100%';
                                curr[0].style.opacity = '1';
                                curr[0].style.border = '1px solid transparent';
                                curr[0].style.top = '0';
                                curr[0].style.left = '0';
                            }
                            localStorage.removeItem("CURRENT_NODE_ID");

                            // 排序
                            this.sortNode(liNode, index);
                            localStorage.removeItem("PLACEHOLDER_CONTAINER");
                            localStorage.removeItem("ENABLE_DRAG");
                        } else {
                            if (liNode.style.left !== undefined && liNode.style.left !== null) {
                                // 设置禁用拖拽
                                localStorage.setItem("ENABLE_DRAG", "false");
                                let left = liNode.style.left.split("px")[0];
                                let top = liNode.style.top.split("px")[0];
                                if ((parseFloat(left).toFixed(1) * 10)/10 === 0 && time === 0) {
                                    offsetX = (parseFloat(currLiX + '').toFixed(1) * 10 - parseFloat(dw).toFixed(1) * 10) / 10;
                                } else {
                                    offsetX = (parseFloat(left).toFixed(1) * 10 - parseFloat(dw).toFixed(1) * 10) / 10;
                                }
                                if ((parseFloat(top).toFixed(1) * 10)/10 === 0 && time === 0) {
                                    offsetY = (parseFloat(currLiY + '').toFixed(1) * 10 - parseFloat(dh).toFixed(1) * 10) / 10;
                                } else {
                                    offsetY = (parseFloat(top).toFixed(1) * 10 - parseFloat(dh).toFixed(1) * 10) / 10;
                                }
                            }
                            liNode.style.left = offsetX + 'px';
                            liNode.style.top = offsetY + 'px';
                            time += 1;
                        }
                    }, 50);
                } else {
                    localStorage.removeItem("CURRENT_NODE_ID");
                }
                localStorage.removeItem("PARENT_NODE_IN_X");
                localStorage.removeItem("PARENT_NODE_IN_Y");
                // 移除当前节点索引
                localStorage.removeItem("CURRENT_NODE_INDEX");
                localStorage.removeItem("PARENT_NODE_MOUSE_IN_X");
                localStorage.removeItem("PARENT_NODE_MOUSE_IN_Y");
                // 移除鼠标在当前节点坐标
                localStorage.removeItem("CURRENT_NODE_MOUSE_X");
                localStorage.removeItem("CURRENT_NODE_MOUSE_Y");
                // 移除移动标识
                localStorage.removeItem("HAS_MOVE_MORE_STEP");
            },
            // 移动元素
            moveChild: function (e) {
                if (this.validField(localStorage.getItem("ENABLE_MOVE_FLAG"))) {
                    // 获取li对象
                    let liNode = e.target;
                    if (liNode.localName === 'ul'){
                        return;
                    }
                    while (liNode.localName !== 'li') {
                        liNode = liNode.parentNode;
                    }
                    //屏幕鼠标X坐标
                    let mouseClientX = e.clientX;
                    //屏幕鼠标Y坐标
                    let mouseClientY = e.clientY;
                    //父标签
                    let parentNode = e.currentTarget;
                    // 相对于父元素的top浮动
                    let offsetTop = liNode.offsetTop;
                    // 相对于父元素的left浮动
                    let offsetLeft = liNode.offsetLeft;
                    // 元素左边框宽度
                    let clientLeftWidth = liNode.clientLeft;
                    // 鼠标在元素中的X坐标
                    let offsetX = e.offsetX;
                    // 鼠标再元素中的Y坐标
                    let offsetY = e.offsetY;
                    // 当前节点再父元素中的坐标

                    let currentNodeID = localStorage.getItem("CURRENT_NODE_ID");
                    if (this.validField(currentNodeID)) {
                        if (mouseClientX > 0 && mouseClientY > 0) {
                            let currentNode = this.$refs[currentNodeID];
                            currentNode[0].style.position = 'absolute';
                            currentNode[0].style.zIndex = '1000';
                            currentNode[0].style.width = '100%';
                            currentNode[0].style.opacity = '0.9';
                            currentNode[0].style.border = '2px solid #2672ff';
                            // 设置当前节点坐标
                            let currentNodeMouseX = localStorage.getItem("CURRENT_NODE_MOUSE_X");
                            let currentNodeMouseY = localStorage.getItem("CURRENT_NODE_MOUSE_Y");
                            // 在ul中的坐标
                            let topHeight = this.$refs['form-header'].clientTop + this.$refs['form-header'].offsetHeight;
                            let formHeaderHeight = this.$refs['formHeader'].offsetHeight;
                            let ulTopHeight = this.$refs['drop-ul-wrap'].offsetTop;
                            let liTopHeight = liNode.clientTop + 12;
                            currentNode[0].style.left = (mouseClientX - (this.$refs['view-box'].parentNode.offsetLeft + this.$refs['view-box'].clientLeft)) - parseInt(currentNodeMouseX) + 'px';
                            currentNode[0].style.top = mouseClientY - (topHeight + formHeaderHeight + ulTopHeight) - parseInt(currentNodeMouseY) - liTopHeight + 'px';
                            // 记录当前移动坐标位置
                            localStorage.setItem("CURRENT_MOVE_NODE_TOP",currentNode[0].style.top)
                            localStorage.setItem("CURRENT_MOVE_NODE_LEFT",currentNode[0].style.left)

                            let currNodeIndex = parseInt(localStorage.getItem("CURRENT_NODE_INDEX"));
                            // 占位容器(存索引)
                            let placeholderContainer = localStorage.getItem("PLACEHOLDER_CONTAINER");
                            // 鼠标在父容器中Y坐标
                            let mouseInParentY = offsetY + offsetTop;
                            // 是否已存在占位容器
                            if (!this.validField(placeholderContainer)) {
                                this.insertAfter(parentNode, liNode);
                                this.changeTempNodeIndex(-(currNodeIndex + 1));
                            } else {
                                if (this.validField(parentNode.childNodes[placeholderContainer])) {
                                    // 占位容器前兄弟节点
                                    let preNode;
                                    if (currNodeIndex === 0) {
                                        preNode = parentNode.childNodes[placeholderContainer].previousElementSibling;
                                        if (preNode === liNode) {
                                            preNode = null;
                                        }
                                    } else{
                                        preNode = parentNode.childNodes[placeholderContainer].previousElementSibling;
                                        if (this.validField(preNode)) {
                                            if (preNode === liNode) {
                                                preNode = preNode.previousElementSibling;
                                            }
                                            if (this.validField(preNode)) {
                                                if (!this.validField(preNode.getAttribute("id"))){
                                                    preNode = null;
                                                }
                                            }
                                        }
                                    }

                                    if (this.validField(preNode)) {
                                        // 节点中心Y坐标距父元素高度
                                        let preCenterHeightY = preNode.offsetTop + (preNode.clientHeight + preNode.clientTop * 2) / 2;
                                        // 与移动元素不相等
                                        if (mouseInParentY < preCenterHeightY) {
                                            // 移除标识
                                            parentNode.removeChild(parentNode.childNodes[placeholderContainer])
                                            // 新增标识
                                            this.insertBefore(parentNode, preNode);
                                            if (preNode.nextElementSibling === liNode) {
                                                if (!this.validField(localStorage.getItem("HAS_MOVE_MORE_STEP"))) {
                                                    this.changeTempNodeIndex(2);
                                                    localStorage.setItem("HAS_MOVE_MORE_STEP", "1");
                                                } else {
                                                    this.changeTempNodeIndex(1);
                                                }
                                            } else {
                                                this.changeTempNodeIndex(1);
                                            }
                                        }
                                    }

                                    // 占位容器后兄弟节点
                                    let nextNode = parentNode.childNodes[placeholderContainer].nextElementSibling;
                                    if (this.validField(nextNode)) {
                                        let flag = false;
                                        if (nextNode === liNode) {
                                            nextNode = liNode.nextElementSibling;
                                            flag = true;
                                        }
                                        if (this.validField(nextNode)) {
                                            let nextCenterHeightY = nextNode.offsetTop + (nextNode.clientHeight + nextNode.clientTop * 2) / 2;
                                            if (mouseInParentY >= nextCenterHeightY) {
                                                // 移除标识
                                                parentNode.removeChild(parentNode.childNodes[placeholderContainer])
                                                // 新增标识
                                                this.insertAfter(parentNode, nextNode);
                                                if (flag) {
                                                    localStorage.removeItem("HAS_MOVE_MORE_STEP");
                                                    this.changeTempNodeIndex(-2);
                                                } else {
                                                    this.changeTempNodeIndex(-1);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            outChild(e) {
                // localStorage.removeItem("CURRENT_NODE_ID");
            },
            validField(field) {
                if (null !== field && undefined !== field && '' !== field) {
                    return true;
                } else {
                    return false;
                }
            },
            // 在节点前写入
            insertBefore(parentNode, targetNode) {
                let element = document.createElement("li");
                element.setAttribute("class", "sortable-placeholder");
                parentNode.insertBefore(element,targetNode)
            },
            // 在节点后写入
            insertAfter (parentNode, targetNode) {
                let element = document.createElement("li");
                element.setAttribute("class", "sortable-placeholder");
                if (parentNode.lastChild === targetNode) {
                    // 如果最后的节点是目标元素，则直接添加。因为默认是最后
                    parentNode.appendChild(element);
                } else {
                    // 如果不是，则插入在目标元素的下一个兄弟节点 的前面。也就是目标元素的后面
                    parentNode.insertBefore(element, targetNode.nextSibling);
                }
            },
            // 节点排序
            sortNode(node, idx) {
                node.parentNode.removeChild(node.parentNode.childNodes[idx]);
                let remIndex,newNode;
                this.formItem.forEach((item, index) => {
                    if (item.id === node.id) {
                        remIndex = index;
                        newNode = JSON.parse(JSON.stringify(item));
                    }
                });
                console.log('将第【' + (remIndex + 1) + '】个元素移到第【' + (idx + 1) + '】的位置');
                this.formItem.splice(remIndex, 1); // 删除
                if (remIndex < idx) {
                    this.formItem.splice(idx - 1, 0, newNode); // 新增
                } else {
                    this.formItem.splice(idx, 0, newNode);
                }
            },
            // 变更临时节点索引
            changeTempNodeIndex(step){
                if (!this.validField(localStorage.getItem("PLACEHOLDER_CONTAINER"))) {
                    localStorage.setItem("PLACEHOLDER_CONTAINER", '0');
                }
                localStorage.setItem("PLACEHOLDER_CONTAINER", (parseInt(localStorage.getItem("PLACEHOLDER_CONTAINER")) - step) + '');
            }
        },
        components: {
            radio, checkBox
        }
    }
</script>
<style>
    body {
        background: linear-gradient(to right bottom, #accbee, #e7f0fd);
    }
    .diy-wrap {
        -webkit-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
    ul,li{
        list-style: none;
    }
    .diy-wrap>.form-body-wrap {
        display: flex;
        margin-left: auto;
        margin-right: auto;
        height: calc(100vh - 64px);
        justify-content: space-between;
    }
    .diy-wrap>.form-body-wrap>div:nth-child(1) {
        width: 320px;
        box-shadow: 0 0 4px 0 #e2e2e2;
        float: left;
        margin-right: 8px;
        overflow: auto;
        flex-shrink: 0;
        background: rgba(255, 255, 255, 0.2);
        backdrop-filter: blur(10px);
    }
    .diy-wrap>.form-body-wrap>div:nth-child(2){
        position: relative;
    }
    .diy-wrap>.form-body-wrap>div:nth-child(2)>div:first-child {
        width: 700px;
        height: calc(100% - 70px);
        border-radius: 4px;
        padding-bottom: 5px;
        position: relative;
        background: linear-gradient(to right, rgba(255, 255, 255, .5), rgba(255, 255, 255, .2));
    }
    .diy-wrap>.form-body-wrap>div:nth-child(2)>.form-footer {
        position: absolute;
        height: 60px;
        line-height: 60px;
        bottom: 0;
        left: 0;
        width: 100%;
        color: #a6a6b0;
        font-family: '微软雅黑', '宋体', serif;
        font-size: 14px;
        background: linear-gradient(to right, rgba(255, 255, 255, .5), rgba(255, 255, 255, .2));
    }
    .diy-wrap>.form-body-wrap>div:nth-child(2)>.form-footer>div {
        position: absolute;
        right: 0;
        bottom: 0;
        padding: 0 10px;
    }
    .form-footer>div>a {
        margin-right: 10px;
        background: #f2f3f4;
        padding: 2px 20px;
        border-radius: 12px;
        color: #b3b8c1;
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
        position: relative;
        display: inline-block;
    }
    .tab-item>li>a {
        display: block;
        padding: 10px 5px 12px;
        cursor: pointer;
        position: relative;
        background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0));
        transform: scale(1);
        transition: all .4s linear;
    }
    .tab-item>li>a:hover {
        background: linear-gradient(to right, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3));
        border-radius: 4px;
        transform: scale(1.1);
    }
    a {
        text-decoration: none;
        color: #051433;
    }
    .view-middle{
        overflow: visible;
    }
    .view-middle>.form>.form-body>ul {
        position: relative;
        padding: 0 0 20px;
        display: inline-block;
        width: 100%;
    }
    .view-middle>.form>.form-body>ul::after{
        display: table;
        content: "";
        clear: both;
    }
    .form-body>ul>li {
        margin-top: 12px;
        border-radius: 4px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
        min-height: 60px;
        overflow: visible;
        color: #484848;
        text-align: left;
        border: 1px solid transparent;
        position: relative;
    }
    .form-body>ul>li.sortable-placeholder{
        height: 12px!important;
        min-height: 12px!important;
    }
    .form-body>ul>li:not(.sortable-placeholder):hover{
        cursor: pointer;
        border: 1px dashed #aaa!important;
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
    .tabTitle {
        font-family: '微软雅黑', '宋体', serif;
        font-weight: 600;
        font-size: 14px;
        line-height: 48px;
        padding: 0 24px;
        background: linear-gradient(to right, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.3));
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
        background: rgba(255,255,255,0.5);
        -webkit-backdrop-filter: blur(2px);
        backdrop-filter: blur(2px);
    }
    .ui-draggable-dragging a {
        display: block;
        padding: 10px 5px 12px;
        color: #2e73ff;
    }
    .ui-draggable-dragging a i {
        font-size: 20px;
    }
    .ui-draggable-dragging a span {
        display: block;
        padding-top: 5px;
        font-size: 14px;
    }

    /*----------表头----------*/
    .form-header {
        width: 100%;
        padding: 20px 15px;
        text-align: left;
        font-family: '微软雅黑', '宋体', serif;
        /*border: 1px dashed transparent;*/
        position: relative;
        background: linear-gradient(to left, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3));
    }
    .form-header>div:first-child {
        font-size: 22px;
        font-weight: normal;
        margin: 0 0 5px;
    }
    .form-header>.header-desc-wrap {
        font-size: 14px;
        padding: 5px 0;
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
        margin-left: 12px;
        width: 400px;
        box-sizing: border-box;
        font-size: 14px;
        font-family: '微软雅黑', '宋体', serif;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2));
    }
    .right-property-wrap p{
        margin: 0;
    }


    /*-------------------*/
    .form-header-wrap {
        display: flex;
        justify-content: space-between;
        position: relative;
        line-height: 64px;
        height: 64px;
        box-shadow: 0 2px 4px 0 rgba(5, 20, 51, 0.1);
        z-index: 999;
        padding: 0 20px;
        background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.2));
        backdrop-filter: blur(10px);
    }
    .form-header-wrap>.left-back{
        text-align: left;
        overflow: hidden;
        padding: 0;
        line-height: 64px;
        border: 0;
    }
    .form-header-wrap>.left-back>a:hover{
        color: #2e73ff;
    }
    .form-header-wrap>.left-back>a>span{
        font-weight: 600;
        font-size: 16px;
        vertical-align: top;
    }
    .form-header-wrap>.left-back>a>i{
        font-size: 20px;
    }
    .middle-option>ul{
        display: flex;
        justify-content: space-evenly;
    }
    .middle-option>ul>li.sys-option{
        cursor: pointer;
        font-family: '微软雅黑', '宋体', serif;
        margin: 0 5px;
    }
    .middle-option>ul>li.sys-option:hover{
        color: #2e73ff;
    }
    .middle.line {
        width: 32px;
        height: 0;
        border-top: solid 1px #e5e7ea;
        vertical-align: middle;
        margin: 0 4px;
        display: inline-block;
        font-size: 16px;
    }
    .right-event>.btn{
        position: relative;
        display: inline-block;
        padding: 0 24px;
        text-align: center;
        border: 1px solid #b3b8c1;
        line-height: 30px;
        color: #828999;
        background: #fff;
        border-radius: 4px;
        margin: 0 4px;
        cursor: pointer;
        user-select: none;
    }
    .right-event>.btn.blue{
        color: #fff;
        background: #2e73ff;
        border-color: #2e73ff;
    }
    .right-event>.btn.blue:hover {
        background-color: #578fff;
        border-color: #578fff;
    }
    .right-event>.btn.wireframe {
        border-color: #2e73ff;
        color: #2e73ff;
        background-color: #fff;
    }
    .right-event>.btn.wireframe:hover {
        border-color: #578fff;
        color: #578fff;
    }
    .controls-left::-webkit-scrollbar,.view-middle::-webkit-scrollbar {
        display: none;
    }
    .sortable-placeholder {
        border-radius: unset!important;
        display: block;
        background-color: #2672ff !important;
        visibility: visible !important;
        height: 8px !important;
    }
</style>
