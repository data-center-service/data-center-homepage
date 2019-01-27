<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="name" label="示例名称" width="180"></el-table-column>
    <el-table-column prop="url" label="项目地址" width="360">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleView(scope.row)">访问</el-button>
      </template>
    </el-table-column>
    <el-table-column prop="githubUrl" label="Github">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleViewGithub(scope.row)">访问</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'ExampleList',
  methods: {
    handleView (example) {
      window.open(example.url)
    },
    handleViewGithub (example) {
      window.open(example.githubUrl)
    }
  },
  data () {
    return {
      tableData: [
        {
          name: '区域商家类型分布',
          url:
            'http://web.data-center-service.top:8081/#/business/shop_falvors',
          githubUrl: 'https://github.com/data-center-service/data-center-web'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
