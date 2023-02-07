let userData=localStorage.getItem('data')
let showUserData = userData ? JSON.parse(userData):[]

    export const submitData=(addInput)=>{
    showUserData.push(addInput)
    localStorage.setItem('data',JSON.stringify(showUserData))
}

   export const deletOnclick=(i)=>{
        showUserData.splice(i,1)
        localStorage.setItem('data',JSON.stringify(showUserData))
    }

    export const updateOnclick=(data,index)=>{
        showUserData[index]=data
        localStorage.setItem('data',JSON.stringify(showUserData))
    }