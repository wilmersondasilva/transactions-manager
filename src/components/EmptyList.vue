<template>
    <div class="empty-list">
        <p>{{ text }}</p>
    </div>
</template>

<script>
export default {
    name: 'EmptyList',
    props: {
        text: String
    }
}
</script>

<style lang="stylus" scoped>
    .empty-list
        height 300px
        display flex
        text-align center
        justify-content center
        align-items center
</style>