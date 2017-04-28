<template>
  <div>
  <Alert>
    消息提示文案
    <template slot="desc">消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案消息提示的描述文案</template>
  </Alert>
  <Alert type="success">
    成功提示文案
    <span slot="desc">成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案成功的提示描述文案</span>
  </Alert>
  <Alert type="warning">
    警告提示文案
    <template slot="desc">
      警告的提示描述文案警告的提示描述文案警告的提示描述文案
    </template>
  </Alert>
  <Alert type="error">
    错误提示文案
    <span slot="desc">
            自定义错误描述文案。<Icon type="help-circled" size="14"></Icon>
        </span>
  </Alert>
  </div>
</template>
<script>
  export default {

  }
</script>
