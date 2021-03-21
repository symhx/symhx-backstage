<template>
    <div class="dynamic-check-box-wrap" :class="[arrangement]">
        <div class="label check-box-label" :class="[showLabel?'label-show':'label-hidden']" :style="{width: labelWidth +'px'}">
            <span>{{labelName}}</span>
        </div>
        <div class="module check-box-module" :class="[itemLayout]" :style="{width: optionContainerWidth + '%'}">
            <div class="module-wrap" v-for="(item,index) in itemList" :key="item">
                <span class="shape rectangle" :class="{'select-item':index===selectedItem}"></span>
                <span class="item-label">{{item}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CheckBox",
        props: {
            // 排列方式
            arrangement: {
                type: String,
                default: () => {
                    /**
                     * 行样式
                     * 1.check-box-wrap-style-row
                     * 列样式
                     * 2.check-box-wrap-style-column
                     */
                    return 'check-box-wrap-style-column';
                }
            },
            // 标题显示状态
            showLabel: {
                type: Boolean,
                default: () => {
                    return true;
                }
            },
            // 标题
            labelName: {
                type: String,
                default: () => {
                    return '复选框';
                }
            },
            // 标题宽度
            labelWidth: {
                type: Number,
                default: () => {
                    return 100;
                }
            },
            // 选项
            itemList: {
                type: Array,
                default: () => {
                    return ['成都', '重庆', '山西', '云南', '湖北', '西藏', '青海', '浙江', '江西'];
                }
            },
            // 选项容器宽度
            optionContainerWidth: {
                type: Number,
                default: () => {
                    /**
                     * 50  一半
                     * 100 铺满
                     */
                    return 100;
                }
            },
            // 选项排列方式
            itemLayout: {
                type: String,
                default: () =>{
                    /**
                     * 行样式
                     * 1.check-box-module-style-row
                     * 列样式
                     * 2.check-box-module-style-column
                     */
                    return 'check-box-module-style-row'
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
            return {};
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
    .dynamic-check-box-wrap {
        padding: 10px 20px;
        display: flex;
    }
    .check-box-wrap-style-row {
        flex-direction: row;
    }
    .check-box-wrap-style-column {
        flex-direction: column;
    }
    .check-box-wrap-style-row>.check-box-label.label-show{
        flex-shrink: 0;
    }
    /***************标题************************/
    .check-box-wrap-style-row>.check-box-label.label-show {
        min-width: 60px;
        padding: 0 10px;
        display: flex;
        justify-content: flex-end;
    }
    .check-box-wrap-style-row>.check-box-module{
        padding: 0;
    }
    .check-box-wrap-style-row>.check-box-module .module-wrap{
        padding: 0 5px;
        display: flex;
        align-items: center;
        margin: 5px 0 10px;
    }
    .check-box-wrap-style-row>.check-box-module .module-wrap>span {
        vertical-align: middle;
    }
    .check-box-label.label-show {
        display: inline-block;
    }
    .check-box-label.label-hidden {
        display: none;
    }
    /***************选项wrap*************************/
    .check-box-module {
        display: flex;
        padding: 5px 0;
    }
    .check-box-module.check-box-module-style-column{
        flex-direction: row;
        flex-wrap: wrap;
    }
    .check-box-wrap-style-column .check-box-module.check-box-module-style-column>.module-wrap{
        padding-left: 0;
    }
    .check-box-module.check-box-module-style-row {
        flex-direction: row;
        flex-wrap: wrap;
        flex-shrink: 1;
        flex-grow: 0;
    }
    /**************选项容器*******************/
    .check-box-module-style-column .module-wrap {
        width: 100%;
    }
    .check-box-module-style-row .module-wrap{
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
    .module-wrap > .rectangle.select-item {
        position: relative;
        background: #2e73ff;
    }
    .module-wrap > .rectangle.select-item::after {
        content: '';
        width: 4px;
        height: 8px;
        position: absolute;
        top: 2px;
        left: 5px;
        border: 2px solid #ffffff;
        border-top: 0;
        border-left: 0;
        transform: rotate(48deg) scale(1);
        transition: all .2s ease-in-out;
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
    .shape.rectangle{
        border-radius: 0%;
    }
    .check-box-wrap-style-column .check-box-module-style-row{
        margin-top: 10px;
    }
    .check-box-wrap-style-column .check-box-module-style-row>.module-wrap {
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
