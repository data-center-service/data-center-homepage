 <template>
  <div>
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
              <time class="sub-title">{{o.apiVersion || '未知版本'}}</time>
            </div>
            <div class="bottom clearfix">
              <time class="sub-title">{{o.apipublishDate || '未知日期'}} 发布</time>
            </div>
            <div class="bottom clearfix">
              <time class="sub-title">{{o.desc || o.name}}</time>
            </div>
            <div class="bottom clearfix">
              <el-button type="text" @click="handleViewApi(o)">获取接口地址</el-button>
              <el-button size="mini" round @click="handleViewDoc(o)" type="success">访问文档</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  async mounted () {
    await this.getApis()
  },
  methods: {
    handleViewDoc (api) {
      window.open(api.docRoute)
    },
    handleViewApi (api) {
      this.$confirm(api.apiRootRoute, {
        title: 'API接口地址',
        confirmButtonText: '我已知晓',
        cancelButtonText: '取消'
      })
    },
    async getApis () {
      const { data: apis } = await this.axios.get(
        'http://api.data-center-service.top:8080/apis'
      )
      this.tableData = apis.map(api => {
        api.apiRootRoute = `http://api.data-center-service.top:8080/${
          api.apiRootRoute
        }`
        api.docRoute = `${api.apiRootRoute}/${api.docRoute}`
        return api
      })
    }
  },
  data () {
    return {
      tableData: []
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
