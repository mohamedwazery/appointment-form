<script>
document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("detect-location");
  const input = document.getElementById("location-field");
  const status = document.getElementById("location-status");

  if (btn && navigator.geolocation) {
    btn.addEventListener("click", () => {
      status.textContent = "📍 Detecting location...";
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude.toFixed(6);
          const lon = position.coords.longitude.toFixed(6);
          const mapsLink = `https://www.google.com/maps?q=${lat},${lon}`;
          input.value = mapsLink;
          status.textContent = "✅ Location detected successfully!";
        },
        () => {
          status.textContent = "❌ Unable to access your location.";
        }
      );
    });
  } else {
    if (status) status.textContent = "⚠️ Geolocation not supported by your browser.";
  }
});
</script>