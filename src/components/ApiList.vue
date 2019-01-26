 <template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="name" label="API服务" width="180"></el-table-column>
    <el-table-column prop="apiRootRoute" label="API接口地址" width="360"></el-table-column>
    <el-table-column prop="docRoute" label="文档地址">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleViewDoc(scope.row)">访问</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  async mounted() {
    await this.getApis();
  },
  methods: {
    handleViewDoc(api) {
      window.open(api.docRoute);
    },
    async getApis() {
      const { data: apis } = await this.axios.get(
        "http://api.data-center-service.top:8080"
      );
      this.tableData = apis.map(api => {
        api.apiRootRoute = `http://api.data-center-service.top:8080/${
          api.apiRootRoute
        }`;
        api.docRoute = `${api.apiRootRoute}/${api.docRoute}`;
        return api;
      });
    }
  },
  data() {
    return {
      tableData: []
    };
  }
};
</script>