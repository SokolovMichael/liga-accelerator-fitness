const form = document.querySelector('.form');
const formFieldset = form.querySelector('.form__fieldset');
const formItemTel = formFieldset.querySelector('.form__item--tel');

const inputTel = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const eventCalllback = (evt) => {
      const el = evt.target;
      const clearVal = el.dataset.phoneClear;
      const pattern = el.dataset.phonePattern;
      const matrixDef = '+7(___) ___-__-__';
      const matrix = pattern ? pattern : matrixDef;
      let i = 0;
      const def = matrix.replace(/\D/g, '');
      let val = evt.target.value.replace(/\D/g, '');

      if (clearVal !== 'false' && evt.type !== 'blur') {
        if (val.length < matrix.match(/([\_\d])/g).length) {
          formItemTel.classList.add('form__item--alert');
          form.addEventListener('submit', function (event) {
            event.preventDefault();
          });
        } else {
          formItemTel.classList.remove('form__item--alert');
          form.submit();
        }
      }

      if (def.length >= val.length) {
        val = def;
      }

      evt.target.value = matrix.replace(/./g, function (a) {
        let target = 0;

        if (/[_\d]/.test(a) && i < val.length) {
          target = val.charAt(i++);
        } else if (i >= val.length) {
          target = '';
        } else {
          target = a;
        }
        return target;
      });
    };

    const phoneInputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phoneInputs) {
      for (let event of ['input', 'blur', 'focus']) {
        elem.addEventListener(event, eventCalllback);
      }
    }
  });
};

export {inputTel};
