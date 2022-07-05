<template>
    <div>
        <h1>CenterView</h1>
    <nav>
    <router-link to="/center/">正在热映</router-link> |
    <router-link to="/center/soonplaying">即将上映</router-link>
    <router-view/>
    </nav>
    </div>
</template>

<script>

export default {
  name: 'CenterView'
}
</script>
