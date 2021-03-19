<template>
    <div class="dynamic-radio-wrap" :class="[arrangement]">
        <div class="label radio-label" :class="[showRadioLabel?'label-show':'label-hidden']" :style="{width: labelWidth +'px'}">
            <span>{{labelName}}</span>
        </div>
        <div class="module radio-module" :class="[radioItemLayout]" :style="{width: optionContainerWidth + '%'}">
            <div class="module-wrap" v-for="(item,index) in radioItemList" :key="item">
                <span class="shape circle" :class="{'select-item':index===selectedItem}"></span>
                <span class="item-label">{{item}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Radio',
        props: {
            // 排列方式
            arrangement: {
                type: String,
                default: () => {
                    /**
                     * 行样式
                     * 1.dynamic-radio-wrap-style-row
                     * 列样式
                     * 2.dynamic-radio-wrap-style-column
                     */
                    return 'dynamic-radio-wrap-style-row';
                }
            },
            // 标题显示状态
            showRadioLabel: {
                type: Boolean,
                default: () => {
                    return true;
                }
            },
            // 标题
            labelName: {
                type: String,
                default: () => {
                    return '单选框';
                }
            },
            // 标题宽度
            labelWidth: {
                type: Number,
                default: () => {
                    /**
                     * 50  一半
                     * 100 铺满
                     */
                    return 100;
                }
            },
            // 选项
            radioItemList: {
                type: Array,
                default: () => {
                    return ['成啊啊啊啊啊啊啊啊啊都', '啊啊啊啊啊啊啊啊啊重庆', '山啊啊啊啊啊啊啊啊西', '云南', '湖北', '西藏', '青海', '浙江', '江西'];
                }
            },
            // 选项容器宽度
            optionContainerWidth: {
                type: Number,
                default: () => {
                    return 100;
                }
            },
            // 选项排列方式
            radioItemLayout: {
                type: String,
                default: () =>{
                    /**
                     * 行样式
                     * 1.dynamic-radio-wrap-style-row
                     * 列样式
                     * 2.dynamic-radio-wrap-style-column
                     */
                    return 'radio-module-style-row'
                }
            },
            selectedItem: {
                type: Number,
                default: () =>{
                    return 1
                }
            }
        },
        data() {
            return {
                radio: '1'
            };
        },
        methods:{

        },
        created() {
        },
        watch: {

        }
    }
</script>

<style scoped>
    /****************通用设置*********************/
    *{
        font-size: 16px;
        font-family: '微软雅黑', '宋体', serif;
        font-weight: 500;
        color: #333333;
        text-align: left;
        letter-spacing: 1px;
    }
    .dynamic-radio-wrap {
        padding: 10px;
        display: flex;
    }
    .dynamic-radio-wrap-style-row {
        flex-direction: row;
    }
    .dynamic-radio-wrap-style-column {
        flex-direction: column;
    }
    .dynamic-radio-wrap-style-row>.radio-label.label-show{
        flex-shrink: 0;
    }
    /***************标题************************/
    .dynamic-radio-wrap-style-row>.radio-label.label-show {
        min-width: 60px;
        padding: 0 10px;
        display: flex;
        justify-content: flex-end;
    }
    .dynamic-radio-wrap-style-row>.radio-module{
        padding: 0;
    }
    .dynamic-radio-wrap-style-row>.radio-module .module-wrap{
        padding: 0 5px;
        display: flex;
        align-items: center;
        margin: 5px 0 10px;
    }
    .dynamic-radio-wrap-style-row>.radio-module .module-wrap>span {
        vertical-align: middle;
    }
    .radio-label.label-show {
        display: inline-block;
    }
    .radio-label.label-hidden {
        display: none;
    }
    /***************选项wrap*************************/
    .radio-module {
        display: flex;
        padding: 5px 0;
    }
    .radio-module.radio-module-style-column{
        flex-direction: row;
        flex-wrap: wrap;
    }
    .dynamic-radio-wrap-style-column .radio-module.radio-module-style-column>.module-wrap{
        width: calc(100% / 3);
        flex-grow: 1;
    }
    .radio-module.radio-module-style-row {
        flex-direction: row;
        flex-wrap: wrap;
        flex-shrink: 1;
        flex-grow: 0;
    }
    /**************选项容器*******************/
    .radio-module-style-column .module-wrap {
        width: 100%;
    }
    .radio-module-style-row .module-wrap{
        display: flex;
    }
    .module-wrap {
        padding: 8px 5px;
        display: flex;
        overflow: hidden;
    }
    .module-wrap>span:first-child {
        flex-shrink: 0;
    }
    .module-wrap>span {
        vertical-align: middle;
        font-size: 14px;
    }
    /***************选项形状**************/
    .module-wrap > .circle.select-item{
        position: relative;
    }
    .module-wrap > .circle.select-item::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        border: 5px solid #2e73ff;
        border-radius: 50%;
    }
    /***************选项****************/
    .shape {
        display: inline-block;
        width: 16px;
        height: 16px;
        background: #FFFFFF;
        border: 1px solid #dcdfe6;
        vertical-align: top;
    }
    .shape.circle{
        border-radius: 50%;
    }
    .dynamic-radio-wrap-style-column .radio-module-style-row{
        margin-top: 10px;
    }
    .dynamic-radio-wrap-style-column .radio-module-style-row>.module-wrap {
        padding: 8px 10px 8px 0;
    }
    /****************选项标题*************/
    .item-label {
        margin-left: 10px;
        display: inline-block;
        line-height: 1.2em;
        letter-spacing: 1px;
        white-space: nowrap;
    }
</style>
