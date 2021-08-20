<template>
  <div class="footer">
    <div class="footer_data">
      <v-row>
        <v-col cols="6" md="3">
          <h3>桃園市政府社會局</h3>
          <a>330206 桃園市桃園區縣府路1號</a><br />
          <a>TEL：03-3322101 分機 6312-6314</a>
        </v-col>

        <v-col cols="6" md="3">
          <h3>桃園市志願服務推廣中心</h3>
          <a>320029 桃園市中壢區環北路390號2樓</a><br />
          <a>TEL：03-4262881</a><br />
          <a>E-mail：taovtcdb@gmail.com</a>
        </v-col>

        <v-col cols="6" md="3">
          <h3>系統維護廠商─采威國際資訊</h3>
          <a>TEL：04-23265200 分機 391</a><br />
          <a>E-mail：ifliu@iscom.com.tw</a>
        </v-col>

        <v-col cols="6" md="3">
          <v-img
            height="68px"
            width="252px"
            src="../assets/img/footer-logo.png"
            style="float: right"
          />
        </v-col>
      </v-row>
      <div style="float: right; padding-top: 30px">
        <v-row>
          <v-btn icon large style="background-color: white">
            <v-icon large color="blue"> mdi-facebook </v-icon>
          </v-btn>
          <div style="padding-right: 20px"></div>
          <v-btn icon large style="background-color: white">
            <v-icon large color="red"> mdi-youtube </v-icon>
          </v-btn>
          <div style="padding-right: 20px"></div>
          <v-btn icon large style="background-color: white">
            <v-img
              src="https://line.me/static/0d83b930b5aea21458844be1f39fdfaf/15377/icon-line-w.png"
            />
            <!-- <v-icon x-large color="blue"> mdi-line </v-icon> -->
          </v-btn>
          <div style="padding-right: 20px"></div>
          <v-btn icon large style="background-color: white">
            <v-icon large color="blue"> mdi-email </v-icon>
          </v-btn>

          <div style="padding-right: 20px"></div>
        </v-row>
      </div>
      <div style="padding-top: 50px"></div>
      <a>建議電腦瀏覽解析度 1920x1080 </a>
      <a style="padding-left: 50px"
        >| 隱私權政策 | 安全政策 | 開放宣告政策 |
      </a>
      <br />
      <a>手機及電腦版皆建議使用 Chrome 瀏覽器，可支援最多本站台功能</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
  props: {},
  data: () => ({}),
};
</script>

<style scoped>
.footer {
  padding-top: 20px;
  width: 100%;
  height: 275px;
  background-color: #ff9f79;
}

.footer_data {
  padding-top: 30px;
  padding-left: 130px;
  padding-right: 130px;
  color: white;
  font-size: 12px;
  line-height: 22px;
}

.footer_left {
  float: left;
}

.footer_right {
  float: right;
}

.full_width {
  width: 100%;
}

.black_block {
  background-color: black;
}

/* Solid border */
hr.solid {
  border-top: 1px solid #dedede;
}

.footer_with_logo {
  vertical-align: middle;
}
</style>
