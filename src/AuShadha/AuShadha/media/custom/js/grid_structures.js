var GRID_STRUCTURES= {
  PATIENT_GRID  : [
                  {name       : "ID", 
                  field      : "id", 
                  width      : "50px",
                  hidden     : true,
                  cellStyles : "text-align:center;"
                  },
                  {name       : "Edit", 
                  field      : "edit", 
                  width      : "50px",
                  hidden     : true,
                  cellStyles : "text-align:center;"
                  },
                  {name       : "Del", 
                  field      : "del", 
                  width      : "50px",
                  hidden     : true,
                  cellStyles : "text-align:center;"
                  },
                  {name       : "Visit", 
                  field      : "visitadd", 
                  width      : "50px",
                  hidden     : true,
                  cellStyles : "text-align:center;"
                  },
                  {name       : "Adm", 
                    field      : "admissionadd", 
                    width      : "50px",
                    hidden     : true,
                    cellStyles : "text-align:center;"
                  },

                  {name       : "Patient ID", 
                    field      : "patient_hospital_id", 
                    width      : "75px",
                    cellStyles : "text-align:center;"
                  },
                  { name      : "First Name", 
                    field     : "first_name", 
                    width      : "100px",
                    hidden      : true,
                    cellStyles : "text-align:center;"
                  },
                  { name      : "Middle Name", 
                    field     : "middle_name", 
                    width      : "100px",
                    hidden      : true,
                    cellStyles : "text-align:center;"
                  },
                  { name       : "Last Name" ,
                    field      : "last_name" , 
                    width      : "100px",
                    cellStyles : "text-align:center;",
                    hidden      : true,
                    formatter  : function(last_name){ 
                                  return '<em>'+ last_name +'</em>';
                               }
                  },
                  { name        : "Full Name", 
                    field       : "full_name", 
                    width       : "250px",
                    hidden      : false,
                    cellStyles  : "text-align:center;"
                  },
                  {name       : "Age/Sex"   ,
                    field      : "age"   ,
                    width      : "60px",
                    cellStyles : "text-align:center;",
                    formatter  : function(age,rowI){
                                  var thisRow   = this.grid.getItem(rowI);
                                  var sex       = thisRow.sex;
                                  var sex_symbol;
                                  if(sex == 'Male'){
                                   sex_symbol= '<img src="{{STATIC_URL}}images/male.png" '+
                                           'alt="Male" class="small_img">'; 
                                  }
                                  else if(sex == 'Female'){
                                   sex_symbol= '<img '+
                                          'src="{{STATIC_URL}}images/female.png"'+
                                          'title="'+ sex +
                                          '" alt="Male" class="small_img">'; 
                                  }
                                  else{
                                   sex_symbol="Others"
                                  } 
                                  var formatted_data = age +"&nbsp;&nbsp;" + sex_symbol;
                                  return formatted_data;
                                }
                  },
                  {name      : "Sex" , 
                    field     : "sex" ,
                    width      : "100px",
                    hidden    : true,
                    formatter : function(sex){
                              if(sex == 'Male'){
                               return '<img src="{{STATIC_URL}}images/male.png" '+
                                       'alt="Male" class="small_img">'; 
                              }
                              else if(sex == 'Female'){
                               return '<img '+
                                      'src="{{STATIC_URL}}images/female.png"'+
                                      'title="'+ sex +
                                      '" alt="Male" class="small_img">'; 
                              }
                              else{
                               return "Others"
                              } 
                            },
                    cellStyles: "text-align:center;"
                  },
                  { name      : "URL"   , 
                    field     : "home"  ,
                    width      : "50px",
                    hidden    : true,
                    cellStyles: "text-align:center;",
                  }],

  PATIENT_CONTACT_GRID_STRUCTURE: [
                                {name       : "ID", 
                                 field      : "id", 
                                 width      : "50px",
                                 hidden     : true,
                                 cellStyles : "text-align:center;"
                                },

                                {name       : "PatID", 
                                 field      : "pat_id", 
                                 width      : "50px",
                                 hidden     : true,
                                 cellStyles : "text-align:center;"
                                },

                                {name       : "Edit", 
                                 field      : "edit", 
                                 width      : "50px",
                                 hidden     : true,
                                 cellStyles : "text-align:center;"
                                },

                                {name       : "Del", 
                                 field      : "del", 
                                 width      : "50px",
                                 hidden     : true,
                                 cellStyles : "text-align:center;"
                                },

                                {name       : "Type", 
                                 field      : "address_type", 
                                 width      : "50px",
                                 cellStyles : "text-align:center;"
                                },

                                {name       : "Address", 
                                 field      : "address", 
                                 width      : "300px",
                                 cellStyles : "text-align:center;",
                                 formatter  : function(address,rowI){
                                                var thisRow   = this.grid.getItem(rowI);
                                                var city_name = thisRow.city;
                                                var state     = thisRow.state;
                                                var country   = thisRow.country;
                                                var pincode   = thisRow.pincode;
                                                var formatted_data = address   +"</br>" + 
                                                                     city_name  +","  + state + "</br>"+
                                                                     country    +"-" + pincode;
                                                return formatted_data;
                                              }
                                },

                                {name       : "City", 
                                 field      : "city", 
                                 width      : "150px",
                                 hidden     : true,
                                 cellStyles : "text-align:center;"
                                },

                                {name       : "State", 
                                 field      : "state", 
                                 width      : "50px",
                                 hidden     : true,
                                 cellStyles : "text-align:center;"
                                },

                                {name       : "Country", 
                                 field      : "country", 
                                 width      : "100px",
                                 hidden     : true,
                                 cellStyles : "text-align:center;"
                                },

                                {name       : "Pincode", 
                                 field      : "pincode", 
                                 width      : "100px",
                                 hidden     : true,
                                 cellStyles : "text-align:center;"
                                }],

PATIENT_CONTACT_GRID_STRUCTURE_SMALL: [
                                {name       : "ID",
                                 field      : "id",
                                 width      : "50px",
                                 hidden     : true,
                                 cellStyles : "text-align:center;"
                                },

                                {name       : "PatID",
                                 field      : "pat_id",
                                 width      : "50px",
                                 hidden     : true,
                                 cellStyles : "text-align:center;"
                                },

                                {name       : "Edit",
                                 field      : "edit",
                                 width      : "50px",
                                 hidden     : true,
                                 cellStyles : "text-align:center;"
                                },

                                {name       : "Del",
                                 field      : "del",
                                 width      : "50px",
                                 hidden     : true,
                                 cellStyles : "text-align:center;"
                                },

                                {name       : "Type",
                                 field      : "address_type",
                                 width      : "50px",
                                 cellStyles : "text-align:center;",
                                 hidden     : true
                                },

                                {name       : "Address",
                                 field      : "address",
                                 width      : "300px",
                                 cellStyles : "text-align:center;",
                                 formatter  : function(address,rowI){
                                                var thisRow   = this.grid.getItem(rowI);
                                                var address_type = thisRow.address_type;
                                                var city_name = thisRow.city;
                                                var state     = thisRow.state;
                                                var country   = thisRow.country;
                                                var pincode   = thisRow.pincode;
                                                var formatted_data = "<i><b>"+ address_type+ "</b></i></br>"+
                                                                     address   +"</br>" +
                                                                     city_name  +","  + state + "</br>"+
                                                                     country    +"-" + pincode;
                                                return formatted_data;
                                              }
                                },

                                {name       : "City",
                                 field      : "city",
                                 width      : "150px",
                                 hidden     : true,
                                 cellStyles : "text-align:center;"
                                },

                                {name       : "State",
                                 field      : "state",
                                 width      : "50px",
                                 hidden     : true,
                                 cellStyles : "text-align:center;"
                                },

                                {name       : "Country",
                                 field      : "country",
                                 width      : "100px",
                                 hidden     : true,
                                 cellStyles : "text-align:center;"
                                },

                                {name       : "Pincode",
                                 field      : "pincode",
                                 width      : "100px",
                                 hidden     : true,
                                 cellStyles : "text-align:center;"
                                }],

  PATIENT_PHONE_GRID_STRUCTURE: [
                                 {name       : "ID", 
                                   field      : "id", 
                                   width      : "50px",
                                   hidden     : true,
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "Edit", 
                                   field      : "edit", 
                                   width      : "50px",
                                   hidden     : true,
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "Del", 
                                   field      : "del", 
                                   width      : "50px",
                                   hidden     : true,
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "Type", 
                                   field      : "phone_type", 
                                   width      : "50px",
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "ISD", 
                                   field      : "ISD_Code", 
                                   width      : "250px",
                                   hidden     : true,
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "STD", 
                                   field      : "STD_Code", 
                                   width      : "150px",
                                   hidden     : true,
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "Phone", 
                                   field      : "phone", 
                                   width      : "120px",
                                   cellStyles : "text-align:center;",
                                   formatter  : function(phone, rowI){
                                                  var rowdata = this.grid.getItem(rowI);
                                                  var ISD     = rowdata.ISD_Code;
                                                  var STD     = rowdata.STD_Code;
                                                  var formatted_data = ISD + "-" + STD + "-" + phone
                                                  return formatted_data;
                                                }
                                  }],

PATIENT_PHONE_GRID_STRUCTURE_SMALL: [
                                 {name       : "ID",
                                   field      : "id",
                                   width      : "50px",
                                   hidden     : true,
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "Edit",
                                   field      : "edit",
                                   width      : "50px",
                                   hidden     : true,
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "Del",
                                   field      : "del",
                                   width      : "50px",
                                   hidden     : true,
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "Type",
                                   field      : "phone_type",
                                   width      : "50px",
                                   cellStyles : "text-align:center;",
                                   hidden     : true
                                  },

                                  {name       : "ISD",
                                   field      : "ISD_Code",
                                   width      : "250px",
                                   hidden     : true,
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "STD",
                                   field      : "STD_Code",
                                   width      : "150px",
                                   hidden     : true,
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "Phone",
                                   field      : "phone",
                                   width      : "120px",
                                   cellStyles : "text-align:center;",
                                   formatter  : function(phone, rowI){
                                                  var rowdata = this.grid.getItem(rowI);
                                                  var type     = rowdata.phone_type;
                                                  var ISD     = rowdata.ISD_Code;
                                                  var STD     = rowdata.STD_Code;
                                                  var formatted_data = "<b> <i>" + type + "</i> </b></br>" + ISD + "-" + STD + "-" + phone
                                                  return formatted_data;
                                                }
                                  }],


  PATIENT_GUARDIAN_GRID_STRUCTURE: [
                                    {name       : "ID", 
                                      field      : "id", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Edit", 
                                      field      : "edit", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Del", 
                                      field      : "del", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Name", 
                                      field      : "guardian_name", 
                                      width      : "100px",
                                      cellStyles : "text-align:center;",
                                    },

                                    {name       : "Relation", 
                                      field      : "relation_to_guardian", 
                                      width      : "60px",
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Phone", 
                                      field      : "guardian_phone", 
                                      width      : "70px",
                                      cellStyles : "text-align:center;"
                                    }],

  PATIENT_DEMOGRAPHICS_GRID_STRUCTURE: [
                                    {name       : "ID", 
                                      field      : "id", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Edit", 
                                      field      : "edit", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Del", 
                                      field      : "del", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Socioeconomics", 
                                      field      : "socioeconomics", 
                                      width      : "50px",
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Education", 
                                      field      : "education", 
                                      width      : "250px",
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Housing", 
                                      field      : "housing_conditions", 
                                      width      : "150px",
                                      cellStyles : "text-align:center;"
                                    },
                                    {name       : "Religion", 
                                      field      : "religion", 
                                      width      : "150px",
                                      cellStyles : "text-align:center;"
                                    },
                                    {name       : "Language", 
                                      field      : "languages_known", 
                                      width      : "150px",
                                      cellStyles : "text-align:center;"
                                    },
                                    {name       : "Marital Status", 
                                      field      : "marital_status", 
                                      width      : "150px",
                                      cellStyles : "text-align:center;"
                                    },
                                    {name       : "Drug Abuse", 
                                      field      : "drug_abuse_history", 
                                      width      : "150px",
                                      cellStyles : "text-align:center;"
                                    },
                                    {name       : "Alcohol", 
                                      field      : "alcohol_intake", 
                                      width      : "150px",
                                      cellStyles : "text-align:center;"
                                    },
                                    {name       : "Smoking", 
                                      field      : "smoking", 
                                      width      : "150px",
                                      cellStyles : "text-align:center;"
                                    } ],


  PATIENT_FAMILY_HISTORY_GRID_STRUCTURE: [
                                    {name       : "ID", 
                                      field      : "id", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Edit", 
                                      field      : "edit", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Del", 
                                      field      : "del", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Member", 
                                      field      : "family_member", 
                                      width      : "100px",
                                      cellStyles : "text-align:center;",
                                    },

                                    {name       : "Age", 
                                      field      : "age", 
                                      width      : "50px",
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Disease", 
                                      field      : "disease", 
                                      width      : "150px",
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Onset at", 
                                      field      : "age_at_onset", 
                                      width      : "60px",
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Deceased", 
                                      field      : "deceased", 
                                      width      : "80px",
                                      cellStyles : "text-align:center;"
                                    },
                                  ],

  PATIENT_MEDICATION_LIST_GRID_STRUCTURE: [
                                    {name       : "ID", 
                                      field      : "id", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Edit", 
                                      field      : "edit", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Del", 
                                      field      : "del", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Name", 
                                      field      : "medication", 
                                      width      : "150px",
                                      cellStyles : "text-align:center;",
                                    },

                                    {name       : "Strength", 
                                      field      : "strength", 
                                      width      : "60px",
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Dosage", 
                                      field      : "dosage", 
                                      width      : "70px",
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Prescribed on", 
                                      field      : "prescription_date", 
                                      width      : "120px",
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Active ?", 
                                      field      : "currently_active", 
                                      width      : "60px",
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Prescribed by", 
                                      field      : "prescribed_by", 
                                      width      : "100px",
                                      cellStyles : "text-align:center;"
                                    }

                                  ],

  PATIENT_ALLERGIES_GRID_STRUCTURE: [
                                    {name       : "ID", 
                                      field      : "id", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Edit", 
                                      field      : "edit", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Del", 
                                      field      : "del", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Allergic To", 
                                      field      : "allergic_to", 
                                      width      : "120px",
                                      cellStyles : "text-align:center;",
                                    },

                                    {name       : "Reaction Observed", 
                                      field      : "reaction_observed", 
                                      width      : "120px",
                                      cellStyles : "text-align:center;"
                                    }
                                  ],

PATIENT_ALLERGIES_GRID_STRUCTURE_SMALL: [
                                    {name       : "ID",
                                      field      : "id",
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Edit",
                                      field      : "edit",
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Del",
                                      field      : "del",
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name       : "Drug",
                                      field      : "allergic_to",
                                      width      : "120px",
                                      cellStyles : "text-align:center;",
                                      formatter  : function(allergy, rowI){
                                                  var rowdata  = this.grid.getItem(rowI);
                                                  var reaction    = rowdata.reaction_observed;
                                                  var formatted_data = "<b style='color:sienna'>" + allergy + "<b></br> <i style='color:black'>" + reaction + "</i>";
                                                  return formatted_data;
                                                }
                                    },

                                    {name       : "Reaction Observed",
                                      field      : "reaction_observed",
                                      width      : "120px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    }
                                  ],

  PATIENT_IMMUNIZATION_GRID_STRUCTURE: [
                                    {name        : "ID", 
                                      field      : "id", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name        : "Edit", 
                                      field      : "edit", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name        : "Del", 
                                      field      : "del", 
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name        : "Name", 
                                      field      : "vaccine_detail", 
                                      width      : "100px",
                                      cellStyles : "text-align:center;",
                                    },
                                    {name        : "Administrator", 
                                      field      : "administrator", 
                                      width      : "100px",
                                      cellStyles : "text-align:center;"
                                    },

                                    {name        : "Date", 
                                      field      : "vaccination_date", 
                                      width      : "100px",
                                      cellStyles : "text-align:center;"
                                    },

                                    {name        : "Next Due", 
                                      field      : "next_due", 
                                      width      : "100px",
                                      cellStyles : "text-align:center;"
                                    },
                                    {name        : "Site", 
                                      field      : "injection_site", 
                                      width      : "100px",
                                      cellStyles : "text-align:center;"
                                    },
                                    {name        : "Route", 
                                      field      : "route", 
                                      width      : "100px",
                                      cellStyles : "text-align:center;"
                                    },
                                    {name        : "Dose", 
                                      field      : "dose", 
                                      width      : "100px",
                                      cellStyles : "text-align:center;"
                                    },
                                    {name        : "Adverse Reaction", 
                                      field      : "adverse_reaction", 
                                      width      : "70px",
                                      cellStyles : "text-align:center;"
                                    }
                                  ],

  PATIENT_MEDICAL_HISTORY_GRID_STRUCTURE: [
                                    {name        : "ID",
                                      field      : "id",
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name        : "Edit",
                                      field      : "edit",
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name        : "Del",
                                      field      : "del",
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name        : "Disease",
                                      field      : "disease",
                                      width      : "100px",
                                      cellStyles : "text-align:center;",
                                    },
                                    {name        : "ICD 10  ",
                                      field      : "icd_10_code",
                                      width      : "100px",
                                      cellStyles : "text-align:center;"
                                    },

                                    {name        : "Status",
                                      field      : "status",
                                      width      : "100px",
                                      cellStyles : "text-align:center;"
                                    },

                                    {name        : "Infectious ?",
                                      field      : "infectious_disease",
                                      width      : "100px",
                                      cellStyles : "text-align:center;"
                                    },
                                    {name        : "Active ?",
                                      field      : "active",
                                      width      : "100px",
                                      cellStyles : "text-align:center;"
                                    },
                                    {name        : "Severity",
                                      field      : "severity",
                                      width      : "100px",
                                      cellStyles : "text-align:center;"
                                    },
                                    {name        : "Allergic ?",
                                      field      : "allergic_disease",
                                      width      : "100px",
                                      cellStyles : "text-align:center;"
                                    },
                                    {name        : "Pregnancy Warning",
                                      field      : "pregnancy_warning",
                                      width      : "70px",
                                      cellStyles : "text-align:center;"
                                    },

                                    {name        : "Date of Diagnosis",
                                      field      : "date_of_diagnosis",
                                      width      : "70px",
                                      cellStyles : "text-align:center;"
                                    },

                                    {name        : "Healed",
                                      field      : "healed",
                                      width      : "70px",
                                      cellStyles : "text-align:center;"
                                    },

                                    {name        : "Remarks",
                                      field      : "remarks",
                                      width      : "70px",
                                      cellStyles : "text-align:center;"
                                    }
                                  ],

  PATIENT_SURGICAL_HISTORY_GRID_STRUCTURE: [
                                    {name        : "ID",
                                      field      : "id",
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name        : "Edit",
                                      field      : "edit",
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name        : "Del",
                                      field      : "del",
                                      width      : "50px",
                                      hidden     : true,
                                      cellStyles : "text-align:center;"
                                    },

                                    {name        : "Description",
                                      field      : "description",
                                      width      : "100px",
                                      cellStyles : "text-align:center;",
                                    },
                                    {name        : "ICD 10  ",
                                      field      : "icd_10_code",
                                      width      : "100px",
                                      cellStyles : "text-align:center;"
                                    },

                                    {name        : "CPC Code",
                                      field      : "cpc_code",
                                      width      : "100px",
                                      cellStyles : "text-align:center;"
                                    },

                                    {name        : "Base Condition",
                                      field      : "base_condition",
                                      width      : "100px",
                                      cellStyles : "text-align:center;"
                                    },
                                    {name        : "Med. Condition",
                                      field      : "med_condition",
                                      width      : "100px",
                                      cellStyles : "text-align:center;"
                                    },
                                    {name        : "Classification",
                                      field      : "classification",
                                      width      : "100px",
                                      cellStyles : "text-align:center;"
                                    },
                                    {name        : "Date of Surgery",
                                      field      : "date_of_surgery",
                                      width      : "100px",
                                      cellStyles : "text-align:center;"
                                    },
                                    {name        : "Remarks",
                                      field      : "remarks",
                                      width      : "70px",
                                      cellStyles : "text-align:center;"
                                    }
                                  ],

  PATIENT_PATIENT_MEDIA_GRID_STRUCTURE: "",

  PATIENT_ADMISSION_GRID_SRUCTURE: [
                                  {name       : "ID", 
                                    field      : "id", 
                                    width      : "50px",
                                    hidden     : true,
                                    cellStyles : "text-align:center;"
                                  },

                                  {name       : "Home", 
                                    field      : "home", 
                                    width      : "50px",
                                    hidden     : true,
                                    cellStyles : "text-align:center;"
                                  },

                                  {name       : "Edit", 
                                    field      : "edit", 
                                    width      : "50px",
                                    hidden     : true,
                                    cellStyles : "text-align:center;"
                                  },

                                  {name       : "Del", 
                                    field      : "del", 
                                    width      : "50px",
                                    hidden     : true,
                                    cellStyles : "text-align:center;"
                                  },

                                  {name       : "DOA", 
                                    field      : "date_of_admission", 
                                    width      : "50px",
                                    cellStyles : "text-align:center;"
                                  },

                                  {name       : "TOA", 
                                    field      : "time_of_admission", 
                                    width      : "50px",
                                    cellStyles : "text-align:center;"
                                  },

                                  {name       : "Surgeon", 
                                    field      : "admitting_surgeon", 
                                    width      : "250px",
                                    cellStyles : "text-align:center;"
                                  },

                                  {name       : "Status", 
                                    field      : "admission_closed", 
                                    width      : "150px",
                                    cellStyles : "text-align:center;",
                                    formatter : function(admission_closed){
                                                      if(admission_closed == true){
                                                          return '<img src="{{STATIC_URL}}images/flag_green.png" '+
                                                          'alt="Discharged" class="small_img">'; 
                                                      }
                                                      else if(admission_closed == false){
                                                          return '<img '+
                                                          'src="{{STATIC_URL}}images/flag_green.png"'+
                                                          'alt="Active" class="small_img">'; 
                                                      }
                                                      else{
                                                          return "Others"
                                                      }
                                                } 
                                  },

                                  {name       : "Room", 
                                  field      : "room_or_ward", 
                                  width      : "50px",
                                  cellStyles : "text-align:center;"
                                  },

                                  {name       : "Hospital", 
                                  field      : "hospital", 
                                  width      : "100px",
                                  cellStyles : "text-align:center;"
                                  }],

  PATIENT_VISIT_GRID_STRUCTURE: [
                                  {name       : "ID", 
                                   field      : "id", 
                                   width      : "50px",
                                   hidden     : true,
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "Edit", 
                                   field      : "edit", 
                                   width      : "50px",
                                   hidden     : true,
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "Del", 
                                   field      : "del", 
                                   width      : "50px",
                                   hidden     : true,
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "DOV", 
                                   field      : "visit_date", 
                                   width      : "50px",
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "Surgeon", 
                                   field      : "op_surgeon", 
                                   width      : "250px",
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "Nature", 
                                   field      : "consult_nature", 
                                   width      : "150px",
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "Status", 
                                   field      : "is_active", 
                                   width      : "50px",
                                   cellStyles : "text-align:center;"
                                  },

                                  {name       : "Remarks", 
                                   field      : "remarks", 
                                   width      : "100px",
                                   cellStyles : "text-align:center;"
                                  }],
};

