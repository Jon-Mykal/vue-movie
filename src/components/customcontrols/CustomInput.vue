<template>
    <label v-if="label" :class="labelClass">{{ label }}</label>
    <input
        v-bind="$attrs"
        :placeholder="label"
        :value="modelValue"
        @input="onInput">
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                default: ''
            },
            labelClass: {
                type: Array,
                default: []
            },
            modelValue: {
                type: [String, Number],
                default: ''
            }
        },
        setup(props, { emit }) {
            let onInput = ($event) => {
                emit('update:modelValue', $event.target.value);
            }

            return { onInput }
        }
    }
</script>

<style scoped>

</style>