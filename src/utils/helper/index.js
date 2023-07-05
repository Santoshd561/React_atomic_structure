export const isValidEmail = (mail) => {
  if (mail === "") {
    return false;
  } else {
    if (/^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(mail)) {
      return true;
    } else {
      return false;
    }
  }
};

export const getValidEmailErrorMessage = (mail) => {
  if (mail === "") {
    return "Required";
  } else {
    if (/^[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(mail)) {
      return "";
    } else {
      return "Incorrect email address";
    }
  }
};

export const backendHosts = () => {
  let backendHosts = {};
  const hostname = window && window.location && window.location.hostname;
  // || hostname === "localhost"

  if (hostname.includes("staging")) {
    backendHosts.AUTH_SERVICE =
      "https://awak-wk-auth-micro-service-staging.awakpd.com/";
    backendHosts.USER_SERVICE =
      "https://awak-wk-user-micro-service-staging.awakpd.com";
    backendHosts.PATIENT_SERVICE =
      "https://awak-wk-patient-micro-service-staging.awakpd.com";
    backendHosts.CLINICIAN_SERVICE =
      "https://awak-wk-clinician-micro-service-staging.awakpd.com";
    backendHosts.NOTES_SERVICE =
      "https://awak-wk-notes-micro-service-staging.awakpd.com";
    backendHosts.VITALS_SERVICE =
      "https://awak-wk-vital-logs-micro-service-staging.awakpd.com/";
    backendHosts.PATIENT_MEDICATION =
      "https://awak-wk-medication-micro-service-staging.awakpd.com";
    backendHosts.CLINIC_SERVICE =
      "https://awak-wk-clinic-micro-service-staging.awakpd.com";
    backendHosts.CONFIG_SERVICE =
      "https://awak-wk-config-micro-service-staging.awakpd.com";
    backendHosts.SYMPTOMS_SERVICE =
      "https://awak-wk-wk-backend-symptom-logs-staging.awakpd.com";
    backendHosts.APPOINTMENT_SERVICE =
      "https://awak-wk-appointment-micro-service-staging.awakpd.com";
    backendHosts.MOCK_API =
      "https://virtserver.swaggerhub.com";
    backendHosts.NOTIFICATION_SERVICE =
      "https://awak-wk-notification-micro-service-staging.awakpd.com";
    backendHosts.THERAPY_SERVICE =
      "https://awak-wk-theropy-logs-micro-service-staging.awakpd.com";
    backendHosts.DIET_SERVICE =
      "https://awak-wk-diet-logs-micro-service-staging.awakpd.com";
  } else if (hostname.includes("-qa")) {
    backendHosts.AUTH_SERVICE =
      "https://awak-wk-auth-micro-service-qa.awakpd.com/";
    backendHosts.USER_SERVICE =
      "https://awak-wk-user-micro-service-qa.awakpd.com";
    backendHosts.PATIENT_SERVICE =
      "https://awak-wk-patient-micro-service-qa.awakpd.com";
    backendHosts.CLINICIAN_SERVICE =
      "https://awak-wk-clinician-micro-service-qa.awakpd.com";
    backendHosts.NOTES_SERVICE =
      "https://awak-wk-notes-micro-service-qa.awakpd.com";
    backendHosts.VITALS_SERVICE =
      "https://awak-wk-vital-logs-micro-service-qa.awakpd.com/";
    backendHosts.PATIENT_MEDICATION =
      "https://awak-wk-medication-micro-service-qa.awakpd.com";
    backendHosts.CLINIC_SERVICE =
      "https://awak-wk-clinic-micro-service-qa.awakpd.com";
    backendHosts.CONFIG_SERVICE =
      "https://awak-wk-config-micro-service-qa.awakpd.com";
    backendHosts.SYMPTOMS_SERVICE =
      "https://awak-wk-wk-backend-symptom-logs-qa.awakpd.com";
    backendHosts.APPOINTMENT_SERVICE =
      "https://awak-wk-appointment-micro-service-qa.awakpd.com";
    backendHosts.MOCK_API =
      "https://virtserver.swaggerhub.com";
    backendHosts.NOTIFICATION_SERVICE =
      "https://awak-wk-notification-micro-service-qa.awakpd.com";
    backendHosts.THERAPY_SERVICE =
      "https://awak-wk-theropy-logs-micro-service-qa.awakpd.com";
    backendHosts.DIET_SERVICE =
      "https://awak-wk-diet-logs-micro-service-qa.awakpd.com";
  } else if (hostname.includes("demo")) {
    backendHosts.AUTH_SERVICE =
      "https://awak-wk-auth-micro-service-demo.awakpd.com/";
    backendHosts.USER_SERVICE =
      "https://awak-wk-user-micro-service-demo.awakpd.com";
    backendHosts.PATIENT_SERVICE =
      "https://awak-wk-patient-micro-service-demo.awakpd.com";
    backendHosts.CLINICIAN_SERVICE =
      "https://awak-wk-clinician-micro-service-demo.awakpd.com";
    backendHosts.NOTES_SERVICE =
      "https://awak-wk-notes-micro-service-demo.awakpd.com";
    backendHosts.VITALS_SERVICE =
      "https://awak-wk-vital-logs-micro-service-demo.awakpd.com/";
    backendHosts.PATIENT_MEDICATION =
      "https://awak-wk-medication-micro-service-demo.awakpd.com";
    backendHosts.CLINIC_SERVICE =
      "https://awak-wk-clinic-micro-service-demo.awakpd.com";
    backendHosts.CONFIG_SERVICE =
      "https://awak-wk-config-micro-service-demo.awakpd.com";
    backendHosts.SYMPTOMS_SERVICE =
      "https://awak-wk-wk-backend-symptom-logs-demo.awakpd.com";
    backendHosts.APPOINTMENT_SERVICE =
      "https://awak-wk-appointment-micro-service-demo.awakpd.com";
    backendHosts.MOCK_API =
      "https://virtserver.swaggerhub.com";
    backendHosts.NOTIFICATION_SERVICE =
      "https://awak-wk-notification-micro-service-demo.awakpd.com";
    backendHosts.THERAPY_SERVICE =
      "https://awak-wk-theropy-logs-micro-service-demo.awakpd.com";
    backendHosts.DIET_SERVICE =
      "https://awak-wk-diet-logs-micro-service-demo.awakpd.com";
  } else if (hostname.includes("dev")) {
    backendHosts.AUTH_SERVICE =
      "https://awak-wk-auth-micro-service-dev.awakpd.com/";
    backendHosts.USER_SERVICE =
      "https://awak-wk-user-micro-service-dev.awakpd.com";
    backendHosts.PATIENT_SERVICE =
      "https://awak-wk-patient-micro-service-dev.awakpd.com";
    backendHosts.CLINICIAN_SERVICE =
      "https://awak-wk-clinician-micro-service-dev.awakpd.com";
    backendHosts.NOTES_SERVICE =
      "https://awak-wk-notes-micro-service-dev.awakpd.com";
    backendHosts.VITALS_SERVICE =
      "https://awak-wk-vital-logs-micro-service-dev.awakpd.com/";
    backendHosts.PATIENT_MEDICATION =
      "https://awak-wk-medication-micro-service-dev.awakpd.com";
    backendHosts.CLINIC_SERVICE =
      "https://awak-wk-clinic-micro-service-dev.awakpd.com";
    backendHosts.CONFIG_SERVICE =
      "https://awak-wk-config-micro-service-dev.awakpd.com";
    backendHosts.SYMPTOMS_SERVICE =
      "https://awak-wk-wk-backend-symptom-logs-dev.awakpd.com";
    backendHosts.APPOINTMENT_SERVICE =
      "https://awak-wk-appointment-micro-service-dev.awakpd.com";
    backendHosts.MOCK_API =
      "https://virtserver.swaggerhub.com";
    backendHosts.NOTIFICATION_SERVICE =
      "https://awak-wk-notification-micro-service-dev.awakpd.com";
    backendHosts.THERAPY_SERVICE =
      "https://awak-wk-theropy-logs-micro-service-dev.awakpd.com";
    backendHosts.DIET_SERVICE =
      "https://awak-wk-diet-logs-micro-service-dev.awakpd.com";
  } else {
    backendHosts.AUTH_SERVICE = "https://auth-micro-service.wekare.sg/";
    backendHosts.USER_SERVICE = "https://user-micro-service.wekare.sg";
    backendHosts.PATIENT_SERVICE =
      "https://patient-micro-service.wekare.sg";
    backendHosts.CLINICIAN_SERVICE =
      "https://clinician-micro-service.wekare.sg";
    backendHosts.NOTES_SERVICE =
      "https://notes-micro-service.wekare.sg";
    backendHosts.VITALS_SERVICE =
      "https://vital-logs-micro-service.wekare.sg";
    backendHosts.PATIENT_MEDICATION =
      "https://medication-micro-service.wekare.sg";
    backendHosts.CLINIC_SERVICE =
      "https://clinic-micro-service.wekare.sg";
    backendHosts.CONFIG_SERVICE =
      "https://config-micro-service.wekare.sg";
    backendHosts.SYMPTOMS_SERVICE =
      "https://symptoms-logs-micro-service.wekare.sg";
    backendHosts.APPOINTMENT_SERVICE =
      "https://appointment-micro-service.wekare.sg";
    backendHosts.MOCK_API =
      "https://virtserver.swaggerhub.com";
    backendHosts.NOTIFICATION_SERVICE =
      "https://notification-micro-service.wekare.sg";
    backendHosts.THERAPY_SERVICE =
      "https://therapy-logs-micro-service.wekare.sg";
    backendHosts.DIET_SERVICE =
      "https://diet-logs-micro-service.wekare.sg";
  }
  return backendHosts;
};
