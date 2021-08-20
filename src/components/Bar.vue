<template>
  <div class="bar">
    <div class="bar_data">
      <a class="bar_left" style="color: #4f4f4f; font-size: 14px">聯絡我們</a>
      <div class="bar_right">
        <a style="margin-left: 20px; color: #4f4f4f; font-size: 14px"
          >網頁操作教學</a
        >
        <a style="margin-left: 20px; color: #4f4f4f; font-size: 14px"
          >常見問答</a
        >
        <a
          style="
            margin-left: 20px;
            color: #4f4f4f;
            font-size: 14px;
            color: #ea5959;
          "
          >登入 / 註冊</a
        >
      </div>

      <br />
      <v-divider style="margin-top: 15px" />

      <br />
      <div class="bar_with_logo">
        <v-img
          height="72px"
          width="280px"
          src="../assets/img/logo.png"
          style="float: left"
        />

        <!-- <div class="bar_with_logo">
          <a style="font-size: 24px; font-weight: bold">桃園市志願服務</a>
          <br />
          <a style="font-size: 16px">整合資訊平台</a>
        </div> -->

        <div class="navbar">
          <div class="dropdown" v-for="item in nav_bar_items" :key="item">
            <button class="dropbtn">
              <a>{{ item.title }}</a>
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a
                href="#"
                v-for="dropdown_item in item.dropdown"
                :key="dropdown_item"
                >{{ dropdown_item.title }}</a
              >
            </div>
          </div>
          <div style="float: right; padding-top: 37px; padding-right: 10px">
            <v-row align="center" justify="space-around">
              <v-btn
                tile
                icon
                small
                style="background-color: #dedede"
                color="gray"
              >
                <v-icon x-small> mdi-format-size </v-icon>
              </v-btn>
              <div style="padding-right: 3px" />
              <v-btn
                tile
                icon
                small
                style="background-color: #dedede"
                color="gray"
              >
                <v-icon small> mdi-format-size </v-icon>
              </v-btn>
              <div style="padding-right: 3px" />
              <v-btn
                tile
                icon
                small
                style="background-color: #dedede"
                color="gray"
              >
                <v-icon> mdi-format-size </v-icon>
              </v-btn>
              <p
                style="
                  float: left;
                  font-size: 16px;
                  color: black;
                  text-align: center;
                  padding-top: 2px;
                  padding-left: 10px;
                "
              >
                字型
              </p>
            </v-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bar",
  props: {},
  data: () => ({
    nav_bar_items: [
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
.bar {
  width: 100%;
  height: 174px;
  background-color: white;
}

.bar_data {
  padding-top: 30px;
  padding-left: 130px;
  padding-right: 130px;
}

.bar_left {
  float: left;
}

.bar_right {
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

.bar_with_logo {
  vertical-align: middle;
}

/* Navbar container */
.navbar {
  overflow: hidden;
  padding-left: 100px;
  /* background-color: gray; */
}

/* Links inside the navbar */
.navbar a {
  float: left;
  font-size: 16px;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* The dropdown container */
.dropdown {
  float: left;
  overflow: hidden;
}

/* Dropdown button */
.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: black;
  padding: 14px 10px;
  background-color: inherit;
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
}

/* Add a red background color to navbar links on hover */
.navbar a:hover,
.dropdown:hover .dropbtn {
  background-color: #f9f9f9;
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Add a grey background color to dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}
</style>
