<template>
  <div class="frame">
    <div class="breadcrumbs">
      <h3 style="float: left; padding-left: 20px; padding-top: 15px">註冊</h3>
      <v-breadcrumbs
        :items="breadcrumbsItems"
        style="float: right; padding-right: 20px; transform: translateY(-2px)"
      >
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </div>

    <div style="padding-top: 60px" />

    <table width="100%">
      <tr>
        <td align="center">
          <h1 style="width: 100%">註冊成功，謝謝你成為志工的一份子！</h1>
          <div style="padding-top: 60px" />
          <v-btn
            tile
            elevation="0"
            color="#F17E51"
            dark
            outlined
            style="font-size: 24px"
            onclick="location.href='/'"
            >回首頁</v-btn
          >
          <a style="padding-left: 10px" />
          <v-btn
            tile
            elevation="0"
            color="#F17E51"
            dark
            outlined
            style="font-size: 24px"
            >常見問答</v-btn
          ><a style="padding-left: 10px" />
          <v-btn tile elevation="0" color="#F98B60" dark style="font-size: 24px"
            >回報名頁面</v-btn
          >

          <div style="padding-top: 40px" />

          <v-img
            height="454px"
            width="727px"
            src="../assets/img/registerDone.png"
          />
        </td>
      </tr>
    </table>

    <div style="padding-top: 60px" />
  </div>
</template>

<script>
export default {
  data: () => ({
    breadcrumbsItems: [
      {
        text: "首頁",
        disabled: false,
        href: "/",
      },
      {
        text: "註冊",
        disabled: false,
        href: "/register",
      },
    ],
  }),
  methods: {},
};
</script>

<style scoped>
h1 {
  padding-bottom: 5px;
}

.frame {
  padding-left: 130px;
  padding-right: 130px;
}

.breadcrumbs {
  height: 50px;
  border-bottom: 3px solid #c1c1c1;
}

.statement {
  background-color: #c4c4c4;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 40px;
  padding-right: 40px;
  line-height: 30px;
}

.statusTitle {
  text-align: left;
  font-size: 36px;
  color: #000;
  font-weight: bold;
}

.statusTitleDone {
  text-align: left;
  font-size: 36px;
  color: #f17e51;
  font-weight: bold;
}

.formTitle {
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  float: left;
}

.formFrame {
  padding-left: 5%;
  padding-right: 5%;
}

.editBtn {
  float: right;
}

.formData {
  width: 25%;
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  padding-top: 4px;
}

.formShowTitle {
  width: 50%;
  text-align: left;
  font-size: 14px;
  float: left;
}

.formShowData {
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  padding-left: 20px;
}

.mustFiled {
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  padding-left: 5px;
  padding-top: 2px;
  color: red;
}

.matchForm {
  width: 100%;
  border: 3px solid #ff9f79;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 15%;
  padding-right: 15%;
}
</style>