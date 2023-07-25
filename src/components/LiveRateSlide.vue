<template>
    <div class="tradingview-widget-container-slide">
    <!-- <h1>Live Market Watch</h1> -->
        <div class="tradingview-widget-container__widget-slide"></div>
            <div class="tradingview-widget-copyright">
        </div>
    </div>
</template>
  
<script setup>
  import { onMounted } from 'vue';
  
  onMounted(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
        "symbols": [
            {
            "description": "Platinum",
            "proName": "CAPITALCOM:PLATINUM"
            },
            {
            "description": "Palladium",
            "proName": "CAPITALCOM:PALLADIUM"
            },
            {
            "description": "Gold",
            "proName": "CAPITALCOM:GOLD"
            },
            {
            "description": "Silver",
            "proName": "CAPITALCOM:SILVER"
            }
        ],
        "showSymbolLogo": true,
        "colorTheme": "light",
        "isTransparent": false,
        "displayMode": "adaptive",
        "locale": "in"
    });
    document.querySelector('.tradingview-widget-container__widget-slide').appendChild(script);
  });
</script>

<style scoped>
</style>

  