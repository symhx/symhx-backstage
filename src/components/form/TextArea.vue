<template>
    <div class="dynamic-text-area-wrap" :class="[arrangement]">
        <div class="label text-area-label" :class="[showLabel?'label-show':'label-hidden']" :style="{width: labelWidth +'px'}">
            <span>{{labelName}}</span>
        </div>
        <div class="module text-area-module" :style="{width: optionContainerWidth + '%'}">
            <div class="text-area-box">
                <span class="text-area-placeholder">{{promptInformation}}</span>
                <div class="text-word-count-wrap">
                    <span>{{currentTextWordCount}}</span>/<span>{{totalWordCount}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TextArea",
        props: {
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
            // 标题
            labelName: {
                type: String,
                default: () => {
                    return '多行文本';
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
                    return "请输入提示文字...";
                }
            },
            totalWordCount: {
                type: Number,
                default: () => {
                    return 500;
                }
            }
        },
        data() {
            return {
                currentTextWordCount: 0
            }
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
    .dynamic-text-area-wrap {
        padding: 10px 20px;
        display: flex;
    }
    .dynamic-text-area-wrap.input-wrap-style-column{
        flex-direction: column;
    }
    .input-wrap-style-column>.text-area-label.label-show{
    }
    /********************label样式*******************************/
    .input-wrap-style-row>.text-area-label{
        display: flex;
        justify-content: flex-end;
        padding: 0 15px 0 0;
    }
    /********************input框样式********************************/
    .dynamic-text-area-wrap.input-wrap-style-column >.text-area-module{
        width: 100%;
    }
    .dynamic-text-area-wrap >.text-area-module>.text-area-box {
        width: 100%;
        background: #ffffff;
        border: 1px solid #dcdee2;
        border-radius: 4px;
        height: 100px;
        padding: 4px 6px;
        margin: 20px 0 0;
        position: relative;
        resize: vertical;
        overflow: hidden;
    }
    .dynamic-text-area-wrap>.text-area-module>.text-area-box>.text-area-placeholder {
        color: #c5c8d7;
        font-size: 14px;
    }
    .dynamic-text-area-wrap>.text-area-module>.text-area-box>.text-word-count-wrap {
        position: absolute;
        bottom: 0;
        right: 10px;
        color: #c5c8d7;
        font-size: 14px;
    }
    .dynamic-text-area-wrap>.text-area-module>.text-area-box>.text-word-count-wrap span {
        color: #c5c8d7;
        font-size: 14px;
    }

    .input-wrap-style-row .text-area-module>.text-area-box{
        margin-top: unset;
    }
</style>
