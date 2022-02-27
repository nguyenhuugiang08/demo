
function Validator(options) {
    function getParent (element, selector) {
        while (element.parentElement) {
            if(element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules = {};

    function validate(inputElement, rule) {
        var errorMessage;
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
       
        // lấy ra các rule của selector
        var rules = selectorRules[rule.selector];

        // lặp qua từng rule và kiểm tra

        for(var i = 0; i < rules.length; ++i) {

            switch(inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked') 
                    );
                break;

                default:
                     errorMessage = rules[i](inputElement.value);
            }
           

            if(errorMessage) break;
        }
        if(errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        }
        else{
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }
        return !errorMessage;
        
    }
        
    var formElement = document.querySelector(options.form);

    if(formElement) {
        formElement.onsubmit = function(e) {
            e.preventDefault();

            var isFormValid = true;

            options.rules.forEach(rule => {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if(!isValid) {
                    isFormValid = false;
                }
            })

            if(isFormValid) {
                // trường hợp submit với javascript
               if(typeof options.onSubmit === 'function'){
                    
                var enableInputs = formElement.querySelectorAll('[name]');
                var formValues = Array.from(enableInputs).reduce((values, input) => {
                    switch(input.type) {
                        case 'radio':
                            values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                        case 'checkbox': 
                            if(!input.matches(':checked')) {
                                values[input.name] = '';
                                return values
                            };
                            if (!Array.isArray(values[input.name])) {
                                values[input.name] = [];
                            }

                            values[input.name].push(input.value);
                        break;

                        case 'file':
                            values[input.name] = input.files;
                            break;
                        default:
                            values[input.name] = input.value;
                    }
                    return values;
                }, {})

                options.onSubmit(formValues);
               }
            //    trường hợp submit với hành vi mặc định của trình duyệt
               else {
                    formElement.submit();
               }
            }
        }
    }
    
    if(options.form) {
        options.rules.forEach(rule => {

            // lưu lại các rules cho mỗi input
            
            if(Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            }else {
                selectorRules[rule.selector] = [rule.test];
            }
            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach((inputElement) => {
                if(inputElement) {

                            // Khi người dùng blur ra ngoài
                            inputElement.onblur = function () {
                                    validate(inputElement, rule);
                            }
                            
                            //  khi người dùng bắt đầu gõ
                            inputElement.oninput = function () {
                                var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                                errorElement.innerText = '';
                                getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                            }
                            
                            inputElement.onchange = function () {
                                validate(inputElement, rule);
                            }
                            
                        }
            })
        });

    }
};

// Định nghĩa các rules
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : 'Vui lòng nhập trường này';
        }
    };
};

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Trường này phải là email'
        }
    };
};

Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
           return value.length >= min ? undefined : `Vui lòng nhập tối thiếu ${min} ký tự`
        }
    };
};

Validator.isconfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
           return value === getConfirmValue() ? undefined :message;      
        }
    };
}


