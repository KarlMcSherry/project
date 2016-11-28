function fareEstimator () {
    var dm_distance = document.getElementById ("distance").value,
        dm_rate = document.getElementById ("rate").checked, 
        dm_holiday = document.getElementById ("holiday").checked, 
        estimatedCost;
    
    if (dm_distance <= 15) {
        if (dm_rate === true || dm_holiday === true)
            {
                estimatedCost = (4.00) + ((dm_distance - 0.5) * 1.40);
    } 
        else {
        estimatedCost = ((dm_distance - 0.5) * 1.10) + 3.60;    
    }
    }               
    
    else {
        if (dm_rate === true || dm_holiday == true)
            {
            estimatedCost = (((15 - .5) * 1.40) +
            ((dm_distance - 15) * 1.75)) + 4;
    }
        else {
        estimatedCost = (((15 - .5) * 1.10) + 
            ((dm_distance - 15) * 1.45)) + 3.60;    
    }
    }
    var output = estimatedCost.toFixed(2);
    document.getElementById("estimatedFare").value = output;
}

