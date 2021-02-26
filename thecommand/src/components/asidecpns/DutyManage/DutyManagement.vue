<template>
  <div>
    <div>
      <el-row type="flex" justify="space-between">
        <el-col :span="3">
          <h2>任务管理</h2>
        </el-col>
        <el-col :span="10">
          <p>总任务 123 项，已完成 120项，正在执行 3 项</p>
        </el-col>
        <el-col :span="10">
          <el-row type="flex" justify="end">
            <el-col :span="9">
              <el-input
                  placeholder="请输入关键字"
                  v-model="input4">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
              </el-input>
            </el-col>
            <el-col :span="3">
              <el-button  type="primary">查询</el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <div>
        <el-table
            :data="tableData"
            style="width: 100%"
            :row-class-name="tableRowClassName">
          <el-table-column
              prop="date"
              label="任务名"
              width="180">
          </el-table-column>
          <el-table-column
              prop="id"
              label="任务ID"
              width="180">
          </el-table-column>
          <el-table-column
              prop="grade"
              label="等级">
          </el-table-column>
          <el-table-column
              prop="time"
              label="发布时间">
          </el-table-column>
          <el-table-column
              prop="state"
              label="执行状态">
          </el-table-column>
          <el-table-column
              prop="operate"
              label="操作">
          </el-table-column>
        </el-table>
    </div>
    <div class="block">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
name: "DutyManagement"
}
</script>

<style lang="less" scoped>
h2{
  margin:0;
}
.block{
  width: 550px;
  margin: 50px auto;
}
</style>
