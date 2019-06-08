<template>
  <Content />
</template>

<script>
export default {
  components: {

  }
}
</script>

<style lang="scss">
  @import "../styles/default.scss";
  @import "../styles/modules/grid.module";
  @import "../styles/modules/typography.module";

  html,
  body,
  #app,
  .content.default,
  .login {
    height: 100%;
  }

  #app {
    > .global-ui {
      display: none;
    }
  }

  .content-wrapper {
    padding: 0 15px;

    @include desktop {
      padding: 0 30px;
    }
  }

  .content.default {
    // @include grid;

    h1 {
      margin-bottom: 15px;
      @include typography-heading1;
    }

    h2 {
      margin-bottom: 10px;
      @include typography-heading2;
    }

    h3 {
      margin-bottom: 10px;
      @include typography-heading3;
    }

    p {
      @include typography-body1;
      // text-align: justify;
      line-height: 130% !important;
    }

    p + p {
      margin-top: 10px;
    }

    p + h1 {
      margin-top: 50px;
    }

    p + h2 {
      margin-top: 15px;
    }

    p + h3 {
      margin-top: 15px;
    }

    // img[src*="#teste"] {
    //   width:150px;
    //   height:100px;
    // }

    @include desktop {
      >h1 {
      margin-bottom: 30px;
      }

      >h2 {
        margin-bottom: 15px;
      }

      >h3 {
        margin-bottom: 15px;
      }

      >p + p {
        margin-top: 15px;
      }

      >p + h1 {
        margin-top: 100px;
      }

      >p + h2 {
        margin-top: 30px;
      }

      >p + h3 {
        margin-top: 30px;
      }
    }
  }

</style>