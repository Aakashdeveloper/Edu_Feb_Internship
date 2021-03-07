> localStorage
    # Presistent Storage
    # we have to manully remove 
    # save wrt to browser


    localStorage.setItem('_token___','MyEduToken')
    undefined
    localStorage.getItem('_token__')
    null
    localStorage.getItem('_token___')
    "MyEduToken"
    localStorage.removeItem('_token___')
    undefined
    localStorage.getItem('_token___')
    

> sessionStorage
    # Non Persistent Storage
    # remove as soon as you close tab / remove manully
    # save wrt to tab

    sessionStorage.setItem("_myblock_","3286587 8yc8y4n")
    undefined
    sessionStorage.getItem("_myblock_")
    "3286587 8yc8y4n"
    sessionStorage.removeItem("_myblock_")

> Cookies
    # Save wrt to website
    # expire in time

    document.cookie
    "_ga=GA1.2.1880173027.1602255983; city=London; origin=delhi; _gid=GA1.2.1498062474.1614959106; _gat_gtag_UA_131256843_1=1"
    document.cookie="mydata=test; expires=Mon, 08 Mar 2021 01:00:00 UTC"
    "mydata=test; expires=Mon, 08 Mar 2021 01:00:00 UTC"