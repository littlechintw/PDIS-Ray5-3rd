<template>
  <div class="frame">
    <div class="breadcrumbs">
      <a style="float: left; padding-left: 100px; padding-top: 15px"> 註冊 </a>
      <v-breadcrumbs :items="items" style="float: right; padding-right: 100px">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </div>

    <div style="padding-top: 60px" />

    <h1>1. 基本資料</h1>
    <v-divider />

    <table width="100%">
      <tr>
        <td align="center">
          <v-form ref="form" v-model="valid" lazy-validation style="width: 60%">
            <!-- <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field> -->
            <v-row style="padding-top: 80px">
              <a class="mustFiled">*</a>
              <a class="formTitle">中文姓名</a>
              <v-text-field
                v-model="name1"
                :rules="name1Rules"
                label="姓"
                single-line
                outlined
                dense
                style="width: 20%"
              ></v-text-field>
              <a style="padding-left: 20px" />
              <v-text-field
                v-model="name2"
                :rules="name2Rules"
                label="名"
                single-line
                outlined
                dense
                style="width: 40%"
              ></v-text-field>
            </v-row>

            <v-row>
              <a class="mustFiled">*</a>
              <a class="formTitle">密碼</a>
              <v-text-field
                v-model="passwd"
                :rules="passwdRules"
                label="密碼"
                single-line
                outlined
                dense
                type="password"
              ></v-text-field>
            </v-row>

            <v-row>
              <a class="mustFiled">*</a>
              <a class="formTitle">確認密碼</a>
              <v-text-field
                v-model="passwdConfirm"
                :rules="passwdConfirmRules"
                label="確認密碼"
                single-line
                outlined
                dense
                type="password"
              ></v-text-field>
            </v-row>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              Validate
            </v-btn>

            <v-btn color="error" class="mr-4"> Reset Form </v-btn>

            <v-btn color="warning" @click="resetValidation">
              Reset Validation
            </v-btn>
          </v-form>
        </td>
      </tr>
    </table>

    <div style="padding-top: 60px" />
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
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
    valid: true,
    name1: "",
    name1Rules: [(v) => !!v || "必填選項"],
    name2: "",
    name2Rules: [(v) => !!v || "必填選項"],
    passwd: "",
    passwdRules: [(v) => !!v || "必填選項"],
    passwdConfirm: "",
    passwdConfirmRules: [
      (v) => !!v || "必填選項",
      (v) => v === this.passwd || "密碼不一致",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    checkbox: false,
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
  },
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
  background-color: #f5f5f5;
  height: 50px;
}

.statement {
  background-color: #c4c4c4;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 40px;
  padding-right: 40px;
  line-height: 30px;
}

.paragraph_1 {
  padding-left: 30px;
}

.paragraph_2 {
  padding-left: 60px;
}

.formTitle {
  width: 25%;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
}

.mustFiled {
  width: 2%;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: red;
}
</style>