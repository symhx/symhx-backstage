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
                            <ul ref="drop-ul-wrap" @mousemove="moveChild" @mouseleave="outChild" @mouseup="endChild">
                                <template v-for="(item,index) in formItem" >
                                    <li v-if="item!==''" :key="'item'+index" :id="getIndex(item)" :ref="getIndex(item)" @mousedown="startChild(index,$event)">
                                        {{getIndex(item) + 1}}-{{item}}
                                    </li>
                                    <li ref="temp-li" :key="item" v-else class="sortable-placeholder">

                                    </li>
                                </template>
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
                    '<li>one</li>',
                    '<li>two</li>',
                    '<li>three</li>',
                    '<li>four</li>'
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
        },
        created() {
        },
        computed: {
            computingClientWidth() {
                return this.$refs['drop-ul-wrap'].clientWidth;
            },
            computingClientHeight() {
                console.log();
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
                sessionStorage.setItem("id", e.target.getAttribute("id"));
                sessionStorage.setItem("title", e.target.getAttribute("title"));
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
                    if (e.clientY >= this.position.offsetY && e.clientY < this.position.offsetY + this.position.clientHeight + 20 && e.clientX > this.position.offsetX && e.clientX < this.position.offsetX + this.position.clientWidth) {
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
                // console.log(sessionStorage.getItem("id"))
                // console.log(sessionStorage.getItem("title"))
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
                if (e.clientY > this.position.offsetY && e.clientY < this.position.offsetY + this.position.clientHeight + 20 && e.clientX > this.position.offsetX && e.clientX < this.position.offsetX + this.position.clientWidth) {
                    let element = document.createElement("li");
                    let text = document.createTextNode("Hi there and greetings!");
                    element.appendChild(text);
                    this.$refs['drop-ul-wrap'].appendChild(element);
                    this.position.offsetY = this.$refs['drop-ul-wrap'].clientHeight - 20 + this.$refs['view-box'].parentNode.offsetTop + this.$refs['formHeader'].offsetHeight + this.$refs['drop-ul-wrap'].offsetTop
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
            },
            startChild(index, e) {
                localStorage.setItem("child-li-index", index);
                localStorage.setItem("child-move-enable", e.target.getAttribute("id"));
                let offsetX
                if (e.offsetX < 0) {
                    offsetX = 0;
                } else {
                    offsetX = e.offsetX
                }
                localStorage.setItem("mouse-click-left-x", e.target.offsetLeft); // 距左边像素
                localStorage.setItem("mouse-click-left-y", e.target.offsetTop); // 距上边像素
                localStorage.setItem("mouse-click-x", e.clientX); // 鼠标整个页面的x坐标
                localStorage.setItem("mouse-click-y", e.clientY); // 鼠标整个页面的y坐标
                localStorage.setItem("mouse-click-init-x", (offsetX + e.target.offsetLeft)) // ul中鼠标x坐标;
                localStorage.setItem("mouse-click-init-y", (e.offsetY + e.target.offsetTop)) // ul中鼠标y坐标;
            },
            endChild(e) {
                let curr = this.$refs[localStorage.getItem("child-move-enable")];
                curr[0].style.position = 'relative';
                curr[0].style.left = 0 + 'px';
                curr[0].style.top = 0 + 'px';
                curr[0].style.zIndex = '99';
                curr[0].style.width = 'auto';
                curr[0].style.opacity = '1';
                curr[0].style.border = '1px solid transparent';
                localStorage.removeItem("child-move-enable");
                localStorage.removeItem("mouse-click-x")
                localStorage.removeItem("mouse-click-y")
                localStorage.removeItem("mouse-click-init-x")
                localStorage.removeItem("mouse-click-init-y")
                //删除插入盒子标识
                if (null !== localStorage.getItem("temp-flag")) {
                    let index = parseInt(localStorage.getItem("temp-flag"));
                    this.formItem.splice(index, 1);
                    localStorage.removeItem("temp-flag");
                }
                localStorage.removeItem("move_flag");
            },
            moveChild: function (e) {
                if (null != localStorage.getItem("child-move-enable")) {
                    if (e.clientX > 0 && e.clientY > 0) {
                        let index = parseInt(localStorage.getItem("child-li-index"));
                        // 检查是否已插入盒子标识
                        let flag = localStorage.getItem("temp-flag");
                        if (flag === null) {
                            // localStorage.setItem("temp-flag", index + 1);
                            // this.formItem.splice(index + 1, 0, '');
                            let element = document.createElement("li");
                            element.setAttribute("class", "sortable-placeholder");
                            // let parent = e.target.parentNode;
                            console.log(this.$refs['drop-ul-wrap'])
                            // .insertAfter(element,e.target);
                            // console.log(e.target)
                            // e.parentNode.insertBefore(element, e.target);
                        }
                        // console.log(this.$refs[index + ''][0].previousElementSibling);
                        // console.log(this.$refs[index + ''][0].nextElementSibling);
                        // 计算下一位元素坐标
                        if (this.$refs['temp-li'] !== undefined && this.$refs['temp-li'].length > 0) {
                            // console.log(e.target.getAttribute("id")) // 移动标签ID
                            // console.log(this.$refs['temp-li'][0].previousElementSibling.id); //占位标签前一个元素ID
                            // console.log(this.$refs['temp-li'][0].nextElementSibling.id); //占位标签后一个元素ID
                            let nextNode = this.$refs['temp-li'][0].nextElementSibling;
                            let moveY = e.offsetY + e.target.offsetTop;
                            let nextY = nextNode.offsetTop + (nextNode.clientHeight + nextNode.clientTop * 2) / 2;
                            // if (moveY > nextY) {
                            //     nextNode.parentNode.insertBefore(e.target,nextNode.nextSibling);
                            // }
                        }
                        // console.log(this.$refs['temp-li'].previousElementSibling);
                        // console.log(this.$refs['temp-li'].nextElementSibling);
                        // let nextNode = this.$refs[(index + 1) + ''][0];
                        // let moveY = nextNode.offsetTop + (nextNode.clientHeight + nextNode.clientTop * 2) / 2;
                        // if (e.offsetY + e.target.offsetTop > moveY) {
                        //     //放置标识下移
                        //     if (null == localStorage.getItem("move_flag")) {
                        //         this.formItem.splice(index + 1, 1);
                        //         localStorage.setItem("move_flag", 1);
                        //         localStorage.setItem("temp-flag", index + 2);
                        //         this.formItem.splice(index + 2, 0, '');
                        //     }
                        // } else {
                        //     if (null != localStorage.getItem("move_flag")) {
                        //         if (e.offsetY + e.target.offsetTop < moveY) {
                        //             this.formItem.splice(index + 2, 1);
                        //             // localStorage.removeItem("temp-flag");
                        //         }
                        //     }
                        // }
                        // 计算上一位元素坐标

                        let curr = this.$refs[localStorage.getItem("child-move-enable")];
                        curr[0].style.position = 'absolute'
                        curr[0].style.position = 'absolute';
                        // console.log(e.clientY - (this.$refs['view-box'].parentNode.offsetTop + this.$refs['formHeader'].offsetHeight + this.$refs['drop-ul-wrap'].offsetTop))
                        curr[0].style.zIndex = '1000';
                        curr[0].style.width = 'calc(100% - 24px)';
                        curr[0].style.opacity = '0.9';
                        curr[0].style.border = '2px solid #2672ff';
                        let d = parseInt(localStorage.getItem("mouse-click-init-y")) - parseInt(localStorage.getItem("mouse-click-left-y"));
                        curr[0].style.left = (e.clientX - this.$refs['view-box'].parentNode.offsetLeft - parseInt(localStorage.getItem("mouse-click-init-x"))) - 2 + 'px';
                        curr[0].style.top = e.clientY - (this.$refs['view-box'].parentNode.offsetTop + this.$refs['formHeader'].offsetHeight + this.$refs['drop-ul-wrap'].offsetTop) - d - 13 + 'px';
                    }
                }
            },
            outChild(e) {
                localStorage.removeItem("child-move-enable");
            },
            getIndex(item) {
                return JSON.parse(JSON.stringify(this.formItem)).filter(item => item !== '').indexOf(item);
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
        background: #e5e7ea;
    }
    .diy-wrap>.form-body-wrap>div:nth-child(1){
        width: 320px;
        background: #fff;
        box-shadow: 0 0 4px 0 #dfdfdf;
        float: left;
        margin-right: 8px;
        overflow: auto;
        flex-shrink:0
    }
    .diy-wrap>.form-body-wrap>div:nth-child(2){
        position: relative;
    }
    .diy-wrap>.form-body-wrap>div:nth-child(2)>div:first-child {
        width: 700px;
        height: calc(100% - 70px);
        border-radius: 2px;
        border-left: 1px solid rgba(217, 217, 217, 1);
        border-right: 1px solid rgba(217, 217, 217, 1);
        padding-bottom: 5px;
        background: #ffffff;
        box-shadow: 0 2px 5px 0 #d9d9d9;
        position: relative;
    }
    .diy-wrap>.form-body-wrap>div:nth-child(2)>.form-footer {
        position: absolute;
        height: 60px;
        line-height: 60px;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #FFFFFF;
        color: #a6a6b0;
        font-family: '微软雅黑', '宋体', serif;
        font-size: 14px;
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
    .view-middle{
        overflow: visible;
    }
    .view-middle>.form>.form-body>ul{
        position: relative;
        padding: 0 0 20px;
        display: inline-block;
        width: 100%;
        background: #f3f5f6;
        position: relative;
    }
    .view-middle>.form>.form-body>ul::after{
        display: table;
        content: "";
        clear: both;
    }
    .form-body>ul>li {
        margin: 12px 12px 0;
        border-radius: 4px;
        background-color: #fff;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.1);
        height: 60px;
        line-height: 60px;
        overflow: visible;
        color: #484848;
        text-align: left;
        border: 1px solid transparent;
        position: relative;
    }
    .form-body>ul>li:hover{
        cursor: pointer;
        border: 1px dashed #aaa;
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
        padding: 20px 15px;
        text-align: left;
        font-family: '微软雅黑', '宋体', serif;
        /*border: 1px dashed transparent;*/
        position: relative;
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
        width: 400px;
        box-sizing: border-box;
        background: #fff;
        font-size: 14px;
        font-family: '微软雅黑', '宋体', serif;
    }
    .right-property-wrap p{
        margin: 0;
    }


    /*-------------------*/
    .form-header-wrap{
        display: flex;
        justify-content: space-between;
        position: relative;
        background: #fff;
        line-height: 64px;
        height: 64px;
        box-shadow: 0 2px 4px 0 rgba(5,20,51,0.1);
        z-index: 999;
        padding: 0 20px;
    }
    .form-header-wrap>.left-back{
        text-align: left;
        width: 200px;
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
    .controls-left::-webkit-scrollbar{
        display: none;
    }

    .sortable-placeholder {
        border-radius: unset!important;
        display: block;
        background-color: #2672ff !important;
        visibility: visible !important;
        height: 8px !important;
        width: calc(100% - 24px) !important;
    }
</style>
