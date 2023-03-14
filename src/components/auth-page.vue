<template>
    <div class="auth-page">
        <div class="form">
            <div v-if="!item">
                <div class="login-form">
                    <input type="text" placeholder="Пользователь" required v-model="user" class="input">
                    <input type="password" placeholder="Пароль" required v-model="password" class="input">
                    <button v-on:click="auth" class="button">Войти</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: 'AuthPage',
    components: {},
    props: {},
    data() {
        return {
            API_URL: "http://localhost:3000/users",
            item: null,
            id: 0,
            user: '',
            password: '',
        }
    },
    methods: {
        async auth() {
            try {
                const { data } = await axios.post(`${this.API_URL}`, {
                    user: this.user,
                    password: this.password,
                    isLogin: true,
                });
                this.item = data.user;
                this.$router.push('/');
            } catch (error) {
                console.error(error);
            }
        }
    }
}
</script>

<style>
.auth-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
}

.form {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
}

.login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 16px;
}

.button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 3px;
    background-color: #00bcd4;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
}

.button:hover {
    background-color: #0198a8;
}
</style >
