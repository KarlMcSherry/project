function fareEstimator () {
    var dm_distance = document.getElementById ("distance").value,
        dm_rate = document.getElementById ("rate").checked, 
        dm_holiday = document.getElementById ("holiday").checked, 
        estimatedCost;
    
    if (dm_distance <= 15) {
        if (dm_rate === true || dm_holiday === true)
            {
                estimatedCost = ((dm_distance - 0.5) * 1.40);
    } 
        else {
        estimatedCost = ((dm_distance - 0.5) * 1.10);    
    }
    }               
    
    else {
        if (dm_rate === true || dm_holiday == true)
            {
            estimatedCost = (((15 - .5) * 1.40) +
            ((dm_distance - 15) * 1.75))
    }
        else {
        estimatedCost = (((15 - .5) * 1.10) + 
            ((dm_distance - 15) * 1.45));    
    }
    }
    var output = estimatedCost.toPrecision(4);
    document.getElementById("estimatedFare").value = output;
}

