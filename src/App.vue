<script setup lang="ts">
import {ref, toRaw} from "vue";
import {studentType,useStudents} from "./stores/students";
import {storeToRefs} from "pinia";

const stuStore = useStudents()
const {students}  = storeToRefs(useStudents())
const student = ref<studentType>({
  name: '',
  age: 10
})
function addStudent(){
  stuStore.$patch((state: { students: studentType[]; })=>{
    let a = {...student.value}
    let b = toRaw<studentType>(student.value)
    console.log("a",a)
    console.log("b",b)
    console.log(student.value)
    console.log({...student.value})
    state.students.push(a)
    state.students.push(b)// 为什么这里是响应式的
    state.students.push(student.value)
    state.students.push({...student.value})
  })
}
</script>

<template>
  <hr/>
  <input type="text" name="name" v-model="student.name">
  <input type="number" name="age" v-model="student.age">
  <button @click="addStudent()">Add</button>
  <div style="background-color: bisque">
    <div v-for="item in students" style="height: 20px">
      {{ item.name }} -- {{ item.age }}
    </div>
  </div>

</template>
