
let products = []

let knownId = ""

getData()
function getData() {

    fetch('http://localhost:3030/sensor')
      .then(response => response.json())
      .then(responseData =>{

        if(responseData.massage=="success"){
            products = responseData.data
           
            
            showData()
        }
      }
        )

    
}


        function showData(){
            let cartona =""
            for (let i = 0; i < products.length; i++) {
                cartona+=`
                <tr>
                <th scope="row">${products[i].id}</th>
                <td>${products[i].selectSensor}</td>
                <td>${products[i].selectMark}</td>
                <td>${products[i].valueSensor}</td>
                <td>${products[i].selectDevice}</td>
                <td>${products[i].selectOnOff}</td>
         
    

                <td>

                    <button class="btn btn-danger"  onclick='deleteproduct(${products[i].id})'>Delete</button>
                
                </td>
  
            </tr>`
                
            }

            document.querySelector("#body").innerHTML=cartona
        }


        function curdApi(endpoint,body){

                       // main.js

// POST request using fetch()
fetch("http://localhost:3030/sensor", {
	
// Adding method type
method: endpoint,

// Adding body or contents to send
body: JSON.stringify(body),

// Adding headers to the request
headers: {
    "Content-type": "application/json; charset=UTF-8"
}
})

// Converting to JSON
.then(response => response.json())


 
// Displaying results to console
.then(data => {

    console.log(data)
    getData()

});
        }



        function getInputValue(){
            let selectSensor = document.querySelector("#selectSensor").value
            let selectMark = document.querySelector("#selectMark").value
            let valueSensor = document.querySelector("#valueSensor").value
            let selectDevice = document.querySelector("#selectDevice").value
            let selectOnOff = document.querySelector("#selectOnOff").value
            let projectDataInput ={
                selectSensor,
                selectMark,
                valueSensor,
                selectDevice,
                selectOnOff

            }

            curdApi("Post",projectDataInput)
            document.querySelector("#form").reset()

}


function deleteproduct(id){
    console.log(id);
    curdApi("Delete",{id})
}

function updeteproduct(index){
    $('.btn-add').addClass("d-none")
    $('.btn-update').removeClass("d-none")

    document.querySelector("#selectSensor").value =products[index].selectSensor
    document.querySelector("#selectMark").value =products[index].selectMark
    document.querySelector("#valueSensor").value =products[index].valueSensor
    document.querySelector("#selectDevice").value =products[index].selectDevice
    document.querySelector("#selectOnOff").value =products[index].selectOnOff
    knownId =products[index].id

}

function updateInputValue() {
    $('.btn-add').removeClass("d-none")
    $('.btn-update').addClass("d-none")


    let selectSensor = document.querySelector("#selectSensor").value
    let selectMark = document.querySelector("#selectMark").value
    let valueSensor = document.querySelector("#valueSensor").value
    let selectDevice = document.querySelector("#selectDevice").value
    let selectOnOff = document.querySelector("#selectOnOff").value


    let projectDataInput ={

        selectSensor,
        selectMark,
        valueSensor,
        selectDevice,
        selectOnOff,
        id:knownId,

    }

  

    curdApi("PUT",projectDataInput)
    document.querySelector("#form").reset()
    


}







