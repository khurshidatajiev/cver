<template>
  <div class="container column">
    <form @submit.prevent="onSubmit" class="card card-w30">
      <VSelect
        v-model:value="payload.type"
        :items="blockTypes"
        name="type"
        label="Тип блока"
      />
      <VTextArea v-model:value="payload.value" name="value" label="Значение" />
      <VButton
        label="Добавить"
        type="submit"
        theme="primary"
        :disabled="isFormValid"
      />
    </form>

    <div class="card card-w70">
      <template v-if="hasContent">
        <template v-for="(item, idx) in cv">
          <h1 v-if="item.type === 'title'" :key="idx">{{ item.value }}</h1>
          <div v-if="item.type === 'avatar'" class="avatar" :key="idx">
            <img :src="item.value" />
          </div>
          <h2 v-if="item.type === 'subtitle'" :key="idx">{{ item.value }}</h2>
          <p v-if="item.type === 'text'" :key="idx">{{ item.value }}</p>
        </template>
      </template>
      <h3 v-else>Добавьте первый блок, чтобы увидеть результат</h3>
    </div>
  </div>
  <div class="container">
    <p>
      <VButton
        @click="toggleComments"
        :label="commentButtonText"
        theme="primary"
      />
    </p>
    <div v-if="isCommentLoading" class="loader"></div>
    <div v-else-if="hasComments" class="card">
      <h2>Комментарии</h2>
      <ul class="list">
        <li v-for="item in comments" class="list-item" :key="item.id">
          <div>
            <p>
              <strong>{{ item.email }}</strong>
            </p>
            <small>
              {{ item.body }}
            </small>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import VSelect from "./components/fields/VSelect";
import VTextArea from "./components/fields/VTextArea";
import VButton from "./components/ui/VButton";
import BLOCK_TYPES, { BLOCK_DEFAULT } from "./constants/block-types";
import httpComments from "./http/http-comments";

export default {
  name: "App",
  components: { VButton, VTextArea, VSelect },
  data() {
    return {
      payload: {
        type: BLOCK_DEFAULT,
      },
      cv: [],
      blockTypes: BLOCK_TYPES,
      isCommentLoading: false,
      comments: [],
    };
  },
  methods: {
    onSubmit() {
      this.cv = [...this.cv, this.payload];
      this.payload = {
        type: BLOCK_DEFAULT,
      };
    },
    toggleComments() {
      if (this.hasComments) {
        this.hideComments();
      } else {
        this.showComments();
      }
    },
    async showComments() {
      this.isCommentLoading = true;
      try {
        const { data } = await httpComments.get({ _limit: 42 });
        this.comments = data;
        this.isCommentLoading = false;
      } catch (e) {
        this.isCommentLoading = false;
      }
    },
    hideComments() {
      this.hasComments = [];
    },
  },
  computed: {
    isFormValid() {
      return !this.payload.value;
    },
    hasContent() {
      return this.cv && this.cv.length;
    },
    hasComments() {
      return this.comments && this.comments.length;
    },
    commentButtonText() {
      return this.isCommentVisible
        ? "Скрыть комментарии"
        : "Загрузить комментарии";
    },
  },
};
</script>

<style>
.avatar {
  display: flex;
  justify-content: center;
}

.avatar img {
  width: 150px;
  height: auto;
  border-radius: 50%;
}
</style>
