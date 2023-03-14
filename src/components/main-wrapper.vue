<template>
    <div class="main-wrapper">
        <AuthPage />
        <EventsPage />
        <EventAdd />
    </div>
</template>

<script>
import AuthPage from './auth-page.vue';
import EventsPage from './events-page.vue';
import EventAdd from './event-add.vue';

export default {
    name: 'MainWrapper',
    components: { AuthPage, EventsPage, EventAdd },
    props: {},
    data() {
        return {

        }
    }

}
</script>

<style>
.main-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
}
</style>