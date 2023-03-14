<template>
    <tr>
        <td>{{ event_data.id }}</td>
        <td>{{ event_data.name }}</td>
        <td>{{ event_data.address }}</td>
        <td>{{ event_data.date }}</td>
        <td>{{ event_data.status }}</td>
        <td>{{ event_data.comment }}</td>
        <td><button>V</button></td>
        <td><button @click="deleteItem">X</button></td>
    </tr>
</template>

<script>
export default {
    name: 'EventItem',
    components: {},
    props: {
        event_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {

        }
    },
    methods: {
        deleteItem() {
            this.$emit('deleteItemtWithId', this.event_data.id)
        }
    }

}
</script>

<style></style>