// here we will store all the api;

const BASE_URL =  "http://hos.team-suit.com/api";

export const endpoints = {
    admin : {
        login :  BASE_URL + "/admin/checklogin" ,
         users : {
            list : BASE_URL + "/users/get",
            add : BASE_URL + "/users/add",
            status : BASE_URL + "/users/update/activestatus",
            delete : BASE_URL + "/users/delete",
            uploadFile : BASE_URL + "/uploadFile"
        },
        userType : {
            list : BASE_URL + "/usertype/get",
            add : BASE_URL + "/usertype/add",
            status : BASE_URL + "/usertype/update/activestatus",
            delete : BASE_URL + "/usertype/delete" ,
        },
        vendor : {
            list : BASE_URL + "/vendor/get",
        } ,
        supplyingPlant : {
            list : BASE_URL + "/plant/get",
            add :  BASE_URL + "/Plant/add",
            status : BASE_URL + "/plant/store/update/activestatus",
            delete : BASE_URL + "/plant/delete"
        } ,
        storageLocation : {
            list : BASE_URL + "/plant/store/get"
        } ,
        invoiceMasterData : {
            invoiceMasterHeader : BASE_URL + "/apanel/poheader/get",
            invoiceMasterDetails : BASE_URL + "/apanel/podetails/get",
            invoiceDetails : BASE_URL + "/apanel/poinvoice/get",
            invoiceCreateLog : BASE_URL + "/apanel/poinvoicelog/get" ,
            noGrPoLog : BASE_URL + "/apanel/masterheaderlog/get",
            invoiceStatusLog : BASE_URL + "/apanel/invoicestatuslog/get",
            invoiceMasterLog : BASE_URL + "/apanel/masterdetailslog/get"
        }
    },
    supplier : {
        
        login :  BASE_URL + "/user/checklogin" ,
        logOut : BASE_URL + "/user/logout" ,
        medicalPo : BASE_URL + "/user/poheader/get",
        invoiceList : BASE_URL + "/user/poinvoice/get",
        invoiceListItem : BASE_URL + "/user/podetails/get" ,
        saveList : BASE_URL + "/user/invoiceheaders/add" ,
        getSavedInvoiceList : BASE_URL + "/user/invoiceheaders/get" ,
        submitList : BASE_URL + "/user/poinvoicelog/add",
        getSubmitInvoiceList : BASE_URL + "/user/poinvoicelog/get" ,

        asn : {
            region : BASE_URL + "/asn/region/get" ,
            customer : BASE_URL + "/asn/customer/get" ,
            storageLocation : BASE_URL + "/asn/sloc/get" ,
            nupcoPoList : BASE_URL + "/asn/poheaderdetails/get" ,
            customerPoList : BASE_URL + "/asn/reservations/get" ,
            asnDetails : BASE_URL + "/asn/ibddetails/get" ,
            poDetails : BASE_URL + "/asn/ibdpodetails/get" ,
            asnSubmit : BASE_URL + "/asn/ibddetails/add"
        }
    }
}

