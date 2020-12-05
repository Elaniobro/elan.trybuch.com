<template>
  <div class="header__wrapper">
    <nav class="social__wrapper">
      <a
        class="social__link social__link--github"
        href="https://github.com/Elaniobro"
        text="Collobrate on open source projects with me"
        target="_blank"
      >
        <i class="fab fa-github fa-2x"></i>
      </a>
      <a
        class="social__link social__link--twitter"
        href="https://twitter.com/home?status=@elaniobro%20I%20saw%20your%20site%20and%20would%20like%20to%20connect.%20%23WebDeveloper%20#Frontend%20#HTML%20#CSS%20#javaScript%20"
        text="Read the most recent tweets"
        target="_blank"
      >
        <i class="fab fa-twitter fa-2x"></i>
      </a>
      <a
        class="social__link social__link--insta"
        href="https://www.instagram.com/elaniobro"
        text="See how I view the world"
        target="_blank"
      >
        <i class="fab fa-instagram fa-2x"></i>
      </a>
      <a
        class="social__link social__link--linkedin"
        href="https://www.linkedin.com/in/elantrybuch"
        text="Become a part of my professional circle"
        target="_blank"
      >
        <i class="fab fa-linkedin-in fa-2x"></i>
      </a>
      <a class="social__link social__link--email" href="" text="">
        <i class="fas fa-envelope fa-2x"></i>
      </a>
      <ColorModePicker />
    </nav>
  </div>
</template>
<script>
import ColorModePicker from '@/components/ColorModePicker/ColorModePicker'
export default {
  name: 'Header',
  components: { ColorModePicker },
  data() {
    return {}
  }
}
</script>
<style lang="scss">
.header {
  &__wrapper {
    width: 100%;
    justify-content: end;
    display: grid;
    padding-right: 8px;
  }
}
.social {
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 8px;
    height: 30px;
  }
  &__link {
    color: var(--color);
    opacity: 0.75;
    border: 1px solid var(--bg-invert);
    padding: 4px;
    border-radius: 6px;

    & i::before {
      background: transparent;
    }
    &:hover {
      opacity: 1;
    }
    &--github:hover {
      color: #000000;
    }
    &--twitter:hover {
      color: #1da1f2;
    }
    &--linkedin:hover {
      color: #2977c9;
    }
    &--insta:hover {
      // color: #ff0099;
      background: radial-gradient(
        circle at 30% 107%,
        #fdf497 0%,
        #fdf497 5%,
        #fd5949 45%,
        #d6249f 60%,
        #285aeb 90%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    &--email:hover {
      i::before {
        color: #d93025;
      }

      color: #ffffff;
    }
  }
}
</style>
