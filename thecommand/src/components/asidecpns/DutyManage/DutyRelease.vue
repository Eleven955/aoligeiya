<template>
  <div>
    <h1>任务发布</h1>
    <div>
      <el-form  label-width="100px" >
        <el-form-item label="任务名称" >
          <el-col :span="7">
            <el-input ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="对象姓名">
          <el-col :span="7">
            <el-input ></el-input>
          </el-col>
        </el-form-item>
        <el-row>
          <el-col :span="7">
            <el-form-item label="对象年龄">
              <el-select  placeholder="1">
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="7">
            <el-form-item label="对象性别">
              <el-select  placeholder="男">
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item label="对象病例">
        </el-form-item>
        <el-form-item label="走失时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期"  style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">走失时间段</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间"  style="width: 50%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="最后发现地" label-width="90px">
        <el-col :span="7">
            <el-input ></el-input>
        </el-col>
        </el-form-item>
        <el-form-item label="常去地点">
          <el-col :span="7">
            <el-input ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="任务图片">
          <el-col :span="7">
            <el-input></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="任务说明">
          <el-col :span="7">
            <el-input type="textarea" ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="划分任务区域" >
          <el-col :span="7">
            <el-input></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="号召方式">
          <el-radio-group >
            <el-radio label="邮箱提醒"></el-radio>
            <el-radio label="电话提醒"></el-radio>
            <el-radio label="短信提醒"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="联系警方">
          <el-radio-group >
            <el-radio label="48h后自动报警"></el-radio>
            <el-radio label="电话提醒"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="走失类型">
          <el-radio-group >
            <el-radio label="健忘走失"></el-radio>
            <el-radio label="无意识走失"></el-radio>
            <el-radio label="赌气走失"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
name: "DutyRelease"
}
</script>

<style scoped>

</style>
