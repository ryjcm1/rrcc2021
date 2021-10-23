<template>
  <!-- adding a spinner loader -->
  <div class="spin"></div>
</template>


<style>

.spin {
  display: block;
  width: 100px;
  height: 100px;
  margin: 30px auto;
  border: 10px solid transparent;
  border-radius: 50%;
  border-top-color: rgba(126, 171, 255, 0.959);
  animation: spin 1s ease infinite;
}

@keyframes spin {
  to {
    transform: rotatez(360deg);
  }
}
</style>