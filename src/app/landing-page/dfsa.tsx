// Prudential Category 3D – DIFC entity 
$(document).ready(function () { 
    fetchStartupValue(); 

}); 

function fetchStartupValue() { 

    var entityId = getQueryParam("id");

    if (!entityId) { 

        console.log("No record ID found, skipping fetch."); 

        return; 

    } 

    var fetchUrl = "/_api/dfsa_general_requirements_fomrs(" + entityId + ")?$select=cr5f7_pleaseselectthelegalstatusoftheapplicant,
    cr5f7_pleaseselectfromthelistbelowageneraldescri,
cr5f7_arrangingoradvisingonmoneyservices,
cr5f7_providingmoneyservices


    safeAjax({ 

        type: "GET", 

        url: fetchUrl, 

        contentType: "application/json", 

        dataType: "json", 

        success: function (data) { 

            var Legal_StatusA1 = data["cr5f7_pleaseselectthelegalstatusoftheapplicant"];
            var Selection_1A5 = data["cr5f7_pleaseselectfromthelistbelowageneraldescri"];
            var MSB_A1C5 = data["cr5f7_arrangingoradvisingonmoneyservices"];
            var MSB_A2C5 = data["cr5f7_providingmoneyservices"];

            // console.log("Fetched FS Value:", FS1A1); 

            if (Legal_StatusA1 == "612320000" && (
                (Selection_1A5 == "612320004" && (MSB_A1C5 !== "")) ||
                (Selection_1A5 == "612320004" && (MSB_A2C5 !== "")) ||
                (Selection_1A5 == "612320004" && (MSB_A2C5 !== "" && MSB_A2C5 !== "" ))
            )) {
                $("fieldset[aria-label='Prudential Category 3D – DIFC entity']").show();
            } else {
                $("fieldset[aria-label='Prudential Category 3D – DIFC entity']").hide();
            }
        }, 

        error: function (xhr, textStatus, errorThrown) { 

            console.log("Error fetching value:", errorThrown); 

        } 

    }); 

} 
// Function to safely execute AJAX requests with token 

function safeAjax(ajaxOptions) { 

    var deferredAjax = $.Deferred(); 

  

    shell.getTokenDeferred().done(function (token) { 

        if (!ajaxOptions.headers) { 

            $.extend(ajaxOptions, { 

                headers: { "__RequestVerificationToken": token } 

            }); 

        } else { 

            ajaxOptions.headers["__RequestVerificationToken"] = token; 

        } 

        $.ajax(ajaxOptions) 

            .done(function (data, textStatus, jqXHR) { 

                validateLoginSession(data, textStatus, jqXHR, deferredAjax.resolve); 

            }) 

            .fail(deferredAjax.reject); 

    }).fail(function () { 

        deferredAjax.rejectWith(this, arguments); 

    }); 

  

    return deferredAjax.promise(); 

} 

// Function to get query parameters from the URL 

function getQueryParam(param) { 

    var urlParams = new URLSearchParams(window.location.search); 

    return urlParams.get(param); 

}



  // Prudential Category 3C -DIFC entity logic
$(document).ready(function () { 
    fetchStartupValue(); 

}); 

function fetchStartupValue() { 

    var entityId = getQueryParam("id");

    if (!entityId) { 

        console.log("No record ID found, skipping fetch."); 

        return; 

    } 

    var fetchUrl = "/_api/dfsa_general_requirements_fomrs(" + entityId + ")?$select=cr5f7_pleaseselectthelegalstatusoftheapplicant,
cr5f7_pleaseselectfromthelistbelowageneraldescri,
cr5f7_managingacollectiveinvestmentfund,
cr5f7_managingassets,
cr5f7_providingtrustservices,
cr5f7_managingaprofitsharinginvestmentaccount,
cr5f7_providingcustody,
cr5f7_arrangingdealsininvestments,
cr5f7_arrangingoradvisingonmoneyservices,
cr5f7_providingmoneyservices,
cr5f7_doyouwanttoaddarestriction,
cr5f7_doyouconsidertheproposedrestrictiontobesta,
cr5f7_permissions_pleaseselectthestandardrestrictio"; 


    safeAjax({ 

        type: "GET", 

        url: fetchUrl, 

        contentType: "application/json", 

        dataType: "json", 

        success: function (data) { 

            var Legal_StatusA2 = data["cr5f7_pleaseselectthelegalstatusoftheapplicant"];
            var Selection_1A1 = data["cr5f7_pleaseselectfromthelistbelowageneraldescri"];
            var Selection_FSA10 = data["cr5f7_managingacollectiveinvestmentfund"];
            var Selection_FSA12 = data["cr5f7_managingassets"];
            var Selection_FSA19 = data["cr5f7_providingtrustservices"];
            var Selection_FSA11 = data["cr5f7_managingaprofitsharinginvestmentaccount"];
            var Selection_FSA17 = data["cr5f7_providingcustody"];
            var Selection_1A5 = data["cr5f7_pleaseselectfromthelistbelowageneraldescri"];
            var MSB_A1C5 = data["cr5f7_arrangingoradvisingonmoneyservices"];
            var MSB_A2C5 = data["cr5f7_providingmoneyservices"];
            var Restriction1_A1 = data["cr5f7_doyouwanttoaddarestriction"];
            var Restriction2_A1 = data["cr5f7_doyouconsidertheproposedrestrictiontobesta"];
            var Restriction3_A10 = data["cr5f7_permissions_pleaseselectthestandardrestrictio"];

            // console.log("Fetched FS Value:", FS1A1); 

            if (Legal_StatusA2 == "612320001" && (
                (Selection_1A1 == "612320000" && Selection_FSA10.C1 == "612320000") ||
                (Selection_1A1 == "612320000" && Selection_FSA12.C !== "") ||
                (Selection_1A1 == "612320000" && Selection_FSA19.C1 == "612320000") ||
                (Selection_1A1 == "612320000" && Selection_FSA11.C1 == "612320000" && Restriction1_A1 == "1" && Restriction2_A1 == "612320000" && Restriction3_A10 == "612320009") ||
                (Selection_1A1 == "612320000" && Selection_FSA17.C !== "" ) ||
                (Selection_1A5 == "612320004" && MSB_A1C5 == "612320003") ||
                (Selection_1A5 =="612320004" && MSB_A2C5 == "612320004") ||
                (Selection_1A5 == "612320004" && MSB_A1C5 == "612320003" && Selection_1A5 == "612320004" && MSB_A2C5 == "612320004")
            )) {
                $("fieldset[aria-label='Prudential Category 3C – Non-DIFC entity ']").show(); 
            } else {
                $("fieldset[aria-label='Prudential Category 3C – Non-DIFC entity ']").hide(); 
            }

        }, 

        error: function (xhr, textStatus, errorThrown) { 

            console.log("Error fetching value:", errorThrown); 

        } 

    }); 

} 
// Function to safely execute AJAX requests with token 

function safeAjax(ajaxOptions) { 

    var deferredAjax = $.Deferred(); 

  

    shell.getTokenDeferred().done(function (token) { 

        if (!ajaxOptions.headers) { 

            $.extend(ajaxOptions, { 

                headers: { "__RequestVerificationToken": token } 

            }); 

        } else { 

            ajaxOptions.headers["__RequestVerificationToken"] = token; 

        } 

        $.ajax(ajaxOptions) 

            .done(function (data, textStatus, jqXHR) { 

                validateLoginSession(data, textStatus, jqXHR, deferredAjax.resolve); 

            }) 

            .fail(deferredAjax.reject); 

    }).fail(function () { 

        deferredAjax.rejectWith(this, arguments); 

    }); 

  

    return deferredAjax.promise(); 

} 

// Function to get query parameters from the URL 

function getQueryParam(param) { 

    var urlParams = new URLSearchParams(window.location.search); 

    return urlParams.get(param); 

}