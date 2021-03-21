<template>
    <div class="dynamic-input-wrap" :class="[arrangement]">
        <div class="label input-label" :class="[showLabel?'label-show':'label-hidden']" :style="{width: labelWidth +'px'}">
            <span>{{attrObj.labelName}}</span>
        </div>
        <div class="module input-module" :style="{width: optionContainerWidth + '%'}">
            <div class="input-box">
                <span class="input-placeholder">{{promptInformation}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Input",
        props: {
            // 属性对象
            attrObj: {
                type: Object,
                default: ()=> {
                    return {};
                }
            },
            // 排列方式
            arrangement: {
                type: String,
                default: () => {
                    /**
                     * 行样式
                     * 1.input-wrap-style-row
                     * 列样式
                     * 2.input-wrap-style-column
                     */
                    return 'input-wrap-style-column';
                }
            },
            // 标题显示状态
            showLabel: {
                type: Boolean,
                default: () => {
                    return true;
                }
            },
            // 标题宽度
            labelWidth: {
                type: Number,
                default: () => {
                    return 120;
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
            // 提示文字
            promptInformation:{
                type: String,
                default: ()=>{
                    return "请输入提示文字..."
                }
            }
        },
        data() {
            return {
                // labelName: this.attrObj.labelName
            }
        },
        created() {
            console.log(this.attrObj.labelName);
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
    /*******************父容器样式************************/
    .dynamic-input-wrap {
        padding: 10px 20px;
        display: flex;
    }
    .dynamic-input-wrap.input-wrap-style-column{
        flex-direction: column;
    }
    .input-wrap-style-column>.input-label.label-show{
    }
    /********************input框样式********************************/
    .dynamic-input-wrap.input-wrap-style-column >.input-module{
        width: 100%;
    }
    .dynamic-input-wrap.input-wrap-style-column >.input-module>.input-box {
        width: 100%;
        background: #ffffff;
        border: 1px solid #dcdee2;
        border-radius: 4px;
        height: 32px;
        padding: 4px 6px;
        margin: 20px 0 0;
        position: relative;
    }
    .dynamic-input-wrap.input-wrap-style-column >.input-module>.input-box>.input-placeholder {
        color: #c5c8d7;
        font-size: 14px;
    }
</style>
