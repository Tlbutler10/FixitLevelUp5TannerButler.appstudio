seeCustomers.onshow=function(){
  let query = "SELECT * FROM customer"
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tlb91133&pass=BIA375&database=tlb91133&query=" + query)

    if (req1.status == 200) { //transit worked.
            let results = JSON.parse(req1.responseText)
            // names now in results array - load names into the dropdown
            dpdCustomers.clear()
            for (i = 0; i <= results.length - 1; i++)
                dpdCustomers.addItem(results[i][1])
    } else {
        // transit error
        NSB.MsgBox("Error: " + req1.status);
    } 
}
btnChoose.onclick=function(){
  let query = "SELECT * FROM customer WHERE name=" + dpdCustomers.selection
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tlb91133&pass=BIA375&database=tlb91133&query=" + query)
    let results = JSON.parse(req1.responseText)
  lblInfo.value = `${drpInfo.selection}`
  lblAddress.value = `${results[2]}`
  lblCity.value = `${results[3]}, ${results[4]}, ${results[5]}`
}
hmbNav.onclick=function(){
switch (hmbNav.selection){
 case 'See Customer':
    ChangeForm(seeCustomers)
    break;
  case 'Add Customer':
  ChangeForm(addCustomer)
  break;
case 'Edit Customer':
  ChangeForm(deleteUpdateCustomer)
  Break;
case 'DDelete Customer':
  ChangeForm(deleteUpdateCustomer)
  break;
}
}



