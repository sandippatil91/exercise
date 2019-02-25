$.validator.addMethod("panNumber", function(value, element) {
    return this.optional(element) || /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/.test(value);
}, "Invalid Pan Number");
$.validator.addMethod("ifscCode", function(value, element) {
    return this.optional(element) || /^([a-zA-Z]){4}([0-9]){7}?$/.test(value);
}, "Invalid IFSC");
jQuery.validator.addMethod("propertyLogoFormat", function(value, element) {
    if (/^(.*\.(?!(png|jpg)$))?[^.]*$/i.test(value)) {
        return false;
    } else {
        return true;
    };
}, "Please upload .jpg or .png file format");
jQuery.validator.addMethod("policiesLicensesFileFormat", function(value, element) {
    if (/^(.*\.(?!(pdf)$))?[^.]*$/i.test(value)) {
        return false;
    } else {
        return true;
    };
}, "Please upload .pdf file format");
$.validator.addMethod('minStrict', function(value, el, param) {
    return value > param;
}, "Enter value greater than zero");
$.validator.addMethod('minStrict1', function(value, el, param) {
    return value > param;
}, "Enter value greater than one");
$.validator.addMethod('endYearGreaterThanOrEqualTO', function(value, element, params) {
    if (!/Invalid|NaN/.value) {
        if ($(params[1]).val() != 0) {
            if (value == 9999) {
                return false;
            } else {
                return value >= $(params[0]).val();
            }
        } else {
            if (value == 9999) {
                return true;
            } else {
                return false;
            }
        }
    }
    return isNaN(value) && isNaN($(params[2]).val());
}, 'Must be greater than start year.');
$.validator.addMethod('endMonthGreaterThanOrEqualTO', function(value, element, params) {
    if (!/Invalid|NaN/.value) {
        if ($(params[0]).val() == $(params[1]).val()) {
            return value > $(params[2]).val();
        } else {
            return value;
        }
    }
    return isNaN(value) && isNaN($(params[2]).val());
}, 'Must be greater than start Month.');
$.validator.addMethod('filesize', function(value, element, param) {
    return this.optional(element) || (element.files[0].size <= param)
});
$.validator.addMethod("passwordcheck", function(value) {
    return /[A-Z]+/.test(value) && /[a-z]+/.test(value) && /[\d\W]+/.test(value) && /\S{8,}/.test(value);
}, 'Must contain minimum 8 characters including 1 Upper, 1 Lower and 1 or more digit/special char');
$.validator.addMethod("valueNotEquals", function(value, element, arg) {
    return arg != value;
}, "Value must not equal arg.");
$.validator.addMethod("AddressFieldRegEx", function(value, element) {
    return this.optional(element) || /^[a-z\d\-_.\[\]\(\)\/\,\#\@\s]+$/i.test(value);
}, "Must contain only letters, numbers, dot, comma, [], (), dashes or underscore.");
$.validator.addMethod("cityNameRegex", function(value, element) {
    return this.optional(element) || /^[a-z\d\s]+$/i.test(value);
}, "It allows alphanumeric characters only.");
$.validator.addMethod("countryCodeRegex", function(value, element) {
    return this.optional(element) || /^[+]\d+$/i.test(value);
}, "Country code is not valid.");
$.validator.addMethod("laxEmail", function(value, element) {
    return this.optional(element) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
}, 'Please enter a valid email address.');
$.validator.addMethod("alpha", function(value, element) {
    return this.optional(element) || /^[a-z\s]+$/i.test(value);
}, "Must contain alphabet characters only.");
$.validator.addMethod("alphanumaricRegex", function(value, element) {
    return this.optional(element) || /^[a-z\d\s]+$/i.test(value);
}, "It allows alphanumeric characters only.");
$.validator.addMethod("designationRegex", function(value, element) {
    return this.optional(element) || /^[a-z\d\-_.\s]+$/i.test(value);
}, "Must contain only letters, numbers, dot, dashes or underscore.");
$.validator.addMethod("dateRegex", function(value, element) {
    return this.optional(element) || /^[0-9]{2}[-|\/]{1}[0-9]{2}[-|\/]{1}[0-9]{4}$/i.test(value);
}, "Enter Date in DD/MM/YYYY format.");
$.validator.addMethod("timeRegex", function(value, element) {
    return this.optional(element) || /^(([0-1]?[0-9])|([2][0-3])):([0-5]?[0-9])(:([0-5]?[0-9]))?$/i.test(value);
}, "Please enter a valid time.");
$.validator.addMethod("roles", function(value, elem, param) {
    if ($(".roles:checkbox:checked").length > 0) {
        return true;
    } else {
        return false;
    }
}, "You must select at least one!");
$.validator.addMethod('selectcheck', function(value) {
    return (value != 'default');
}, "country required");
$.validator.addMethod("roles", function(value, elem, param) {
    if ($(".roles:checkbox:checked").length > 0) {
        return true;
    } else {
        return false;
    }
}, "You must select at least one!");
$('#enquiryForm,#mediaForm').validate({
    ignore: ':hidden:not(.validateField input)',
    onkeyup: function(element) {
        $(element).valid()
    },
    errorClass: 'help-block',
    errorElement: 'span',
    errorPlacement: function(error, e) {
        e.closest('.validateField').append(error);
        return false;
    },
    highlight: function(e) {
        $(e).closest('.validateField').removeClass('has-success has-error').addClass('has-error');
        $(e).closest('.help-block').remove();
        return false;
    },
    success: function(e) {
        e.closest('.validateField').removeClass('has-success has-error').addClass('has-success');
        e.closest('.help-block').remove();
        return false;
    },
    rules: {},
    message: {}
});
$.validator.addClassRules({
    validateRequired: {
        required: true
    },
    validateAlphaonly: {
        alpha: true
    },
    validateAlphanumaric: {
        alphanumaricRegex: true
    },
    validateNumber: {
        digits: true
    },
    validateDecimalNumber: {
        number: true
    },
    validateEmail: {
        laxEmail: true
    },
    validateURL: {
        url: true
    },
    validatePassword: {
        passwordcheck: true
    },
    validateConfirmPassword: {
        equalTo: '.validatePassword'
    },
    validateMobileNoLimit: {
        minlength: 10,
        maxlength: 15,
        digits: true
    },
    validatePincodeLimit: {
        minlength: 6,
        maxlength: 6,
        digits: true
    },
	validateAreaCode: {
        minlength: 3,
        maxlength: 5,
    },
    validateTelephoneNoLimit: {
        minlength: 8,
        maxlength: 12,
    },
    validatetxtDesignation: {
        designationRegex: true
    },
    validateDate: {
        dateRegex: true
    },
    validateTime: {
        timeRegex: true
    },
    validateMinStrict: {
        minStrict: 0
    },
    validateSubvenueCount: {
        minStrict1: 1
    },
    validateAddressField: {
        AddressFieldRegEx: true
    },
    validatePropertyLogo: {
        required: false,
        propertyLogoFormat: true
    },
    validatePoliciesLicensesFileFormat: {
        policiesLicensesFileFormat: true
    },
    validatePanNumber: {
        panNumber: true
    },
    validateIFSC: {
        ifscCode: true
    }
});
jQuery.extend(jQuery.validator.messages, {
    maxlength: jQuery.validator.format("Please enter no more than {0} digits."),
    minlength: jQuery.validator.format("Please enter at least {0} digits.")
});
$('.validateContainer .checkValidationBtn').click(ValidateAndSubmit);

function ValidateAndSubmit(evt) {
    var $group = $(evt.currentTarget).parents('.validateContainer');
    var isValid = true;
    $group.find('.validateField .form-control').each(function(i, item) {
        if (!$(item).valid()) isValid = false;
    });
    if (!isValid) evt.preventDefault();
}