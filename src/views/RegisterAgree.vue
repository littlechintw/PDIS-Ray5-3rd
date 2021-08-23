<template>
  <div class="frame">
    <div class="breadcrumbs">
      <a style="float: left; padding-left: 100px; padding-top: 15px"> 註冊 </a>
      <v-breadcrumbs
        :items="breadcrumbsItems"
        style="float: right; padding-right: 100px"
      >
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
    </div>

    <div style="padding-top: 60px" />

    <a class="statusTitle">1. 基本資料</a>
    <v-btn
      class="editBtn"
      elevation="0"
      color="#ffffff"
      v-show="part1Done"
      style="transform: translateY(15px)"
      @click="part1Edit"
    >
      <v-icon left>mdi-pencil-box-multiple-outline</v-icon>
      修改
    </v-btn>
    <div style="padding-top: 5px" />
    <v-divider />

    <div v-show="!part1Done">
      <table width="100%">
        <tr>
          <td align="center">
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              style="width: 60%"
            >
              <v-row style="padding-top: 80px">
                <a class="mustFiled">*</a>
                <a class="formTitle">中文姓名</a>
                <v-text-field
                  v-model="name1"
                  :rules="[(v) => !!v || '必填選項']"
                  label="姓"
                  single-line
                  outlined
                  dense
                  style="width: 20%"
                  @change="alert('ok')"
                ></v-text-field>
                <a style="padding-left: 20px" />
                <v-text-field
                  v-model="name2"
                  :rules="[(v) => !!v || '必填選項']"
                  label="名"
                  single-line
                  outlined
                  dense
                  style="width: 40%"
                ></v-text-field>
              </v-row>

              <v-row>
                <a class="mustFiled">*</a>
                <a class="formTitle">稱謂</a>
                <v-container fluid style="width: 73%; height: 60px">
                  <v-radio-group
                    v-model="sex"
                    row
                    style="transform: translateY(-50px)"
                  >
                    <v-radio value="male">
                      <template v-slot:label>
                        <div>
                          <a style="padding-left: 10px; padding-right: 40px"
                            >先生</a
                          >
                        </div>
                      </template>
                    </v-radio>
                    <v-radio value="female">
                      <template v-slot:label>
                        <div>
                          <a style="padding-left: 10px; padding-right: 40px"
                            >小姐</a
                          >
                        </div>
                      </template>
                    </v-radio>
                    <v-radio value="other">
                      <template v-slot:label>
                        <div style="padding-top: 25px; padding-left: 10px">
                          <v-text-field
                            v-model="sexOther"
                            label="其他"
                            single-line
                            outlined
                            dense
                            style="width: 100%"
                          ></v-text-field>
                        </div>
                      </template>
                    </v-radio>
                  </v-radio-group>
                </v-container>
              </v-row>

              <v-row>
                <a class="mustFiled">*</a>
                <a class="formTitle">密碼</a>
                <v-text-field
                  v-model="passwd"
                  :rules="[(v) => !!v || '必填選項']"
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
                  :rules="[(v) => !!v || '必填選項']"
                  label="確認密碼"
                  single-line
                  outlined
                  dense
                  type="password"
                ></v-text-field>
              </v-row>

              <v-row>
                <a class="mustFiled">*</a>
                <a class="formTitle">身分證字號</a>
                <v-select
                  :items="personIdItems"
                  v-model="personIdSelect"
                  outlined
                  filled
                  solo
                  dense
                  style="width: 20%"
                ></v-select>

                <a style="padding-left: 20px" />
                <v-text-field
                  v-model="personId"
                  :rules="[(v) => !!v || '必填選項']"
                  label="身分證字號"
                  single-line
                  outlined
                  dense
                  style="width: 50%"
                ></v-text-field>
              </v-row>

              <v-row>
                <a class="mustFiled">*</a>
                <a class="formTitle">出生日期</a>
                <v-text-field
                  v-model="birthYear"
                  :rules="[(v) => !!v || '必填選項']"
                  label="西元年"
                  single-line
                  outlined
                  dense
                  style="width: 20%"
                  type="number"
                ></v-text-field>
                <a
                  style="
                    padding-left: 10px;
                    padding-right: 10px;
                    padding-top: 10px;
                  "
                >
                  年
                </a>
                <v-text-field
                  v-model="birthMonth"
                  :rules="[(v) => !!v || '必填選項']"
                  label="月"
                  single-line
                  outlined
                  dense
                  style="width: 10%"
                  type="number"
                ></v-text-field>
                <a
                  style="
                    padding-left: 10px;
                    padding-right: 10px;
                    padding-top: 10px;
                  "
                >
                  月
                </a>
                <v-text-field
                  v-model="birthDay"
                  :rules="[(v) => !!v || '必填選項']"
                  label="日"
                  single-line
                  outlined
                  dense
                  style="width: 10%"
                  type="number"
                ></v-text-field>
                <a
                  style="
                    padding-left: 10px;
                    padding-right: 10px;
                    padding-top: 10px;
                  "
                >
                  日
                </a>
              </v-row>

              <v-row>
                <a class="mustFiled">*</a>
                <a class="formTitle">電子信箱</a>
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="電子信箱"
                  single-line
                  outlined
                  dense
                ></v-text-field>
              </v-row>

              <v-row>
                <a class="mustFiled">*</a>
                <a class="formTitle">連絡電話</a>
                <v-text-field
                  v-model="phone"
                  :rules="[(v) => !!v || '必填選項']"
                  label="連絡電話"
                  single-line
                  outlined
                  dense
                  type="number"
                ></v-text-field>
              </v-row>

              <div style="padding-top: 60px" />

              <table width="100%">
                <tr>
                  <td align="center">
                    <v-btn
                      tile
                      elevation="0"
                      large
                      color="#bdbdbd"
                      dark
                      style="font-size: 24px"
                      onclick="location.href='/register'"
                      >回聲明</v-btn
                    >
                    <a style="padding-left: 60px" />
                    <v-btn
                      tile
                      elevation="0"
                      large
                      color="#8f8f8f"
                      dark
                      style="font-size: 24px"
                      @click="validate"
                      >確認資料</v-btn
                    >
                  </td>
                </tr>
              </table>
            </v-form>
          </td>
        </tr>
      </table>
    </div>

    <div v-show="part1Done">
      <table width="100%">
        <tr>
          <td align="center">
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              style="width: 60%"
            >
              <v-row style="padding-top: 80px">
                <a class="mustFiled">*</a>
                <a class="formTitle">中文姓名</a>
                <a class="formData">{{ name1 }}{{ name2 }}</a>
              </v-row>

              <v-row style="padding-top: 20px">
                <a class="mustFiled">*</a>
                <a class="formTitle">稱謂</a>
                <a class="formData">{{ sexShow }}</a>
              </v-row>

              <v-row style="padding-top: 20px">
                <a class="mustFiled">*</a>
                <a class="formTitle">密碼</a>
                <a class="formData">******************</a>
              </v-row>

              <v-row style="padding-top: 20px">
                <a class="mustFiled">*</a>
                <a class="formTitle">身分證字號</a>
                <a class="formData">{{ personId }} （{{ personIdSelect }}）</a>
              </v-row>

              <v-row style="padding-top: 20px">
                <a class="mustFiled">*</a>
                <a class="formTitle">出生日期</a>
                <a class="formData"
                  >{{ birthYear }} 年 {{ birthMonth }} 月 {{ birthDay }} 日</a
                >
              </v-row>

              <v-row style="padding-top: 20px">
                <a class="mustFiled">*</a>
                <a class="formTitle">電子信箱</a>
                <a class="formData">{{ email }}</a>
              </v-row>

              <v-row style="padding-top: 20px">
                <a class="mustFiled">*</a>
                <a class="formTitle">連絡電話</a>
                <a class="formData">{{ phone }}</a>
              </v-row>

              <div style="padding-top: 60px" />
            </v-form>
          </td>
        </tr>
      </table>
    </div>

    <div style="padding-top: 60px" />

    <a class="statusTitle">2. 志工媒合</a>
    <v-btn
      class="editBtn"
      elevation="0"
      color="#ffffff"
      v-show="part2Done"
      style="transform: translateY(15px)"
      @click="part2Edit"
    >
      <v-icon left>mdi-pencil-box-multiple-outline</v-icon>
      修改
    </v-btn>
    <div style="padding-top: 5px" />
    <v-divider />

    <div v-show="part1Done">
      <table width="100%">
        <tr>
          <td align="center">
            <v-form
              ref="matchFormOpen"
              v-model="valid"
              lazy-validation
              style="width: 60%"
            >
              <v-row style="padding-top: 80px; text-align: left">
                <h3>
                  我們希望可以透過這個平台「媒合」起「有興趣擔任志工的民眾」以及「需要志工的公益活動」兩方，因此開啟媒合功能即可將愛心化為行動，讓需求機構主動聯絡您
                </h3>
              </v-row>
              <v-row style="padding-top: 80px">
                <a class="mustFiled">*</a>
                <a class="formTitle">媒合功能</a>
                <v-container fluid style="width: 73%; height: 60px">
                  <v-radio-group
                    v-model="match"
                    row
                    style="transform: translateY(-17px)"
                  >
                    <v-radio value="true">
                      <template v-slot:label>
                        <div>
                          <a style="padding-left: 10px; padding-right: 40px"
                            >開啟</a
                          >
                        </div>
                      </template>
                    </v-radio>
                    <v-radio value="false">
                      <template v-slot:label>
                        <div>
                          <a style="padding-left: 10px; padding-right: 40px"
                            >關閉</a
                          >
                        </div>
                      </template>
                    </v-radio>
                  </v-radio-group>
                </v-container>

                <div style="padding-bottom: 80px" />
                <div v-if="match == 'true'" class="matchForm">
                  <v-form
                    ref="matchFormOpen"
                    v-model="valid"
                    lazy-validation
                    style="width: 95%"
                  >
                    <v-row>
                      <a class="mustFiled"></a>
                      <a class="formTitle">專長</a>
                      <v-chip-group
                        v-model="expertise"
                        column
                        multiple
                        style="width: 73%"
                      >
                        <v-chip
                          filter
                          outlined
                          v-for="expertise in expertiseList"
                          :key="expertise"
                        >
                          {{ expertise }}
                        </v-chip>
                      </v-chip-group>
                    </v-row>

                    <div style="padding-bottom: 60px" />
                    <v-row>
                      <a class="mustFiled"></a>
                      <a class="formTitle">語言</a>
                      <v-chip-group
                        v-model="language"
                        column
                        multiple
                        style="width: 73%"
                      >
                        <v-chip
                          filter
                          outlined
                          v-for="language in languageList"
                          :key="language"
                        >
                          {{ language }}
                        </v-chip>
                      </v-chip-group>
                    </v-row>

                    <div style="padding-bottom: 60px" />
                    <v-row>
                      <a class="mustFiled"></a>
                      <a class="formTitle">興趣活動類型</a>
                      <v-chip-group
                        v-model="interest"
                        column
                        multiple
                        style="width: 73%"
                      >
                        <v-chip
                          filter
                          outlined
                          v-for="interest in interestList"
                          :key="interest"
                        >
                          {{ interest }}
                        </v-chip>
                      </v-chip-group>
                    </v-row>
                  </v-form>
                </div>
              </v-row>

              <div style="padding-bottom: 60px" />
              <table width="100%">
                <tr>
                  <td align="center">
                    <v-btn
                      tile
                      elevation="0"
                      large
                      color="#bdbdbd"
                      dark
                      style="font-size: 24px"
                      onclick="location.href='/register'"
                      >回聲明</v-btn
                    >
                    <a style="padding-left: 60px" />
                    <v-btn
                      tile
                      elevation="0"
                      large
                      color="#8f8f8f"
                      dark
                      style="font-size: 24px"
                      @click="validate2"
                      >確認資料</v-btn
                    >
                  </td>
                </tr>
              </table>
            </v-form>
          </td>
        </tr>
      </table>
    </div>

    <div style="padding-top: 60px" />
  </div>
</template>

<script>
export default {
  data: () => ({
    part1Done: false,
    part2Done: false,
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
    valid: true,
    name1: "王",
    name2: "小明",
    sex: "male",
    sexShow: "",
    sexOther: "",
    passwd: "000000000000",
    passwdConfirm: "000000000000",
    personIdSelect: "本國",
    personIdItems: ["本國", "外國"],
    personId: "A123456789",
    birthYear: "1995",
    birthMonth: "7",
    birthDay: "1",
    email: "ray5@pdis.gov.tw",
    emailRules: [
      (v) => !!v || "必填選項",
      (v) => /.+@.+\..+/.test(v) || "請符合 E-mail 格式",
    ],
    phone: "0900123456",
    match: "true",
    expertise: [],
    expertiseList: [
      "家電修理",
      "機械",
      "汽車修理",
      "工藝",
      "刻印",
      "印刷",
      "語文",
      "文書事務",
      "編輯",
      "打字",
      "美工",
      "縫紉/編織",
      "烹飪/烘焙",
      "美容美髮",
      "家事服務",
      "護理",
      "手工藝",
      "電腦",
      "攝影",
      "團康",
      "管理",
      "會計",
      "作物栽培",
      "農牧(藝)",
      "音樂",
      "體育",
      "心理諮詢",
      "駕駛",
      "特殊教育",
      "其他",
    ],
    language: [],
    languageList: [
      "國語",
      "英語",
      "台語",
      "客語",
      "原住民母語",
      "其他(含新移民語言)",
    ],
    interest: [],
    interestList: [
      "社會福利",
      "環境保護",
      "教育服務",
      "醫療衛生",
      "文化推廣",
      "警政服務",
      "地政服務",
      "民政服務",
      "稅務服務",
      "勞政服務",
      "觀光導覽",
      "農業推廣",
      "原住民服務",
      "廉政服務",
      "為民服務",
      "交通服務",
      "體育推廣",
    ],
  }),
  methods: {
    validate() {
      if (
        this.name1 === "" ||
        this.name2 === "" ||
        this.sex === "" ||
        this.passwd === "" ||
        this.passwdConfirm === "" ||
        this.personIdSelect === "" ||
        this.personId === "" ||
        this.birthYear === "" ||
        this.birthMonth === "" ||
        this.birthDay === "" ||
        this.email === "" ||
        this.phone === ""
      ) {
        alert("還有內容還沒完成！");
      } else if (this.passwd !== this.passwdConfirm) {
        alert("確認密碼與密碼不吻合");
      } else {
        if (this.sex === "male") {
          this.sexShow = "先生";
        } else if (this.sex === "female") {
          this.sexShow = "小姐";
        } else {
          this.sexShow = this.sexOther;
        }
        this.part1Done = true;
      }
    },
    part1Edit() {
      this.part1Done = false;
      this.part2Done = false;
    },
    part2Edit() {
      this.part1Done = true;
      this.part2Done = false;
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

.statusTitle {
  text-align: left;
  font-size: 36px;
}

.formTitle {
  width: 25%;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  float: left;
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

.mustFiled {
  width: 2%;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  color: red;
}

.matchForm {
  width: 100%;
  border: 3px solid #000000;
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>