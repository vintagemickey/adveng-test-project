<template>
    <div class="header">
        <nav>
            <div>
                <router-link to="/">Все заказы</router-link>
                <router-link to="/add">Добавить заказ</router-link>
            </div>
            <div>
                <router-link to="/auth">
                    <button class="logout">Выйти</button>
                </router-link>
            </div>

            <router-view></router-view>

        </nav>
    </div>
</template>

<script>
export default {
    name: 'EventsHeader',
    components: {},
    props: {},
    data() {
        return {

        }
    },
    methods: {
    }

}
</script>

<style>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    background-color: #00bcd4;
    padding: 0 20px;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
}

nav a {
    margin-left: 20px;
    color: #333;
    text-decoration: none;
}

.logout {
    padding: 10px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.logout:hover {
    background-color: #666;
}
</style>