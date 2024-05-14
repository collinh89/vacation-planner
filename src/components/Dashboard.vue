<template>
  <v-toolbar border>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>The Basement</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon :icon="`mdiSvg:${mdiAccount}`"></v-icon>
    </v-btn>
  </v-toolbar>
  <v-container style="width: 100%; max-width: none">
    <v-row no-gutters>
      <v-col v-for="server in serverArr" :key="server.name" cols="12" sm="4">
        <v-card
          class="card-style"
          :title="server.name"
          :text="server.description"
        ></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
interface Server {
  name: string;
  description: string;
  link: string;
}

import { defineComponent } from "vue";
import { mdiAccount } from "@mdi/js";

export default defineComponent({
  name: "Dashbaord",
  props: {
    msg: String,
  },
  async setup() {
    const serverArr: Server[] = [
      {
        name: "Test 1",
        description: "Test 1 Server Description",
        link: "www.link1serve.com",
      },
      {
        name: "Test 2",
        description: "Test 2 Server Description",
        link: "www.link1serve.com",
      },
      {
        name: "Test 3",
        description: "Test 3 Server Description",
        link: "www.link1serve.com",
      },
      {
        name: "Test 4",
        description: "Test 4 Server Description",
        link: "www.link1serve.com",
      },
      {
        name: "Test 5",
        description: "Test 5 Server Description",
        link: "www.link1serve.com",
      },
      {
        name: "Test 6",
        description: "Test 6 Server Description",
        link: "www.link1serve.com",
      },
    ];

    return { serverArr };
  },
});
</script>

<style scoped>
.card-style {
  margin: 5%;
  height: 40vh;
}
</style>
