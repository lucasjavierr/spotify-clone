<script lang="ts">
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting = "";
  if (currentHour < 12 && currentHour > 6) {
    greeting = "Buenos días";
  } else if (currentHour > 12 && currentHour < 19) {
    greeting = "Buenas tardes";
  } else {
    greeting = "Buenas noches";
  }
</script>

<h1 class="text-3xl font-bold">{greeting}</h1>
