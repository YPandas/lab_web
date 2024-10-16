<template>
    <a :href="link" class="jump-button-container" :style="{ backgroundColor: containerColor, borderColor: textColor }">
      <div class="button-text" :style="{ color: textColor }">
        {{ text }}
      </div>
      <div class="button-arrow" :style="{ color: textColor }"></div>
    </a>
  </template>
  
  <script>
  export default {
    name: 'JumpButton',
    props: {
      text: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        default: '#', // 默认链接为空
      },
      container_color: {
        type: String,
        default: 'black', // 设置默认颜色为黑色
      },
      text_color: {
        type: String,
        default: 'white', // 默认文本颜色为白色
      },
      button_text: {
        type: String,
        default: '',
      }
    },
    computed: {
      // 计算属性，用于动态设置样式
      containerColor() {
        return this.container_color || 'black';
      },
      textColor() {
        return this.text_color || 'white';
      },
      computedButtonText() {
        return this.button_text || this.text; // 如果 button_text 没有提供，则使用 text
      },
    },
  };
  </script>
  
  <style scoped lang="less">
  .jump-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border: 3px solid;
    padding: 0.2em 0.4em;
    cursor: pointer;
    transition: letter-spacing 0.3s ease-in-out, background-color 0.3s ease-in-out;
    text-decoration: none;
    &:hover {
      letter-spacing: 0.1em;
    }
    .button-text {
      font-family: 'Open Sans', Helvetica, Arial, Lucida, sans-serif;
      font-weight: 600;
      color: white;
    }
    .button-arrow {
      width: 0;
      height: 0;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-left: 8px solid;
      margin-left: 0.7em;
    }
  }
  </style>
  