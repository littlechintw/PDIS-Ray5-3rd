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

    <div class="formFrame">
      <!-- 區塊 1 基本資料 -->
      <a class="statusTitleDone">步驟 1：填寫基本資料</a>
      <!-- 區塊 1 修改按鈕 -->
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
      <v-divider style="background-color: #ff9f79" />

      <!-- 區塊 1 輸入表格 -->
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
                <v-row
                  style="padding-top: 60px; color: #ea5959; font-size: 16px"
                >
                  <a class="formTitle">* 為必填項目</a>
                </v-row>
                <v-row style="padding-top: 30px">
                  <a class="formTitle">中文姓名</a>
                  <a class="mustFiled">*</a>
                </v-row>
                <v-row style="padding-top: 10px">
                  <v-text-field
                    v-model="name1"
                    :rules="[(v) => !!v || '必填選項']"
                    label="請輸入中文姓氏"
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
                    label="請輸入中文名字"
                    single-line
                    outlined
                    dense
                    style="width: 40%"
                  ></v-text-field>
                </v-row>

                <v-row>
                  <a class="formTitle">稱謂</a>
                  <a class="mustFiled">*</a>
                </v-row>
                <v-row style="padding-top: 10px">
                  <v-container fluid style="width: 100%; height: 60px">
                    <v-radio-group
                      v-model="sex"
                      row
                      style="transform: translateY(-15px)"
                    >
                      <v-radio value="male">
                        <template v-slot:label>
                          <div>
                            <a style="padding-left: 20px; padding-right: 40px"
                              >先生</a
                            >
                          </div>
                        </template>
                      </v-radio>
                      <v-radio value="female">
                        <template v-slot:label>
                          <div>
                            <a style="padding-left: 20px; padding-right: 40px"
                              >小姐</a
                            >
                          </div>
                        </template>
                      </v-radio>
                      <v-radio value="other">
                        <template v-slot:label>
                          <div>
                            <a style="padding-left: 20px; padding-right: 40px"
                              >不願透漏</a
                            >
                          </div>
                        </template>
                      </v-radio>
                    </v-radio-group>
                  </v-container>
                </v-row>

                <v-row>
                  <a class="formTitle">身分證字號 / 居留證</a>
                  <a class="mustFiled">*</a>
                </v-row>
                <v-row style="padding-top: 10px">
                  <v-text-field
                    v-model="personId"
                    :rules="[(v) => !!v || '必填選項']"
                    label="請輸入身分證字號或居留證號"
                    single-line
                    outlined
                    dense
                  ></v-text-field>
                </v-row>

                <v-row>
                  <a class="formTitle">密碼</a>
                  <a class="mustFiled">*</a>
                </v-row>
                <v-row style="padding-top: 10px">
                  <v-text-field
                    v-model="passwd"
                    :rules="[(v) => !!v || '必填選項']"
                    label="密碼含英文大小寫，最少８字"
                    single-line
                    outlined
                    dense
                    type="password"
                  ></v-text-field>
                </v-row>

                <v-row>
                  <a class="formTitle">確認密碼</a>
                  <a class="mustFiled">*</a>
                </v-row>
                <v-row style="padding-top: 10px">
                  <v-text-field
                    v-model="passwdConfirm"
                    :rules="[(v) => !!v || '必填選項']"
                    label="請再次輸入密碼"
                    single-line
                    outlined
                    dense
                    type="password"
                  ></v-text-field>
                </v-row>

                <v-row>
                  <a class="formTitle">出生日期</a>
                  <a class="mustFiled">*</a>
                </v-row>
                <v-row style="padding-top: 10px">
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
                  <a class="formTitle">連絡電話</a>
                  <a class="mustFiled">*</a>
                </v-row>
                <v-row style="padding-top: 10px">
                  <v-text-field
                    v-model="phone"
                    :rules="[(v) => !!v || '必填選項']"
                    label="請輸入連絡電話"
                    single-line
                    outlined
                    dense
                    type="number"
                  ></v-text-field>
                </v-row>

                <v-row>
                  <a class="formTitle">電子信箱</a>
                  <a class="mustFiled">*</a>
                </v-row>
                <v-row style="padding-top: 10px">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="請輸入電子信箱"
                    single-line
                    outlined
                    dense
                  ></v-text-field>
                </v-row>

                <div style="padding-top: 60px" />

                <table width="100%">
                  <tr>
                    <td align="center">
                      <v-btn
                        class="btn"
                        tile
                        elevation="0"
                        large
                        color="#F17E51"
                        dark
                        outlined
                        style="font-size: 18px"
                        onclick="location.href='/register'"
                        >回聲明</v-btn
                      >
                      <a style="padding-left: 60px" />
                      <v-btn
                        class="btn"
                        tile
                        elevation="0"
                        large
                        color="#F98B60"
                        dark
                        style="font-size: 18px"
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

      <!-- 區塊 1 預覽表格 -->
      <div v-show="part1Done">
        <table width="100%">
          <tr>
            <td align="center">
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                style="width: 40%; padding-left: 7%"
              >
                <v-row style="padding-top: 80px">
                  <a class="formShowTitle">
                    中文姓名
                    <a class="mustFiled">*</a>
                  </a>
                  <a class="formShowData">{{ name1 }} {{ name2 }}</a>
                </v-row>

                <v-row style="padding-top: 20px">
                  <a class="formShowTitle">
                    稱謂
                    <a class="mustFiled">*</a>
                  </a>
                  <a class="formShowData">{{ sexShow }}</a>
                </v-row>

                <v-row style="padding-top: 20px">
                  <a class="formShowTitle">
                    身分證字號 / 居留證
                    <a class="mustFiled">*</a>
                  </a>
                  <a class="formShowData">{{ personId }}</a>
                </v-row>

                <v-row style="padding-top: 20px">
                  <a class="formShowTitle">
                    密碼
                    <a class="mustFiled">*</a>
                  </a>
                  <a class="formShowData">******************</a>
                </v-row>

                <v-row style="padding-top: 20px">
                  <a class="formShowTitle">
                    出生日期
                    <a class="mustFiled">*</a>
                  </a>
                  <a class="formShowData"
                    >{{ birthYear }} / {{ birthMonth }} / {{ birthDay }}</a
                  >
                </v-row>

                <v-row style="padding-top: 20px">
                  <a class="formShowTitle">
                    連絡電話
                    <a class="mustFiled">*</a>
                  </a>
                  <a class="formShowData">{{ phone }}</a>
                </v-row>

                <v-row style="padding-top: 20px">
                  <a class="formShowTitle">
                    電子信箱<a class="mustFiled">*</a>
                  </a>

                  <a class="formShowData">{{ email }}</a>
                </v-row>

                <div style="padding-top: 20px" />
              </v-form>
            </td>
          </tr>
        </table>
      </div>

      <div style="padding-top: 60px" />

      <!-- 區塊 2 志工媒合 -->
      <a v-show="!part1Done" class="statusTitle">步驟 2：志工媒合</a>
      <a v-show="part1Done" class="statusTitleDone">步驟 2：志工媒合</a>
      <!-- 區塊 2 修改按鈕 -->
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
      <v-divider v-show="!part1Done" style="background-color: #c1c1c1" />
      <v-divider v-show="part1Done" style="background-color: #ff9f79" />

      <!-- 區塊 2 輸入表格 -->
      <div v-show="part1Done && !part2Done">
        <table width="100%">
          <tr>
            <td align="center">
              <v-form
                ref="matchFormOpen"
                v-model="valid"
                lazy-validation
                style="width: 80%"
              >
                <v-row style="padding-top: 80px">
                  <h3>
                    我們希望可以透過這個平台「媒合」起「有興趣擔任志工的民眾」以及「需要志工的公益活動」兩方，因此開啟媒合功能即可將愛心化為行動，讓需求機構主動聯絡您
                  </h3>
                </v-row>
                <v-row style="padding-top: 60px; color: #ea5959">
                  <h3 style="text-align: center; width: 100%">
                    您是否有意願開啟「 媒合功能 」？ *
                  </h3>
                </v-row>
                <v-row>
                  <table width="100%">
                    <tr>
                      <td align="center">
                        <v-radio-group
                          v-model="match"
                          row
                          style="padding-left: 19vw"
                        >
                          <v-radio value="true">
                            <template v-slot:label>
                              <div>
                                <a
                                  style="
                                    padding-left: 10px;
                                    padding-right: 40px;
                                  "
                                >
                                  是，我有意願
                                </a>
                              </div>
                            </template>
                          </v-radio>
                          <v-radio value="false">
                            <template v-slot:label>
                              <div>
                                <a style="padding-left: 10px">
                                  否，我沒有意願
                                </a>
                              </div>
                            </template>
                          </v-radio>
                        </v-radio-group>
                      </td>
                    </tr>
                  </table>
                </v-row>

                <v-row>
                  <div v-if="match == 'true'" style="padding-top: 60px" />
                </v-row>

                <v-row>
                  <div v-if="match == 'true'" class="matchForm">
                    <v-form
                      ref="matchFormOpen"
                      v-model="valid"
                      lazy-validation
                      style="width: 95%"
                    >
                      <v-row>
                        <a class="formTitle"
                          >若符合以下條件，即可寄給我活動通知 * （可多選）</a
                        >
                      </v-row>
                      <v-row style="padding-top: 0px">
                        <v-checkbox v-model="notificationSelected" value="專長">
                          <template v-slot:label>
                            <a
                              style="
                                padding-left: 10px;
                                padding-right: 30px;
                                font-size: 14px;
                              "
                            >
                              專長
                            </a>
                          </template>
                        </v-checkbox>
                        <v-checkbox
                          v-model="notificationSelected"
                          value="可服務時間"
                        >
                          <template v-slot:label>
                            <a
                              style="
                                padding-left: 10px;
                                padding-right: 30px;
                                font-size: 14px;
                              "
                            >
                              可服務時間
                            </a>
                          </template>
                        </v-checkbox>
                        <v-checkbox
                          v-model="notificationSelected"
                          value="可服務地區"
                        >
                          <template v-slot:label>
                            <a
                              style="
                                padding-left: 10px;
                                padding-right: 30px;
                                font-size: 14px;
                              "
                            >
                              可服務地區
                            </a>
                          </template>
                        </v-checkbox>
                      </v-row>

                      <v-row>
                        <a class="formTitle">通知方式 * ( 可多選 )</a>
                      </v-row>
                      <v-row style="padding-top: 0px">
                        <v-checkbox
                          v-model="notificationTypeSelected"
                          value="簡訊通知"
                        >
                          <template v-slot:label>
                            <a
                              style="
                                padding-left: 10px;
                                padding-right: 30px;
                                font-size: 14px;
                              "
                            >
                              簡訊通知
                            </a>
                          </template>
                        </v-checkbox>
                        <v-checkbox
                          v-model="notificationTypeSelected"
                          value="電子信箱"
                        >
                          <template v-slot:label>
                            <a
                              style="
                                padding-left: 10px;
                                padding-right: 30px;
                                font-size: 14px;
                              "
                            >
                              電子信箱
                            </a>
                          </template>
                        </v-checkbox>
                      </v-row>

                      <div style="padding-bottom: 50px" />
                      <v-divider />

                      <v-row style="padding-top: 50px">
                        <a class="formTitle">我的專長 * ( 可多選 )</a>
                      </v-row>
                      <v-row style="padding-top: 10px">
                        <v-chip-group
                          active-class="black--text text--accent-4"
                          v-model="expertiseSelected"
                          column
                          multiple
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
                        <a class="formTitle">感興趣的活動類型 * （可多選）</a>
                      </v-row>
                      <v-row style="padding-top: 0px">
                        <v-checkbox
                          v-model="interestSelected"
                          :value="interest"
                          v-for="interest in interestList"
                          :key="interest"
                        >
                          <template v-slot:label>
                            <a
                              style="
                                padding-left: 10px;
                                padding-right: 10px;
                                font-size: 14px;
                              "
                            >
                              {{ interest }}
                            </a>
                          </template>
                        </v-checkbox>
                      </v-row>

                      <div style="padding-bottom: 60px" />
                      <v-row>
                        <a class="formTitle">語言 * （可多選）</a>
                      </v-row>
                      <v-row style="padding-top: 0px">
                        <v-checkbox
                          v-model="languageSelected"
                          :value="language"
                          v-for="language in languageList"
                          :key="language"
                        >
                          <template v-slot:label>
                            <a
                              style="
                                padding-left: 10px;
                                padding-right: 10px;
                                font-size: 14px;
                              "
                            >
                              {{ language }}
                            </a>
                          </template>
                        </v-checkbox>
                        <v-checkbox
                          v-model="languageSelected"
                          value="other"
                          style="transform: translateY(-17px)"
                        >
                          <template v-slot:label>
                            <a
                              style="
                                padding-left: 10px;
                                padding-right: 20px;
                                font-size: 14px;
                              "
                            >
                              其他
                            </a>
                            <v-text-field
                              v-model="languageSelectOther"
                              dense
                              single-line
                              style="padding-top: 10px"
                            ></v-text-field>
                          </template>
                        </v-checkbox>
                      </v-row>

                      <div style="padding-bottom: 0px" />
                      <v-row>
                        <!-- <a class="formTitle">服務時間</a> -->
                        <a class="formTitle">可服務時段 * （可多選）</a>
                        <!-- <a class="mustFiled">*</a> -->
                      </v-row>
                      <v-row style="padding-top: 0px">
                        <v-checkbox
                          v-model="serveTimeSelected"
                          :value="serveTime"
                          v-for="serveTime in serveTimeList"
                          :key="serveTime"
                        >
                          <template v-slot:label>
                            <a
                              style="
                                padding-left: 10px;
                                padding-right: 10px;
                                font-size: 14px;
                              "
                            >
                              {{ serveTime }}
                            </a>
                          </template>
                        </v-checkbox>
                        <v-checkbox
                          v-model="serveTimeSelected"
                          value="other"
                          style="transform: translateY(-17px)"
                        >
                          <template v-slot:label>
                            <a
                              style="
                                padding-left: 10px;
                                padding-right: 20px;
                                font-size: 14px;
                              "
                            >
                              其他
                            </a>
                            <v-text-field
                              v-model="serveTimeSelectOther"
                              dense
                              single-line
                              style="padding-top: 10px"
                            ></v-text-field>
                          </template>
                        </v-checkbox>
                      </v-row>

                      <div style="padding-bottom: 0px" />
                      <v-row>
                        <!-- <a class="formTitle">服務時間</a> -->
                        <a class="formTitle">可服務地區 * （可多選）</a>
                        <!-- <a class="mustFiled">*</a> -->
                      </v-row>
                      <v-row style="padding-top: 0px">
                        <v-checkbox
                          v-model="serveAreaSelected"
                          :value="serveArea"
                          v-for="serveArea in serveAreaList"
                          :key="serveArea"
                        >
                          <template v-slot:label>
                            <a
                              style="
                                padding-left: 10px;
                                padding-right: 10px;
                                font-size: 14px;
                              "
                            >
                              {{ serveArea }}
                            </a>
                          </template>
                        </v-checkbox>
                      </v-row>
                    </v-form>
                  </div>
                </v-row>

                <div style="padding-bottom: 60px" />
                <table width="100%">
                  <tr>
                    <td align="center">
                      <v-btn
                        class="btn"
                        tile
                        elevation="0"
                        color="#F17E51"
                        dark
                        outlined
                        style="font-size: 24px"
                        @click="part1Edit"
                        >上一步</v-btn
                      >
                      <a style="padding-left: 60px" />
                      <v-btn
                        class="btn"
                        tile
                        elevation="0"
                        color="#F98B60"
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

      <!-- 區塊 2 預覽表格 -->
      <div v-show="part2Done">
        <table width="100%">
          <tr>
            <td align="center">
              <v-form
                ref="matchFormOpen"
                v-model="valid"
                lazy-validation
                style="width: 80%"
              >
                <v-row style="padding-top: 80px">
                  <h3>
                    我們希望可以透過這個平台「媒合」起「有興趣擔任志工的民眾」以及「需要志工的公益活動」兩方，因此開啟媒合功能即可將愛心化為行動，讓需求機構主動聯絡您
                  </h3>
                </v-row>
                <v-row style="padding-top: 60px; color: #ea5959">
                  <h3 style="text-align: center; width: 100%">
                    您是否有意願開啟「 媒合功能 」？ *
                  </h3>
                </v-row>
                <v-row>
                  <br />
                </v-row>
                <v-row>
                  <table width="100%">
                    <tr>
                      <td align="center">
                        <a class="formShowData">{{ matchShow }}</a>
                      </td>
                    </tr>
                  </table>
                </v-row>

                <v-row>
                  <div style="padding-top: 60px" />
                </v-row>

                <v-row>
                  <!-- <div v-if="match == 'true'" style="padding-top: 200px" /> -->
                  <div v-if="match == 'true'" class="matchForm">
                    <v-form
                      ref="matchFormOpen"
                      v-model="valid"
                      lazy-validation
                      style="width: 95%"
                    >
                      <v-row style="padding-top: 20px">
                        <a class="formShowTitle">
                          若符合以下條件，即可寄給我活動通知
                          <a class="mustFiled">* （可多選）</a>
                        </a>
                        <a class="formShowData">{{
                          listDataShow(notificationSelected)
                        }}</a>
                      </v-row>

                      <v-row style="padding-top: 20px">
                        <a class="formShowTitle">
                          通知方式
                          <a class="mustFiled">* （可多選）</a>
                        </a>
                        <a class="formShowData">{{
                          listDataShow(notificationTypeSelected)
                        }}</a>
                      </v-row>

                      <v-row style="padding-top: 20px">
                        <a class="formShowTitle">
                          我的專長
                          <a class="mustFiled">* （可多選）</a>
                        </a>
                        <a class="formShowData">{{
                          listDataShowExpertise(expertiseSelected)
                        }}</a>
                      </v-row>

                      <v-row style="padding-top: 20px">
                        <a class="formShowTitle">
                          感興趣的活動類型
                          <a class="mustFiled">* （可多選）</a>
                        </a>
                        <a class="formShowData">{{
                          listDataShow(interestSelected)
                        }}</a>
                      </v-row>

                      <v-row style="padding-top: 20px">
                        <a class="formShowTitle">
                          語言
                          <a class="mustFiled">* （可多選）</a>
                        </a>
                        <a class="formShowData">{{
                          listDataShow(languageSelected)
                        }}</a>
                      </v-row>

                      <v-row style="padding-top: 20px">
                        <a class="formShowTitle">
                          可服務時段
                          <a class="mustFiled">* （可多選）</a>
                        </a>
                        <a class="formShowData">{{
                          listDataShow(serveTimeSelected)
                        }}</a>
                      </v-row>

                      <v-row style="padding-top: 20px">
                        <a class="formShowTitle">
                          可服務地區
                          <a class="mustFiled">* （可多選）</a>
                        </a>
                        <a class="formShowData">{{
                          listDataShow(serveAreaSelected)
                        }}</a>
                      </v-row>

                      <v-row style="padding-top: 10px"> </v-row>
                    </v-form>
                  </div>
                </v-row>
              </v-form>
            </td>
          </tr>
        </table>
      </div>

      <div style="padding-top: 60px" />

      <!-- 區塊 3 確認資料 -->
      <a v-show="!part1Done || !part2Done" class="statusTitle"
        >步驟 3：確認資料</a
      >
      <a v-show="part1Done && part2Done" class="statusTitleDone"
        >步驟 3：確認資料</a
      >
      <!-- 區塊 3 修改按鈕 -->
      <div style="padding-top: 5px" />
      <v-divider
        v-show="!part1Done || !part2Done"
        style="background-color: #c1c1c1"
      />
      <v-divider
        v-show="part1Done && part2Done"
        style="background-color: #ff9f79"
      />

      <!-- 區塊 3 內容 -->
      <div v-show="part1Done && part2Done">
        <table width="100%">
          <tr>
            <td align="center">
              <v-form
                ref="matchFormOpen"
                v-model="valid"
                lazy-validation
                style="width: 80%"
              >
                <v-row style="padding-top: 80px">
                  <h3 style="color: #4f4f4f; width: 100%">
                    確認以上填寫資料無誤後，即可按「確認資料」來完成志工註冊！
                  </h3>
                </v-row>

                <div v-if="match" style="padding-bottom: 60px" />
                <table width="100%">
                  <tr>
                    <td align="center">
                      <v-btn
                        class="btn"
                        tile
                        elevation="0"
                        color="#F17E51"
                        dark
                        outlined
                        style="font-size: 24px"
                        @click="part2Edit"
                        >上一步</v-btn
                      >
                      <a style="padding-left: 60px" />
                      <v-btn
                        class="btn"
                        tile
                        elevation="0"
                        color="#F98B60"
                        dark
                        style="font-size: 24px"
                        onclick="location.href='/register/done'"
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
    name1: "",
    name2: "",
    sex: "",
    sexShow: "",
    sexOther: "",
    passwd: "",
    passwdConfirm: "",
    personIdSelect: "",
    personIdItems: ["本國", "外國"],
    personId: "",
    birthYear: "",
    birthMonth: "",
    birthDay: "",
    email: "",
    emailRules: [
      (v) => !!v || "必填選項",
      (v) => /.+@.+\..+/.test(v) || "請符合 E-mail 格式",
    ],
    phone: "",
    match: "",
    matchShow: "",
    notificationSelected: [],
    notificationTypeSelected: [],
    expertiseSelected: [],
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
    ],
    interestSelected: [],
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
    languageSelected: [],
    languageList: ["中文", "台語", "客語", "英文", "日文", "原住民母語"],
    languageSelectOther: "",
    serveTimeSelected: [],
    serveTimeList: [
      "平日上午",
      "平日中午",
      "平日下午",
      "假日上午",
      "假日中午",
      "假日下午",
      "寒假",
      "暑假",
    ],
    serveTimeSelectOther: "",
    serveAreaSelected: [],
    serveAreaList: [
      "中壢區",
      "平鎮區",
      "龍潭區",
      "楊梅區",
      "新屋區",
      "觀音區",
      "桃園區",
      "龜山區",
      "八德區",
      "大溪區",
      "復興區",
      "大園區",
      "蘆竹區",
    ],
    serveAreaSelectOther: "",
  }),
  methods: {
    validate() {
      if (
        this.name1 === "" ||
        this.name2 === "" ||
        this.sex === "" ||
        this.passwd === "" ||
        this.passwdConfirm === "" ||
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
    validate2() {
      if (
        (this.notificationSelected.length === 0 ||
          this.notificationTypeSelected === 0 ||
          this.expertiseSelected === 0 ||
          this.interestSelected === 0 ||
          this.languageSelected === 0 ||
          this.serveTimeSelected === 0 ||
          this.serveAreaSelected === 0) &&
        this.match == "true"
      ) {
        alert("還有內容還沒完成！");
      } else {
        if (this.match == "true") {
          this.matchShow = "是，我有意願";
        } else {
          this.matchShow = "否，我沒有意願";
        }
        this.part2Done = true;
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
    listDataShow(dataList) {
      var output = "";
      for (let i = 0; i < dataList.length - 1; i++) {
        output += dataList[i] + ", ";
      }
      output += dataList[dataList.length - 1];
      return output;
    },
    listDataShowExpertise(dataList) {
      var output = "";
      for (let i = 0; i < dataList.length - 1; i++) {
        output += this.expertiseList[dataList[i]] + ", ";
      }
      output += this.expertiseList[dataList[dataList.length - 1]];
      return output;
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

.btn {
  border-radius: 4px;
}
</style>