v-model ไม่ทำงานถ้าอยู่ภายใน v-for
link: https://stackoverflow.com/questions/43014016/why-v-model-doesnt-work-with-an-array-and-v-for-loop

v-model and v-for do NOT go together well if v-model is used to an iteration alias w/ a primitive value.

The Vue warns:
    You are binding v-model directly to a v-for iteration alias. This will not be able to modify the v-for source array because writing to the alias is like modifying a function local variable. Consider using an array of objects and use v-model on an object property instead.

Therefore using an array of objects each of which has a property for the select value would solve the issue:


