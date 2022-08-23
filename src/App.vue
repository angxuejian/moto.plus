<template>
  <div>
    <div class="navbar">
      <div class="navbar-wrapper">
        
        <a class="logo remove-defult" href="#" alt='Moto Plus Logo'>
          <div></div><span>Moto Plus</span>
        </a>

        <div class="header-wrapper">
          <router-link to="/component">组件</router-link>

          <a class="remove-defult" alt='angxuejian/moto.plus' href="https://github.com/angxuejian/moto.plus">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github mo-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
html, body, #app {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  background-color: var(--mo-bg-color);
  box-sizing: border-box;
  transition: background-color 0.3s;
}
.navbar {
  width: 100%;
  background-color: var(--mo-bg-color);
  border-bottom: 1px solid var(--mo-text-hover-color);
  position: sticky;
  top: 0;
  .navbar-wrapper {
    height: var(--navbar-height);
    max-width: 90%;
    margin: 0 auto;
    padding: 0 5%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      display: flex;
      align-items: center;
      text-decoration: none;
      div {
        background: var(--mo-logo) no-repeat;
        background-size: 100% 100%;
        width: 30PX;
        height: 30PX;
        margin-right: 3px;
      }
      span {
        font-size: var(--fs-logo);
        color: var(--mo-text-primary-color)
      }
    }

    .header-wrapper {


      .mo-github {
        color: var(--mo-text-primary-color);
        width: 20PX;
        height: 20PX;
      }
    }
  }
}
</style>
