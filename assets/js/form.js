// document.addEventListener("DOMContentLoaded", function () {
//   const form = document.getElementById("leadForm");
//   const firstName = document.getElementById("FirstName");
//   const phone = document.getElementById("phone");
//   const fileInput = document.getElementById("formFileInput");

//   const campaignNameInput = document.querySelector("[name=campaign_name]");
//   const facilityInput = document.querySelector("[name=support_hospital]");
//   const specialityInput = document.querySelector("[name=support_speciality]");

//   // Enforce numeric input only
//   phone.addEventListener("keypress", function (event) {
//     if (event.which < 48 || event.which > 57) {
//       event.preventDefault();
//     }
//   });

//   phone.addEventListener("paste", function (event) {
//     const pasteData = event.clipboardData.getData("text");
//     if (!/^\d+$/.test(pasteData)) {
//       event.preventDefault();
//     }
//   });

//   phone.addEventListener("input", function () {
//     phone.value = phone.value.replace(/\D/g, "");
//   });

//   const apiUrl =
//     "https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Capture?accessKey=u%24rc6349201457cca968699b19bb23e8582&secretKey=bc72bc442586776b1a24c4340db908f1896d5a56";

//   form.addEventListener("submit", async function (e) {
//     e.preventDefault();

//     const file =
//       fileInput && fileInput.files.length > 0 ? fileInput.files[0] : null;

//     // Safely extract values with fallback
//     const campaignName = campaignNameInput
//       ? campaignNameInput.value.trim()
//       : "";
//     const facilityName = facilityInput ? facilityInput.value.trim() : "";
//     const speciality = specialityInput ? specialityInput.value.trim() : "";

//     const payload = [
//       { Attribute: "FirstName", Value: firstName.value.trim() },
//       { Attribute: "Phone", Value: phone.value.trim() },
//       { Attribute: "Source", Value: "Paid Campaigns" },
//       { Attribute: "mx_SubSource", Value: "Google" },
//       { Attribute: "mx_Campaign_Name", Value: campaignName },
//       { Attribute: "mx_FacilityName", Value: facilityName },
//       { Attribute: "mx_Speciality", Value: speciality },
//       { Attribute: "mx_Form_Name", Value: "Get a Call Back" },
//       { Attribute: "SearchBy", Value: "Phone" },
//     ];

//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = async function () {
//         payload.push({ Attribute: "mx_FileUpload", Value: reader.result });
//         await submitToLeadSquared(payload);
//       };
//       reader.readAsDataURL(file);
//     } else {
//       await submitToLeadSquared(payload);
//     }
//   });

//   async function submitToLeadSquared(payload) {
//     try {
//       const response = await fetch(apiUrl, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       const data = await response.json();

//       if (data?.Status === "Success") {
//         document.getElementById("responseMessage").innerText =
//           "✅ Lead Submitted Successfully!";
//         form.reset();

//         // Redirect to thankyou page after a short delay (optional)
//         setTimeout(() => {
//             window.location.href = "/thank-you.html";
//         }, 1000); // 1 second delay
//       } else {
//         document.getElementById("responseMessage").innerText =
//           "❌ Failed: " + (data.ExceptionMessage || "Unknown error");
//       }
//     } catch (err) {
//       console.error("Error submitting to LeadSquared:", err);
//       document.getElementById("responseMessage").innerText =
//         "❌ Something went wrong while submitting!";
//     }
//   }
// });

// // document.addEventListener("DOMContentLoaded", function () {
// //     const form = document.getElementById("leadForm");

// //     if (form) {
// //         form.setAttribute("action", "submit-form.php");
// //     }
// // });


function validateForm() {
    const name = document.getElementById('support_name').value.trim();
    const phone = document.getElementById('support_contact').value.trim();

    const namePattern = /^[a-zA-Z\s]+$/;
    const phonePattern = /^\d{10}$/;

    if (!namePattern.test(name)) {
        alert("Please enter a valid name (only letters).");
        return false;
    }

    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }

    return true;
}