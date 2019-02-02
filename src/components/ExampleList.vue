<template>
  <el-row :gutter="20">
    <el-col :span="6" v-for="(o) in this.tableData" :key="o">
      <el-card :body-style="{ padding: '0px' }">
        <img
          v-bind:src="o.logoUrl||'https://data-center-service.oss-cn-shanghai.aliyuncs.com/logo.jpg'"
          class="image"
        >
        <div style="padding: 14px;">
          <span>{{o.name}}</span>
          <div class="bottom clearfix">
            <time class="sub-title">{{o.server || '未知服务商'}}</time>
          </div>
          <div class="bottom clearfix">
            <el-button size="mini" round @click="handleView(o)">访问网站</el-button>
            <el-button size="mini" round @click="handleViewGithub(o)" type="success">访问Github</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
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
          githubUrl: 'https://github.com/data-center-service/data-center-web',
          server: 'Data-Center-Service'
        },
        {
          name: '租房信息分布',
          url: 'http://web.data-center-service.top:8081/#/person/rent_house',
          githubUrl: 'https://github.com/data-center-service/data-center-web',
          server: 'Data-Center-Service'
        }
      ]
    }
  }
}
</script>

<style scoped>
.sub-title {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.el-card {
  margin-bottom: 20px;
}
</style>
