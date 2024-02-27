<template>
  <div class="card">
    <Timeline
      :value="events"
      align="left"
      class="customized-timeline"
    >
      <template #marker="slotProps">
        <span
          class="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1"
          :style="{ backgroundColor: slotProps.item.color }"
        >
          <i :class="slotProps.item.icon"></i>
        </span>
      </template>
      <template #content="slotProps">
        <Card class="mt-3">
          <template #title>
            {{ slotProps.item.status }}
          </template>
          <template #subtitle>
            {{ slotProps.item.date }}
          </template>
          <template #content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
            <Button
              label="Read more"
              text
            ></Button>
          </template>
        </Card>
      </template>
    </Timeline>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          status: "Ordered",
          date: "15/10/2020 10:30",
          icon: "pi pi-shopping-cart",
          color: "#9C27B0",
        },
        {
          status: "Processing",
          date: "15/10/2020 14:00",
          icon: "pi pi-cog",
          color: "#673AB7",
        },
        {
          status: "Shipped",
          date: "15/10/2020 16:15",
          icon: "pi pi-shopping-cart",
          color: "#FF9800",
        },
        {
          status: "Delivered",
          date: "16/10/2020 10:00",
          icon: "pi pi-check",
          color: "#607D8B",
        },
      ],
    };
  },
};
</script>

<style scoped>
::v-deep(.p-timeline-event-opposite) {
  display: none;
}
</style>
