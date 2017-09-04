$(document).ready(onReady)

function onReady() {
    $('#button').on('click', dataInput);
}

var employees = [];
    // not sure how this array got used at all?

    // store the information to calculate monthly costs, 
    // append information to the DOM 
    // clear the input fields. Using the stored information, 
    // calculate monthly costs and append this to the to DOM.

    function dataInput() {
        var income = 0;
        var monthCost = 0;
        var person = new Employee ($('#firstIn').val(), $('#lastIn').val(), 
        $('#idIn').val(), $('#titleIn').val(), $('#salaryIn').val());
        employees.push(person);//do not see this array in the console
        income = Number(person.annualsalary);
        monthCost = Math.round(income / 12);
        $('#employee').append(
            '<p><em>Name: </em>' + $('#firstIn').val() + ' ' + $('#lastIn').val() +
            '<br /><em>Employee ID: </em>' + $('#idIn').val() +
            '<br /><em>Job Title: </em>' + $('#titleIn').val() +
            '<br /><em>Annual Salary: </em>$' + $('#salaryIn').val() +
            '<br /><em>Monthly Cost: </em>$' + Math.round($('#salaryIn').val() / 12) + '</p>'
        );
        $('.input').val('');
        
    }
    
    function Employee (firstIn, lastIn, idIn, titleIn, salaryIn) {
        this.firstname = firstIn;
        this.lastname = lastIn;
        this.idnumber = idIn;
        this.jobtitle = titleIn;
        this.annualsalary = salaryIn;
    }