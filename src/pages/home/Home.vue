<template>
    <div class="home">
        <home-transaction-list class="transaction-list" />
    </div>
</template>

<script>
import HomeTransactionList from "./components/HomeTransactionList";

export default {
    name: "Home",
    components: {
        HomeTransactionList
    }
};
</script>