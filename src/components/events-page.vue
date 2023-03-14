<template>
	<div class="events-page">
		<EventsHeader />
		<table class="table">
			<thead>
				<tr>
					<th>№</th>
					<th>Имя клиента</th>
					<th>Адрес</th>
					<th>Дата заказа</th>
					<th>Статус</th>
					<th>Комментарий</th>
					<th></th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				<EventItem v-for="event in getEvents" :key="event.id" :event_data="event"
					@deleteItemtWithId="deleteItemtWithId" />
			</tbody>
		</table>
	</div>
</template>
  
<script setup>
import EventItem from './event-item.vue';
import EventsHeader from './header.vue';
import { onMounted, computed } from "vue";
import { useEventsStore } from "../pinia/store";
const store = useEventsStore();

const getEvents = computed(() => {
	return store.getEvents;
});

onMounted(() => {
	store.fetchEvents();
});

</script>

<script>
import axios from 'axios';

export default {
	name: 'orders-page',
	components: { EventItem },
	props: {},
	data() {
		return {
			API_URL: 'http://localhost:3000/events',
		};
	},
	methods: {
		deleteItemtWithId(elementId) {
			axios.get(`${this.API_URL}/${elementId}`)
				.then(response => {
					if (response.data) {
						axios.delete(`${this.API_URL}/${elementId}`)
							.then(() => {
								//console.log('Element deleted successfully');
								location.reload();
							})
							.catch(error => {
								console.error('Error deleting element:', error);
							});
					} else {
						console.error('Element not found');
					}
				})
				.catch(error => {
					console.error('Error getting element:', error);
				});
		}
	}
}
</script>

<style>
.events-page {
	margin: 1rem;
}

.table {
	width: 100%;
	border-collapse: collapse;
}

.table th,
.table td {
	padding: 0.5rem;
	border: 1px solid #ccc;
}

.table th {
	font-weight: bold;
	text-align: left;
}

.table td {
	text-align: center;
}

.table tbody tr:nth-child(even) {
	background-color: #f2f2f2;
}

.table tbody tr:hover {
	background-color: #ddd;
}

.table td:last-child {
	text-align: right;
}

.table td:last-child button {
	background-color: #f44336;
	color: white;
	padding: 0.5rem;
	border: none;
	cursor: pointer;
}

.table td:last-child button:hover {
	background-color: #dc3545;
}
</style>