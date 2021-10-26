//age dropdown iteration
var ageId = document.getElementById("age_id");
var ageOp=null;

for(let i=1; i<=100; i++){
    ageOp += "<option>"+i+"</option>";
}
ageId.innerHTML = ageOp;

//datatable functions
$(document).ready(function(){
  $('#result_table_id').DataTable(
    {
      columns : [
        { title: "Name" },
        { title: "age" },
        { title: "gender" },
        { title: "state." },
        { title: "city" },
        { title: "Delete"}
      ]

    })
})

//delete icon
var del = `<i style="padding-right:100px" id="delete_icon" class="fas fa-trash-alt"></i>`; 

//submit 
$(document).on("submit", function(e){
  e.preventDefault();
  var name = document.getElementById("name").value;
  var age = document.getElementById("age_id").value;
  var gender = document.getElementById("gender_id").value;
  var state = document.getElementById("state_id").value;
  var city = document.getElementById("city_id").value;
  // alert(name+" "+age +" "+ gender+" "+state +" "+city);

  // var datalist= ` <div class="row-parent">
  //                 <div class="inline" id="name">`+name+`</div>
  //                 <div class="inline" id="age_id">`+age+`</div>
  //                 <div class="inline" id="gender_id">`+gender+`</div>
  //                 <div class="inline" id="state_id">`+state+`</div>
  //                 <div class="inline" id="city_id">`+city+`</div></div>`;

  // // $("document").parents('.aadhar_results').find('.results_table').append(datalist);               
  // // $('.aadhar_results').append(name+" "+age +" "+ gender+" "+state +" "+city);
  // $('.aadhar_results').append(datalist);

  var t = $('#result_table_id').DataTable();
  
  t.row.add( [
    name,
    age,
    gender,
    state,
    city,
    del
] ).draw( false );


});



//delete
$(document).on('click', 'i#delete_icon', function () {
  // alert();
  $(this).parent().parent().remove();
} );
