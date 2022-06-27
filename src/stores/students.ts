import {defineStore} from "pinia";

export interface studentType{
    name: string,
    age: number
}

export const useStudents = defineStore("students",{
    state: ()=>({
        students: []
    })
})
