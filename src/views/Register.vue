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

    <!-- 志工聲明 -->
    <div style="padding-left: 100px; padding-right: 100px">
      <div class="statement">
        <h2>聲明</h2>

        <div style="padding-top: 20px" />
        <v-divider style="background-color: black" />

        <br />

        <a>
          歡迎使用桃園市志願服務整合資訊平台系統（以下稱「本系統」）並申請註冊帳號，本聲明書說明您的資料將如何被使用。當您同意後，即表示授權您所填寫的資料予本系統，供桃園市志願服務各目的事業主管機關及其所轄之運用單位（以下稱「本府各機關及所轄運單」）進行召募媒合、保險加保、教育訓練報名、查詢相關服務時數、獎勵表揚、榮譽卡、志願服務紀錄冊等志願服務業務相關內容使用。
        </a>

        <br /><br />

        <a>
          依據個人資料保護法（以下稱「個資法」）第八條第一項規定，為了確保使用者之個人資料、隱私及權益之保護，當您已閱讀並同意「桃園市志願服務整合資訊平台系統之個資使用聲明」時，即表示您願意以電子文件之方式行使法律所賦予同意之權利，並具有書面同意之效果，若不同意請離開此網頁。
        </a>

        <br /><br />

        <a> 以下為本單位個資法規定，必須向您告知的各項聲明，請您務必詳閱： </a
        ><br />
        <a class="paragraph_1">(一) 個人資料蒐集目的：</a><br />
        <a class="paragraph_2">
          1.
          依照本府各機關及所轄運單，因應各種例行或活動之需要進行志工召募、教育訓練、管理、應用等之行為均屬於本系統之個資蒐集目的。 </a
        ><br />
        <a class="paragraph_2">
          2. 上述之相關業務或其他符合工作項目所定義之工作範圍。 </a
        ><br />

        <a class="paragraph_1"
          >(二)
          個人資料蒐集類別(下列項目依照個資法之特定目的及個人資料之類別羅列)：</a
        ><br />
        <a class="paragraph_2"
          >1. C001 識別個人(如：姓名、電話、電子信箱) 等。
        </a>
        <br />
        <a class="paragraph_2">
          2. C003 政府資料中辨識者(如：身分證統一編號、出生年月日)等。</a
        ><br />
        <a class="paragraph_2"> 3. C011 個人描述(如：性別、年齡)等。</a><br />
        <a class="paragraph_2">
          4. C035 休閒活動及興趣(如:專長、興趣的志工類別)等。</a
        ><br />

        <a class="paragraph_1">(三) 個人資料利用之期間、地區、對象及方式：</a
        ><br />
        <a class="paragraph_2"
          >1.
          期間：利用期間為本府各機關及所轄運單辦理志願服務活動或志願服務業務之期間。
        </a>
        <br />
        <a class="paragraph_2">
          2. 地區：您的個人資料將用於本市因志工需求所提供服務之地區。</a
        ><br />
        <a class="paragraph_2">
          3.
          對象：本系統註冊之本府各機關及所轄運單、依法有調查權機關或金融監理機關。</a
        ><br />
        <a class="paragraph_2">
          4.
          方式：將提供本府各機關及所轄運單查詢您的服務時數、獎勵表揚、榮譽卡、志願服務紀錄冊等志願服務相關資料，另請您確認同意亦同時開放您的個人資料（如：電話、電子信箱、身分證統一編號、出生年月日）資訊，以利您及本府各機關及所轄運單在本系統進行與志工人力資源有關之召募媒合、教育訓練報名及保險加保等事宜。</a
        ><br />

        <a class="paragraph_1"
          >(四) 依據個資法第三條規定，您就本單位保有您的個人資料得行使下列權利：
          查詢、閱覽、複製、補充、更正、請求停止蒐集、請求停止處理、請求停止利用、請求刪除等權利。</a
        ><br />

        <a class="paragraph_1"
          >(五) 不提供之權益影響：
          當事人如不願意提供上述個人資訊，將無法在本系統行使上述權利及使用本系統相關服務。</a
        ><br />
      </div>
    </div>

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
            outlined
            dark
            style="font-size: 24px"
            >不同意</v-btn
          >
          <a style="padding-left: 60px" />
          <v-btn
            class="btn"
            tile
            elevation="0"
            large
            color="#F98B60"
            dark
            style="font-size: 24px"
            onclick="location.href='/register/agree'"
            >同意</v-btn
          >
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
};
</script>

<style scoped>
.frame {
  padding-left: 130px;
  padding-right: 130px;
}

.breadcrumbs {
  height: 50px;
  border-bottom: 3px solid #c1c1c1;
}

.statement {
  background-color: #f3f3f3;
  padding-top: 90px;
  padding-bottom: 90px;
  padding-left: 80px;
  padding-right: 80px;
  line-height: 30px;
}

.statement a {
  font-size: 14px;
}

.paragraph_1 {
  padding-left: 30px;
}

.paragraph_2 {
  padding-left: 60px;
}

.btn {
  border-radius: 4px;
}
</style>