<template>
    <div class="dropdown-menu">
      <ul>
        <!-- 动态渲染数组中的每个字符串和链接 -->
        <li v-for="(item, index) in menuItems" :key="index">
          <a :href="menuLinks[index]">{{ item }}</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "DropDownMenu",
    props: {
      menuItems: {
        type: Array,
        required: true, // 接收一个字符串数组
      },
      menuLinks: {
        type: Array,
        required: true, // 接收一个链接数组
      },
    },
  };
</script>
  
<style scoped lang="less">
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    background-color: black;
    color: white;
    z-index: 10;
    padding: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    border-top: 5px solid yellow; /* 黄色的上边框 */
    width: auto;
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    li {
        margin: 10px 0;
        font-size: 0.8em;
    }
    
    a {
        color: white;
        text-decoration: none;
        transition: color 0.3s;
    
        &:hover {
        color: rgb(183, 183, 183); /* 鼠标悬停时文字变为黄色 */
        }
    }
}
</style>
  