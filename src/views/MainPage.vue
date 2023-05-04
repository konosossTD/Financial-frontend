<template>
  <div class="asset-management-system">
    <div class="main">
      <div class="content">
        <h1>欢迎来到资产托管系统</h1>
        <p>资产托管系统是一个集股票、基金、资产管理等功能于一体的综合性投资管理平台。我们致力于为广大投资者提供安全、高效、便捷的投资服务。</p>
        <h2>我们的优势</h2>
        <ul>
          <li>多元化投资产品，覆盖股票、基金等多种投资品种</li>
          <li>优秀的投资团队，严格的风险控制和资产管理</li>
          <li>全方位的投资服务，随时随地满足您的投资需求</li>
        </ul>
        <h2>我们的服务</h2>
        <ul>
          <li>股票交易</li>
          <li>基金交易</li>
          <li>资产管理</li>
          <li>投资顾问服务</li>
          <li>资产托管服务</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loggedIn: false, // 是否已登录，这里为了演示方便设为 false
      username: "Guest", // 用户名，这里为了演示方便设为 "Guest"
    };
  },
};
</script>

<style scoped>
.asset-management-system {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
  padding: 16px;
  background-color: #f5f5f5;
}

.content {
  background-color: #fff;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
}
</style>
