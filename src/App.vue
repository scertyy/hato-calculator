<script setup>
import { computed, reactive } from "vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseCheckbox from "@/components/BaseCheckbox.vue";

const PROGRESS_MINE = "progress_mine";
const PROGRESS_OTHER = "progress_other";
const PROGRESS_NOTHING = "progress_nothing";

const TONTOY_YAGI = "Тонтой";
const PI_YAGI = "Пи";
const MYADE_YAGI = "Мяде";
const SISKA_YAGI = "Сиська";
const SAGURA_YAGI = "Сагура";
const LUNA_YAGI = "Болтик";

const YAGI = [
  TONTOY_YAGI,
  PI_YAGI,
  MYADE_YAGI,
  SISKA_YAGI,
  SAGURA_YAGI,
  LUNA_YAGI,
];

const hato = reactive({
  state: {
    playersNumber: 5,
    score: 0,
    progress: PROGRESS_OTHER,
    canseriMine: 0,
    canseriOther: 30,
    yagiMine: [],
    yagiOther: [],
  },

  changePlayersNumber(direction) {
    if (direction === "-") this.state.playersNumber--;
    if (direction === "+") this.state.playersNumber++;
  },

  changeScore(direction) {
    if (direction === "-") this.state.score = +this.state.score - 5;
    if (direction === "+") this.state.score = +this.state.score + 5;
  },

  changeCanseriMine(direction) {
    if (direction === "-")
      this.state.canseriMine = +this.state.canseriMine - 10;
    if (direction === "+")
      this.state.canseriMine = +this.state.canseriMine + 10;
  },
  changeCanseriOther(direction) {
    if (direction === "-")
      this.state.canseriOther = +this.state.canseriOther - 10;
    if (direction === "+")
      this.state.canseriOther = +this.state.canseriOther + 10;
  },

  changeYagiMine(yagi) {
    if (this.state.yagiMine.includes(yagi)) {
      this.state.yagiMine = this.state.yagiMine.filter((i) => i !== yagi);
      return;
    }
    if (this.state.yagiOther.includes(yagi)) {
      this.state.yagiOther = this.state.yagiOther.filter((i) => i !== yagi);
    }
    this.state.yagiMine = [...this.state.yagiMine, yagi];
  },
  changeYagiOther(yagi) {
    if (this.state.yagiOther.includes(yagi)) {
      this.state.yagiOther = this.state.yagiOther.filter((i) => i !== yagi);
      return;
    }
    if (this.state.yagiMine.includes(yagi)) {
      this.state.yagiMine = this.state.yagiMine.filter((i) => i !== yagi);
    }
    this.state.yagiOther = [...this.state.yagiOther, yagi];
  },
});

const calculator = reactive({
  // calculate() {
  //   const PLUS_PROGRESS_VALUE = this.calculateProgressValue(
  //     hato.state.progress,
  //     hato.state.playersNumber
  //   );
  //   const PLUS_SCORE_VALUE =
  //     hato.state.score -
  //     this.calculateNormByPlayersCount(hato.state.playersNumber);
  //   const PLUS_CANSERI_VALUE =
  //     (hato.state.playersNumber - 1) * hato.state.canseriMine -
  //     hato.state.canseriOther;
  //   const PLUS_YAGI_VALUE = hato.state.yagiMine.reduce((prev, current) => {
  //     return (
  //       prev +
  //       this.calculateYagiPlusByPlayersCount(current, hato.state.playersNumber)
  //     );
  //   }, 0);
  //   const MINUS_YAGI_VALUE = hato.state.yagiOther.reduce((prev, current) => {
  //     return prev + this.calculateSingleScoreByYagi(current);
  //   }, 0);
  //   this.state.result =
  //     PLUS_PROGRESS_VALUE +
  //     PLUS_SCORE_VALUE +
  //     PLUS_CANSERI_VALUE +
  //     PLUS_YAGI_VALUE -
  //     MINUS_YAGI_VALUE;
  // },

  calculateProgressValue(whoHasProgress, playersNumber) {
    switch (whoHasProgress) {
      case PROGRESS_MINE: {
        return (playersNumber - 1) * 25;
      }
      case PROGRESS_OTHER: {
        return -25;
      }

      case PROGRESS_NOTHING: {
        return 0;
      }
      default:
        break;
    }
  },

  calculateNormByPlayersCount(count) {
    switch (count) {
      case 2:
        return 120;
      case 3:
        return 80;
      case 4:
        return 60;
      case 5:
        return 50;
      default:
        return 50;
    }
  },

  calculateYagiPlusByPlayersCount(yagi, count) {
    if (count < 5) {
      return (count - 1) * this.calculateSingleScoreByYagi(yagi);
    }
    switch (yagi) {
      case TONTOY_YAGI: {
        return 750;
      }
      case PI_YAGI: {
        return 570;
      }
      case MYADE_YAGI: {
        return 450;
      }
      case SISKA_YAGI: {
        return 370;
      }
      case SAGURA_YAGI: {
        return 300;
      }
      case LUNA_YAGI: {
        return 220;
      }
      default:
        return 0;
    }
  },
  calculateSingleScoreByYagi(yagi) {
    switch (yagi) {
      case TONTOY_YAGI: {
        return 200;
      }
      case PI_YAGI: {
        return 150;
      }
      case MYADE_YAGI: {
        return 120;
      }
      case SISKA_YAGI: {
        return 100;
      }
      case SAGURA_YAGI: {
        return 80;
      }
      case LUNA_YAGI: {
        return 60;
      }
      default:
        return 0;
    }
  },
});

const result = computed(() => {
  const PLUS_PROGRESS_VALUE = calculator.calculateProgressValue(
    hato.state.progress,
    hato.state.playersNumber
  );
  const PLUS_SCORE_VALUE =
    hato.state.score -
    calculator.calculateNormByPlayersCount(hato.state.playersNumber);
  const PLUS_CANSERI_VALUE =
    (hato.state.playersNumber - 1) * hato.state.canseriMine -
    hato.state.canseriOther;
  const PLUS_YAGI_VALUE = hato.state.yagiMine.reduce((prev, current) => {
    return (
      prev +
      calculator.calculateYagiPlusByPlayersCount(
        current,
        hato.state.playersNumber
      )
    );
  }, 0);
  const MINUS_YAGI_VALUE = hato.state.yagiOther.reduce((prev, current) => {
    return prev + calculator.calculateSingleScoreByYagi(current);
  }, 0);
  return (
    PLUS_PROGRESS_VALUE +
    PLUS_SCORE_VALUE +
    PLUS_CANSERI_VALUE +
    PLUS_YAGI_VALUE -
    MINUS_YAGI_VALUE
  );
});
</script>

<template>
  <div class="main">
    <div class="main__field">
      <div class="main__heading">Количество человек</div>
      <div class="main__row">
        <BaseButton @click="hato.changePlayersNumber('-')">-</BaseButton>
        <BaseInput v-model="hato.state.playersNumber" />
        <BaseButton @click="hato.changePlayersNumber('+')">+</BaseButton>
      </div>
    </div>
    <div class="main__field">
      <div class="main__heading">Количество очков</div>
      <div class="main__row">
        <BaseButton @click="hato.changeScore('-')">-</BaseButton>
        <BaseInput v-model="hato.state.score" />
        <BaseButton @click="hato.changeScore('+')">+</BaseButton>
      </div>
    </div>
    <div class="main__field">
      <div class="main__heading">Прогресс</div>
      <BaseCheckbox
        checkbox-id="mine"
        :model-value="hato.state.progress === PROGRESS_MINE"
        @update:model-value="hato.state.progress = PROGRESS_MINE"
      >
        Мой
      </BaseCheckbox>
      <BaseCheckbox
        checkbox-id="other"
        :model-value="hato.state.progress === PROGRESS_OTHER"
        @update:model-value="hato.state.progress = PROGRESS_OTHER"
      >
        Не мой
      </BaseCheckbox>
      <BaseCheckbox
        checkbox-id="nothing"
        :model-value="hato.state.progress === PROGRESS_NOTHING"
        @update:model-value="hato.state.progress = PROGRESS_NOTHING"
      >
        Заварили
      </BaseCheckbox>
    </div>
    <div class="main__field">
      <div class="main__heading">Кансери</div>
      <div class="main__subheading">Дают</div>
      <div class="main__row">
        <BaseButton @click="hato.changeCanseriMine('-')">-</BaseButton>
        <BaseInput v-model="hato.state.canseriMine" />
        <BaseButton @click="hato.changeCanseriMine('+')">+</BaseButton>
      </div>

      <div class="main__subheading main__subheading_red">Попал</div>
      <div class="main__row">
        <BaseButton @click="hato.changeCanseriOther('-')">-</BaseButton>
        <BaseInput v-model="hato.state.canseriOther" />
        <BaseButton @click="hato.changeCanseriOther('+')">+</BaseButton>
      </div>
    </div>

    <div class="main__field">
      <div class="main__heading">Яги</div>
      <div class="main__subheading">Дают</div>
      <div class="main__yagi">
        <BaseCheckbox
          v-for="item in YAGI"
          :key="item + 'mine'"
          :checkbox-id="item + 'mine'"
          :model-value="hato.state.yagiMine.includes(item)"
          @update:model-value="hato.changeYagiMine(item)"
        >
          {{ item }}
        </BaseCheckbox>
      </div>
      <div class="main__subheading main__subheading_red">Попал</div>
      <div class="main__yagi">
        <BaseCheckbox
          v-for="item in YAGI"
          :key="item + 'other'"
          :checkbox-id="item + 'other'"
          :model-value="hato.state.yagiOther.includes(item)"
          @update:model-value="hato.changeYagiOther(item)"
        >
          {{ item }}
        </BaseCheckbox>
      </div>
    </div>

    <div class="main__field">
      <div class="main__heading">Результат</div>
      <div
        class="main__subheading"
        :class="{ main__subheading_red: result < 0 }"
      >
        {{ result }}
      </div>
    </div>
  </div>
</template>

<style lang="sass">
@import 'assets/reset.sass'

.main
  display: grid
  grid-gap: 15px
  margin: 0 auto
  width: 320px
  padding: 15px
  border-radius: 15px
  background: #EBF3FF
  border: 1px solid #619CDF

  &__heading
    font-size: 20px
    font-weight: bold
    margin-bottom: 5px
    color: black

  &__subheading
    font-size: 18px
    font-weight: bold
    margin-bottom: 5px
    margin-top: 5px
    color: #40A629
    &_red
      color: #FF4117

  &__row
    display: flex
    * + *
      margin-left: 15px

  &__yagi
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-gap: 5px 10px
</style>
