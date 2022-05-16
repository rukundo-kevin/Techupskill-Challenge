const tbody = document.querySelector("tbody");  

const appointmentDate = document.querySelector("#appDate");  
const appointmentReason = document.querySelector("#appReason");  

const debug = document.querySelector("#debug");
const makeAppBtn = document.querySelector("#makeAppointment");

makeAppBtn.addEventListener("click",function(e){
   if(!isDateGreaterThanToday(appointmentDate.value)){
       alert ("Sorry, an appointment can be made for the current day or for a future date only")
   }else{
       let cal = calendar(); cal.add(appointmentDate.value,appointmentReason.value);
            
      let appointments = cal.get();
       for(event in appointments){    tbody.appendChild(createAppointmentRow(event,appointments[event]))
       }
   }
})

appointmentDate.addEventListener("change",function(e){
  // debug.innerHTML = e.target.value; 
})

function createAppointmentRow(date, appointment){
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = date;
    tr.appendChild(td);
    td = document.createElement("td");
    td.innerHTML = appointment;
    tr.appendChild(td);
    return tr;
}

function checkIfAppointmentExists(date){
    return calendar().get()[date] !== undefined;
}

function isDateGreaterThanToday(date){
    let today = new Date();
    let dateToCompare = new Date(date);
    return dateToCompare >= today;
}

function calendar(){
    let appointments = {
        appointments: {},
        add: function(date, appointment){
            this.appointments[date] = appointment;
        },
        remove: function(date){
            delete this.appointments[date];
        },
        get: function(){
            return this.appointments;
        },
    };
    return appointments;
}
