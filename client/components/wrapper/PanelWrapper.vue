<template>
  <div class="panel">
    <div :class="['panel__header', {
      'panel__header--wrap': wrapHeader,
      'panel__header--transparent': transparentHeader
    }]">
      <slot name="header"></slot>
    </div>
    <div :class="['panel__main', { 'panel__main--wrap': wrapMain }]">
      <slot name="main"></slot>
    </div>
    <div :class="['panel__footer', { 'panel__footer--wrap': wrapFooter }]">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'PanelWrapper',
  props: {
    wrapHeader: {
      type: Boolean,
      required: false,
      default: true
    },
    wrapMain: {
      type: Boolean,
      required: false,
      default: false
    },
    wrapFooter: {
      type: Boolean,
      required: false,
      default: true
    },
    transparentHeader: {
      type: Boolean,
      required: false,
      default: false
    }
  }
})
</script>

<style lang="scss">
.panel {
  display: flex;
  flex-direction: column;
  max-height: map-get($main-height, "md-up");
  @include sm-and-down {
    max-height: map-get($main-height, "sm-down");
  }
  &__header {
    justify-content: space-between;
    align-items: center;
    flex-basis: $toolbar-height;
    border-bottom: 1px solid var(--v-accent-lighten1);
    &--wrap {
      padding: 5px 10px;
    }
    &--transparent {
      border-bottom: 1px solid transparent;
    }
    & > div {
      display: flex;
      justify-content: space-between;
    }
  }
  &__main {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: map-get($scroll-height, "md-up");
    @include sm-and-down {
      flex-basis: map-get($scroll-height, "sm-down");
    }
    overflow: auto;
    &--wrap {
      padding: 0 20px;
    }
  }
  &__footer {
    max-height: map-get($max-textarea-height, "md-up");
    @include sm-and-down {
       max-height: map-get($max-textarea-height, "sm-down");
    }
    flex: 1 0 $toolbar-height;
    align-items: flex-end;
    border-top: 1px solid var(--v-accent-lighten1);
    &--wrap {
      padding: 5px 10px;
    }
    & > div {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>