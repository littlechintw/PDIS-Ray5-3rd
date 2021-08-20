<template>
  <div class="footer">
    <div class="footer_data">
      <v-row>
        <v-col cols="6" md="3">
          <h4>桃園市政府社會局</h4>
          <a>330206 桃園市桃園區縣府路1號</a><br />
          <a>TEL：03-3322101 分機 6312-6314</a>
        </v-col>

        <v-col cols="6" md="3">
          <h4>桃園市志願服務推廣中心</h4>
          <a>320029 桃園市中壢區環北路390號2樓</a><br />
          <a>TEL：03-4262881</a><br />
          <a>E-mail：taovtcdb@gmail.com</a>
        </v-col>

        <v-col cols="6" md="3">
          <h4>系統維護廠商─采威國際資訊</h4>
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
      <br />
      <a
        >建議電腦瀏覽解析度 1920x1080，手機瀏覽解析度 414x736 或 360x640 |
        隱私權政策 | 安全政策 | 開放宣告政策 |
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
  data: () => ({
    nav_footer_items: [
      {
        title: "公告專區",
        dropdown: [{ title: "最新消息" }, { title: "教育訓練" }],
      },
      {
        title: "我要當志工",
        dropdown: [
          { title: "志工招募訊息" },
          { title: "參加教育訓練" },
          { title: "服務類別簡介" },
        ],
      },
      {
        title: "我要用志工",
        dropdown: [
          { title: "如何成為運行單位" },
          { title: "志工教育訓練" },
          { title: "志工管理操作教學" },
        ],
      },
      {
        title: "下載專區",
        dropdown: [{ title: "檔案下載" }, { title: "相關法規" }],
      },
      {
        title: "分享專區",
        dropdown: [
          { title: "志工分享" },
          { title: "電子刊物" },
          { title: "活動花絮" },
          { title: "相關連結" },
        ],
      },
    ],
  }),
};
</script>

<style scoped>
.footer {
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
