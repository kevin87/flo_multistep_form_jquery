(function($) {
  $.fn.floMultiFormSteps = function(options) {
    options = $.extend({
      stepChild: ".steps",
      formId: "#example_form",
      formChild: "fieldset",
      stepId: "#form_steps",
      selectedClass: "step_bold"
    }, options);

    var stepId = this;
    var formId = options.formId;
    var fieldWrapper = options.formChild;
    var stepChild = options.stepChild;
    var selectedClass = options.selectedClass;

    var formFieldSteps = $(formId).find(fieldWrapper);
    var formFieldCount = formFieldSteps.size();

    var formSteps = $(stepId).find(stepChild);
    var formStepsCount = formSteps.size();

    $(formId).on('blur', fieldWrapper, function() {
      step = $(this).index();
      step_display(step);
    });

    function step_display(step) {
      if(formFieldSteps.eq(step).find("input").val() == "") {
        formSteps.eq(step).removeClass(selectedClass);
      }
      else {
        formSteps.eq(step).addClass(selectedClass);
      }
    }
  }
})(jQuery); 

