<script>
export default {
  name: 'MenuNavigation'
}
</script>
<template>
    <div class="wrapper-menu">
        <nav class="main-menu">
            <ul class="menu">
                <li><router-link to="/" exact-active-class="exact-active">Главная</router-link></li>
                <li><router-link to="/history" exact-active-class="exact-active">История</router-link></li>
                <li><router-link to="/begin-test" exact-active-class="exact-active">Начать тесты</router-link></li>
            </ul>
        </nav>
    </div>
</template>
<style>

</style>