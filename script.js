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
        $('#employee-info').append(
            '<p><strong>Name: </strong>' + $('#firstIn').val() + ' ' + $('#lastIn').val() +
            '<br /><strong>Employee ID: </strong>' + $('#idIn').val() +
            '<br /><strong>Job Title: </strong>' + $('#titleIn').val() +
            '<br /><strong>Annual Salary: </strong>$' + $('#salaryIn').val() +
            '<br /><strong>Monthly Cost: </strong>$' + Math.round($('#salaryIn').val() / 12) + '</p>'
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