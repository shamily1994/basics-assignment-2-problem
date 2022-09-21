const app = Vue.createApp({
    data(){
        return{

            name:"",
            message:"",
           
        }
    },
    methods:{

        alertMessage(){
            alert("this is clicked")
        },
        inputFunction(lastName){
            this.name = event.target.value + ' ' + lastName;
            
        },
        messageInput(){
            this.message = event.target.value
        },
      
        
      
    }

})

app.mount("#assignment");