 class FormValidation {
    selectors = {
        form: '[data-js-form]',
        errorText: '[data-js-form-field-errors]',
    };

    errorMessages = {
        valueMissing: () => 'Пожалуйста, заполните это поле.',
        tooLong: ({ maxLength }) => `Значение слишком длинное. Максимум символов - ${maxLength}.`,
        tooShort: ({ minLength }) => `Значение слишком короткое. Минимум символов - ${minLength}.`,
        patternMismatch: ({ title }) => title || 'Значение не соответствует формату. ', 
    };

    constructor() {
        this.bindEvents();
    };

    manageErrors(fieldElement, errorMessages) {
        const fieldParentElement = fieldElement.parentElement;
        const fieldErrorTextElement = fieldParentElement.querySelector(this.selectors.errorText);

        fieldErrorTextElement.innerHTML = errorMessages
            .map((message) => `<span class="registration__text--error">${message}</span>`)
            .join(''); 
    }

    validateField(fieldElement) {
        const errors = fieldElement.validity;
        const errorMessages = [];

        Object.entries(this.errorMessages).forEach(([errorType, getErrorMessage]) => {
            if (errors[errorType]) {
                errorMessages.push(getErrorMessage(fieldElement));
            }
        });

        const isValid = errorMessages.length === 0; 

        this.manageErrors(fieldElement, errorMessages);

        return isValid;
    }

    blurEvent(event) {
        const { target } = event;

        const isFormField = target.closest(this.selectors.form);
        const isRequired = target.required;

        if (isFormField && isRequired) {
            this.validateField(target);
        }
    };

    submitEvent(event) {
        const isFormElement = event.target.matches(this.selectors.form);

        if (!isFormElement) {
            return;
        }

        const requiredElements = [...event.target.elements].filter(({ required }) => required);
        let isFormValid = true;

        requiredElements.forEach((element) => {
            const isElementValid = this.validateField(element);
            
            if (!isElementValid) {
                isFormValid = false;
            }
        });

        if (!isFormValid) {
            event.preventDefault();
        }
    }

    bindEvents() {
        document.addEventListener('blur', (event) => {
            this.blurEvent(event);
        }, { capture: true });

        document.addEventListener('submit', (event) => {
            this.submitEvent(event);
        })
    };
 };

 new FormValidation(); 