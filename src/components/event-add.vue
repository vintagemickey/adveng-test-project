<template>
    <div class="orders-add">
        <form @submit.prevent="onSubmit">
            <input type="text" id="name" placeholder="Ваше имя" v-model="name" required>
            <input type="text" id="address" placeholder="Адрес" v-model="address" required>
            <textarea id="comment" placeholder="Комментарий" v-model="comment"></textarea>
            <button type="submit">Добавить</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

const date = new Date();
var options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}

export default {
    name: 'orders-add',
    components: {},
    props: {},
    data() {
        return {
            name: '',
            address: '',
            date: '',
            status: '',
            comment: '',
            API_URL: "http://localhost:3000/events",
        }
    },
    methods: {
        async onSubmit() {
            const eventData = {
                name: this.name,
                address: this.address,
                date: date.toLocaleString("ru", options),
                status: 'Новый',
                comment: this.comment,
            };
            try {
                await axios.post(`${this.API_URL}`, eventData);
                this.name = '';
                this.address = '';
                this.date = '';
                this.status = '';
                this.comment = '';
                this.$router.push('/');
            } catch (error) {
                console.error(error);
            }
        },

    },
}
</script>

<style>
.orders-add {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

input[type="text"],
textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
}

button[type="submit"] {
    background-color: #00bcd4;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button[type="submit"]:hover {
    background-color: #00bcd4;
}
</style>