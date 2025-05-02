var lang = localStorage.getItem("lang");
var pathname = window.location.pathname.replace(".html", "");

$(document).ready(function () {
  // ---------- Language Handler
  if (!lang) {
    localStorage.setItem("lang", "en");
  }

  if (lang === "fa") {
    document.getElementById("content_wrapper").classList.add("ltl_wrapper");
    if (
      document.getElementById("languageIcon") &&
      document.getElementById("languageText")
    ) {
      document.getElementById("languageIcon").src =
        "../assets/images/icons/en.png";
      document.getElementById("languageText").innerText = "EN";
    }
  } else {
    document.getElementById("content_wrapper").classList.add("rtr_wrapper");
    if (
      document.getElementById("languageIcon") &&
      document.getElementById("languageText")
    ) {
      document.getElementById("languageIcon").src =
        "../assets/images/icons/jp.png";
      document.getElementById("languageText").innerText = "日本語";
    }
  }

  // Home page data
  const home_data = {
    image: globalData.image,
    links: [
      {
        name: `mailto:${globalData.email}`,
        active: globalData.email ? true : false,
        img: "../assets/images/icons/mail.png",
      },
      {
        name: globalData.googleScholar,
        active: globalData.googleScholar ? true : false,
        img: "../assets/images/icons/google-scholar.png",
      },
      {
        name: globalData.whatsapp,
        active: globalData.whatsapp ? true : false,
        img: "../assets/images/icons/rg.png",
      },
      {
        name: globalData.twitter,
        active: globalData.twitter ? true : false,
        img: "../assets/images/icons/bluesky.png",
      },
      {
        name: globalData.linkedin,
        active: globalData.linkedin ? true : false,
        img: "../assets/images/icons/linkedin.png",
      },
      {
        name: globalData.github,
        active: globalData.github ? true : false,
        url: "/",
        img: "../assets/images/icons/github.png",
      },
      {
        name: globalData.rm,
        active: globalData.rm ? true : false,
        img: "../assets/images/icons/rm.png",
      },
    ],
  };

  function homeData() {
    document.getElementById("page_title").innerText =
      lang === "en" ? enHomePageData.name : faHomePageData.name;

    document.getElementById("home_image").src = home_data.image
      ? home_data.image
      : "";
    document.getElementById("home_name").innerText =
      lang === "en" ? enHomePageData.name : faHomePageData.name;
    document.getElementById("home_job_title").innerText =
      lang === "en" ? enHomePageData.jobTitle : faHomePageData.jobTitle;
    document.getElementById("home_links").innerHTML = home_data.links
      .filter((item) => item.active)
      .map(
        (link) =>
          `<li>
              <a href=${link.name} target='_blank'><img src=${link.img} alt=${link.name} /> </a>
            </li>`
      )
      .join("");

    document.getElementById("home_title").innerText =
      lang === "en" ? enHomePageData.home_title : faHomePageData.home_title;
    document.getElementById("home_content").innerHTML =
      lang === "en" ? enHomePageData.home_content : faHomePageData.home_content;
  }

  if (pathname === "/" || pathname === "/index") {
    homeData();
  }

  // Publications page data
  function renderCitations(sectionId, items) {
    const container = document.getElementById(sectionId);
    container.innerHTML = items
      .map(
        (item) => `
        <div class="apa-ref">
          ${item.citation}
        </div>
      `
      )
      .join("");
  }

  function publicationsData() {
    document.getElementById("page_title").innerText =
      lang === "en" ? "Publications" : "業績";

    const data = lang === "en" ? enPublicationsPageData : faPublicationsPageData;

    document.getElementById("publications_type_one_title").innerText =
      data.type_one_title;
    renderCitations("publications_type_one_data", data.type_one_items);

    document.getElementById("publications_type_two_title").innerText =
      data.type_two_title;
    renderCitations("publications_type_two_data", data.type_two_items);

    document.getElementById("publications_type_three_title").innerText =
      data.type_three_title;
    renderCitations("publications_type_three_data", data.type_three_items);

    document.getElementById("publications_type_four_title").innerText =
      data.type_four_title;
    renderCitations("publications_type_four_data", data.type_four_items);

    document.getElementById("publications_type_five_title").innerText =
      data.type_five_title;
    renderCitations("publications_type_five_data", data.type_five_items);
  }

  if (pathname === "/publications") {
    publicationsData();
  }


  // Research page data
  function researchData() {
    document.getElementById("page_title").innerText =
      lang === "en" ? "Research" : "研究";

    document.getElementById("research_title").innerHTML =
      lang === "en" ? enResearchPageData.title : faResearchPageData.title;
    document.getElementById("research_data").innerHTML =
      lang === "en" ? enResearchPageData.content : faResearchPageData.content;
  }

  if (pathname === "/research") {
    researchData();
  }

  // Jobs page data
  function jobsData() {
    document.getElementById("page_title").innerText =
      lang === "en" ? "Jobs" : "経歴";

    document.getElementById("jobs_title").innerHTML =
      lang === "en" ? enJobsPageData.title : faJobsPageData.title;

    function renderEducation(education) {
      return education
        .map(
          (edu) => `
        <div class='job_item'>
          <div class='job_header'>
            <div>
              <h1>${edu.degree}</h1>
              <h2>${edu.institution}</h2>
            </div>
            <div><span>${edu.duration}</span></div>
          </div>
          ${
            edu.thesisTitle
              ? `<p><strong>Thesis:</strong> ${edu.thesisTitle}</p>`
              : ""
          }
          ${
            edu.supervisors
              ? `<p><strong>Supervisors:</strong> ${edu.supervisors.join(", ")}</p>`
              : ""
          }
          ${
            edu.link
              ? `<p><a href="${edu.link}" target="_blank">View Thesis</a></p>`
              : ""
          }
        </div>
      `
        )
        .join("");
    }

    function renderRecognitions(recognitions) {
      return recognitions
        .map(
          (rec) => `
        <div class='job_item'>
          <h1>${rec.title}</h1>
          <p>${rec.description}</p>
        </div>
      `
        )
        .join("");
    }

    function renderGrants(grants) {
      return grants
        .map(
          (grant) => `
          <div class='job_item'>
            <h1>${grant.title}</h1>
            <p>${grant.description}</p>
            <p><strong>${grant.duration}</strong></p>
            ${
              grant.link
                ? `<p><a href="${grant.link}" target="_blank" class="cv_link">View</a></p>`
                : ""
            }
          </div>
        `
        )
        .join("");
    }    

    function renderWorkExperience(items) {
      return items
        .map(
          (job) => `
        <div class='job_item'>
          <div class='job_header'>
            <div>
              <h1>${job.title}</h1>
              <h2>${job.company}</h2>
            </div>
            <div>
              <span>${job.startData} - ${
            job.endDate ? job.endDate : lang === "en" ? "Now" : "現在"
          }</span>
              <span class='job_location'>${job.location}</span>
            </div>
          </div>
          <p>${job.abstract}</p>
          ${
            job.achievements && job.achievements.length > 0
              ? `<div class="job_achievements">
                  <ul>
                    ${job.achievements
                      .map((achievement) => `<li>${achievement}</li>`)
                      .join("")}
                  </ul>
                </div>`
              : ""
          }
        </div>
      `
        )
        .join("");
    }

    const jobsData = lang === "en" ? enJobsPageData : faJobsPageData;

    document.getElementById("jobs_data").innerHTML = `
  <section class="cv_section">
    <h2 class="cv_heading">🎓 ${lang === "en" ? "Education" : "学歴"}</h2>
    ${renderEducation(jobsData.education)}
  </section>

  <section class="cv_section">
    <h2 class="cv_heading">🏅 ${lang === "en" ? "Recognitions" : "受賞"}</h2>
    ${renderRecognitions(jobsData.recognitions)}
  </section>

  <section class="cv_section">
    <h2 class="cv_heading">💰 ${lang === "en" ? "Grants" : "研究資金"}</h2>
    ${renderGrants(jobsData.grants)}
  </section>

  <section class="cv_section">
    <h2 class="cv_heading">💼 ${lang === "en" ? "Work Experience" : "職歴"}</h2>
    ${renderWorkExperience(jobsData.items)}
  </section>
`;
  }

  if (pathname === "/jobs") {
    jobsData();
  }

// Contact page data
  const contact_data = {
    contact_title: lang === "en" ? "Contact" : "問合せ",
    contact_items: [
      {
        img: "../assets/images/icons/location.png",
        title: lang === "en" ? globalData.enAddress : globalData.faAddress,
        active: globalData.enAddress || globalData.faAddress ? true : false,
      },
      {
        img: "../assets/images/icons/phone.png",
        title: globalData.phone,
        active: globalData.phone ? true : false,
      },
      {
        img: "../assets/images/icons/mail.png",
        title: globalData.email,
        active: globalData.email ? true : false,
      },
      {
        img: "../assets/images/icons/bluesky.png",
        url: globalData.twitter,
        name: globalData.twitterTitle,
        active: globalData.twitter ? true : false,
      },
      {
        img: "../assets/images/icons/rg.png",
        url: globalData.whatsapp,
        name: globalData.whatsappTitle,
        active: globalData.whatsapp ? true : false,
      },
      {
        img: "../assets/images/icons/google-scholar.png",
        url: globalData.googleScholar,
        name: globalData.googleScholarTitle,
        active: globalData.googleScholar ? true : false,
      },
      {
        img: "../assets/images/icons/orcid.png",
        url: globalData.orcid,
        name: globalData.orcidTitle,
        active: globalData.orcid ? true : false,
      },
      {
        img: "../assets/images/icons/github.png",
        url: globalData.github,
        name: globalData.githubTitle,
        active: globalData.github ? true : false,
      },
      {
        img: "../assets/images/icons/linkedin.png",
        url: globalData.linkedin,
        name: globalData.linkedinTitle,
        active: globalData.linkedin ? true : false,
      },
      {
        img: "../assets/images/icons/rm.png",
        url: globalData.rm,
        name: globalData.rmTitle,
        active: globalData.rm ? true : false,
      },
    ],
  };

  function contactData() {
    document.getElementById("page_title").innerHTML =
      contact_data.contact_title;
    document.getElementById("contact_title").innerHTML =
      contact_data.contact_title;
    document.getElementById("contact_data").innerHTML =
      contact_data.contact_items
        .filter((item) => item.active)
        .map(
          (link) =>
            `<li>
              <img src=${link.img} alt=${link.title} /> 
              ${
                link.url
                  ? `<a href=${link.url} target='_blank'>
                      ${link.name ? link.name : link.url} 
                    </a>`
                  : `<p>${link.title}</p>`
              }
            </li>`
        )
        .join("");
  }

  if (pathname === "/contact") {
    contactData();
  }
});
