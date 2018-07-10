<template>
    <div class="logo">
        <img :src="logo">
    </div>
</template>

<script>
import { getLogo } from '../../api/index.js'
export default {
    data () {
        return {
            logo: null
        }
    },
    created () {
        getLogo().then(res => {
            console.log(res.data)
            this.logo = res.data.logo
        });
    }

}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
